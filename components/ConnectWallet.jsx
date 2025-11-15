"use client";

import { useState } from "react";

export default function ConnectWallet({ onConnect }) {
  const [addr, setAddr] = useState(null);

  async function connect() {
    try {
      if (typeof window === "undefined" || !window.ethereum) {
        alert("Open inside Base or a dapp browser with a wallet.");
        return;
      }
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const a = accounts[0];
      setAddr(a);
      if (onConnect) onConnect(a);
    } catch (err) {
      console.error(err);
      alert("Could not connect wallet.");
    }
  }

  return (
    <div style={{ marginBottom: 14 }}>
      {addr ? (
        <div style={{ fontSize: 14 }}>Connected: {addr.slice(0,6)}...{addr.slice(-4)}</div>
      ) : (
        <button onClick={connect} style={{ padding: "10px 14px", borderRadius: 10, background: "#0070f3", color: "#fff", border: "none" }}>
          Connect Wallet
        </button>
      )}
    </div>
  );
}
