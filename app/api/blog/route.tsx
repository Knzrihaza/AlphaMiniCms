import { ActivityType } from "@/app/(protected)/dashboard/activity/components/activityFeed";
import { logger } from "@/lib/functions";
import client from "@/lib/mongoDb";
import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        return await createBlogItems(req, res)
    } else if (req.method === 'GET') {
        return await fetchBlogItems()
    } else if (req.method === 'DELETE') {
        return await fetchBlogItems()
    }



}









async function createBlogItems(req: NextApiRequest, res: NextApiResponse) {

    console.log("777777777777", req.body())
    return

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

        res.status(200).json(await createBlogItems(req, res));
    } catch (error) {
        console.log(error)
        res.status(500).json("Error Happened somwewhere");
    }
}



async function fetchBlogItems(req: NextApiRequest, res: NextApiResponse) {
    try {
        const db = await client.db("photoGemma")
        const images = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();
        return res.status(200).json(images);


    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return res.status(500).json("Error fetching gallery images: ");

    }
}



