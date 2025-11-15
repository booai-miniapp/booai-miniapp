import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url =
      "https://api.opensea.io/api/v2/chain/base/nfts?limit=50";

    const res = await fetch(url, {
      headers: {
        "Accept": "application/json",
        "X-API-KEY": process.env.OPEN_SEA_API_KEY || ""
      }
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to load NFTs" },
      { status: 500 }
    );
  }
}
