import React from 'react';

const stats = [
  { label: 'Realized PL', value: '+$1,429', change: '+27%', positive: true },
  { label: 'Unrealized PL', value: '-$521', change: '-11.8%', positive: false },
  { label: 'Projected', value: '+$1,864', change: '+3.2%', positive: true },
  { label: 'Net Change', value: '+$495', change: '-11.8%', positive: false },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#0C120F] rounded-xl border border-white/5 p-3 sm:p-4 hover:border-white/10 transition-colors"
        >
          <p className="text-[8px] sm:text-[10px] uppercase font-bold tracking-widest text-[#8FA396] mb-1">
            {stat.label}
          </p>
          <p className={`text-sm sm:text-base lg:text-lg font-extrabold tracking-tight ${stat.value.startsWith('+') ? 'text-[#14F195]' : 'text-[#FF6B6B]'
            }`}>
            {stat.value}
          </p>
          <p className={`text-[10px] sm:text-xs mt-0.5 ${stat.positive ? 'text-[#14F195]' : 'text-[#FF6B6B]'
            }`}>
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
