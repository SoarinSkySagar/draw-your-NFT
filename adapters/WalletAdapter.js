"use client"

import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Connection } from "@solana/web3.js";

export default function WalletAdapter({children}) {
    const network = WalletAdapterNetwork.Mainnet;
 
    // You can also provide a custom RPC endpoint.
    const endpoint = "http://127.0.0.1:8899";

    // Create a custom connection
    const connection = new Connection(endpoint);

    const wallets = useMemo(
        () => [new UnsafeBurnerWalletAdapter()],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    )

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}