"use server"
import { ActivityType, FetchOptions } from "@/types/types";
import { Db, ObjectId } from "mongodb";
import client from "./mongoDb";
import { revalidatePath } from "next/cache";
import { Category } from "@/app/(protected)/dashboard/gallery/client";



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
    const posts: Category[] = JSON.parse(JSON.stringify(data));
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



export async function handleEditImage(imageId: string, newName: string, newCategory: string) {
    try {
        const db = await client.db("photoGemma");

        const result = await db.collection("gallery_images").updateOne(
            { _id: new ObjectId(imageId) },
            {
                $set: {
                    name: newName,
                    category: newCategory,
                    updatedAt: new Date()
                }
            }
        );

        if (result.modifiedCount === 0) {
            return "No changes made or image not found";
        }

        return "Image updated successfully";
    } catch (error) {
        console.error("Edit error:", error);
        return "An error occurred while editing the image";
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



export async function fetchCollectionData<T>(
    db: Db,
    collectionName: string,
    options: FetchOptions = {}
): Promise<T[]> {
    const {
        sort = { createdAt: -1 },
        filter = {},
        limit,
    } = options;

    try {
        const collection = db.collection(collectionName);
        let cursor = collection.find(filter).sort(sort);
        if (limit !== undefined) {
            cursor = cursor.limit(limit);
        }

        const data = await cursor.toArray();
        return JSON.parse(JSON.stringify(data)) as T[];
    } catch (error) {
        throw new Error(`Failed to fetch data from ${collectionName}: ${error}`);
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
