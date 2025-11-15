"use client";

import { useEffect, useState } from "react";
import NFTCard from "./NFTCard";

export default function Marketplace({ wallet = null }) {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadAssets() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/opensea?limit=24");
      const data = await res.json();
      setAssets(data.assets || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load NFTs");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAssets();
  }, []);

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Marketplace</h2>
        <div>
          <button onClick={loadAssets} style={{ padding: "6px 10px", borderRadius: 8 }}>Refresh</button>
        </div>
      </div>

      {loading && <div>Loading NFTs…</div>}
      {error && <div style={{ color: "salmon" }}>{error}</div>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        {assets.length === 0 && !loading && <div style={{ color: "#aaa" }}>No NFTs found.</div>}
        {assets.map((a, i) => (
          <NFTCard key={`${a.token_id}-${i}`} nft={{
            image: a.image_url,
            name: a.name,
            description: a.description,
            collection: a.collection?.name,
            permalink: a.permalink
          }} />
        ))}
      </div>
    </section>
  );
}
