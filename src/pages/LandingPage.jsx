import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../animations/variants'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import ThemeToggle from '../components/ui/ThemeToggle'
import {
  faqs,
  featureGroups,
  landingStats,
  testimonials,
  weeklyAttendance,
} from '../data/mockData'

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(faqs[0].question)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f5f7ff_30%,#ffffff_100%)] text-slate-950 dark:bg-[linear-gradient(180deg,#020617_0%,#081120_35%,#0f172a_100%)] dark:text-white">
      <div className="animated-grid absolute inset-0 opacity-40 dark:opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_25%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.2),transparent_22%),radial-gradient(circle_at_50%_55%,rgba(34,197,94,0.12),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <header className="flex items-center justify-between rounded-[28px] border border-white/60 bg-white/70 px-5 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 font-bold text-white">
              A
            </div>
            <div>
              <p className="font-semibold">Acadly</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Smart attendance and education OS
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-500 lg:flex dark:text-slate-300">
            <a href="#features">Features</a>
            <a href="#attendance">Attendance</a>
            <a href="#analytics">Analytics</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/auth">
              <Button variant="secondary">Login</Button>
            </Link>
          </div>
        </header>

        <section className="grid gap-8 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <Badge tone="info">Premium futuristic frontend</Badge>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-6">
              <h1 className="max-w-4xl font-['Space_Grotesk'] text-5xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
                The smart campus interface for secure attendance, productivity,
                and curriculum control.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-300">
                Acadly combines QR automation, geo-fence verification, proxy
                prevention, AI-powered engagement, and elegant analytics into a
                premium SaaS-style education platform.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link to="/student">
                <Button variant="gradient">
                  Launch dashboards
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="#attendance">
                <Button variant="secondary">See smart attendance</Button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {landingStats.map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Card className="relative overflow-hidden p-6 lg:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_35%)]" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Live attendance intelligence
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      Dashboard mockup
                    </h2>
                  </div>
                  <Badge tone="success">Secure session</Badge>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[28px] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
                    <p className="text-sm text-white/70 dark:text-slate-500">
                      Attendance verified
                    </p>
                    <p className="mt-3 text-4xl font-semibold">91.8%</p>
                    <div className="mt-4 h-2 rounded-full bg-white/10 dark:bg-slate-200">
                      <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-sky-400 to-violet-500" />
                    </div>
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      QR session rotation
                    </p>
                    <div className="mt-4 flex items-center justify-center rounded-[24px] border border-dashed border-sky-400/30 p-8">
                      <ShieldCheck size={52} className="text-sky-500" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Weekly trend
                    </p>
                    <Badge tone="info">Productivity up</Badge>
                  </div>
                  <div className="grid grid-cols-6 gap-3">
                    {weeklyAttendance.map((day) => (
                      <div key={day.day} className="space-y-3">
                        <div className="flex h-28 items-end rounded-2xl bg-slate-100 px-2 py-2 dark:bg-white/5">
                          <div
                            className="w-full rounded-xl bg-gradient-to-t from-sky-500 to-violet-500"
                            style={{ height: `${day.attendance}%` }}
                          />
                        </div>
                        <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                          {day.day}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="features" className="space-y-6 py-10">
          <div className="max-w-2xl space-y-3">
            <Badge tone="info">Platform pillars</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              A premium SaaS frontend designed for the full education workflow.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featureGroups.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-cyan-500/10 to-violet-500/10 p-3 text-sky-600 dark:text-sky-300">
                  <Sparkles size={18} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section id="attendance" className="grid gap-6 py-10 lg:grid-cols-[1fr_0.95fr]">
          <Card className="overflow-hidden p-0">
            <div className="border-b border-slate-200 p-6 dark:border-white/10">
              <Badge tone="success">Smart attendance showcase</Badge>
              <h2 className="mt-4 text-3xl font-semibold">
                Dynamic QR, geo-fence, and proxy prevention in one experience.
              </h2>
            </div>
            <div className="grid gap-6 p-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50/90 p-5 dark:border-white/10 dark:bg-white/5">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  QR session
                </p>
                <div className="mt-5 grid h-52 place-items-center rounded-[24px] border border-dashed border-sky-400/30">
                  <div className="scanner-pulse rounded-[28px] border border-slate-200 bg-white/80 p-8 dark:border-white/10 dark:bg-slate-950/60">
                    <ShieldCheck size={48} className="text-sky-500" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Auto-refresh every 30 seconds with session expiry and visual
                  security cues.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  'Geo-fence boundary validation',
                  'Face verification placeholder',
                  'Device trust and duplicate login detection',
                  'Suspicious location alerting',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 text-emerald-500" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <Badge tone="info">Geo-fencing demo</Badge>
            <div className="mt-4 rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] p-8 dark:border-white/10">
              <div className="relative mx-auto grid h-72 place-items-center rounded-full border border-sky-400/20">
                <div className="absolute h-56 w-56 rounded-full border border-violet-400/20" />
                <div className="absolute h-40 w-40 rounded-full border border-emerald-400/20" />
                <div className="h-5 w-5 rounded-full bg-emerald-400 shadow-[0_0_40px_rgba(52,211,153,0.85)]" />
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ['GPS status', 'Active'],
                ['Inside campus', 'True'],
                ['Distance to class', '8m'],
                ['Radius threshold', '25m'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-slate-100/80 px-4 py-3 dark:bg-white/5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="analytics" className="space-y-6 py-10">
          <div className="max-w-2xl space-y-3">
            <Badge tone="info">Operational clarity</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Analytics that feel enterprise-ready without losing calm visual
              hierarchy.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="p-6">
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  “{item.quote}”
                </p>
                <div className="mt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="py-10">
          <div className="max-w-2xl space-y-3">
            <Badge tone="info">FAQ</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Common questions about the frontend and product concept.
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => {
              const isOpen = faq.question === openFaq

              return (
                <Card key={faq.question} className="p-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? '' : faq.question)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={isOpen ? 'rotate-180 transition' : 'transition'}
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-slate-200 px-6 py-5 text-sm leading-7 text-slate-600 dark:border-white/10 dark:text-slate-300">
                      {faq.answer}
                    </div>
                  ) : null}
                </Card>
              )
            })}
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-slate-200 py-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>Acadly frontend concept built with React, Tailwind, Framer Motion, Lucide, and Recharts.</p>
          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="gradient">Get started</Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LandingPage
