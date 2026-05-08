// AttendanceChart — attendance progress bars
export default function AttendanceChart({ records }) {
  return (
    <div className="space-y-3">
      {records.map(record => {
        const pct = record.total > 0 ? Math.round((record.attended / record.total) * 100) : 0
        const barColor = pct >= 75 ? 'bg-teal-500' : pct >= 50 ? 'bg-orange-500' : 'bg-rose-500'
        return (
          <div key={record.id}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-700 truncate mr-2">{record.subject}</span>
              <span className="text-slate-500 whitespace-nowrap">{record.attended}/{record.total} ({pct}%)</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${barColor} progress-bar-fill`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
