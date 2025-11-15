import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.ALCHEMY_API_KEY;
    const collectionsEnv = process.env.COLLECTIONS || "";

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing ALCHEMY_API_KEY" },
        { status: 500 }
      );
    }

    const collections = collectionsEnv
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (collections.length === 0) {
      return NextResponse.json(
        { error: "No collections specified in COLLECTIONS env var" },
        { status: 400 }
      );
    }

    // Fetch from each contract
    const promises = collections.map(async (contract) => {
      const url = `https://base-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection?contractAddress=${contract}&withMetadata=true&pageSize=50`;

      const res = await fetch(url);
      if (!res.ok)
        return { contract, error: `Failed ${res.status}` };

      const json = await res.json();
      const items = json.nfts || [];

      const normalized = items.map((item) => {
        const floor =
          item.contract?.openSeaMetadata?.floorPrice || null;

        return { ...item, floorPrice: floor };
      });

      return normalized;
    });

    const results = await Promise.all(promises);

    const all = results
      .flat()
      .filter(Boolean)
      .filter((x) => !x.error);

    all.sort((a, b) => (b.floorPrice || 0) - (a.floorPrice || 0));

    return NextResponse.json({ nfts: all });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "server error" },
      { status: 500 }
    );
  }
}
