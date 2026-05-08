// StatCard — shows a single stat with icon, value, label
export default function StatCard({ icon, value, label, color, note }) {
  const bgMap = {
    teal: 'bg-teal-100 text-teal-700', orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700', purple: 'bg-purple-100 text-purple-700',
    rose: 'bg-rose-100 text-rose-700',
  }
  return (
    <div className="section-card rounded-[22px] p-5 card-hover">
      <div className="mb-3 flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl text-xl ${bgMap[color] || bgMap.teal}`}>{icon}</div>
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      {note ? <p className="mt-1 text-xs text-slate-400">{note}</p> : null}
    </div>
  )
}
