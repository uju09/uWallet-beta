// This file MUST be imported before any @solana/web3.js usage.
// Vite doesn't include Node.js globals like Buffer in the browser.
import { Buffer } from "buffer";
globalThis.Buffer = Buffer;
