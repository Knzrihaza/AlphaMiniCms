import client from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await client.db("photoGemma")
        const images = await db.collection("gallery_images").find().sort({ createdAt: -1 }).toArray();
        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
    }
}




