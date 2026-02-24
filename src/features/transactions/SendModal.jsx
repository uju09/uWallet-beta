import { useState } from 'react'
import { X, ClipboardPaste, Eraser } from "lucide-react"
import { useWalletStore } from "../../store/useWalletStore"
import { useBalance } from "../../hooks/useWallet"
import { useNavigate } from 'react-router-dom'
import { useWallet } from '../../hooks/useWallet'

const SendModal = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const { getNetworkFee } = useWallet();

  const setSendPreview = useWalletStore((state) => state.setSendPreview)
  const activePublicKey = useWalletStore((state) => state.activePublicKey)
  const to = useWalletStore((state) => state.to)
  const setTo = useWalletStore((state) => state.setTo)
  const setSolAmount = useWalletStore((state) => state.setAmount)

  // Use centralized balance polling
  const balance = useBalance(10000);

  const handleAmountChange = (e) => {
    const val = e.target.value;
    setError("");

    // Allow empty input
    if (val === "") {
      setAmount("");
      setSolAmount("")
      return;
    }

    const num = parseFloat(val);

    // Prevent negative values
    if (num < 0) {
      setError("Amount cannot be negative");
      return;
    }

    // Check against balance
    if (balance !== null && num > balance) {
      setError(`Insufficient balance (${balance.toFixed(4)} SOL)`);
    }

    setSolAmount(val);
    setAmount(val);
  };

  const handleMax = async () => {

    const fee = await getNetworkFee({ from: activePublicKey, to, amount: balance });

    if (balance !== null && balance > 0 && fee.success) {
      const sol = balance - fee.netFee;
      setAmount(sol.toString());
      setSolAmount(sol.toString())
      setError("");
    }
  };

  const pasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setTo(text);

    } catch (err) {
      console.error("Failed to read clipboard", err);
    }
  };

  const isValid = to && amount && parseFloat(amount) > 0 && !error;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="bg-[#142018] w-full max-w-sm rounded-[32px] p-8 border border-white/5 relative overflow-hidden z-10 animate-in fade-in zoom-in duration-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#D4FF00] to-[#14F195]" />
        <button
          onClick={() => { setSendPreview(false); setTo("") }}
          className="absolute top-4 right-4 p-2 text-[#8FA396] hover:text-white bg-[#0C120F] rounded-full"
        >
          <X className="w-4 h-4" />
        </button>
        <h3 className="text-xl font-bold text-white mb-6">Send Assets</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#8FA396] uppercase">Recipient Address</label>
            <div className="bg-[#0C120F] rounded-xl border border-white/5 flex items-center p-3">
              <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Paste address or ENS..." className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/20" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#142018] border border-[#14F195]/20 rounded-xl text-xs font-bold text-[#14F195] uppercase tracking-wider hover:border-[#14F195]/50 hover:shadow-[0_0_15px_rgba(20,241,149,0.08)] transition-all duration-200" onClick={pasteAddress}>
                <ClipboardPaste className="w-3.5 h-3.5" />
                Paste Address
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#142018] border border-red-500/20 rounded-xl text-xs font-bold text-red-400 uppercase tracking-wider hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.08)] transition-all duration-200" onClick={() => setTo("")}>
                <Eraser className="w-3.5 h-3.5" />
                Clear
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#8FA396] uppercase">Amount</label>
              {balance !== null && (
                <span className="text-[10px] font-mono text-[#8FA396]">
                  Balance: <span className="text-white">{balance.toFixed(4)} SOL</span>
                </span>
              )}
            </div>
            <div className={`bg-[#0C120F] rounded-xl border p-4 transition-colors ${error ? 'border-red-500/40' : 'border-white/5'}`}>
              <div className="flex items-center justify-between mb-2">
                <input
                  type="number"
                  min="0"
                  step="0.001"
                  value={amount}
                  onChange={handleAmountChange}
                  onPaste={handleAmountChange}
                  placeholder="0.00"
                  className="bg-transparent text-2xl font-bold text-white outline-none w-full placeholder:text-white/10 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button onClick={handleMax} disabled={to ? false : true} className="bg-[#1A2920] px-3 py-1 rounded-lg text-xs font-bold text-white border border-white/5 hover:border-[#14F195]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-white/5">Max</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8FA396]">≈ $0.00</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]" />
                  <span className="text-xs font-bold text-white">SOL</span>
                </div>
              </div>
            </div>
            {error && (
              <p className="text-[11px] text-red-400 font-medium mt-1">{error}</p>
            )}
          </div>
        </div>

        <button
          disabled={!isValid}
          className={`w-full font-bold py-4 rounded-xl shadow-lg mt-8 transition-all ${isValid
            ? 'bg-[#D4FF00] text-black shadow-[#D4FF00]/10 hover:bg-[#bce600]'
            : 'bg-[#D4FF00]/30 text-black/40 cursor-not-allowed'
            }`} onClick={() => { navigate("/assets/transation") }}
        >
          Preview Send
        </button>
      </div>
    </div >
  )
}

export default SendModal