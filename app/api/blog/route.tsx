import { logger } from "@/lib/functions";
import client from "@/lib/mongoDb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    return await createBlogItems(req);
}

export async function POST(req: Request) {
    return await createBlogItems(req);
}

export async function GET() {
    return await fetchBlogItems();
}

async function createBlogItems(req: Request) {
    try {
        const formData = await req.formData();

        const db = await client.db("photoGemma");

        const result = await db.collection("blog").insertOne({
            title: formData.get("title"),
            excerpt: formData.get("excerpt"),
            slug: formData.get("slug"),
            image: formData.get("image"),
            createdAt: new Date(),
        });

        if (result.acknowledged) {
            logger(db, "blog:create", "Blog Post Created");
        }

        revalidatePath("/dashboard/blog");

        return NextResponse.json({ message: "Blog post created", id: result.insertedId }, { status: 200 });
    } catch (error) {
        console.error("Error creating blog item:", error);
        return NextResponse.json({ error: "Failed to create blog post" }, { status: 500 });
    }
}

async function fetchBlogItems() {
    try {
        const db = await client.db("photoGemma");
        const images = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();

        return NextResponse.json({ images }, { status: 200 });
    } catch (error) {
        console.error("Error fetching blog items:", error);
        return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
    }
}
