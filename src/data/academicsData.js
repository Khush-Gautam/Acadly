// academicsData.js — app data and helpers

export const demoLoginCredentials = {
  identifierLabel: 'Roll number',
  identifierPlaceholder: 'NST-CSAI-C01',
  password: 'student123',
  helperText: 'Any listed roll number works with the demo password.',
}

// Timetable helpers
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

function slot(subject, time, room) { return { subject, time, room } }

function weekTimetable(daySlots) {
  return weekdays.map(day => ({ day, slots: daySlots[day] || [] }))
}

// Shared slot patterns reused by sections
const lectures = [slot('DSA Lecture','9:00 AM - 10:30 AM','LT-301'), slot('Maths Lecture','10:30 AM - 12:00 PM','LT-102'), slot('WAP Lecture','1:00 PM - 2:30 PM','LT-204')]
const labs = [slot('DSA Lab','9:00 AM - 10:30 AM','Lab-2'), slot('Maths Lab','10:30 AM - 12:00 PM','Lab-1'), slot('WAP Lab','1:00 PM - 2:30 PM','Lab-4')]
const friday = [slot('Contest','9:00 AM - 10:30 AM','Innovation Hub')]

// Section A: Lectures Mon/Wed, Labs Tue/Thu
const sectionATT = weekTimetable({ Monday: lectures, Tuesday: labs, Wednesday: lectures, Thursday: labs, Friday: friday })

// Section B: Rotated order (Maths → WAP → DSA)
const sectionBTT = weekTimetable({
  Monday: [slot('Maths Lecture','9:00 AM - 10:30 AM','LT-102'), slot('WAP Lecture','10:30 AM - 12:00 PM','LT-204'), slot('DSA Lecture','1:00 PM - 2:30 PM','LT-301')],
  Tuesday: [slot('Maths Lab','9:00 AM - 10:30 AM','Lab-1'), slot('WAP Lab','10:30 AM - 12:00 PM','Lab-4'), slot('DSA Lab','1:00 PM - 2:30 PM','Lab-2')],
  Wednesday: [slot('Maths Lecture','9:00 AM - 10:30 AM','LT-102'), slot('WAP Lecture','10:30 AM - 12:00 PM','LT-204'), slot('DSA Lecture','1:00 PM - 2:30 PM','LT-301')],
  Thursday: [slot('Maths Lab','9:00 AM - 10:30 AM','Lab-1'), slot('WAP Lab','10:30 AM - 12:00 PM','Lab-4'), slot('DSA Lab','1:00 PM - 2:30 PM','Lab-2')],
  Friday: friday,
})

// Section C: Mixed lecture/lab each day
const sectionCTT = weekTimetable({
  Monday: [slot('Maths Lecture','9:00 AM - 10:30 AM','LT-102'), slot('WAP Lab','10:30 AM - 12:00 PM','Lab-4'), slot('DSA Lecture','1:00 PM - 2:30 PM','LT-301')],
  Tuesday: [slot('DSA Lab','9:00 AM - 10:30 AM','Lab-2'), slot('Maths Lab','10:30 AM - 12:00 PM','Lab-1'), slot('WAP Lecture','1:00 PM - 2:30 PM','LT-204')],
  Wednesday: [slot('Maths Lecture','9:00 AM - 10:30 AM','LT-102'), slot('WAP Lab','10:30 AM - 12:00 PM','Lab-4'), slot('DSA Lecture','1:00 PM - 2:30 PM','LT-301')],
  Thursday: [slot('DSA Lab','9:00 AM - 10:30 AM','Lab-2'), slot('Maths Lab','10:30 AM - 12:00 PM','Lab-1'), slot('WAP Lecture','1:00 PM - 2:30 PM','LT-204')],
  Friday: friday,
})

export const initialPortalState = {
  collegeProfile: { id: 'college-nst', name: 'Newton School of Technology', location: 'Noida, India', email: 'support@nst.ac.in', contact: '+91 88000 11223', isRegistered: true },

  courses: [{
    id: 'btech-cs-ai', name: 'BTech in CS & AI', duration: '4 Years',
    overview: 'Engineering program focused on CS fundamentals, AI, software development, and problem-solving.',
    subjects: ['DSA Lecture', 'DSA Lab', 'Maths Lecture', 'Maths Lab', 'WAP Lecture', 'WAP Lab', 'Contest'],
    sections: [
      { id: 'btech-cs-ai-section-a', name: 'Section A', strength: 48, mentor: 'Dr. Ananya Rao', timetable: sectionATT },
      { id: 'btech-cs-ai-section-b', name: 'Section B', strength: 46, mentor: 'Prof. Vivek Khanna', timetable: sectionBTT },
      { id: 'btech-cs-ai-section-c', name: 'Section C', strength: 45, mentor: 'Dr. Meera Joshi', timetable: sectionCTT },
    ],
  }],

  students: [
    { id: 'student-1', name: 'Aanya Singh', rollNo: 'NST-CSAI-C01', attendanceAverage: 89 },
    { id: 'student-2', name: 'Rohan Verma', rollNo: 'NST-CSAI-C02', attendanceAverage: 84 },
    { id: 'student-3', name: 'Kiara Patel', rollNo: 'NST-CSAI-C03', attendanceAverage: 77 },
  ],

  studentProfile: { studentId: 'student-1', courseId: 'btech-cs-ai', sectionId: 'btech-cs-ai-section-c' },

  announcements: [
    { id: 'ann-1', title: 'Section C Contest Block', message: 'Friday is reserved for the weekly coding contest. Carry your laptop and report to Innovation Hub by 9 AM.', type: 'general', audience: 'btech-cs-ai', author: 'Academic Office', timestamp: 'May 7, 9:15 AM' },
    { id: 'ann-2', title: 'WAP Lecture Preparation', message: 'Rahul Kumar will continue the frontend module this week. Revise HTML forms and JS basics before Tuesday.', type: 'assignment', audience: 'btech-cs-ai', author: 'Rahul Kumar', timestamp: 'May 6, 5:30 PM' },
  ],

  attendanceRecords: [
    { id: 'att-1', subject: 'DSA Lecture', attended: 18, total: 22, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
    { id: 'att-2', subject: 'DSA Lab', attended: 14, total: 18, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
    { id: 'att-3', subject: 'Maths Lecture', attended: 20, total: 23, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
    { id: 'att-4', subject: 'Maths Lab', attended: 16, total: 20, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
    { id: 'att-5', subject: 'WAP Lecture', attended: 17, total: 21, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
    { id: 'att-6', subject: 'WAP Lab', attended: 15, total: 18, lastMarkedAt: 'Awaiting', lastMarkedSessionId: null },
  ],

  activeSession: null,
}

// Helper functions
export function calculateAttendancePercentage(attended, total) {
  return total === 0 ? 0 : Math.round((attended / total) * 100)
}

export function calculateOverallAttendance(records) {
  if (records.length === 0) return 0
  const attended = records.reduce((sum, r) => sum + r.attended, 0)
  const total = records.reduce((sum, r) => sum + r.total, 0)
  return total === 0 ? 0 : Math.round((attended / total) * 100)
}

export function getSectionById(courses, courseId, sectionId) {
  const course = courses.find(c => c.id === courseId)
  return course?.sections.find(s => s.id === sectionId) || null
}
