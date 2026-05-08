import AttendanceFeed from '../components/attendance/AttendanceFeed'
import DynamicQRCard from '../components/attendance/DynamicQRCard'
import GeofenceCard from '../components/attendance/GeofenceCard'
import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import { BarTrendCard } from '../charts/AcadlyCharts'
import { assignments, teacherMetrics, weeklyAttendance } from '../data/mockData'

function TeacherDashboard() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Teacher dashboard"
        badge="Session controls live"
        title="Manage attendance sessions, student verification, assignments, and engagement from one portal."
        description="This teacher view combines dynamic QR generation, geo-fence controls, flagged attendance review, and classroom analytics with a minimal premium interface."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {teacherMetrics.map((item) => (
          <StatCard key={item.label} title={item.label} value={item.value} change={item.change} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <DynamicQRCard />
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Teacher controls</p>
          <div className="mt-5 grid gap-3">
            {[
              'Set attendance radius to 25 meters',
              'Start attendance session',
              'End attendance session',
              'Approve flagged submissions',
              'Reject suspicious entries',
            ].map((item, index) => (
              <Button
                key={item}
                variant={index === 1 ? 'gradient' : 'secondary'}
                className="w-full justify-start"
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-5 rounded-[24px] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
            <p className="text-sm text-white/70 dark:text-slate-600">Live student verification</p>
            <p className="mt-4 text-3xl font-semibold">52 / 57</p>
            <p className="mt-2 text-sm">3 pending • 2 face scan placeholders • 1 duplicate device alert</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <GeofenceCard />
        <BarTrendCard title="Classroom engagement trend" data={weeklyAttendance} dataKey="productivity" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <AttendanceFeed />
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Assignment uploads</p>
          <div className="mt-5 space-y-3">
            {assignments.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <p className="font-semibold text-slate-950 dark:text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.course} • {item.status}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[24px] border border-dashed border-sky-400/30 p-5">
            <p className="text-sm font-semibold text-slate-950 dark:text-white">
              AI engagement suggestion
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Trigger a 10-minute micro-quiz during the free period because
              attention levels dipped 6% after the mid-day session.
            </p>
          </div>
        </Card>
      </div>
    </PageShell>
  )
}

export default TeacherDashboard
