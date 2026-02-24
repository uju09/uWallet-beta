import { ArrowUpRight } from 'lucide-react';

const stats = [
  {
    label: '24h Change',
    value: '+$2,841.30',
    icon: <ArrowUpRight className="w-3.5 h-3.5 text-[#14F195]" />,
    valueColor: 'text-[#14F195]',
    borderHover: 'hover:border-[#14F195]/20',
  },
  {
    label: 'Staking APY',
    value: '7.2%',
    suffix: 'active',
    valueColor: 'text-[#D4FF00]',
    borderHover: 'hover:border-[#D4FF00]/20',
  },
  {
    label: 'SOL Price',
    value: '$145.03',
    badge: '+5.2%',
    badgeColor: 'text-[#14F195]',
    valueColor: 'text-white',
    borderHover: 'hover:border-[#9945FF]/20',
  },
  {
    label: 'Network TPS',
    value: '3,847',
    dot: true,
    valueColor: 'text-white',
    borderHover: 'hover:border-white/10',
  },
];

const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`bg-[#142018]/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/5 ${stat.borderHover} transition-all duration-200 opacity-0 animate-fade-in-up delay-${i + 3}`}
        >
          <p className="text-[9px] sm:text-[10px] font-bold text-[#8FA396] uppercase tracking-wider mb-1.5">{stat.label}</p>
          <div className="flex items-center gap-1.5">
            {stat.icon}
            {stat.dot && <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse" />}
            <span className={`text-sm sm:text-base font-bold ${stat.valueColor}`}>{stat.value}</span>
            {stat.suffix && <span className="text-[9px] sm:text-[10px] text-[#8FA396]">{stat.suffix}</span>}
            {stat.badge && <span className={`text-[9px] sm:text-[10px] ${stat.badgeColor} font-bold`}>{stat.badge}</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
