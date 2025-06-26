
// import BlogItems from ".";
import client from "@/lib/mongoDb";
import BlogItems from ".";



export default async function BlogPage() {


    try {
        const db = await client.db("photoGemma")
        const data = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();
        const jsonData = JSON.parse(JSON.stringify(data))

        console.log("gggggggggggg", jsonData)
        return (
            <div className="max-w-6xl mx-auto  px-4 py-10">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
                <BlogItems blogPosts={jsonData} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-8 text-center">Error ..</h1>

            </div>
        );
    }




}
