import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '@/features/dashboard';
import { AssetsHeader } from '@/features/wallet';
import { useWalletStore } from '../store/useWalletStore';
import { BalanceCard, TokenList, ScanModal, ReceiveModal } from '@/features/wallet';
import { SendModal } from '@/features/transactions';

const AssetsPage = () => {
  const [showScanModal, setShowScanModal] = useState(false);
  const navigate = useNavigate();

  const activeNetwork = useWalletStore((state) => state.network) || 'mainnet';
  const setActiveNetwork = useWalletStore((state) => state.setNetwork);
  const sendPreview = useWalletStore((state) => state.sendPreview);
  const setSendPreview = useWalletStore((state) => state.setSendPreview);
  const receiveSol = useWalletStore((state) => state.receiveSol);
  const setReceiveSol = useWalletStore((state) => state.setReceiveSol);

  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <Sidebar />

      <div className="lg:ml-64 min-h-screen transition-all duration-300">
        <AssetsHeader />

        <main className="px-2.5 py-2 sm:p-4 lg:p-6 xl:p-8">
          <div className="space-y-4 sm:space-y-6">
            <BalanceCard
              activeNetwork={activeNetwork}
              onNetworkChange={setActiveNetwork}
              onSend={() => setSendPreview(true)}
              onReceive={() => setReceiveSol(true)}
              onSwap={() => navigate('/assets/swap')}
              onScan={() => setShowScanModal(true)}
            />
          </div>
        </main>
      </div>

      {/* Modals */}
      {receiveSol && <ReceiveModal />}
      {sendPreview && <SendModal />}
      {showScanModal && <ScanModal onClose={() => setShowScanModal(false)} />}
    </div>
  );
};

export default AssetsPage;
