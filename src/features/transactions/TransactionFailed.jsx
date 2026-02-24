import { X, AlertTriangle, RotateCw } from 'lucide-react';

const TransactionFailed = ({ amount, errorMessage, onRetry, onCancel }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onCancel} />
      <div className="bg-[#142018] w-full max-w-md lg:max-w-lg rounded-[32px] p-6 lg:p-8 border border-red-500/20 shadow-[0_20px_60px_rgba(239,68,68,0.05)] relative overflow-hidden z-10 animate-in fade-in zoom-in duration-200">

        {/* Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500 opacity-10 blur-[80px] rounded-full pointer-events-none" />

        <div className="pt-8 pb-4 flex flex-col items-center relative z-10">

          {/* Error Icon */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mb-6 relative">
            <X className="w-10 h-10 lg:w-12 lg:h-12 text-red-500" />
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">Transaction Failed</h3>
          <p className="text-sm lg:text-base text-[#8FA396] text-center mb-8 px-4">
            There was an issue processing your request on the network.
          </p>

          {/* Error Details */}
          <div className="w-full bg-[#0C120F] rounded-[24px] p-5 lg:p-6 border border-white/5 space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#8FA396] tracking-widest mb-1">Error Reason</span>
                <span className="text-sm font-bold text-white">{errorMessage || 'Unknown error'}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-[#8FA396] tracking-widest">Attempted</span>
              <span className="text-xs font-mono text-white">{amount || '0'} SOL</span>
            </div>
          </div>

          {/* Actions */}
          <div className="w-full grid grid-cols-2 gap-3">
            <button
              onClick={onCancel}
              className="py-4 bg-[#1A2920] border border-white/5 hover:bg-[#253d2c] text-white font-bold rounded-2xl transition-all text-xs uppercase tracking-widest"
            >
              Cancel
            </button>
            <button
              onClick={onRetry}
              className="py-4 bg-[#D4FF00] hover:bg-[#bce600] text-black font-extrabold rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-1.5"
            >
              <RotateCw className="w-4 h-4" /> Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionFailed;
