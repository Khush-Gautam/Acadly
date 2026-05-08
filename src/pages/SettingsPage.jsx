import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import ThemeToggle from '../components/ui/ThemeToggle'

function ToggleRow({ title, description, enabled = true }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
      <div>
        <p className="font-semibold text-slate-950 dark:text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
      <div
        className={`relative h-7 w-12 rounded-full transition ${
          enabled ? 'bg-sky-500' : 'bg-slate-300 dark:bg-white/10'
        }`}
      >
        <div
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            enabled ? 'left-6' : 'left-1'
          }`}
        />
      </div>
    </div>
  )
}

function SettingsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Settings"
        badge="Preferences"
        title="Theme, security, notifications, device trust, and geo-location permissions in one place."
        description="The settings experience keeps advanced controls approachable, with strong hierarchy and clear privacy language."
      />

      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Theme mode</p>
              <h3 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">
                Personalize the interface
              </h3>
            </div>
            <ThemeToggle />
          </div>
          <div className="mt-5 space-y-3">
            <ToggleRow
              title="Security alerts"
              description="Receive real-time proxy detection and suspicious login notifications."
            />
            <ToggleRow
              title="Geo-location permissions UI"
              description="Show permission state and re-check location before attendance submission."
            />
            <ToggleRow
              title="Attendance privacy"
              description="Display how device trust and verification metadata are being used."
              enabled={false}
            />
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Device management</p>
          <div className="mt-5 grid gap-3">
            {[
              ['MacBook Pro', 'Trusted device', 'Last active 2 mins ago'],
              ['iPhone 15', 'Trusted device', 'Location verified'],
              ['Unknown Android', 'Flagged', 'Duplicate login attempt'],
            ].map(([name, status, meta]) => (
              <div
                key={name}
                className="rounded-[24px] border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-950 dark:text-white">{name}</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs dark:bg-white/10">
                    {status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{meta}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  )
}

export default SettingsPage
