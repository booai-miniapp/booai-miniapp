import { NextResponse } from "next/server";

const OPENSEA_API = "https://api.opensea.io/api/v1/assets";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "24";
    const cursor = url.searchParams.get("cursor") || "";
    const apiKey = process.env.OPEN_SEA_API_KEY || "";

    const params = new URLSearchParams({ limit });
    if (cursor) params.set("cursor", cursor);

    const finalUrl = `${OPENSEA_API}?${params.toString()}`;

    const res = await fetch(finalUrl, {
      headers: {
        Accept: "application/json",
        ...(apiKey ? { "X-API-KEY": apiKey } : {})
      }
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message || "error" }, { status: 500 });
  }
}
