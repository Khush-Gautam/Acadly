import { activityFeed } from '../../data/mockData'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

function AttendanceFeed() {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Session activity logs
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
            Live monitoring feed
          </h3>
        </div>
        <Badge tone="info">Streaming</Badge>
      </div>

      <div className="space-y-3">
        {activityFeed.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <p className="font-medium text-slate-950 dark:text-white">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {item.meta}
              </p>
            </div>
            <Badge
              tone={
                item.level === 'High risk'
                  ? 'danger'
                  : item.level === 'Secure' || item.level === 'Verified'
                    ? 'success'
                    : 'info'
              }
            >
              {item.level}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default AttendanceFeed
