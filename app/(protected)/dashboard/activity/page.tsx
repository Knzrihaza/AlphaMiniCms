// app/dashboard/page.tsx
"use server"
import { NextResponse } from "next/server";
import ActivityFeed from "./components/activityFeed";
import client from "@/lib/mongoDb";


export default async function Page() {

    try {
        const db = await client.db("photoGemma")
        const images = await db.collection("logs").find().sort({ createdAt: "asc" }).toArray();

        //console.log(images)
        return (
            <div className="p-6">
                {/* Other dashboard components */}
                <ActivityFeed data={images} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
    }






}
