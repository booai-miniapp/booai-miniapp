"use client";

import { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";
import dynamic from "next/dynamic";

const Marketplace = dynamic(() => import("../components/Marketplace"), { ssr: false });

export default function Home() {
  const [wallet, setWallet] = useState(null);

  return (
    <main>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h1 style={{ margin: 0 }}>BooAI — Base Marketplace</h1>
        <nav>
          <a href="/mint" style={{ color: "#9ecfff", marginRight: 12 }}>Mint</a>
          <a href="/drop" style={{ color: "#9ecfff" }}>Create Drop</a>
        </nav>
      </header>

      <ConnectWallet onConnect={(addr) => setWallet(addr)} />

      <Marketplace wallet={wallet} />
    </main>
  );
}
