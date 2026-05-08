import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

function Card({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'rounded-[28px] border border-white/60 bg-white/70 p-5 shadow-[0_12px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_12px_50px_rgba(2,6,23,0.45)]',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card
