import client from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await client.db("photoGemma")
        const user = await db.collection("users").find().sort({ createdAt: -1 }).toArray();
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
    }
}