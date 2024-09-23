"use client";

import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCore, createV1, fetchAssetV1 } from "@metaplex-foundation/mpl-core";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export default function Page() {
  const wallet = useWallet();
  const umi = createUmi("http://127.0.0.1:8899").use(mplCore());

  useEffect(() => {
    if (wallet.connected && umi) {
      umi.use(walletAdapterIdentity(wallet));
    }
  }, [wallet, umi]);

  async function createAsset() {
    const result = createV1(umi, {
      //   asset: asset,
      name: "My Nft",
      uri: "https://random-image-pepebigotes.vercel.app/api/random-image",
    }).sendAndConfirm(umi);
  }

  return (
    <div>
      <p>Page</p>
      <button
        onClick={() => {
          createAsset();
        }}
      >
        create asset
      </button>
    </div>
  );
}
