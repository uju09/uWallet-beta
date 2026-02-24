import { mnemonicToSeedSync } from "@scure/bip39";
import { HDKey } from "@scure/bip32";
import bs58 from "bs58"
import { Keypair } from "@solana/web3.js";

export function addWallet({ mnemonic, index }) {

  const seed = mnemonicToSeedSync(mnemonic);
  const hd = HDKey.fromMasterSeed(seed);
  const child = hd.derive(`m/44'/501'/${index}'/0'`);

  const keypair = Keypair.fromSeed(child.privateKey);

  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKey: bs58.encode(keypair.secretKey)
  };
}


