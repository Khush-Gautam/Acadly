import { cn } from '../../utils/cn'

function Table({ columns, rows, rowClassName }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-white/10">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-100/70 text-slate-500 dark:bg-white/5 dark:text-slate-300">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-4 py-3 font-medium">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={`${row.name ?? row.title}-${index}`}
              className={cn(
                'border-t border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-transparent',
                rowClassName?.(row),
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-4 py-4 text-slate-700 dark:text-slate-200"
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
