// FeatureCard — shows a feature with icon, title, description
export default function FeatureCard({ icon, title, description, color }) {
  const colorMap = {
    teal: 'bg-teal-100 text-teal-700', orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700', purple: 'bg-purple-100 text-purple-700',
    rose: 'bg-rose-100 text-rose-700', emerald: 'bg-emerald-100 text-emerald-700',
  }
  return (
    <div className="section-card cursor-default rounded-[24px] p-6 card-hover">
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${colorMap[color] || colorMap.teal}`}>{icon}</div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  )
}
