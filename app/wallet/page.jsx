"use client";

import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

export default function Page() {
  return (
    <div>
      <WalletMultiButton />
      <WalletDisconnectButton />
    </div>
  );
}
