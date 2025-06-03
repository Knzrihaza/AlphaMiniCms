import { Db } from "mongodb";

export async function getBlogPostCOunt(dbClient: Db): Promise<number> {
    const number = await dbClient.collection("blog").countDocuments();
    return number
}