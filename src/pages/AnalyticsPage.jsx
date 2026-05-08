import { useState } from 'react'
import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Tabs from '../components/ui/Tabs'
import {
  AreaTrendCard,
  BarTrendCard,
  PieBreakdownCard,
} from '../charts/AcadlyCharts'
import {
  engagementBreakdown,
  monthlyAttendance,
  weeklyAttendance,
} from '../data/mockData'

function AnalyticsPage() {
  const [tab, setTab] = useState('Weekly')
  const data = tab === 'Weekly' ? weeklyAttendance : monthlyAttendance
  const xKey = tab === 'Weekly' ? 'day' : 'month'

  return (
    <PageShell>
      <PageHeader
        eyebrow="Analytics"
        badge="Recharts powered"
        title="Attendance, geo-fence, productivity, and engagement analytics with a premium data-first layout."
        description="The analytics screen brings together weekly and monthly comparisons through area, bar, and pie charts with a clean executive dashboard feel."
      />

      <Tabs tabs={['Weekly', 'Monthly']} value={tab} onChange={setTab} />

      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <AreaTrendCard
          title={`${tab} attendance and trust trend`}
          data={data}
          xKey={xKey}
          lines={[
            {
              key: tab === 'Weekly' ? 'attendance' : 'attendance',
              stroke: '#38bdf8',
              fill: 'url(#attendanceGradient)',
            },
            {
              key: tab === 'Weekly' ? 'trust' : 'geofence',
              stroke: '#8b5cf6',
              fill: 'url(#productivityGradient)',
            },
          ]}
        />
        <PieBreakdownCard title="Engagement mix" data={engagementBreakdown} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <BarTrendCard
          title={`${tab} productivity comparison`}
          data={data}
          xKey={xKey}
          dataKey={tab === 'Weekly' ? 'productivity' : 'geofence'}
        />
        <BarTrendCard
          title={`${tab} attendance comparison`}
          data={data}
          xKey={xKey}
          dataKey="attendance"
        />
      </div>
    </PageShell>
  )
}

export default AnalyticsPage
