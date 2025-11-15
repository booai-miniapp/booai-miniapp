'use client';
import React from "react";

export default function NFTCard({ nft, large }) {
  const title =
    nft.raw?.metadata?.name ||
    nft.name ||
    `#${nft.tokenId}`;

  const description =
    nft.raw?.metadata?.description ||
    nft.description ||
    "No description";

  const image =
    nft.image?.originalUrl ||
    nft.image?.pngUrl ||
    nft.image?.cachedUrl ||
    nft.raw?.metadata?.image ||
    "";

  const floor =
    nft.floorPrice ??
    nft.contract?.openSeaMetadata?.floorPrice ??
    null;

  const collection =
    nft.collection?.name ||
    nft.contract?.openSeaMetadata?.collectionName ||
    "";

  return (
    <article className={`bg-gray-900 rounded-xl overflow-hidden shadow`}>
      <div className="w-full bg-black flex items-stretch justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full object-cover ${large ? "h-72" : "h-56"}`}
          />
        ) : (
          <div className="h-56 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-semibold truncate">{title}</h4>
        <p className="text-xs text-gray-400 truncate">{collection}</p>

        <p className="text-sm mt-2 text-gray-300">{description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">Floor</div>
            <div className="font-bold">
              {floor ? `${floor} ETH` : "-"}
            </div>
          </div>

          <button className="bg-blue-600 px-3 py-1 rounded">
            View
          </button>
        </div>
      </div>
    </article>
  );
}
