"use client";

export default function NFTCard({ nft }) {
  const image =
    nft?.media?.[0]?.thumbnail ||
    nft?.media?.[0]?.gateway ||
    nft?.raw?.metadata?.image ||
    "";

  return (
    <div className="border border-gray-600 p-3 rounded-lg">
      {image ? (
        <img src={image} className="rounded mb-2" alt="NFT" />
      ) : (
        <div className="h-40 bg-gray-700 rounded mb-2"></div>
      )}

      <p className="font-semibold text-sm">
        {nft?.title || nft?.raw?.metadata?.name || "Unnamed NFT"}
      </p>
    </div>
  );
}
