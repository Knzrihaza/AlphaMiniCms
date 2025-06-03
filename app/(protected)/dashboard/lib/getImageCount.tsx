import { Db } from "mongodb";

export async function getImageCount(dbClient: Db): Promise<number> {
    const number = await dbClient.collection("gallery_images").countDocuments();
    return number
}