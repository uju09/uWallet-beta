import { useState, useEffect } from 'react';
import { useWalletStore } from "../store/useWalletStore";
import { sendSol as rawSendSol, getBalance as rawGetBalance, getTransactionFee as rawGetTransactionFee } from "../wallet/chains/solana";
import { addWallet as rawAddWallet } from "../wallet/derivation/hd.wallet";
import { PublicKey } from '@solana/web3.js';

export const useWallet = () => {
  // Pull necessary state/setters from store
  const activePublicKey = useWalletStore((state) => state.activePublicKey);
  const activeSecretKey = useWalletStore((state) => state.activeSecretKey);
  const network = useWalletStore((state) => state.network) || 'mainnet';

  const seedPhrase = useWalletStore((state) => state.seedPhrase);
  const privateKeys = useWalletStore((state) => state.privateKeys);
  const wallets = useWalletStore((state) => state.wallets);

  const setSeedPhrase = useWalletStore((state) => state.setSeedPhrase);
  const setPrivateKeys = useWalletStore((state) => state.setPrivateKeys);
  const setWallets = useWalletStore((state) => state.setWallets);
  const setActivePublicKey = useWalletStore((state) => state.setActivePublicKey);
  const setActiveSecretKey = useWalletStore((state) => state.setActiveSecretKey);

  // Derive network name for Solana web3.js ('mainnet' UI maps to 'mainnet-beta' under the hood)
  const getConnectionNetwork = () => network === 'mainnet' ? 'mainnet-beta' : network;

  /**
   * Initialize the wallet from a given mnemonic phrase (happens once usually)
   */
  const createWallet = (mnemonicPhrase) => {
    setWallets([]);
    setPrivateKeys([]);
    setSeedPhrase(mnemonicPhrase);

    const { privateKey, publicKey } = rawAddWallet({ mnemonic: mnemonicPhrase, index: 0 });

    const initialWallet = { idx: 1, name: "Wallet 1", address: publicKey };
    const initialSecret = { idx: 1, name: "Wallet 1", secret: privateKey };

    setWallets([initialWallet]);
    setPrivateKeys([initialSecret]);

    setActivePublicKey(publicKey);
    setActiveSecretKey(privateKey);
  };

  /**
   * Derive a new sequential wallet from the existing seed phrase
   */
  const deriveNewWallet = () => {
    if (!seedPhrase) return;

    // find next highest idx
    const maxIdx = wallets.reduce((max, w) => Math.max(max, w.idx), 0);
    const newIdx = maxIdx + 1;

    const { publicKey, privateKey } = rawAddWallet({ mnemonic: seedPhrase, index: newIdx });

    setWallets([
      ...wallets,
      { idx: newIdx, name: `Wallet ${newIdx}`, address: publicKey }
    ]);

    setPrivateKeys([
      ...privateKeys,
      { idx: newIdx, name: `Wallet ${newIdx}`, secret: privateKey }
    ]);
  };

  /**
   * Delete a secondary wallet
   */
  const deleteWallet = (walletIdx) => {
    if (wallets.length <= 1 || walletIdx === 1) return; // Cannot delete primary

    const updatedWallets = wallets.filter((w) => w.idx !== walletIdx);
    const updatedKeys = privateKeys.filter((k) => k.idx !== walletIdx);

    setWallets(updatedWallets);
    setPrivateKeys(updatedKeys);

    // If we deleted the active wallet, fall back to Wallet 1
    const deletedWasActive = wallets.find(w => w.idx === walletIdx)?.address === activePublicKey;
    if (deletedWasActive && updatedWallets.length > 0) {
      setActivePublicKey(updatedWallets[0].address);
      setActiveSecretKey(updatedKeys[0].secret);
    }
  };

  /**
   * Sends a mapped SOL transaction using the current active context
   */
  const sendTransaction = async ({ toAddress, amountStr }) => {
    console.log(toAddress, amountStr);

    if (!activeSecretKey || !toAddress || !amountStr) {
      return { success: false, error: "Missing transaction parameters" };
    }

    const amountNum = parseFloat(amountStr);
    const net = getConnectionNetwork();

    return await rawSendSol({
      net,
      to: toAddress,
      amount: amountNum,
      secret: activeSecretKey
    });
  };

  const getNetworkFee = async ({ from, to, amount }) => {
    const net = getConnectionNetwork();
    return await rawGetTransactionFee({ from, to, amount, net })
  }

  return {
    createWallet,
    deriveNewWallet,
    deleteWallet,
    sendTransaction,
    getConnectionNetwork,
    getNetworkFee
  };
};

/**
 * Encapsulated hook for polling active wallet balance
 */
export const useBalance = (pollInterval = 10000) => {
  const [balance, setBalance] = useState(null);

  const activePublicKey = useWalletStore((state) => state.activePublicKey);
  const network = useWalletStore((state) => state.network) || 'mainnet';

  useEffect(() => {
    let isMounted = true;

    const fetchBalance = async () => {
      if (!activePublicKey) return;
      try {
        const net = network === 'mainnet' ? 'mainnet-beta' : network;
        const bal = await rawGetBalance({ net, address: new PublicKey(activePublicKey) });
        if (isMounted) setBalance(bal);
      } catch (err) {
        console.error("Failed to fetch balance", err);
        if (isMounted) setBalance(0);
      }
    };

    fetchBalance();

    let interval;
    if (pollInterval > 0) {
      interval = setInterval(fetchBalance, pollInterval);
    }

    return () => {
      isMounted = false;
      if (interval) clearInterval(interval);
    };
  }, [activePublicKey, network, pollInterval]);

  return balance;
};

/**
 * Encapsulated hook for polling SOL USD price (Mainnet only)
 */
export const useSolPrice = () => {
  const [solPrice, setSolPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);

  const network = useWalletStore((state) => state.network) || 'mainnet';
  const isMainnet = network === 'mainnet';

  useEffect(() => {
    let isMounted = true;

    if (!isMainnet) {
      setSolPrice(null);
      setPriceChange(null);
      return;
    }

    const fetchPrice = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
        const data = await res.json();
        if (isMounted) {
          setSolPrice(data.solana.usd);
          setPriceChange(data.solana.usd_24h_change);
        }
      } catch (err) {
        console.error('Failed to fetch SOL price', err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // 1 min poll for price

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [isMainnet]);

  return { solPrice, priceChange };
};