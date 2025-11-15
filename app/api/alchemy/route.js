// app/api/alchemy/route.ts
import { NextResponse } from "next/server";

const ALCHEMY_URL = `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`;

export async function GET() {
  try {
    const url = `${ALCHEMY_URL}/getNFTsForCollection?withMetadata=true&limit=50&contractAddress=0x2805e9dbce2839c5feae858723f9499f15fd88cf`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
