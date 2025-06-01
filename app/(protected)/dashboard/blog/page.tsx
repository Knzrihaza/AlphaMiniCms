import { Post } from "@/types/types";
import BlogAdminPage from "./client";
import { NextResponse } from "next/server";
import client from "@/lib/mongoDb";
import { MongoClient, ObjectId } from "mongodb";



export default async function Page() {
    // Don't await the data fetching function
    const db = await client.db("photoGemma")
    const data = await db.collection("blog").find().sort({ createdAt: -1 }).toArray();

    const posts: Post[] = JSON.parse(JSON.stringify(data));

    return (

        <BlogAdminPage posts={posts} />)


}