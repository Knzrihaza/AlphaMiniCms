import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";


export default function FileUploader() {
    const [tst, setTst] = useState(false)

    const handleUpload = async (file: File) => {

        console.log("Handle upload is called")

        const formData = new FormData();
        formData.append("image", file);

        console.log("firstFormData test")


        const res = await fetch("/api/gallery/upload", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const data = await res.json();
            console.log("Uploaded:", data.filename);
            setOnFilesExist(false)
        } else {
            console.error("Upload failed");
        }
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        console.log("first test upload")
        if (files) {
            console.log("first test upload")

            const imageUrls = Array.from(files).map((file) => URL.createObjectURL(file));
            console.log("first test url", imageUrls)

            setSelectedImages(imageUrls);
            Array.from(files).forEach(file => handleUpload(file));
            setOnFilesExist(true)
            console.log("second test upload", selectedImages)

        }
    };

    const handleImageDelete = (index: number) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };



    if (tst) return (
        <Card>
            <CardHeader>
                <CardTitle>Upload Images</CardTitle>
            </CardHeader>
            <CardContent>
                <Input type="file" multiple accept="image/*"
                    onChange={handleImageUpload}
                />
            </CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedImages!.map((src, index) => (
                    <div key={index} className="relative group">
                        <Image
                            src={src! || "/api/gallery/upload"}
                            alt={`Selected image ${index + 1}`}
                            width={300}
                            height={200}
                            className="object-cover w-full h-48 rounded-md"
                        />
                        <Button
                            variant="destructive"
                            size="sm"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                            onClick={() => handleImageDelete(index)}
                        >
                            Delete
                        </Button>
                    </div>
                ))}

                {!onFilesExist ?
                    (
                        null
                    ) : (
                        <Button >Upload</Button>
                    )}

            </div>
        </Card>
    )




    return (
        <Card>
            <CardHeader>
                <CardTitle>Upload Images</CardTitle>
            </CardHeader>
            <CardContent>
                <Input type="file" multiple accept="image/*"
                    onChange={handleImageUpload}
                />
            </CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            </div>
        </Card>
    )

}