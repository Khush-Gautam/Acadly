import { motion } from 'framer-motion'
import { LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Tabs from '../components/ui/Tabs'

function AuthPage() {
  const [tab, setTab] = useState('Login')

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff,#eef3ff_40%,#ffffff)] px-6 py-8 dark:bg-[linear-gradient(180deg,#020617,#0f172a_45%,#111827)] lg:px-10">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="flex flex-col justify-between overflow-hidden p-8">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 font-bold text-white">
                A
              </div>
              <div>
                <p className="font-semibold text-slate-950 dark:text-white">Acadly</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Smart education OS</p>
              </div>
            </Link>

            <div>
              <p className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                Role-ready access
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Sign in to the premium control layer for students, teachers, and admins.
              </h1>
            </div>

            <div className="space-y-4">
              {[
                'Secure sign-in flow with device trust context',
                'Role-based dashboards for students, teachers, and administrators',
                'Geo-location, privacy, and notification preferences built into settings',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-slate-200 bg-white/70 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { icon: LockKeyhole, label: 'Protected access' },
              { icon: ShieldCheck, label: 'Verified devices' },
              { icon: Sparkles, label: 'Premium UI' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-[24px] bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950"
                >
                  <Icon size={18} />
                  <p className="mt-3 text-sm font-medium">{item.label}</p>
                </div>
              )
            })}
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center"
        >
          <Card className="w-full p-8">
            <Tabs tabs={['Login', 'Signup']} value={tab} onChange={setTab} />

            <div className="mt-8 grid gap-4">
              {tab === 'Signup' ? (
                <Input placeholder="Full name" />
              ) : null}
              <Input placeholder="Institution email" type="email" />
              <Input placeholder="Password" type="password" />
              {tab === 'Signup' ? (
                <Input placeholder="Choose role: Student / Teacher / Admin" />
              ) : null}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Link to="/student">
                <Button variant="gradient" className="w-full">
                  Student
                </Button>
              </Link>
              <Link to="/teacher">
                <Button variant="secondary" className="w-full">
                  Teacher
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="secondary" className="w-full">
                  Admin
                </Button>
              </Link>
            </div>

            <div className="mt-8 rounded-[28px] border border-dashed border-sky-400/30 bg-[linear-gradient(135deg,rgba(56,189,248,0.10),rgba(139,92,246,0.10))] p-5">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Frontend-only demo notes
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This auth page is fully mocked. The role buttons route directly
                into the relevant dashboards so the interface can be reviewed without backend setup.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
