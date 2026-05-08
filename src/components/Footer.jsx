// Footer — page footer
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 bg-white/45 backdrop-blur-md">
      <div className="mx-auto max-w-full px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-orange-500 font-bold text-white">A</div>
              <span className="text-lg font-bold gradient-text">Acadly</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">Student-first academic workspace for attendance, timetable, and progress.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#features" className="transition-colors hover:text-teal-600">Features</a></li>
              <li><Link to="/login" className="transition-colors hover:text-teal-600">Login</Link></li>
              <li><Link to="/student" className="transition-colors hover:text-teal-600">Student Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Experience</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Student demo access</li>
              <li>React + Tailwind + Vite</li>
              <li>© 2026 Acadly</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
