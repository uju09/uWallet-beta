import { ArrowUpRight, ArrowDownLeft, RefreshCw, Scan } from 'lucide-react';

const actions = [
  { key: 'send', label: 'Send', icon: ArrowUpRight, primary: true },
  { key: 'receive', label: 'Receive', icon: ArrowDownLeft },
  { key: 'swap', label: 'Swap', icon: RefreshCw },
  { key: 'scan', label: 'Scan', icon: Scan },
];

const ActionButtons = ({ onSend, onReceive, onSwap, onScan }) => {
  const handlers = { send: onSend, receive: onReceive, swap: onSwap, scan: onScan };

  return (
    <div className="mt-20 sm:mt-18 flex justify-center sm:justify-start">
      <div className="grid grid-cols-4 gap-5 sm:gap-8 w-full max-w-xs sm:max-w-sm">
        {actions.map((action, i) => {
          const Icon = action.icon;
          return (
            <div
              key={action.key}
              onClick={handlers[action.key]}
              className={`flex flex-col items-center gap-2.5 cursor-pointer opacity-0 animate-fade-in-up delay-${i + 1}`}
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[20px] flex items-center justify-center transition-all duration-200 active:scale-90 ${action.primary
                  ? 'bg-[#D4FF00] text-black shadow-[0_0_24px_rgba(212,255,0,0.2)] hover:shadow-[0_0_32px_rgba(212,255,0,0.35)]'
                  : 'bg-[#1A2920]/80 border border-white/10 text-white hover:bg-[#1A2920] hover:border-white/20'
                  }`}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
              </div>
              <span className={`text-[11px] sm:text-xs font-bold ${action.primary ? 'text-white' : 'text-[#8FA396]'}`}>
                {action.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActionButtons;
