// app/dashboard/page.tsx
"use server"

import client from "@/lib/mongoDb";
import DashboardClientPage from "./action";
import { Db } from "mongodb";


export async function getImageCount(dbClient: Db): Promise<number> {
    const number = await dbClient.collection("gallery_images").countDocuments();
    return number
}

export async function getBlogPostCOunt(dbClient: Db): Promise<number> {
    const number = await dbClient.collection("blog").countDocuments();
    return number
}

export async function getRevenue(dbClient: Db): Promise<number> {
    // Replace with your actual database query
    return 125000;
}




export interface DashboardMetrics {
    imageCount: number;
    BlogPostCount: number;
}

export async function getDashboardMetrics(): Promise<DashboardMetrics> {
    const db = await client.db("photoGemma")

    const [imageCount, BlogPostCount] = await Promise.all([
        getImageCount(db),
        getBlogPostCOunt(db)
    ]);

    return {
        imageCount,
        BlogPostCount
    };
}

export default async function DashboardPage() {

    const number = await getDashboardMetrics()
    return (
        <DashboardClientPage metrics={number} />
    );
}
