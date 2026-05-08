import { cn } from '../../utils/cn'

function Input({ className = '', ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500',
        className,
      )}
      {...props}
    />
  )
}

export default Input
