import { NextResponse } from "next/server";

const OPENSEA_BASE_URL = "https://api.opensea.io/api/v2/chain/base/account";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const wallet = searchParams.get("wallet");

    if (!wallet) {
      return NextResponse.json(
        { error: "Missing wallet address" },
        { status: 400 }
      );
    }

    const url = `${OPENSEA_BASE_URL}/${wallet}/nfts`;

    const apiKey = process.env.OPEN_SEA_API_KEY || "";

    const res = await fetch(url, {
      headers: {
        "Accept": "application/json",
        ...(apiKey ? { "X-API-KEY": apiKey } : {})
      },
      cache: "no-store"
    });

    const json = await res.json();

    return NextResponse.json(json);
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
