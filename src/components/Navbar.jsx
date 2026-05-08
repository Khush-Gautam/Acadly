// Navbar — top navigation bar
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ portalName, session, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const links = session
    ? [{ to: '/', label: 'Overview' }, { to: '/student', label: 'Student' }]
    : [{ to: '/', label: 'Overview' }, { to: '/student', label: 'Student' }, { to: '/login', label: 'Login' }]
  const isActive = (p) => pathname === p || pathname.startsWith(`${p}/`)

  return (
    <nav className="glass-panel sticky top-0 z-50 border-b border-white/60 px-6 py-3">
      <div className="mx-auto flex max-w-full items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600 via-teal-500 to-orange-500 text-lg font-bold text-white shadow-lg shadow-teal-500/20">A</div>
          <div className="min-w-0">
            <span className="text-xl font-bold"><span className="gradient-text">Acadly</span></span>
            <p className="hidden text-xs tracking-[0.16em] text-slate-400 md:block">ACADEMIC CONTROL LAYER</p>
          </div>
          {portalName && <span className="ml-1 hidden rounded-full bg-teal-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white md:inline-flex">{portalName}</span>}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(l => <Link key={l.to} to={l.to} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive(l.to) ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-white/80 hover:text-slate-900'}`}>{l.label}</Link>)}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {session ? (<>
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Signed In</p>
              <p className="text-sm font-semibold text-slate-700">Student {session.displayName ? `· ${session.displayName}` : ''}</p>
            </div>
            <Link to="/student" className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700">Open Portal</Link>
            <button type="button" onClick={onLogout} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-white">Logout</button>
          </>) : <Link to="/login" className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-700">Login</Link>}
        </div>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-white/80 md:hidden">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (<><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></>) : (<><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>)}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-full border-t border-slate-200/70 pt-3 md:hidden">
          <div className="space-y-1">
            {links.map(l => <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${isActive(l.to) ? 'bg-teal-600 text-white' : 'text-slate-600 hover:bg-white/80'}`}>{l.label}</Link>)}
            {session ? (<>
              <Link to="/student" onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">Open Student Portal</Link>
              <button type="button" onClick={() => { setMenuOpen(false); onLogout?.() }} className="block w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-600">Logout</button>
            </>) : <Link to="/login" onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white">Login</Link>}
          </div>
        </div>
      )}
    </nav>
  )
}
