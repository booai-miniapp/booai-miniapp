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

    const url = `https://base-mainnet.g.alchemy.com/nft/v3/${apiKey}/getNFTsForCollection?withMetadata=true&pageSize=24&contractAddress=0x2805e9dbce2839c5feae858723f9499f15fd88cf`;

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
