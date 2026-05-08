import { AnimatePresence, motion } from 'framer-motion'

function Modal({ open, onClose, title, children }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="w-full max-w-lg rounded-[32px] border border-white/10 bg-white p-6 shadow-2xl dark:bg-slate-950"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-white/10 dark:text-white"
              >
                Close
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
