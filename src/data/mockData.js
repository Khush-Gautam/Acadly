export const landingStats = [
  { label: 'Attendance trust score', value: '98.4%' },
  { label: 'Geo-fence verification success', value: '94.2%' },
  { label: 'Weekly student engagement lift', value: '+27%' },
  { label: 'Institutions in pilot mode', value: '36' },
]

export const featureGroups = [
  {
    title: 'Smart attendance automation',
    description:
      'Dynamic QR, geo-fencing, face verification placeholders, device trust, and live session monitoring.',
  },
  {
    title: 'Curriculum and productivity',
    description:
      'Timetables, assignments, free-period productivity, AI-led nudges, and classroom-ready workflows.',
  },
  {
    title: 'Analytics and gamification',
    description:
      'Heatmaps, trust scores, badges, progress comparisons, and premium insights for every role.',
  },
]

export const testimonials = [
  {
    name: 'Rhea Sharma',
    role: 'Academic Coordinator',
    quote:
      'Acadly feels like a modern operating system for campus activity. The attendance and notification flow is unusually clean.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Department Head',
    quote:
      'The fraud signals, geo-fence controls, and analytics snapshots give administrators much better visibility than legacy tools.',
  },
  {
    name: 'Sarah Thomas',
    role: 'Student Representative',
    quote:
      'It treats free periods and productivity as first-class experiences instead of leaving students with dead time.',
  },
]

export const faqs = [
  {
    question: 'How does Acadly prevent proxy attendance?',
    answer:
      'The UI combines QR session expiry, geo-fence validation, device trust, suspicious activity indicators, and face verification placeholders to create multi-layer confirmation.',
  },
  {
    question: 'Is this connected to a real backend?',
    answer:
      'No. This build is frontend-only and uses mock data everywhere so the experience can be reviewed before backend integration.',
  },
  {
    question: 'Can the same interface work for students, teachers, and admins?',
    answer:
      'Yes. The frontend uses a shared design system while adapting the content density, insights, and controls to each role.',
  },
]

export const studentMetrics = [
  { label: 'Attendance', value: '92%', change: '+4.8%' },
  { label: 'Productivity score', value: '8.7/10', change: '+1.1' },
  { label: 'Geo-fence status', value: 'Inside campus', change: 'Verified' },
  { label: 'Free periods today', value: '02', change: 'Smart tasks ready' },
]

export const teacherMetrics = [
  { label: 'Live session attendance', value: '52/57', change: '91.2%' },
  { label: 'Flagged entries', value: '03', change: 'Needs review' },
  { label: 'Assignments uploaded', value: '18', change: 'This week' },
  { label: 'Engagement score', value: '84%', change: '+6.2%' },
]

export const adminMetrics = [
  { label: 'Institution attendance', value: '91.8%', change: '+2.4%' },
  { label: 'Fraud alerts', value: '07', change: 'Live monitoring' },
  { label: 'Verified devices', value: '2,481', change: 'Secure' },
  { label: 'Departments active', value: '14', change: '100% synced' },
]

export const weeklyAttendance = [
  { day: 'Mon', attendance: 88, productivity: 72, trust: 95 },
  { day: 'Tue', attendance: 91, productivity: 78, trust: 94 },
  { day: 'Wed', attendance: 93, productivity: 81, trust: 97 },
  { day: 'Thu', attendance: 90, productivity: 76, trust: 96 },
  { day: 'Fri', attendance: 95, productivity: 85, trust: 98 },
  { day: 'Sat', attendance: 87, productivity: 69, trust: 93 },
]

export const monthlyAttendance = [
  { month: 'Jan', attendance: 85, geofence: 89 },
  { month: 'Feb', attendance: 88, geofence: 91 },
  { month: 'Mar', attendance: 90, geofence: 93 },
  { month: 'Apr', attendance: 92, geofence: 95 },
  { month: 'May', attendance: 94, geofence: 96 },
]

export const engagementBreakdown = [
  { name: 'Attendance verified', value: 42, color: '#60a5fa' },
  { name: 'Planner completed', value: 24, color: '#34d399' },
  { name: 'Assignments on time', value: 18, color: '#f59e0b' },
  { name: 'Free-period learning', value: 16, color: '#a78bfa' },
]

export const activityFeed = [
  {
    title: 'Suspicious dual login detected',
    meta: 'CSE Block, 09:12 AM',
    level: 'High risk',
  },
  {
    title: 'Attendance session auto-rotated QR',
    meta: 'Semester 5, Operating Systems',
    level: 'Secure',
  },
  {
    title: 'Geo-fence verification completed',
    meta: 'Lab radius validation passed for 49 students',
    level: 'Verified',
  },
  {
    title: 'Assignment reminder pushed',
    meta: 'Cloud Computing batch',
    level: 'Delivered',
  },
]

export const schedule = [
  {
    time: '09:00',
    subject: 'Operating Systems',
    faculty: 'Dr. Nisha Kapoor',
    room: 'A-204',
    accent: 'from-sky-500/20 to-cyan-400/10',
  },
  {
    time: '11:00',
    subject: 'Cloud Computing',
    faculty: 'Prof. Karan Sethi',
    room: 'Lab-3',
    accent: 'from-violet-500/20 to-fuchsia-400/10',
  },
  {
    time: '01:30',
    subject: 'Free Period',
    faculty: 'AI career sprint',
    room: 'Recommended activity',
    accent: 'from-emerald-500/20 to-lime-400/10',
  },
  {
    time: '03:00',
    subject: 'Project Review',
    faculty: 'Mentor Panel',
    room: 'Innovation Hub',
    accent: 'from-amber-500/20 to-orange-400/10',
  },
]

export const timetableGrid = [
  ['Monday', 'OS', 'DBMS', 'Break', 'Cloud', 'Lab'],
  ['Tuesday', 'CN', 'AI', 'Break', 'DSA', 'Project'],
  ['Wednesday', 'OS', 'Maths', 'Break', 'Cloud', 'Free'],
  ['Thursday', 'DBMS', 'DSA', 'Break', 'CN', 'Lab'],
  ['Friday', 'AI', 'OS', 'Break', 'Project', 'Seminar'],
]

export const assignments = [
  {
    title: 'Cloud deployment worksheet',
    course: 'Cloud Computing',
    deadline: 'Tonight, 11:59 PM',
    progress: 72,
    priority: 'High',
    status: 'In progress',
  },
  {
    title: 'Operating systems viva prep',
    course: 'Operating Systems',
    deadline: 'Tomorrow, 9:00 AM',
    progress: 45,
    priority: 'Medium',
    status: 'Pending',
  },
  {
    title: 'ML mini project report',
    course: 'Artificial Intelligence',
    deadline: 'Friday',
    progress: 100,
    priority: 'Low',
    status: 'Submitted',
  },
]

export const notifications = [
  {
    title: 'Attendance session is live for Operating Systems',
    detail: 'QR rotated 14 seconds ago. Geo-fence validation is active.',
    tag: 'Live',
    unread: true,
  },
  {
    title: 'Assignment reminder sent to all students',
    detail: 'Cloud Computing worksheet closes tonight at 11:59 PM.',
    tag: 'Assignment',
    unread: true,
  },
  {
    title: 'Suspicious location activity review requested',
    detail: 'Two devices attempted check-in outside the classroom radius.',
    tag: 'Security',
    unread: false,
  },
  {
    title: 'Weekly analytics report generated',
    detail: 'Trust score improved by 3.2% across the department.',
    tag: 'Analytics',
    unread: false,
  },
]

export const attendanceLogs = [
  {
    name: 'Aarav Gupta',
    method: 'QR + Geo',
    status: 'Verified',
    device: 'Trusted',
    distance: '8m',
  },
  {
    name: 'Meera Joshi',
    method: 'QR + Face',
    status: 'Pending review',
    device: 'New device',
    distance: '11m',
  },
  {
    name: 'Ishaan Rao',
    method: 'QR + Geo + Device',
    status: 'Verified',
    device: 'Trusted',
    distance: '5m',
  },
  {
    name: 'Kabir Singh',
    method: 'Geo mismatch',
    status: 'Suspicious',
    device: 'Duplicate login',
    distance: '118m',
  },
]

export const securitySignals = [
  'Attendance Verified',
  'Geo-fence Passed',
  'QR Authenticated',
  'Device Trusted',
]

export const verificationStates = [
  {
    label: 'Inside Campus',
    tone: 'success',
    detail: 'Location verified within 15m of classroom center.',
  },
  {
    label: 'Weak GPS Signal',
    tone: 'warning',
    detail: 'Prompt user to move near a window or retry precise location.',
  },
  {
    label: 'Outside Allowed Radius',
    tone: 'danger',
    detail: 'Attendance remains invalid until device re-enters allowed zone.',
  },
  {
    label: 'Location Access Denied',
    tone: 'neutral',
    detail: 'Permission is required before attendance can be submitted.',
  },
]

export const heatmapData = [
  ['Mon', 82, 90, 77, 94, 88, 72],
  ['Tue', 80, 88, 81, 92, 85, 70],
  ['Wed', 84, 91, 79, 95, 89, 75],
  ['Thu', 78, 86, 74, 90, 84, 68],
  ['Fri', 88, 94, 82, 97, 91, 80],
]

export const departments = [
  { name: 'Computer Science', attendance: 95, alerts: 1 },
  { name: 'Electronics', attendance: 89, alerts: 2 },
  { name: 'Mechanical', attendance: 82, alerts: 3 },
  { name: 'Civil', attendance: 86, alerts: 1 },
]

export const profile = {
  name: 'Vansh Dhiman',
  role: 'Student Innovator',
  department: 'Computer Science Engineering',
  bio: 'Focused on secure attendance systems, campus productivity, and human-centered education interfaces.',
  stats: [
    { label: 'Attendance streak', value: '24 days' },
    { label: 'Badges earned', value: '12' },
    { label: 'Trust score', value: '97/100' },
  ],
}

export const weeklyGoals = [
  'Complete 3 revision capsules during free periods',
  'Maintain attendance above 90%',
  'Submit all assignments before deadline',
]
