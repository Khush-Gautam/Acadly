import { Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { notifications } from '../../data/mockData'
import Dropdown from '../ui/Dropdown'
import Input from '../ui/Input'
import ThemeToggle from '../ui/ThemeToggle'

function Topbar({ onMenu }) {
  const [view, setView] = useState('Overview')

  return (
    <div className="flex flex-col gap-4 rounded-[28px] border border-white/60 bg-white/70 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 lg:hidden"
        >
          <Menu size={18} className="text-slate-700 dark:text-white" />
        </button>
        <div className="relative w-full xl:w-[360px]">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <Input placeholder="Search classes, students, reports..." className="pl-10" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Dropdown
          options={['Overview', 'Today', 'This Week', 'Security']}
          value={view}
          onChange={setView}
        />
        <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          {notifications.filter((item) => item.unread).length} unread alerts
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Topbar
