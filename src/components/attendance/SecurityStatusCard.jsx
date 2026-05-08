import { Shield, Smartphone, UserRoundCheck, Webcam } from 'lucide-react'
import { securitySignals } from '../../data/mockData'
import Badge from '../ui/Badge'
import Card from '../ui/Card'

const icons = [Shield, Smartphone, Webcam, UserRoundCheck]

function SecurityStatusCard() {
  return (
    <Card>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Proxy prevention
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
            Authenticity control stack
          </h3>
        </div>
        <Badge tone="success">Trust score 97/100</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {securitySignals.map((signal, index) => {
          const Icon = icons[index]
          return (
            <div
              key={signal}
              className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 p-3 text-sky-600 dark:text-sky-300">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {signal}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Real-time validation active
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-[24px] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
        <p className="text-sm text-white/70 dark:text-slate-600">
          Suspicious activity indicators
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Duplicate device detection',
            'Multiple login detection',
            'Screenshot attempt flagging',
            'Geo-location anomaly alert',
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 dark:bg-slate-200">
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default SecurityStatusCard
