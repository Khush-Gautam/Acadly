import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Card from '../components/ui/Card'
import { profile } from '../data/mockData'

function ProfilePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Profile"
        badge="Verified identity"
        title="Profile details, achievements, history, and verification status in a premium personal view."
        description="The profile page is designed to summarize credibility, progress, and identity without feeling overloaded."
      />

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-sky-500 to-violet-500 text-3xl font-semibold text-white">
              V
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">
              {profile.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {profile.role}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {profile.bio}
            </p>
          </div>
        </Card>

        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {profile.stats.map((item) => (
              <Card key={item.label}>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                  {item.value}
                </p>
              </Card>
            ))}
          </div>

          <Card>
            <p className="text-sm text-slate-500 dark:text-slate-400">Achievement badges</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {['Streak Master', 'Trusted Device', 'Top Performer', 'Geo Verified'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gradient-to-r from-sky-500/10 to-violet-500/10 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </Card>

          <Card>
            <p className="text-sm text-slate-500 dark:text-slate-400">Activity history</p>
            <div className="mt-5 space-y-3">
              {[
                'Attendance verified through QR and geo-fence at 09:01 AM',
                'Completed aptitude sprint during free period',
                'Submitted Cloud Computing worksheet before deadline',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-slate-200 bg-white/70 px-4 py-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}

export default ProfilePage
