import { cn } from '../../utils/cn'

const tones = {
  success:
    'bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300',
  warning:
    'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300',
  danger:
    'bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/20 dark:text-rose-300',
  info: 'bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/20 dark:text-sky-300',
  neutral:
    'bg-slate-500/10 text-slate-700 ring-1 ring-slate-500/20 dark:text-slate-300',
}

function Badge({ children, tone = 'info', className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
