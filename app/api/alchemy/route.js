import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.ALCHEMY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing ALCHEMY_API_KEY" },
        { status: 500 }
      );
    }

    // FARWORLD CONTRACT (ERC1155)
    const contract = "0xDE7C3435c34DDeE79234AdF612467727e980400d";

    const url = `https://base-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForContract?contractAddress=${contract}&withMetadata=true&limit=50`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
