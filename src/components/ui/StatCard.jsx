import Card from './Card'

function StatCard({ title, value, change }) {
  return (
    <Card className="space-y-3">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <div className="flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold text-slate-950 dark:text-white">
          {value}
        </p>
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
          {change}
        </p>
      </div>
    </Card>
  )
}

export default StatCard
