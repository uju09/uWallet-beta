const ScanModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="w-full max-w-sm relative z-10 flex flex-col items-center">
        <h3 className="text-white font-bold mb-8">Scan QR Code</h3>

        <div className="w-64 h-64 border-2 border-[#D4FF00] rounded-3xl relative overflow-hidden shadow-[0_0_100px_rgba(212,255,0,0.2)]">
          <div className="absolute inset-0 bg-[#D4FF00]/5 animate-pulse" />

          {/* Scanner Corner Markers */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#D4FF00]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#D4FF00]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#D4FF00]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#D4FF00]" />

          {/* Scan Line Animation */}
          <div className="absolute inset-x-0 h-0.5 bg-[#D4FF00] shadow-[0_0_20px_#D4FF00] animate-[scan_2s_ease-in-out_infinite]" />
        </div>

        <p className="text-[#8FA396] text-sm mt-8 text-center max-w-xs">
          Align QR code within the frame to scan address or WalletConnect URI
        </p>

        <button
          onClick={onClose}
          className="mt-12 bg-[#1A2920] text-white px-8 py-3 rounded-full font-bold border border-white/10 hover:bg-[#253d2c]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ScanModal;
