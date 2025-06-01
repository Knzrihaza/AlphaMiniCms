"use server"
import { ActivityType, Post } from "@/types/types";
import { Db, ObjectId } from "mongodb";
import client from "./mongoDb";
import { revalidatePath } from "next/cache";
import { FormEvent } from "react";



export async function logger(db: Db, type: ActivityType, title: string) {


    await db.collection("logs").insertOne(
        {
            type: type,
            title: title,
            timestamp: new Date(Date.now() - 1000 * 60 * 150),
        },
    );

    console.log("llllllllllllll")


}

export async function handleFetchCategory() {

    const db = await client.db("photoGemma")
    const data = await db.collection("categories").find().sort({ createdAt: -1 }).toArray();
    const posts = JSON.parse(JSON.stringify(data));
    return posts
}


export async function handleCreateCategory(categoryName: string) {

    try {
        //return NextResponse.json({ message: "Settings saved" });
        const db = await client.db("photoGemma");
        // Upsert (create or update)
        const data = await db.collection("categories").insertOne({
            categoryName: categoryName
        });


        //revalidatePath("dashboard/gallery")
        //setLoading(true)
        return ("Item Created Successfully")
    } catch (error) {
        return ("An Error happened")
    }

}

export async function handleCreateItem(formData: FormData, collectionName?: string) {
    try {
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


        // revalidatePath("/dashboard/blog")
        //setLoading(true)
        return ("Item Created Successfully")
    } catch (error) {
        return ("An Error happened")
    }


}



export async function handleDeleteItem(itemId: string) {

    try {
        const query = { _id: new ObjectId(itemId) }
        console.log("item .id", itemId)
        const db = await client.db("photoGemma")

        const collection = await db.collection("blog").deleteOne(query);
        revalidatePath("/dashboard/blog")
        // replace with your actual collection name
        console.log("This is the ", collection)
    } catch (error) {
        console.log("errorrrr ", error)
    }



}
