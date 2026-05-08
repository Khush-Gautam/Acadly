import { cn } from '../../utils/cn'

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="inline-flex rounded-2xl border border-slate-200 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={cn(
            'rounded-[14px] px-4 py-2 text-sm font-medium transition',
            value === tab
              ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs
