import React from 'react';

const RiskScore = () => {
  const riskLevel = 25;

  return (
    <div className="bg-[#0C120F] rounded-2xl border border-white/5 p-3 sm:p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm sm:text-base font-bold text-white">
          Portfolio Risk Score
        </h3>
        <div className="text-right">
          <span className="text-[8px] uppercase font-bold text-[#8FA396] tracking-wider block">Updated</span>
          <p className="text-[10px] sm:text-xs font-bold text-white">Just Now</p>
        </div>
      </div>

      <div className="relative mt-4 mb-2">
        <div className="w-full h-2 bg-gradient-to-r from-[#14F195] via-[#D4FF00] to-[#FF6B6B] rounded-full" />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-[#0C120F]"
          style={{ left: `calc(${riskLevel}% - 6px)` }}
        />
      </div>

      <div className="flex justify-between text-[10px] text-[#8FA396]">
        <span>Low Risk</span>
        <span>High Risk</span>
      </div>
    </div>
  );
};

export default RiskScore;
