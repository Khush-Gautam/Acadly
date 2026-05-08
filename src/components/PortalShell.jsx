// PortalShell — shared layout for all portal pages
import Navbar from './Navbar'
import StatCard from './StatCard'

const accentMap = {
  teal: { badge: 'bg-teal-100 text-teal-700', tab: 'tab-button-active-teal' },
  blue: { badge: 'bg-blue-100 text-blue-700', tab: 'tab-button-active-blue' },
}

export default function PortalShell({ portalName, session, onLogout, accent = 'teal', eyebrow, title, description, meta = [], action, stats = [], tabs = [], activeTab, onTabChange, children }) {
  const theme = accentMap[accent] || accentMap.teal
  return (
    <div className="min-h-screen">
      <div className="hero-orb hero-orb-left" /><div className="hero-orb hero-orb-right" />
      <Navbar portalName={portalName} session={session} onLogout={onLogout} />
      <main className="max-w-full mx-auto px-6 py-6 md:py-8">
        <section className={`portal-hero portal-hero-${accent} fade-up`}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.95fr)] items-start">
            <div>
              {eyebrow && <span className={`portal-chip ${theme.badge}`}>{eyebrow}</span>}
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">{title}</h1>
              <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-slate-600">{description}</p>
              {meta.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{meta.map((m) => <span key={m} className="portal-chip bg-white/72 text-slate-700">{m}</span>)}</div>}
            </div>
            {action && <div className="surface-panel rounded-[26px] p-5 md:p-6">{action}</div>}
          </div>
        </section>
        {stats.length > 0 && <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 fade-up delay-1">{stats.map((s) => <StatCard key={s.label} {...s} />)}</section>}
        {tabs.length > 0 && (
          <section className="mt-6 surface-panel rounded-[22px] p-2 fade-up delay-1">
            <div className="tab-strip">{tabs.map((t) => <button key={t} type="button" onClick={() => onTabChange(t)} className={`tab-button ${activeTab === t ? theme.tab : 'text-slate-500 hover:bg-white/70'}`}>{t}</button>)}</div>
          </section>
        )}
        <section className="mt-6 surface-panel rounded-[28px] p-5 md:p-7 fade-up delay-2">{children}</section>
      </main>
    </div>
  )
}
