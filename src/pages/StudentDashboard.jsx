import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import ProgressRing from '../components/ui/ProgressRing'
import StatCard from '../components/ui/StatCard'
import { AreaTrendCard } from '../charts/AcadlyCharts'
import {
  assignments,
  notifications,
  schedule,
  studentMetrics,
  weeklyAttendance,
  weeklyGoals,
} from '../data/mockData'

function StudentDashboard() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Student dashboard"
        badge="Free-period AI ready"
        title="A calm workspace for attendance, productivity, classes, and achievements."
        description="Acadly gives students a premium control panel with attendance confidence, smart schedules, analytics cards, free-period guidance, and recent announcements."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {studentMetrics.map((item) => (
          <StatCard key={item.label} title={item.label} value={item.value} change={item.change} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="flex flex-col items-center justify-center">
          <ProgressRing value={92} label="Attendance consistency" />
          <div className="mt-8 grid w-full gap-3">
            {['QR active', 'Geo-fence passed', 'Device trusted'].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-100/80 px-4 py-3 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <AreaTrendCard
          title="Weekly attendance and productivity"
          data={weeklyAttendance}
          lines={[
            { key: 'attendance', stroke: '#38bdf8', fill: 'url(#attendanceGradient)' },
            { key: 'productivity', stroke: '#8b5cf6', fill: 'url(#productivityGradient)' },
          ]}
        />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr_0.9fr]">
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Today&apos;s schedule</p>
          <div className="mt-5 space-y-3">
            {schedule.map((item) => (
              <div
                key={`${item.time}-${item.subject}`}
                className={`rounded-[24px] border border-slate-200 bg-gradient-to-r ${item.accent} p-4 dark:border-white/10`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {item.subject}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {item.faculty} • {item.room}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Assignment momentum</p>
          <div className="mt-5 space-y-3">
            {assignments.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-white/10">
                    {item.priority}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.course} • {item.deadline}
                </p>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Smart goals</p>
          <div className="mt-5 space-y-3">
            {weeklyGoals.map((goal) => (
              <div
                key={goal}
                className="rounded-[24px] bg-slate-950 px-4 py-4 text-sm text-white dark:bg-white dark:text-slate-950"
              >
                {goal}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[24px] border border-dashed border-sky-400/30 p-4">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              Free-period recommendation
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Use your 1:30 PM free slot for a 15-minute aptitude sprint and a
              quick revision capsule before the project review.
            </p>
          </div>
        </Card>
      </div>

      <Card>
        <p className="text-sm text-slate-500 dark:text-slate-400">Recent announcements</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {notifications.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                {item.unread ? (
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                    Unread
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  )
}

export default StudentDashboard
