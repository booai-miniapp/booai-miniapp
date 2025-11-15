import { NextResponse } from "next/server";

let DROPS = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const id = "drop_" + Date.now();
    DROPS.push({ id, createdAt: new Date().toISOString(), body });
    return NextResponse.json({ dropId: id });
  } catch (err) {
    return NextResponse.json({ error: err.message || "error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ drops: DROPS });
}
