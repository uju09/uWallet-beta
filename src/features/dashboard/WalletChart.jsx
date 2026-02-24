import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const chartData = [
  { time: '8AM', value: 38000 },
  { time: '9AM', value: 39200 },
  { time: '10AM', value: 38800 },
  { time: '11AM', value: 40100 },
  { time: '12PM', value: 39500 },
  { time: '1PM', value: 40800 },
  { time: '2PM', value: 41812 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A2920] border border-[#D4FF00]/30 rounded-xl px-3 py-2 shadow-xl">
        <p className="text-[10px] text-[#8FA396] mb-0.5">{label}</p>
        <p className="text-sm font-bold text-white">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const WalletChart = () => {
  const currentValue = 41812.14;
  const percentChange = 4.6;

  return (
    <div className="bg-[#0C120F] rounded-2xl border border-white/5 p-3 sm:p-4 lg:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#8FA396] mb-1">Wallet Value</p>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-white tracking-tight">
              ${currentValue.toLocaleString()}
            </h2>
            <span className="inline-flex items-center gap-1 bg-[#14F195]/10 text-[#14F195] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {percentChange}%
            </span>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-1">
          {['1H', '1D', '6M', '1Y'].map((range) => (
            <button
              key={range}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-colors ${range === '6M'
                  ? 'bg-[#D4FF00] text-black'
                  : 'bg-[#1A2920] text-[#8FA396] hover:text-white'
                }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[140px] sm:h-[180px] lg:h-[220px] relative">
        {/* Floating value indicator */}
        <div className="absolute top-0 right-0 z-10">
          <div className="flex items-center gap-1.5 bg-[#142018] border border-white/10 rounded-full px-2 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
            <span className="text-[10px] font-bold text-white">+$1,859</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4FF00" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#D4FF00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8FA396', fontSize: 9 }}
              dy={5}
              interval="preserveStartEnd"
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#D4FF00"
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{ r: 4, fill: '#D4FF00', stroke: '#0C120F', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WalletChart;
