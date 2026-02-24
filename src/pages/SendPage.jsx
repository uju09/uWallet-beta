import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWalletStore } from '../store/useWalletStore'
import { useWallet } from '../hooks/useWallet'
import { TransactionPreview, TransactionProcessing, TransactionSuccess, TransactionFailed } from '@/features/transactions';

const SendTransaction = () => {
  const navigate = useNavigate()

  const amount = useWalletStore((state) => state.amount)
  const activePublicKey = useWalletStore((state) => state.activePublicKey)
  const to = useWalletStore((state) => state.to)
  const setSendPreview = useWalletStore((state) => state.setSendPreview)
  const [netfee, setNetFee] = useState(0);

  const { sendTransaction, getNetworkFee } = useWallet()

  const [status, setStatus] = useState('preview')
  const [signature, setSignature] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSign = async () => {
    setStatus('processing')

    const result = await sendTransaction({ toAddress: to, amountStr: amount })

    if (result.success) {
      setSignature(result.signature)
      setStatus('success')
    } else {
      setErrorMsg(result.error)
      setStatus('failed')
    }
  }

  const fetchNetworkFee = async () => {
    const fee = await getNetworkFee({ from: activePublicKey, to, amount });

    if (fee.success) {
      setNetFee(fee.netFee)
    } else {
      setNetFee("Unable to fetch")
    }
  }

  useEffect(() => {
    fetchNetworkFee();
  })

  return (
    <div className="min-h-screen bg-[#050e08]">
      {status === 'preview' && (
        <TransactionPreview
          amount={amount}
          usdValue="—"
          fromAddress={activePublicKey}
          toAddress={to}
          network="Solana"
          fee={netfee}
          onSign={handleSign}
          onBack={() => navigate(-1)}
        />
      )}

      {status === 'processing' && (
        <TransactionProcessing />
      )}

      {status === 'success' && (
        <TransactionSuccess
          amount={amount}
          toAddress={to}
          signature={signature}
          onClose={() => { navigate('/assets'); setSendPreview(false) }}
        />
      )}

      {status === 'failed' && (
        <TransactionFailed
          amount={amount}
          errorMessage={errorMsg}
          onRetry={handleSign}
          onCancel={() => { navigate('/assets'); setSendPreview(false) }}
        />
      )}
    </div>
  )
}

export default SendTransaction