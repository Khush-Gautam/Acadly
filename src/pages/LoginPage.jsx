// LoginPage — student authentication
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { demoLoginCredentials } from '../data/academicsData'

const inputClass = 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-blue-500'

export default function LoginPage({ session, onLogin, onLogout }) {
  const navigate = useNavigate()
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const result = onLogin(form)
    if (!result.ok) { setError(result.message); return }
    setError(''); navigate(result.redirectTo)
  }

  if (session) {
    return (
      <div className="min-h-screen">
        <div className="hero-orb hero-orb-left" /><div className="hero-orb hero-orb-right" />
        <Navbar session={session} onLogout={onLogout} />
        <main className="mx-auto max-w-full px-6 py-16">
          <section className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
            <div className="portal-hero portal-hero-blue fade-up">
              <span className="portal-chip bg-blue-100 text-blue-700">Session active</span>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">You are already signed in as {session.displayName || 'a student'}.</h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">To switch accounts, log out first and then sign in again with a different roll number.</p>
            </div>
            <div className="surface-panel rounded-[30px] p-8 fade-up delay-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Current Session</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Student</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">Continue to your portal, or log out to switch accounts.</p>
              <div className="mt-8 rounded-[24px] border border-slate-200/80 bg-slate-50/85 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Signed in as</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Student · {session.displayName}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/student" className="rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700">Continue Session</Link>
                <button type="button" onClick={onLogout} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:bg-white">Logout</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="hero-orb hero-orb-left" /><div className="hero-orb hero-orb-right" />
      <Navbar session={session} onLogout={onLogout} />
      <main className="mx-auto max-w-full px-6 py-16">
        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)]">
          <div className="portal-hero portal-hero-blue fade-up">
            <span className="portal-chip bg-blue-100 text-blue-700">Secure entry</span>
            <h1 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">Sign in to your student portal.</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">Enter your roll number and password to open your student workspace.</p>
            <div className="mt-8 rounded-[26px] border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Demo Credentials</p>
              <div className="mt-4 rounded-[22px] bg-white/70 border border-blue-100 p-4">
                <p className="font-semibold text-slate-800">Student</p>
                <p className="mt-2 text-sm text-slate-500">{demoLoginCredentials.identifierPlaceholder}</p>
                <p className="mt-2 rounded-full bg-blue-100 px-3 py-1 font-mono text-xs text-blue-700 inline-flex">{demoLoginCredentials.password}</p>
              </div>
            </div>
          </div>
          <div className="surface-panel rounded-[30px] p-8 fade-up delay-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Login Form</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Student</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{demoLoginCredentials.helperText}</p>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">{demoLoginCredentials.identifierLabel}</label>
                <input type="text" value={form.identifier} onChange={(e) => { setForm({ ...form, identifier: e.target.value }); setError('') }} placeholder={demoLoginCredentials.identifierPlaceholder} className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                <input type="password" value={form.password} onChange={(e) => { setForm({ ...form, password: e.target.value }); setError('') }} placeholder={demoLoginCredentials.password} className={inputClass} />
              </div>
              {error && <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}
              <button type="submit" className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">Login as Student</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
