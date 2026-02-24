import { useState, useRef, useEffect } from 'react';
import { NetworkSwitchConfirm } from '../dashboard';

const NETWORKS = [
  { id: 'mainnet', label: 'Mainnet', color: '#14F195' },
  { id: 'devnet', label: 'Devnet', color: '#D4FF00' },
  { id: 'testnet', label: 'Testnet', color: '#F59E0B' },
];

const NetworkSwitcher = ({ activeNetwork, onNetworkChange }) => {
  const [pendingNetwork, setPendingNetwork] = useState(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });
  const [pillReady, setPillReady] = useState(false);
  const networkBtnRefs = useRef([]);

  const currentNetwork = NETWORKS.find((n) => n.id === activeNetwork);

  // Measure active network button position for sliding pill
  useEffect(() => {
    const activeIdx = NETWORKS.findIndex((n) => n.id === activeNetwork);
    const btn = networkBtnRefs.current[activeIdx];
    if (btn) {
      setPillStyle({
        left: btn.offsetLeft,
        width: btn.offsetWidth,
        top: btn.offsetTop,
        height: btn.offsetHeight,
      });
      if (!pillReady) {
        requestAnimationFrame(() => setPillReady(true));
      }
    }
  }, [activeNetwork]);

  return (
    <div className="relative">
      <div className="flex items-center bg-[#142018] rounded-2xl p-1 border border-white/5 gap-1 relative">
        <div className="shrink-0 ml-1.5 mr-1.5 sm:ml-2">
          <svg width="18" height="14" viewBox="0 0 398 312" className="sm:w-5 sm:h-4" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9945FF" />
                <stop offset="100%" stopColor="#14F195" />
              </linearGradient>
            </defs>
            <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#solGrad)" />
            <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#solGrad)" />
            <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#solGrad)" />
          </svg>
        </div>

        {/* Sliding pill indicator */}
        <div
          className="absolute rounded-xl bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 border border-[#14F195]/30 pointer-events-none"
          style={{
            left: pillStyle.left,
            width: pillStyle.width,
            top: pillStyle.top,
            height: pillStyle.height,
            transition: pillReady ? 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        />

        {NETWORKS.map((network, idx) => (
          <button
            key={network.id}
            ref={(el) => (networkBtnRefs.current[idx] = el)}
            onClick={() => {
              if (network.id !== activeNetwork) {
                setPendingNetwork(network.id);
              }
            }}
            className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeNetwork === network.id
                ? 'text-white shadow-lg'
                : 'text-[#8FA396] hover:text-white'
              }`}
          >
            <span className="relative flex items-center gap-1.5">
              {activeNetwork === network.id && (
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0 animate-pulse"
                  style={{ backgroundColor: network.color }}
                />
              )}
              {network.label}
            </span>
          </button>
        ))}
      </div>

      {/* Network Switch Confirmation Popup */}
      {pendingNetwork && (
        <NetworkSwitchConfirm
          fromNetwork={currentNetwork}
          toNetwork={NETWORKS.find((n) => n.id === pendingNetwork)}
          onConfirm={() => {
            onNetworkChange(pendingNetwork);
            setPendingNetwork(null);
          }}
          onCancel={() => setPendingNetwork(null)}
        />
      )}
    </div>
  );
};

export default NetworkSwitcher;
