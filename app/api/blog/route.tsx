import { ActivityType } from "@/app/(protected)/dashboard/activity/components/activityFeed";
import client from "@/lib/mongoDb";
import { Db } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export async function logger(db: Db, type: ActivityType, title: string) {


    await db.collection("logs").insertOne(
        {
            type: type,
            title: title,
            timestamp: new Date(Date.now() - 1000 * 60 * 150),
        },
    );


}



export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        console.log("kkkkkkk", formData.get("title"))
        //return NextResponse.json({ message: "Settings saved" });
        const db = await client.db("photoGemma");

        // Upsert (create or update)
        const data = await db.collection("blog").insertOne({
            title: formData.get("title"),
            excerpt: formData.get("excerpt"),
            slug: formData.get("slug"),
            image: formData.get("image")
        });




        if (data) {
            logger(db, "blog:create", "Blog Post Created")
        }

        revalidatePath("/dashboard/blog")

        return NextResponse.json({ message: "Settings saved" });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}



export async function GET() {
    try {
        const db = await client.db("photoGemma")
        const images = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();
        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return NextResponse.json({ error: "Failed to load images" }, { status: 500 });
    }
}


