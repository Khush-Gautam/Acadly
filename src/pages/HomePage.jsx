// HomePage — landing page
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureCard from '../components/FeatureCard'
import { demoLoginCredentials } from '../data/academicsData'

const features = [
  { icon: '🧭', title: 'Focused Student Workspace', description: 'The product surface is optimized for student-first tasks and information.', color: 'teal' },
  { icon: '🔐', title: 'Student Login', description: 'Students enter with roll number based authentication.', color: 'orange' },
  { icon: '📱', title: 'Live Attendance Sessions', description: 'Students can scan and mark attendance whenever a session is active.', color: 'blue' },
  { icon: '📚', title: 'Academic Visibility', description: 'Courses, section context, and timetable are available in one place.', color: 'purple' },
  { icon: '📢', title: 'Announcements', description: 'Updates carry audience and type context so they read like clear signals.', color: 'rose' },
  { icon: '📈', title: 'Progress Visibility', description: 'Attendance trends and student alerts stay visible without overwhelming the UI.', color: 'emerald' },
]

export default function HomePage({ session, onLogout }) {
  return (
    <div className="min-h-screen">
      <div className="hero-orb hero-orb-left" /><div className="hero-orb hero-orb-right" />
      <Navbar session={session} onLogout={onLogout} />

      <main>
        <section className="mx-auto max-w-full px-6 pt-16 pb-12 md:pt-20">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.95fr)]">
            <div className="fade-up">
              <span className="section-eyebrow inline-flex rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase text-teal-700">Academic Command Center</span>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                Student portal access
                <span className="gradient-text"> that stays simple and focused.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">Acadly keeps only the student experience: attendance tracking, schedule visibility, announcements, and progress in one clean flow.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={session ? '/student' : '/login'} className="rounded-full bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700">{session ? 'Continue to Portal' : 'Login as Student'}</Link>
                <Link to="/student" className="rounded-full border border-slate-300 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white">Open Student Portal</Link>
              </div>
              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
                {[{ value: 'Live', label: 'Attendance' }, { value: '1', label: 'Student login' }, { value: '📅', label: 'Timetable' }, { value: '📊', label: 'Progress' }].map((item, i) => (
                  <div key={item.label} className={`section-card rounded-[22px] px-4 py-4 fade-up delay-${i + 1}`}>
                    <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel rounded-[30px] p-6 fade-up delay-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Platform Map</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">Student workspace</h2>
                </div>
                <div className={`rounded-2xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${session ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-600'}`}>{session ? 'Logged in' : 'Logged out'}</div>
              </div>
              <div className="mt-6 rounded-[24px] border border-slate-200/80 bg-white/82 p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">🎓</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-bold text-slate-900">Student</h3>
                      <Link to="/login" className="text-sm font-semibold text-teal-600">Enter</Link>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">Track attendance, stay on top of classes, and view your progress.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Attendance scan', 'Timetable access', 'Progress tracking'].map((p) => <span key={p} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{p}</span>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-[24px] border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Demo Access</p>
                <div className="mt-4 flex items-start justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-slate-800">Student</p>
                    <p className="text-slate-500">{demoLoginCredentials.identifierPlaceholder}</p>
                  </div>
                  <p className="rounded-full bg-teal-100 px-3 py-1 font-mono text-xs text-teal-700">{demoLoginCredentials.password}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-full px-6 py-12">
          <div className="mb-10 text-center">
            <span className="section-eyebrow inline-flex rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase text-orange-700">What Changed</span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">A more organized product surface</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((f, i) => <div key={f.title} className={`fade-up delay-${(i % 5) + 1}`}><FeatureCard {...f} /></div>)}
          </div>
        </section>

        <section className="mx-auto max-w-full px-6 py-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-eyebrow inline-flex rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase text-teal-700">Student Portal</span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl">Open your student workspace</h2>
            </div>
            <Link to="/login" className="text-sm font-semibold text-teal-600">Go to student login →</Link>
          </div>
          <Link to="/login" className="block section-card rounded-[28px] p-8 card-hover group text-left">
            <div className="mb-5 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-500 to-blue-700 text-4xl text-white transition-transform duration-300 group-hover:scale-105">🎓</div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Portal Access</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">Student</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">Track attendance, stay on top of classes, and view your progress.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Attendance scan', 'Timetable access', 'Progress tracking'].map((p) => <span key={p} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{p}</span>)}
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2">Login to Portal →</span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
