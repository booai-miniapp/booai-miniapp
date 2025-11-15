'use client';
import React, { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

export default function Marketplace() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadAll() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/alchemy");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to load NFTs");
      }

      setNfts(data.nfts || []);
    } catch (err) {
      setError(err.message);
      setNfts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  // Top 6 NFTs sorted by floor price highest → lowest
  const top6 = [...nfts]
    .filter(n => n.floorPrice)
    .sort((a, b) => (b.floorPrice || 0) - (a.floorPrice || 0))
    .slice(0, 6);

  return (
    <div>
      {/* TOP 6 SECTION */}
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {top6.map((nft, i) => (
            <div key={`top-${i}`} className="bg-gray-900 p-4 rounded-xl">
              <NFTCard nft={nft} large />
            </div>
          ))}
        </div>
      </div>

      {/* ALL NFTS SECTION */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">All NFTs</h3>
        <button
          onClick={loadAll}
          className="border border-gray-700 px-3 py-1 rounded"
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading NFTs...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : nfts.length === 0 ? (
        <p className="text-gray-400">No NFTs found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft, i) => (
            <NFTCard key={i} nft={nft} />
          ))}
        </div>
      )}
    </div>
  );
}
