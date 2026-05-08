import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Card from '../components/ui/Card'

export function AreaTrendCard({ title, data, xKey = 'day', lines = [] }) {
  return (
    <Card className="h-[340px]">
      <div className="mb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="productivityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.32} />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.18)" />
          <XAxis dataKey={xKey} stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              borderRadius: '18px',
              border: '1px solid rgba(148,163,184,0.16)',
              background: 'rgba(15,23,42,0.92)',
              color: '#fff',
            }}
          />
          {lines.map((line) => (
            <Area
              key={line.key}
              type="monotone"
              dataKey={line.key}
              stroke={line.stroke}
              fill={line.fill}
              strokeWidth={3}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

export function BarTrendCard({ title, data, xKey = 'day', dataKey = 'attendance' }) {
  return (
    <Card className="h-[340px]">
      <div className="mb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.18)" />
          <XAxis dataKey={xKey} stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              borderRadius: '18px',
              border: '1px solid rgba(148,163,184,0.16)',
              background: 'rgba(15,23,42,0.92)',
              color: '#fff',
            }}
          />
          <Bar dataKey={dataKey} radius={[10, 10, 0, 0]} fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export function PieBreakdownCard({ title, data }) {
  return (
    <Card className="h-[340px]">
      <div className="mb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={68}
            outerRadius={100}
            paddingAngle={4}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: '18px',
              border: '1px solid rgba(148,163,184,0.16)',
              background: 'rgba(15,23,42,0.92)',
              color: '#fff',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

export function HeatmapCard({ title, data }) {
  return (
    <Card>
      <div className="mb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      </div>
      <div className="grid gap-3">
        {data.map(([label, ...values]) => (
          <div key={label} className="grid grid-cols-[88px_repeat(6,minmax(0,1fr))] gap-2">
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              {label}
            </div>
            {values.map((value, index) => (
              <div
                key={`${label}-${index}`}
                className="rounded-2xl p-4 text-center text-xs font-semibold text-slate-800 dark:text-white"
                style={{
                  background: `rgba(56, 189, 248, ${value / 120})`,
                }}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}
