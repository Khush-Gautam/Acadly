import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-slate-950 text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200',
  secondary:
    'bg-white/70 text-slate-900 ring-1 ring-slate-200 hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/15',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10',
  gradient:
    'bg-gradient-to-r from-sky-500 via-cyan-500 to-violet-500 text-white shadow-lg shadow-sky-500/20 hover:brightness-110',
}

function Button({
  children,
  className = '',
  variant = 'primary',
  as: Component = 'button',
  ...props
}) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} whileHover={{ y: -1 }}>
      <Component
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200',
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button
