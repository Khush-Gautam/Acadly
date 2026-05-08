import { RefreshCcw, ScanLine, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

function DynamicQRCard() {
  const { seconds, cycle, progress } = useCountdown(30)

  return (
    <Card className="overflow-hidden">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Dynamic QR attendance
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
            Session #{cycle.toString().padStart(2, '0')}
          </h3>
        </div>
        <Badge tone={seconds < 8 ? 'warning' : 'success'}>
          Expires in {seconds}s
        </Badge>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),linear-gradient(135deg,#f8fbff,#eef2ff)] p-6 dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_55%),linear-gradient(135deg,rgba(15,23,42,0.95),rgba(17,24,39,0.9))]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-0 top-1/2 h-px bg-sky-400/50" />
            <motion.div
              key={cycle}
              initial={{ y: -180, opacity: 0 }}
              animate={{ y: 260, opacity: 1 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-16 bg-gradient-to-b from-sky-400/0 via-sky-400/25 to-sky-400/0 blur-xl"
            />
          </div>

          <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-[32px] border border-slate-200 bg-white/80 shadow-inner dark:border-white/10 dark:bg-slate-950/70">
            <div className="absolute inset-5 rounded-[26px] bg-[linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:18px_18px]" />
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0),rgba(255,255,255,0.7))] dark:bg-[radial-gradient(circle_at_center,rgba(15,23,42,0),rgba(15,23,42,0.7))]" />
            <ScanLine size={72} className="relative z-10 text-sky-500" />
            <div className="absolute inset-3 rounded-[28px] border border-dashed border-sky-400/40" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_3px,transparent_3px,transparent_12px)] dark:bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_3px,transparent_3px,transparent_12px)]" />
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-sm dark:bg-white/5">
            <span className="text-slate-500 dark:text-slate-400">
              Anti-screenshot shield
            </span>
            <span className="font-semibold text-slate-950 dark:text-white">
              Overlay active
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
            <motion.div
              key={cycle}
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'linear' }}
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[24px] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} />
              <p className="font-semibold">Live attendance count</p>
            </div>
            <p className="mt-4 text-4xl font-semibold">49</p>
            <p className="mt-2 text-sm text-white/70 dark:text-slate-600">
              3 pending verification, 1 suspicious scan detected.
            </p>
          </div>

          <div className="space-y-3 rounded-[24px] border border-slate-200 p-5 dark:border-white/10">
            {[
              'QR regenerated securely every 30 seconds',
              'Scanner pulse visible during active session',
              'Expiry state blocks old scans automatically',
              'Session log updates in real time',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-100/80 px-4 py-3 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white"
          >
            <RefreshCcw size={16} />
            Regenerate secure session
          </button>
        </div>
      </div>
    </Card>
  )
}

export default DynamicQRCard
