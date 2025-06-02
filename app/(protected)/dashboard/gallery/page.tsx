
import { GalleryImage } from "@/types/types";
import client from "@/lib/mongoDb";
import GalleryUi, { Category } from "./client";
import { fetchCollectionData, handleFetchCategory } from "@/lib/functions";







export default async function GalleryAdminPage() {


    // Don't await the data fetching function

    try {
        const db = await client.db("photoGemma")

        const galleryData = await fetchCollectionData<GalleryImage>(db, "gallery_images")

        const categoryData = await handleFetchCategory()

        const data = {
            images: galleryData,
            categories: categoryData,
        };
        return (
            <GalleryUi data={galleryData} categoryData={categoryData} />
        );
    } catch (error) {
        return <h1>Something bad happened</h1>;
    }

}
