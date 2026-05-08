import { BellRing } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import Dropdown from '../components/ui/Dropdown'
import { notifications } from '../data/mockData'

function NotificationsPage() {
  const [filter, setFilter] = useState('All')

  const visibleItems =
    filter === 'All'
      ? notifications
      : notifications.filter((item) => item.tag === filter)

  return (
    <PageShell>
      <PageHeader
        eyebrow="Notifications"
        badge="Live updates"
        title="Announcement banners, read states, and real-time alerts designed for clarity."
        description="The notifications center balances urgency and readability with soft cards, motion, and lightweight filtering."
      />

      <div className="flex justify-end">
        <Dropdown
          options={['All', 'Live', 'Assignment', 'Security', 'Analytics']}
          value={filter}
          onChange={setFilter}
        />
      </div>

      <Card className="space-y-4">
        {visibleItems.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-sky-500/10 p-3 text-sky-600 dark:text-sky-300">
                <BellRing size={18} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {item.title}
                  </p>
                  {item.unread ? (
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                      Unread
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.detail}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
              {item.tag}
            </span>
          </motion.div>
        ))}
      </Card>
    </PageShell>
  )
}

export default NotificationsPage
