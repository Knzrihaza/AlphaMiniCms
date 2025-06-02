import { Post } from "@/types/types";
import BlogAdminPage from "./client";
import client from "@/lib/mongoDb";
import { fetchCollectionData } from "@/lib/functions";



export default async function Page() {
    // Don't await the data fetching function


    try {
        const db = await client.db("photoGemma")

        const data = await fetchCollectionData<Post>(db, "blog")
        return (
            <BlogAdminPage data={data} />
        );
    } catch (error) {
        return <h1>Something bad happened</h1>;
    }

}