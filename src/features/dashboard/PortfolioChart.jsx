import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PORTFOLIO_DATA = [
  { day: 'Mon', value: 21200, date: 'Feb 8' },
  { day: 'Tue', value: 21850, date: 'Feb 9' },
  { day: 'Wed', value: 21600, date: 'Feb 10' },
  { day: 'Thu', value: 22400, date: 'Feb 11' },
  { day: 'Fri', value: 23100, date: 'Feb 12' },
  { day: 'Sat', value: 23800, date: 'Feb 13' },
  { day: 'Sun', value: 24510, date: 'Feb 14' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0C120F] border border-white/10 rounded-xl px-3 py-2 shadow-2xl">
        <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-wider">{payload[0].payload.date} · {label}</p>
        <p className="text-sm font-bold text-white">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const PortfolioChart = () => {
  return (
    <div className="bg-[#142018]/40 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/5 flex-1 flex flex-col opacity-0 animate-fade-in-up delay-6">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] sm:text-[10px] font-bold text-[#8FA396] uppercase tracking-wider">7-Day Portfolio Trend</p>
        <span className="text-[9px] sm:text-[10px] font-bold text-[#14F195] bg-[#14F195]/10 px-2 py-0.5 rounded-full">+12.4%</span>
      </div>
      <div className="flex-1 min-h-[120px] sm:min-h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={PORTFOLIO_DATA} margin={{ top: 5, right: 5, left: -30, bottom: 0 }}>
            <defs>
              <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14F195" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#14F195" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="portfolioStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9945FF" />
                <stop offset="100%" stopColor="#14F195" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8FA396', fontSize: 9, fontWeight: 600 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8FA396', fontSize: 9 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              hide={true}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#8FA396', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="url(#portfolioStroke)"
              strokeWidth={2.5}
              fill="url(#portfolioGrad)"
              dot={false}
              activeDot={{ r: 5, fill: '#14F195', stroke: '#0C120F', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioChart;
