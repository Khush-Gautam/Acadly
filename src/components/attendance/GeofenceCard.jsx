import { MapPinned, Navigation, Radar, Signal, ShieldAlert } from 'lucide-react'
import { useState } from 'react'
import { verificationStates } from '../../data/mockData'
import Badge from '../ui/Badge'
import Card from '../ui/Card'
import Tabs from '../ui/Tabs'

const toneMap = {
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  neutral: 'neutral',
}

function GeofenceCard() {
  const [tab, setTab] = useState(verificationStates[0].label)
  const state = verificationStates.find((item) => item.label === tab)

  return (
    <Card>
      <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Geo-fencing verification
          </p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
            Classroom radius intelligence
          </h3>
        </div>
        <Tabs
          tabs={verificationStates.map((item) => item.label)}
          value={tab}
          onChange={setTab}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)] p-6 dark:border-white/10">
          <div className="absolute inset-0 opacity-60">
            <div className="radar absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/30" />
            <div className="radar absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20 [animation-delay:1s]" />
            <div className="radar absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/10 [animation-delay:2s]" />
          </div>

          <div className="relative mx-auto grid h-72 max-w-md place-items-center rounded-[28px] border border-dashed border-slate-300 bg-white/70 dark:border-white/10 dark:bg-white/5">
            <div className="absolute inset-8 rounded-[24px] border border-sky-400/25" />
            <div className="absolute inset-16 rounded-[24px] border border-violet-400/20" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.8)]" />
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold dark:bg-slate-950/70 dark:text-white">
                Campus boundary
              </span>
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                Classroom pin
              </span>
            </div>
            <MapPinned size={80} className="relative z-10 text-sky-500" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-[24px] bg-slate-100/80 px-5 py-4 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <Navigation size={18} className="text-sky-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Current state
              </span>
            </div>
            <Badge tone={toneMap[state.tone]}>{state.label}</Badge>
          </div>

          <div className="rounded-[24px] border border-slate-200 p-5 dark:border-white/10">
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              {state.detail}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ['GPS permission', 'Granted'],
                ['Distance from class', '8 meters'],
                ['Allowed radius', '25 meters'],
                ['Campus status', 'Inside campus'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-slate-100/70 px-4 py-3 dark:bg-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-950 dark:text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] bg-emerald-500/10 p-4 text-emerald-700 dark:text-emerald-300">
              <Signal size={18} />
              <p className="mt-3 text-sm font-semibold">Live detection</p>
            </div>
            <div className="rounded-[24px] bg-sky-500/10 p-4 text-sky-700 dark:text-sky-300">
              <Radar size={18} />
              <p className="mt-3 text-sm font-semibold">Boundary pulse</p>
            </div>
            <div className="rounded-[24px] bg-rose-500/10 p-4 text-rose-700 dark:text-rose-300">
              <ShieldAlert size={18} />
              <p className="mt-3 text-sm font-semibold">Fraud watcher</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default GeofenceCard
