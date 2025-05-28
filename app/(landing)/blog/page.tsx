
import { Post } from "@/types/types";
import BlogItems from ".";
import client from "@/lib/mongoDb";

const posts = [
    {
        title: "Understanding React Server Components",
        excerpt: "Dive into how React Server Components work and when to use them in your Next.js projects.",
        date: "May 5, 2025",
        slug: "react-server-components",
        image: "https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg"
    },
    {
        title: "Using Shadcn UI with Next.js",
        excerpt: "Learn how to integrate and customize Shadcn UI components in your modern web app.",
        date: "May 1, 2025",
        slug: "shadcn-nextjs",
        image: "https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg"
    },
    {
        title: "Deploying Next.js on Vercel",
        excerpt: "Step-by-step guide to deploying your Next.js site on Vercel with performance tips.",
        date: "April 20, 2025",
        slug: "nextjs-vercel-deploy",
        image: "https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg"
    }
];

export default async function BlogPage() {


    try {
        const db = await client.db("photoGemma")
        const data = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();
        const jsonData = JSON.parse(JSON.stringify(data))

        console.log("gggggggggggg", jsonData)
        return (
            <div className="max-w-4xl mx-auto px-4 py-10">
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
