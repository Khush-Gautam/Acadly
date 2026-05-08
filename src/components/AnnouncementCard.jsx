// AnnouncementCard — displays a single announcement
const typeMap = { general: 'bg-teal-100 text-teal-700', assignment: 'bg-orange-100 text-orange-700', exam: 'bg-rose-100 text-rose-700' }

function formatAudience(audience) {
  if (!audience || audience === 'all') return 'All audiences'
  return audience.toUpperCase()
}

export default function AnnouncementCard({ announcement }) {
  const tone = typeMap[announcement.type] || typeMap.general
  return (
    <article className="rounded-[22px] border border-slate-200/80 bg-white/82 p-5 shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className={`rounded-full px-3 py-1 ${tone}`}>{announcement.type || 'general'}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500">{formatAudience(announcement.audience)}</span>
        <span className="ml-auto text-slate-400">{announcement.timestamp}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{announcement.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{announcement.message}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">{announcement.author}</p>
    </article>
  )
}
