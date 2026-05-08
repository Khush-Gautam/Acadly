import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/shared/Sidebar'
import Topbar from '../components/shared/Topbar'

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_22%),linear-gradient(180deg,#f8fbff,#eef3ff_45%,#f8f9ff)] px-4 py-4 dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_20%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.14),transparent_18%),linear-gradient(180deg,#020617,#0f172a_42%,#111827)] lg:px-5">
      <div className="mx-auto grid max-w-[1680px] gap-4 lg:grid-cols-[280px_1fr]">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="space-y-4 lg:pl-1">
          <Topbar onMenu={() => setSidebarOpen(true)} />
          <main className="pb-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
