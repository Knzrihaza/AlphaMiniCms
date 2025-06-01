
import { GalleryImage } from "@/types/types";
import client from "@/lib/mongoDb";
import GalleryUi from "./client";
import { revalidatePath } from "next/cache";



export async function uploader(params: type) {

}



export default async function GalleryAdminPage() {


    // Don't await the data fetching function
    try {
        const db = await client.db("photoGemma")
        const data = await db.collection("gallery_images").find().sort({ createdAt: -1 }).toArray();
        const posts: GalleryImage[] = JSON.parse(JSON.stringify(data));
        console.log("8888888888888", posts)
        return (
            <GalleryUi data={posts} />
        );

    } catch (error) {
        console.log(error)

    }








}
