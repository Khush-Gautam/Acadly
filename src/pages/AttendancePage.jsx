import { useState } from 'react'
import AttendanceFeed from '../components/attendance/AttendanceFeed'
import DynamicQRCard from '../components/attendance/DynamicQRCard'
import GeofenceCard from '../components/attendance/GeofenceCard'
import SecurityStatusCard from '../components/attendance/SecurityStatusCard'
import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Modal from '../components/ui/Modal'
import Table from '../components/ui/Table'
import { HeatmapCard } from '../charts/AcadlyCharts'
import { attendanceLogs, heatmapData } from '../data/mockData'

function AttendancePage() {
  const [open, setOpen] = useState(false)

  return (
    <PageShell>
      <PageHeader
        eyebrow="Attendance control"
        badge="Secure validation"
        title="A futuristic attendance workflow with QR refresh, geo-fence intelligence, face scan placeholders, and trust scoring."
        description="This page brings all smart attendance UI states together: dynamic sessions, live monitoring, device verification, anti-proxy cues, and verification logs."
      />

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <DynamicQRCard />
        <div className="space-y-4">
          <Card>
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Face verification</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                  Placeholder scan module
                </h3>
              </div>
              <Badge tone="warning">Human review ready</Badge>
            </div>
            <div className="scanner-pulse grid h-56 place-items-center rounded-[28px] border border-dashed border-sky-400/30 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]">
              <div className="rounded-full border border-sky-400/30 p-8">
                <div className="rounded-full border border-violet-400/20 p-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sky-500/20 to-violet-500/20" />
                </div>
              </div>
            </div>
            <Button variant="secondary" className="mt-5 w-full" onClick={() => setOpen(true)}>
              Review suspicious attendance
            </Button>
          </Card>
          <SecurityStatusCard />
        </div>
      </div>

      <GeofenceCard />

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Attendance logs</p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                Verification timeline
              </h3>
            </div>
            <Badge tone="info">Live feed</Badge>
          </div>
          <Table
            columns={[
              { key: 'name', label: 'Student' },
              { key: 'method', label: 'Method' },
              {
                key: 'status',
                label: 'Status',
                render: (row) => (
                  <span
                    className={
                      row.status === 'Verified'
                        ? 'text-emerald-600 dark:text-emerald-300'
                        : row.status === 'Suspicious'
                          ? 'text-rose-600 dark:text-rose-300'
                          : 'text-amber-600 dark:text-amber-300'
                    }
                  >
                    {row.status}
                  </span>
                ),
              },
              { key: 'device', label: 'Device' },
              { key: 'distance', label: 'Distance' },
            ]}
            rows={attendanceLogs}
          />
        </Card>
        <HeatmapCard title="Session density heatmap" data={heatmapData} />
      </div>

      <AttendanceFeed />

      <Modal open={open} onClose={() => setOpen(false)} title="Suspicious attendance review">
        <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          <p>
            Kabir Singh triggered a duplicate login and geo mismatch outside the
            allowed radius. Device trust is low and attendance should remain unverified.
          </p>
          <div className="grid gap-3">
            {[
              'Outside allowed radius by 118 meters',
              'Duplicate device detected in another session',
              'Manual approval disabled until teacher review',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </PageShell>
  )
}

export default AttendancePage
