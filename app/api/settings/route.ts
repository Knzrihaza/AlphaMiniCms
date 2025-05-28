import client from "@/lib/mongoDb";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const db = await client.db("photoGemma");
  const settings = await db.collection("website_settings").findOne({});
  
  if (!settings) {
    return NextResponse.json({}, { status: 200 });
  }

  return NextResponse.json(settings);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const db = await client.db("photoGemma");

  // Upsert (create or update)
  await db.collection("website_settings").updateOne(
    {},
    { $set: body },
    { upsert: true }
  );

  return NextResponse.json({ message: "Settings saved" });
}
