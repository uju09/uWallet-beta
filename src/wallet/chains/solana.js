import { Connection, PublicKey, Transaction, sendAndConfirmTransaction, clusterApiUrl, SystemProgram, Keypair } from "@solana/web3.js";
import bs58 from "bs58"

export const sendSol = async ({ net, to, amount, secret }) => {
  try {
    const connection = new Connection(clusterApiUrl(net), "confirmed");

    const signer = Keypair.fromSecretKey(bs58.decode(secret));
    const toKey = new PublicKey(to);
    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: signer.publicKey,
        toPubkey: toKey,
        lamports: Math.floor(amount * 1000000000),
      })
    );
    const signature = await sendAndConfirmTransaction(connection, tx, [signer]);
    console.log(signature);
    return { success: true, signature };
  } catch (err) {
    console.error("Send SOL failed:", err);
    return { success: false, error: err.message };
  }
};


export const getBalance = async ({ net, address }) => {
  const connection = new Connection(clusterApiUrl(net), "confirmed");
  const balance = await connection.getBalance(address);
  return balance / 1000000000;
}

export async function getTransactionFee({ from, to, amount, net }) {
  try {
    const connection = new Connection(clusterApiUrl(net), "confirmed");

    const fromPubkey = new PublicKey(from);
    const toPubkey = new PublicKey(to);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: Math.floor(amount * 1000000000),
      })
    );

    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = fromPubkey;

    const message = transaction.compileMessage();

    const fee = await connection.getFeeForMessage(message);

    return { success: true, netFee: fee.value / 1e9 }

  } catch (error) {
    console.log(error);
    return { success: false }

  }
}
