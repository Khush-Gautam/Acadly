import {
  BarChart3,
  Bell,
  CalendarRange,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  SquarePen,
  UserCircle2,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

const navItems = [
  { label: 'Dashboard', path: '/student', icon: LayoutDashboard },
  { label: 'Attendance', path: '/attendance', icon: ShieldCheck },
  { label: 'Timetable', path: '/timetable', icon: CalendarRange },
  { label: 'Assignments', path: '/assignments', icon: SquarePen },
  { label: 'Analytics', path: '/analytics', icon: BarChart3 },
  { label: 'Notifications', path: '/notifications', icon: Bell },
  { label: 'Settings', path: '/settings', icon: Settings },
  { label: 'Profile', path: '/profile', icon: UserCircle2 },
]

const roleShortcuts = [
  { label: 'Student', path: '/student' },
  { label: 'Teacher', path: '/teacher' },
  { label: 'Admin', path: '/admin' },
]

function Sidebar({ open, onClose }) {
  return (
    <aside
      className={cn(
        'fixed inset-y-4 left-4 z-40 w-[280px] rounded-[32px] border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 dark:border-white/10 dark:bg-slate-950/75 lg:static lg:translate-x-0',
        open ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0',
      )}
    >
      <div className="flex h-full flex-col">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-violet-500 text-lg font-bold text-white">
              A
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-950 dark:text-white">
                Acadly
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Smart education OS
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs lg:hidden dark:bg-white/10 dark:text-white"
          >
            Close
          </button>
        </div>

        <div className="mb-6 rounded-[24px] bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
          <div className="flex items-center gap-3">
            <Gauge size={18} />
            <p className="text-sm font-medium">Control Center</p>
          </div>
          <p className="mt-3 text-sm text-white/70 dark:text-slate-600">
            Switch between dashboards while keeping the same premium command
            center UI.
          </p>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
                    isActive
                      ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white',
                  )
                }
              >
                <Icon size={18} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-8">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Role Views
          </p>
          <div className="space-y-2">
            {roleShortcuts.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className="block rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300 hover:bg-white dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
              >
                {item.label} dashboard
              </NavLink>
            ))}
          </div>
        </div>

        <div className="mt-auto rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-sky-600 dark:text-sky-300">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Premium frontend
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mock data only
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
