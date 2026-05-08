// App.jsx — state, actions, and routing
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { calculateAttendancePercentage, demoLoginCredentials, initialPortalState } from './data/academicsData'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import StudentPortalPage from './pages/StudentPortalPage'

// Helper to generate readable timestamps
function timestamp() {
  return new Date().toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
}

function App() {
  // Keep all app data in one state object.
  const [data, setData] = useState(initialPortalState)
  // Logged-in student info.
  const [session, setSession] = useState(null)

  // Simple local shortcuts so JSX is easier to read.
  const collegeProfile = data.collegeProfile
  const courses = data.courses
  const students = data.students
  const studentProfile = data.studentProfile
  const announcements = data.announcements
  const attendanceRecords = data.attendanceRecords
  const activeSession = data.activeSession

  const studentId = session ? session.entityId : studentProfile.studentId
  const currentStudent = students.find((s) => s.id === studentId) || null
  const recordsWithPercentage = attendanceRecords.map((record) => ({
    ...record,
    percentage: calculateAttendancePercentage(record.attended, record.total),
  }))

  // Student actions
  function linkStudentProfile({ courseId, sectionId }) {
    if (!courseId || !sectionId) return
    setData({
      ...data,
      studentProfile: { ...studentProfile, studentId, courseId, sectionId },
    })
  }

  function markAttendance() {
    // Basic validation before increasing attendance values.
    const live = activeSession
    if (!live) return { ok: false, message: 'No live attendance session is active right now.' }
    if (studentProfile.sectionId !== live.sectionId) return { ok: false, message: 'The active session belongs to a different section.' }
    if (live.presentStudentIds.includes(studentId)) return { ok: false, message: 'Attendance already marked for this session.' }

    const updatedRecords = attendanceRecords.map((r) => {
      if (r.subject !== live.subject || r.lastMarkedSessionId === live.id) return r
      return { ...r, attended: r.attended + 1, total: r.total + 1, lastMarkedAt: timestamp(), lastMarkedSessionId: live.id }
    })
    const updatedSession = { ...live, presentStudentIds: [...live.presentStudentIds, studentId] }
    const updatedStudents = students.map((s) => (s.id !== studentId ? s : { ...s, attendanceAverage: Math.min(s.attendanceAverage + 1, 99) }))

    setData({ ...data, attendanceRecords: updatedRecords, activeSession: updatedSession, students: updatedStudents })
    return { ok: true, message: 'Attendance marked for ' + live.subject + '.', subject: live.subject }
  }

  // Login / Logout
  function handleLogin({ identifier, password }) {
    const id = identifier.trim().toLowerCase()
    const pw = password.trim()
    if (!id || !pw) return { ok: false, message: 'Enter both your roll number and password.' }

    const student = students.find((s) => s.rollNo.toLowerCase() === id)
    if (!student || pw !== demoLoginCredentials.password)
      return { ok: false, message: 'Login incorrect. Use a listed roll number with the demo password.' }

    setSession({ role: 'student', entityId: student.id, displayName: student.name })
    setData({ ...data, studentProfile: { ...studentProfile, studentId: student.id } })
    return { ok: true, redirectTo: '/student' }
  }

  function logout() { setSession(null) }

  // Routes
  return (
    <Routes>
      <Route path="/" element={<HomePage session={session} onLogout={logout} />} />
      <Route path="/login" element={<LoginPage session={session} onLogin={handleLogin} onLogout={logout} />} />
      <Route path="/student" element={
        session?.role !== 'student'
          ? <Navigate to="/login" replace />
          : <StudentPortalPage session={session} onLogout={logout} collegeProfile={collegeProfile} courses={courses} studentProfile={studentProfile} currentStudent={currentStudent} attendanceRecords={recordsWithPercentage} announcements={announcements} activeSession={activeSession} onLinkStudentProfile={linkStudentProfile} onMarkAttendance={markAttendance} />
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
