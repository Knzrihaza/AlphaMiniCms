import client from "@/lib/mongoDb";
import { DashboardMetrics } from "../(overview)/page";
import { getImageCount } from "./getImageCount";
import { getBlogPostCOunt } from "./getBlogPostCount";

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