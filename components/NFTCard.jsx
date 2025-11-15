"use client";

export default function NFTCard({ nft }) {
  return (
    <a
      href={nft.permalink || "#"}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          width: 260,
          borderRadius: 8,
          overflow: "hidden",
          background: "#0b0b0b",
          border: "1px solid #222",
        }}
      >
        <div
          style={{
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
          }}
        >
          {nft.image ? (
            <img
              src={nft.image}
              alt={nft.name}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          ) : (
            <div style={{ color: "#777" }}>No image</div>
          )}
        </div>

        <div style={{ padding: 8 }}>
          <div style={{ fontWeight: "bold" }}>{nft.name || "Unnamed"}</div>
          <div style={{ fontSize: 13, color: "#9aa", marginTop: 6 }}>
            {nft.collection || ""}
          </div>
        </div>
      </div>
    </a>
  );
}
