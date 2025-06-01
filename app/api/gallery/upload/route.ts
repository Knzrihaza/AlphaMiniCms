import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import client from "@/lib/mongoDb";
import { revalidatePath } from "next/cache";
import { logger } from "@/lib/functions";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("images") as File;

  console.log("cocoooooo",file )

  if (!file) {
    return NextResponse.json({ error: "No image file found" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = `${randomUUID()}-${file.name}`;
  const uploadPath = path.join(process.cwd(), "public/uploads", filename);

  await writeFile(uploadPath, buffer);
console.log(uploadPath)
  // Optionally save metadata to MongoDB here
  const db = await client.db("photoGemma")
 const data =  await db.collection("gallery_images").insertOne({
    //title,
    //description,
    filename,
    isSlider : false,
    url: `/uploads/${filename}`,
    createdAt: new Date(),
  });


  
  if (data) {
    await db.collection("logs").insertOne(
      {
        type: "gallery:upload",
        title: "Image Uploaded",
        timestamp: new Date(Date.now() - 1000 * 60 * 150),
      },
    );

                logger(db, "gallery:upload", "Image Uploaded")
    

  }


  revalidatePath("/dashboard/blog")
  return NextResponse.json({ message: "Image uploaded", filename });
}
