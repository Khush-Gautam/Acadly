import { motion } from 'framer-motion'
import { pageTransition } from '../../animations/variants'

function PageShell({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {children}
    </motion.div>
  )
}

export default PageShell
