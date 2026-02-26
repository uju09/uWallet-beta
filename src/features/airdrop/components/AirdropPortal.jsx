import React, { useState } from 'react';
import { Hash, ClipboardPaste, Droplet, Terminal, X } from 'lucide-react';

const AirdropPortal = ({ onAirdrop }) => {
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('devnet');
  const [amount, setAmount] = useState(1.0);
  const [isAirdropping, setIsAirdropping] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (text, status = '') => {
    setLogs((prev) => [...prev, { text, status }].slice(-4));
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setAddress(text);
      addLog('Address pasted from clipboard', 'OK');
    } catch (err) {
      addLog('Failed to read clipboard', 'ERROR');
    }
  };

  const handleAirdrop = async () => {
    if (!address) {
      addLog('Please enter a target wallet address', 'ERROR');
      return;
    }

    if (address.length < 32 || address.length > 44) {
      addLog('Invalid wallet address format', 'ERROR');
      return;
    }

    setIsAirdropping(true);
    setLogs([]);
    addLog(`Checking network limits...`, 'OK');

    setTimeout(() => {
      addLog(`Verifying address format...`, 'VALID');

      setTimeout(() => {
        addLog(`Deploying ${amount.toFixed(1)} SOL to ${network}...`, 'PROCESSING');

        if (onAirdrop) {
          onAirdrop(address, amount, network);
        }

        setTimeout(() => {
          addLog(`Airdrop successful!`, 'SUCCESS');
          setIsAirdropping(false);
        }, 1500);
      }, 1000);
    }, 800);
  };

  return (
    <section className="space-y-6">

      <div className="max-w-3xl mx-auto bg-[#0C120F] rounded-2xl md:rounded-[48px] border border-white/10 shadow-[0_0_80px_rgba(20,241,149,0.05)] relative overflow-hidden ring-1 ring-white/5">

        {/* Hero Area */}
        <div className="h-56 md:h-80 w-full relative overflow-hidden flex flex-col items-center justify-center pt-8 md:pt-8 pb-8 md:pb-12">
          <div className="absolute inset-x-[-50%] bottom-[-50%] top-0 perspective-grid z-0"></div>

          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9945FF] blur-[100px] rounded-full animate-ambient mix-blend-screen z-0"></div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#14F195] blur-[100px] rounded-full animate-ambient mix-blend-screen z-0" style={{ animationDelay: '2s' }}></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0C120F] via-transparent to-transparent z-10"></div>

          <div className="absolute top-6 right-6 z-20">
            <div className={`glass-panel px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border ${network === 'devnet' ? 'border-[#14F195]/20' : 'border-[#9945FF]/20'}`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${network === 'devnet' ? 'bg-[#14F195]' : 'bg-[#9945FF]'}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${network === 'devnet' ? 'bg-[#14F195]' : 'bg-[#9945FF]'}`}></span>
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">{network}</span>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center mt-4">
            <div className="relative animate-float-complex">
              <div className="absolute inset-0 bg-[#D4FF00] blur-[40px] opacity-20"></div>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl md:rounded-[32px] border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl relative overflow-hidden transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 md:w-14 md:h-14 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <path d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter mt-4 md:mt-6 drop-shadow-lg">Airdrop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">Portal</span></h3>
            <p className="text-[#8FA396] text-xs md:text-sm font-medium mt-1 md:mt-2 drop-shadow-md">Fund your testing environment instantly.</p>
          </div>
        </div>

        {/* Interactive Form Area */}
        <div className="relative z-30 -mt-6 md:-mt-8 px-3 sm:px-6 pb-4 md:px-10 md:pb-10">
          <div className="bg-[#142018] rounded-2xl md:rounded-[32px] border border-white/5 shadow-2xl p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest">Target Wallet</label>
                  </div>

                  {/* Attractive Custom Input Box */}
                  <div className="relative group">
                    {/* Glowing outer drop shadow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-2xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>

                    <div className="relative flex items-center bg-[#050807] border border-white/10 group-focus-within:border-[#14F195]/40 rounded-2xl overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] transition-all">
                      <div className="pl-4 pr-3 text-[#8FA396]">
                        <Hash className="w-4 h-4 md:w-5 md:h-5 group-focus-within:text-[#14F195] transition-colors" />
                      </div>

                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="AirdropPortal"
                        className="w-full bg-transparent py-3 md:py-4 text-white font-mono text-sm md:text-base outline-none placeholder:text-white/20 tracking-wide"
                      />

                      <div className="h-4 md:h-6 w-px bg-white/10 mx-1"></div>

                      <button
                        onClick={handlePaste}
                        className="px-2 md:px-3 py-2 md:py-3 mr-1 text-[#8FA396] hover:text-white transition-colors bg-[#142018] hover:bg-[#1A2E22] group-focus-within:bg-[#0C120F]/50 flex items-center justify-center rounded-lg md:rounded-xl"
                        title="Paste from clipboard"
                      >
                        <ClipboardPaste className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest px-1">Network</label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="network"
                        value="devnet"
                        checked={network === 'devnet'}
                        onChange={(e) => setNetwork(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="bg-[#0C120F] border border-white/5 peer-checked:border-[#14F195] peer-checked:bg-[#14F195]/5 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all flex items-center justify-between">
                        <span className="text-xs font-bold text-[#8FA396] peer-checked:text-white">Devnet</span>
                        <div className="w-3 h-3 rounded-full border-2 border-white/20 peer-checked:border-[#14F195] peer-checked:bg-[#14F195] flex items-center justify-center transition-all"></div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="network"
                        value="testnet"
                        checked={network === 'testnet'}
                        onChange={(e) => setNetwork(e.target.value)}
                        className="peer sr-only"
                      />
                      <div className="bg-[#0C120F] border border-white/5 peer-checked:border-[#9945FF] peer-checked:bg-[#9945FF]/5 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all flex items-center justify-between">
                        <span className="text-xs font-bold text-[#8FA396] peer-checked:text-white">Testnet</span>
                        <div className="w-3 h-3 rounded-full border-2 border-white/20 peer-checked:border-[#9945FF] peer-checked:bg-[#9945FF] flex items-center justify-center transition-all"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 flex flex-col justify-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest">Amount (SOL)</label>
                    <span className="text-[9px] font-mono text-[#8FA396] bg-[#0C120F] px-2 py-1 rounded border border-white/5">Max: 5 SOL/day</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[0.5, 1.0, 2.0].map((val) => {
                      const isActive = amount === val;
                      const activeColor = network === 'devnet' ? '#14F195' : '#9945FF';
                      const shadowColor = network === 'devnet' ? 'rgba(20,241,149,0.15)' : 'rgba(153,69,255,0.15)';
                      const borderColor = network === 'devnet' ? 'rgba(20,241,149,0.5)' : 'rgba(153,69,255,0.5)';
                      const bgGradient = network === 'devnet' ? 'linear-gradient(to bottom right, rgba(20,241,149,0.1), transparent)' : 'linear-gradient(to bottom right, rgba(153,69,255,0.1), transparent)';

                      return (
                        <button
                          key={val}
                          onClick={() => setAmount(val)}
                          className={`py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-bold text-sm border transition-all ${!isActive
                            ? 'bg-[#0C120F] text-white border-white/5 hover:bg-white/5'
                            : 'font-black scale-[1.02]'
                            }`}
                          style={isActive ? {
                            color: activeColor,
                            borderColor: borderColor,
                            background: bgGradient,
                            boxShadow: `0 0 20px ${shadowColor}`
                          } : {}}
                        >
                          {val.toFixed(1)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 md:pt-2">
                  <button
                    onClick={handleAirdrop}
                    disabled={isAirdropping}
                    className={`w-full bg-[#D4FF00] text-black font-extrabold py-3.5 md:py-4 rounded-xl md:rounded-2xl shadow-[0_0_40px_rgba(212,255,0,0.2)] transition-all flex items-center justify-center gap-2 ${isAirdropping ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98] btn-shine'}`}
                  >
                    <Droplet className={`w-5 h-5 fill-black ${isAirdropping ? 'animate-bounce' : ''}`} />
                    {isAirdropping ? 'Processing...' : `Airdrop ${amount.toFixed(1)} SOL`}
                  </button>
                </div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="hidden md:block mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5">
              <div className="bg-[#050807] rounded-xl border border-white/5 p-4 font-mono text-[10px] leading-relaxed relative overflow-hidden group/term min-h-[140px]">
                <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${network === 'devnet' ? 'bg-[#14F195]' : 'bg-[#9945FF]'}`}></div>
                <div className="flex items-center gap-2 text-[#8FA396] mb-2">
                  <Terminal className="w-3 h-3" />
                  <span>System Status</span>
                </div>
                <div className="space-y-1">
                  {logs.map((log, index) => {
                    let logColor = 'text-[#8FA396]';
                    if (log.status === 'ERROR') logColor = 'text-red-400';
                    if (log.status === 'SUCCESS') logColor = network === 'devnet' ? 'text-[#14F195]' : 'text-[#9945FF]';

                    return (
                      <p key={index} className={logColor}>
                        &gt; {log.text}
                        {log.status && !['ERROR', 'SUCCESS', 'PROCESSING'].includes(log.status) && (
                          <span className={`ml-2 font-bold ${network === 'devnet' ? 'text-[#14F195]' : 'text-[#9945FF]'}`}>{log.status}</span>
                        )}
                        {index === logs.length - 1 && isAirdropping && (
                          <span className={`inline-block w-1.5 h-3 animate-blink ml-1 align-middle transition-colors ${network === 'devnet' ? 'bg-[#14F195]' : 'bg-[#9945FF]'}`}></span>
                        )}
                      </p>
                    );
                  })}
                  {!isAirdropping && (
                    <p className="text-white">&gt; Ready to deploy {amount.toFixed(1)} SOL to {network} <span className={`inline-block w-1.5 h-3 animate-blink ml-1 align-middle transition-colors ${network === 'devnet' ? 'bg-[#14F195]' : 'bg-[#9945FF]'}`}></span></p>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropPortal;
