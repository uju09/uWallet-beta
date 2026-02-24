import React, { useEffect, useRef } from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';

const NetworkSwitchConfirm = ({ fromNetwork, toNetwork, onConfirm, onCancel }) => {
  const popupRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onCancel();
      }
    };
    // Delay listener so the triggering click doesn't immediately dismiss
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onCancel]);

  return (
    <div
      ref={popupRef}
      className="absolute top-full mt-3 right-0 z-50 w-[300px] sm:w-[340px]"
      style={{ animation: 'networkConfirmIn 0.25s ease-out forwards' }}
    >
      {/* Pointer arrow */}
      <div className="absolute -top-1.5 right-8 w-3 h-3 bg-[#0C140F] border-l border-t border-white/10 rotate-45" />

      <div className="relative bg-[#0C140F] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
        {/* Top gradient bar */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, ${fromNetwork.color}, ${toNetwork.color})`,
          }}
        />

        <div className="p-5">
          {/* Close button */}
          <button
            onClick={onCancel}
            className="absolute top-3 right-3 p-1.5 text-[#8FA396] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Icon + Title */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${toNetwork.color}15`, border: `1px solid ${toNetwork.color}30` }}
            >
              <AlertTriangle className="w-4 h-4" style={{ color: toNetwork.color }} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">Switch Network?</h4>
              <p className="text-[10px] text-[#8FA396] mt-0.5">This will change your RPC endpoint</p>
            </div>
          </div>

          {/* Network transition visual */}
          <div className="flex items-center gap-3 bg-[#142018]/60 rounded-xl p-3 border border-white/5 mb-5">
            {/* From */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: fromNetwork.color }}
              />
              <span className="text-xs font-bold text-white truncate">{fromNetwork.label}</span>
            </div>

            {/* Arrow */}
            <div className="shrink-0 w-7 h-7 rounded-lg bg-[#0C140F] border border-white/10 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-[#8FA396]" />
            </div>

            {/* To */}
            <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
              <span className="text-xs font-bold text-white truncate">{toNetwork.label}</span>
              <span
                className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                style={{ backgroundColor: toNetwork.color }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-[#8FA396] bg-[#142018] border border-white/5 hover:border-white/15 hover:text-white transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-black transition-all duration-200 shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${toNetwork.color}, ${toNetwork.color}cc)`,
                boxShadow: `0 4px 20px ${toNetwork.color}25`,
              }}
            >
              Confirm Switch
            </button>
          </div>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes networkConfirmIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default NetworkSwitchConfirm;
