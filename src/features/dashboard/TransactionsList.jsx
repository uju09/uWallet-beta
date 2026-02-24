import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Clock, CheckCircle2, XCircle } from 'lucide-react';

const transactions = [
  { type: 'receive', date: '08:21 AM', token: 'BTC', amount: '+0.002345', status: 'pending', highlighted: false },
  { type: 'receive', date: '05.12.2024', token: 'MATIC', amount: '+590.41', status: 'confirmed', highlighted: true },
  { type: 'send', date: '04.12.2024', token: 'USDT', amount: '-19.57', status: 'failed', highlighted: false },
];

const statusConfig = {
  pending: { icon: Clock, color: 'text-yellow-500', label: 'PENDING' },
  confirmed: { icon: CheckCircle2, color: 'text-[#14F195]', label: 'CONFIRMED' },
  failed: { icon: XCircle, color: 'text-[#FF6B6B]', label: 'FAILED' },
};

const TransactionsList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-white uppercase tracking-wide">Transactions</h3>
        <button className="text-[10px] sm:text-xs font-bold text-[#D4FF00] hover:underline uppercase tracking-wider">
          View All
        </button>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {transactions.map((tx, index) => {
          const StatusIcon = statusConfig[tx.status].icon;
          const isHighlighted = tx.highlighted;

          return (
            <div
              key={index}
              className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all ${isHighlighted
                  ? 'bg-[#D4FF00]'
                  : 'bg-[#0C120F] border border-white/5'
                }`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${isHighlighted ? 'bg-black/20' : 'bg-[#8B5A2B]/30'
                  }`}>
                  {tx.type === 'receive' ? (
                    <ArrowDownLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${isHighlighted ? 'text-black' : 'text-[#CD853F]'}`} />
                  ) : (
                    <ArrowUpRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isHighlighted ? 'text-black' : 'text-[#CD853F]'}`} />
                  )}
                </div>
                <div>
                  <span className={`text-xs sm:text-sm font-bold uppercase ${isHighlighted ? 'text-black' : 'text-white'}`}>
                    {tx.type === 'receive' ? 'Receive' : 'Send'}
                  </span>
                  <p className={`text-[10px] sm:text-xs ${isHighlighted ? 'text-black/60' : 'text-[#8FA396]'}`}>
                    {tx.date}
                  </p>
                </div>
              </div>

              {/* Token & Amount */}
              <div className="mb-1.5 sm:mb-2">
                <p className={`text-[10px] sm:text-xs font-medium mb-0.5 ${isHighlighted ? 'text-black/70' : 'text-[#8FA396]'}`}>
                  {tx.token}
                </p>
                <p className={`text-lg sm:text-xl font-extrabold tracking-tight ${isHighlighted ? 'text-black' : 'text-white'}`}>
                  {tx.amount}
                </p>
              </div>

              {/* Status */}
              <div className={`flex items-center gap-1 ${isHighlighted ? 'text-black/70' : statusConfig[tx.status].color}`}>
                <StatusIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wide">
                  {statusConfig[tx.status].label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsList;
