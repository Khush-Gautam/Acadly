import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'
import Badge from '../ui/Badge'

function PageHeader({ eyebrow, title, description, badge }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge tone="info">{eyebrow}</Badge>
        {badge ? <Badge tone="success">{badge}</Badge> : null}
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default PageHeader
