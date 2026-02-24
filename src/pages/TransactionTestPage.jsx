import { useState } from 'react';
import { TransactionPreview, TransactionProcessing, TransactionSuccess, TransactionFailed } from '@/features/transactions';

const TransactionTestPage = () => {
  const [activeView, setActiveView] = useState(null);

  const views = [
    { key: 'preview', label: 'Preview', color: 'bg-[#D4FF00] text-black' },
    { key: 'processing', label: 'Processing', color: 'bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white' },
    { key: 'success', label: 'Success', color: 'bg-[#14F195] text-black' },
    { key: 'failed', label: 'Failed', color: 'bg-red-500 text-white' },
  ];

  return (
    <div className="min-h-screen bg-[#050807] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-black tracking-tight mb-2">Transaction Components</h1>
      <p className="text-[#8FA396] mb-8">Click a button to preview each state</p>

      <div className="flex gap-4 flex-wrap justify-center">
        {views.map((v) => (
          <button
            key={v.key}
            onClick={() => setActiveView(v.key)}
            className={`${v.color} px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Render the selected view */}
      {activeView === 'preview' && (
        <TransactionPreview
          amount="12.50"
          usdValue="1,815.00"
          fromAddress="8a2j...29b"
          toAddress="8x2j...9Kmz"
          network="Solana"
          fee="0.000005"
          onSign={() => setActiveView('processing')}
          onBack={() => setActiveView(null)}
        />
      )}

      {activeView === 'processing' && (
        <TransactionProcessing />
      )}

      {activeView === 'success' && (
        <TransactionSuccess
          amount="12.50"
          toAddress="8x2j...9Kmz"
          signature="5wHu...abc123"
          onClose={() => setActiveView(null)}
        />
      )}

      {activeView === 'failed' && (
        <TransactionFailed
          amount="12.50"
          errorMessage="Insufficient SOL for network fee"
          onRetry={() => setActiveView('processing')}
          onCancel={() => setActiveView(null)}
        />
      )}
    </div>
  );
};

export default TransactionTestPage;
