"use client";

import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

export default function Marketplace() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadNFTs() {
    try {
      setLoading(true);
      const res = await fetch("/api/alchemy");
      const data = await res.json();
      
      setNfts(data?.nfts || data?.nftTokenInfos || []);
    } catch (e) {
      console.error("Failed:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNFTs();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Marketplace</h2>

      <button
        onClick={loadNFTs}
        className="px-4 py-2 bg-white text-black rounded"
      >
        Refresh
      </button>

      {loading ? (
        <p className="mt-4 text-gray-400">Loading NFTs...</p>
      ) : nfts.length === 0 ? (
        <p className="mt-4 text-gray-400">No NFTs found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {nfts.map((nft: any, i: number) => (
            <NFTCard key={i} nft={nft} />
          ))}
        </div>
      )}
    </div>
  );
}
