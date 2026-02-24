import React, { useState, useRef } from 'react'
import { X, Copy, Check, Share2, Download } from 'lucide-react'
import { useWalletStore } from '../../store/useWalletStore'
import { QRCodeCanvas } from 'qrcode.react'

const ReceiveModal = () => {

  const setReceiveSol = useWalletStore((state) => state.setReceiveSol);
  const activePublicKey = useWalletStore((state) => state.activePublicKey)
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!activePublicKey) return;
    navigator.clipboard.writeText(activePublicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrRef = useRef(null);

  const downloadQR = () => {
    const canvas = qrRef.current;
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setReceiveSol(false)} />
      <div className="bg-[#142018] w-full max-w-sm rounded-[32px] p-8 border border-white/5 text-center relative overflow-hidden z-10 animate-in fade-in zoom-in duration-200">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#9945FF] to-[#14F195]" />
        <button
          onClick={() => setReceiveSol(false)}
          className="absolute top-4 right-4 p-2 text-[#8FA396] hover:text-white bg-[#0C120F] rounded-full"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-xl font-bold text-white mb-2">Receive Solana</h3>
        <p className="text-xs text-[#8FA396] mb-8">Scan to deposit SOL or SPL tokens</p>

        <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-3 mb-8 shadow-2xl relative group">
          <QRCodeCanvas
            value={activePublicKey || ''}
            size={168}
            bgColor="#ffffff"
            fgColor="#000000"
            ref={qrRef}
            level="M"
            className="w-full h-full rounded-xl"
            imageSettings={{
              src: '',
              height: 0,
              width: 0,
              excavate: false,
            }}
          />
        </div>

        <div className="bg-[#0C120F] rounded-xl p-4 border border-white/5 mb-6 flex items-center justify-between gap-4">
          <div className="text-left overflow-hidden">
            <p className="text-[10px] font-bold text-[#8FA396] uppercase">Your Address</p>
            <p className="text-xs font-mono text-white truncate">{activePublicKey}</p>
          </div>
          <button onClick={handleCopy} className={`p-2 rounded-lg transition-colors ${copied ? 'bg-[#D4FF00] text-black' : 'bg-[#1A2920] text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black'}`}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-[#1A2920] border border-white/5 hover:bg-[#253d2c] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button onClick={downloadQR} className="flex-1 bg-[#1A2920] border border-white/5 hover:bg-[#253d2c] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors">
            <Download className="w-4 h-4" /> Save
          </button>
        </div>
        <p className="text-[10px] text-[#8FA396]/60 mt-6 max-w-[200px] mx-auto">Only send Solana (SOL) and SPL tokens to this address.</p>
      </div>
    </div>
  )
}

export default ReceiveModal