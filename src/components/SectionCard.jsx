// SectionCard — titled content section wrapper
export default function SectionCard({ title, description, action, children, className = '' }) {
  return (
    <section className={`section-card rounded-[26px] p-5 md:p-6 ${className}`.trim()}>
      {(title || description || action) && (
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {title && <h2 className="text-lg font-bold text-slate-900">{title}</h2>}
            {description && <p className="mt-1 text-sm leading-relaxed text-slate-500">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}
