import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Copy, Plus, Trash2 } from 'lucide-react';
import { useWalletStore } from '../../store/useWalletStore';
import { useWallet } from '../../hooks/useWallet';

const truncateAddress = (addr) =>
  addr && addr.length > 8 ? `${addr.slice(0, 4)}...${addr.slice(-4)}` : addr;

const WalletSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState(null);
  const dropdownRef = useRef(null);

  const { deriveNewWallet, deleteWallet } = useWallet();

  const wallets = useWalletStore((state) => state.wallets);
  const privateKeys = useWalletStore((state) => state.privateKeys);
  const activePublicKey = useWalletStore((state) => state.activePublicKey);
  const setActivePublicKey = useWalletStore((state) => state.setActivePublicKey);
  const setActiveSecretKey = useWalletStore((state) => state.setActiveSecretKey);

  const activeIndex = wallets.findIndex(w => w.address === activePublicKey);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeWallet = wallets[safeActiveIndex];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyAddress = () => {
    if (!activeWallet?.address) return;
    navigator.clipboard.writeText(activeWallet.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 1500);
  };

  const selectWallet = (idx) => {
    const wallet = wallets[idx];
    const secretKey = privateKeys[idx]?.secret;
    if (wallet && secretKey) {
      setActivePublicKey(wallet.address);
      setActiveSecretKey(secretKey);
    }
    setShowDropdown(false);
  };

  if (!wallets || wallets.length === 0 || !activeWallet) {
    return null;
  }

  return (
    <div className="mt-3 sm:mt-4 relative" ref={dropdownRef}>
      <div className="flex items-center gap-2 flex-wrap">
        {/* Wallet Selector Button */}
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-3 py-2 bg-[#142018] rounded-xl sm:rounded-2xl border border-[#14F195]/20 hover:border-[#14F195]/50 transition-all duration-300 shadow-[0_0_15px_rgba(20,241,149,0.05)] hover:shadow-[0_0_25px_rgba(20,241,149,0.1)] active:scale-[0.97]"
        >
          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white shadow-md shrink-0">
            {activeWallet.idx}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-white">{activeWallet.name}</span>
          <span className="text-[10px] sm:text-xs font-mono text-[#8FA396]">{truncateAddress(activeWallet.address)}</span>
          <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#14F195] transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Copy Address Button */}
        <button
          onClick={handleCopyAddress}
          className="flex items-center gap-1.5 px-2.5 py-2 bg-[#142018] rounded-xl sm:rounded-2xl border border-white/5 hover:border-[#14F195]/30 transition-all duration-300 group active:scale-[0.95]"
          title="Copy address"
        >
          {copiedAddress ? (
            <>
              <svg className="w-3.5 h-3.5 text-[#14F195]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] font-bold text-[#14F195] uppercase tracking-wider">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#8FA396] group-hover:text-[#14F195] transition-colors" />
              <span className="text-[10px] font-bold text-[#8FA396] group-hover:text-white uppercase tracking-wider transition-colors">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Wallet Dropdown */}
      {showDropdown && (
        <div className="absolute z-50 top-full mt-2 left-0 right-0 sm:right-auto sm:min-w-[260px] max-h-[280px] overflow-y-auto bg-[#0C140F] border border-white/10 rounded-xl sm:rounded-2xl shadow-2xl shadow-black/60 animate-scale-in">
          {wallets.map((wallet, arrayIdx) => (
            <button
              key={wallet.idx}
              onClick={() => selectWallet(arrayIdx)}
              className={`w-full flex items-center gap-3 px-3 sm:px-4 py-3 text-left transition-all duration-200 group ${safeActiveIndex === arrayIdx
                ? 'bg-gradient-to-r from-[#9945FF]/10 to-[#14F195]/10 border-l-2 border-[#14F195]'
                : 'hover:bg-[#142018] active:bg-[#142018]/80 border-l-2 border-transparent'
                }`}
            >
              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white shrink-0 ${safeActiveIndex === arrayIdx
                ? 'bg-gradient-to-br from-[#9945FF] to-[#14F195]'
                : 'bg-[#1A2920] border border-white/10'
                }`}>{wallet.idx}</span>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-white">{wallet.name}</span>
                <span className="text-[10px] font-mono text-[#8FA396] truncate">{truncateAddress(wallet.address)}</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto shrink-0">
                {safeActiveIndex === arrayIdx && (
                  <span className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
                )}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(wallet.address);
                    setCopiedIdx(wallet.idx);
                    setTimeout(() => setCopiedIdx(null), 1500);
                  }}
                  className="w-7 h-7 rounded-lg flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-[#14F195]/20 text-[#8FA396] hover:text-[#14F195] transition-all duration-200 cursor-pointer"
                  title="Copy address"
                >
                  {copiedIdx === wallet.idx ? (
                    <svg className="w-3.5 h-3.5 text-[#14F195]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </span>
                {wallet.idx !== 1 && (
                  <span
                    onClick={(e) => { e.stopPropagation(); deleteWallet(wallet.idx); }}
                    className="w-7 h-7 rounded-lg flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-red-500/20 text-red-500 hover:text-red-400 transition-all duration-200 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </button>
          ))}
          <div className="border-t border-white/5 mx-2" />
          <button
            onClick={() => deriveNewWallet()}
            className="w-full flex items-center gap-3 px-3 sm:px-4 py-3 text-left hover:bg-[#142018] active:bg-[#142018]/80 transition-all duration-200 group"
          >
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-dashed border-[#14F195]/40 flex items-center justify-center group-hover:border-[#14F195] group-hover:bg-[#14F195]/10 transition-all duration-200">
              <Plus className="w-3 h-3 text-[#14F195]" />
            </span>
            <span className="text-xs font-bold text-[#14F195] uppercase tracking-wider">Add Wallet</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletSelector;
