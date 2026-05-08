import PageHeader from '../components/shared/PageHeader'
import PageShell from '../components/shared/PageShell'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import { assignments } from '../data/mockData'

function AssignmentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Assignments"
        badge="Student productivity"
        title="Assignments, submission progress, deadline awareness, and AI guidance in one clean workspace."
        description="Acadly treats assignments as an active workflow with upload controls, priority states, progress tracking, and smart suggestions."
      />

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Assignment board</p>
          <div className="mt-5 space-y-3">
            {assignments.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {item.course} • {item.deadline}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold dark:bg-white/10">
                    {item.status}
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card>
            <p className="text-sm text-slate-500 dark:text-slate-400">Upload work</p>
            <div className="mt-5 space-y-3">
              <Input placeholder="Assignment title" />
              <Input placeholder="Course name" />
              <div className="rounded-[24px] border border-dashed border-sky-400/30 p-6 text-sm text-slate-500 dark:text-slate-300">
                Drag and drop files here or browse local uploads
              </div>
              <Button variant="gradient" className="w-full">
                Upload assignment
              </Button>
            </div>
          </Card>

          <Card>
            <p className="text-sm text-slate-500 dark:text-slate-400">AI suggestion widget</p>
            <div className="mt-5 rounded-[24px] bg-slate-950 p-5 text-white dark:bg-white dark:text-slate-950">
              <p className="text-sm text-white/70 dark:text-slate-600">Suggested next action</p>
              <p className="mt-3 text-lg font-semibold">
                Finish the Operating Systems viva prep first because its deadline is sooner and current progress is below 50%.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}

export default AssignmentsPage
