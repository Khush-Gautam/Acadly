import AttendanceFeed from '../components/attendance/AttendanceFeed'
import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import StatCard from '../components/ui/StatCard'
import {
  AreaTrendCard,
  HeatmapCard,
  PieBreakdownCard,
} from '../charts/AcadlyCharts'
import {
  adminMetrics,
  departments,
  engagementBreakdown,
  heatmapData,
  monthlyAttendance,
} from '../data/mockData'

function AdminDashboard() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Admin dashboard"
        badge="Institution overview"
        title="An enterprise command center for attendance integrity, department performance, and security monitoring."
        description="The admin experience is built for institution-wide visibility with KPI cards, heatmaps, fraud detection signals, branch comparisons, and activity intelligence."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminMetrics.map((item) => (
          <StatCard key={item.label} title={item.label} value={item.value} change={item.change} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <AreaTrendCard
          title="Institution attendance and geo-fence success"
          data={monthlyAttendance}
          xKey="month"
          lines={[
            { key: 'attendance', stroke: '#38bdf8', fill: 'url(#attendanceGradient)' },
            { key: 'geofence', stroke: '#8b5cf6', fill: 'url(#productivityGradient)' },
          ]}
        />
        <PieBreakdownCard title="Engagement distribution" data={engagementBreakdown} />
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <HeatmapCard title="Department activity heatmap" data={heatmapData} />
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Department health</p>
          <div className="mt-5 space-y-3">
            {departments.map((item) => (
              <div
                key={item.name}
                className="rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {item.name}
                  </p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-white/10">
                    {item.alerts} alerts
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                    style={{ width: `${item.attendance}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Attendance {item.attendance}%
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <AttendanceFeed />
    </PageShell>
  )
}

export default AdminDashboard
