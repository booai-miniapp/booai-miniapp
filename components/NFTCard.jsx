export default function NFTCard({ nft }) {
  const image =
    nft?.image?.cachedUrl ||
    nft?.image?.originalUrl ||
    nft?.image?.pngUrl ||
    "/placeholder.png";

  return (
    <div className="bg-gray-900 p-3 rounded-lg">
      <img
        src={image}
        alt={nft.name || "NFT"}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-white mt-2 font-semibold">
        {nft.name || `Token #${nft.tokenId}`}
      </h3>

      <p className="text-gray-400 text-sm">
        {nft.description || "No description"}
      </p>
    </div>
  );
}
