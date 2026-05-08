import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import { schedule, timetableGrid } from '../data/mockData'

function TimetablePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Timetable"
        badge="Smart scheduling"
        title="A responsive weekly timetable with color-coded subjects, faculty details, and free-period intelligence."
        description="Acadly keeps the class grid readable while surfacing faculty context, gaps in the day, and productive use for free periods."
      />

      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="overflow-auto">
          <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">Weekly grid</p>
          <div className="min-w-[760px] space-y-3">
            {timetableGrid.map(([day, ...slots]) => (
              <div key={day} className="grid grid-cols-[120px_repeat(5,minmax(0,1fr))] gap-3">
                <div className="rounded-2xl bg-slate-950 px-4 py-4 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                  {day}
                </div>
                {slots.map((slot) => (
                  <div
                    key={`${day}-${slot}`}
                    className={`rounded-2xl px-4 py-4 text-sm font-medium ${
                      slot === 'Break'
                        ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                        : slot === 'Free'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                          : 'bg-sky-500/10 text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Today&apos;s details</p>
          <div className="mt-5 space-y-3">
            {schedule.map((item) => (
              <div
                key={`${item.time}-${item.subject}`}
                className={`rounded-[24px] bg-gradient-to-r ${item.accent} p-4`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {item.subject}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {item.faculty}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.room}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}

export default TimetablePage
