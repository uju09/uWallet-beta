import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useWalletStore = create(
  persist((set) => ({
    // Keys & Addresses
    activePublicKey: "",
    activeSecretKey: "",
    privateKeys: [],
    seedPhrase: "",

    // Wallet list
    wallets: [],
    walletId: 1,

    // UI State
    sendPreview: false,
    receiveSol: false,
    network: 'mainnet',

    // Transaction Draft State
    to: "",
    amount: "",

    // Actions
    setSeedPhrase: (seedPhrase) => set({ seedPhrase }),
    setPrivateKeys: (privateKeys) => set({ privateKeys }),
    setWallets: (wallets) => set({ wallets }),
    setWalletId: (walletId) => set({ walletId }),
    setActivePublicKey: (activePublicKey) => set({ activePublicKey }),
    setActiveSecretKey: (activeSecretKey) => set({ activeSecretKey }),

    setSendPreview: (sendPreview) => set({ sendPreview }),
    setReceiveSol: (receiveSol) => set({ receiveSol }),
    setNetwork: (network) => set({ network }),
    setTo: (to) => set({ to }),
    setAmount: (amount) => set({ amount }),
  }), {
    name: "wallet-storage"
  })
);