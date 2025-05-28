"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";



export default function ImageUploadCard() {
    const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
    const [uploading, setUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newImages = acceptedFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages(prev => [...prev, ...newImages]);
    }, []);

    const handleUpload = async () => {
        console.log(images)
        if (images.length === 0) return;

        setUploading(true);
        const formData = new FormData();

        console.log(formData.getAll)
        images.forEach((img, i) => {
            console.log("llllllllllllllll", img.file)
            formData.append('images', img.file);
        });


        console.log("ppppppppppppppppppppppp", formData.getAll('images'))

        try {
            const res = await fetch('/api/gallery/upload', {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('Upload failed');

            const data = await res.json();
            toast("Uploaded Successfully")
            setImages([]); // Clear images after upload
        } catch (err) {
            console.error("Certf", err);
            toast('An errorccccc occurred during upload');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = (indexToRemove) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: true,
    });

    return (
        <Card className="w-full mx-auto p-4">
            <CardContent>
                <div
                    {...getRootProps()}
                    className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-gray-400 transition"
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the images here...</p>
                    ) : (
                        <>
                            <p className="mb-2">Drag & drop images here, or click to select</p>
                            <Button variant="outline">Browse Files</Button>
                        </>
                    )}
                </div>

                {images.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">

                            {images.map((image, index) => (

                                <div key={index} className="relative w-32 h-24 rounded-md overflow-hidden">
                                    {/* Image */}
                                    <Image
                                        src={image.preview}
                                        alt="Preview"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Delete Button */}
                                    <Button
                                        onClick={() => handleDelete(index)}
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-1 right-1 bg-white/80 hover:bg-red-100 rounded-full p-1 shadow"
                                        aria-label="Remove image"
                                    >
                                        <X className="w-4 h-4 text-red-500" />
                                    </Button>
                                </div>

                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <Button onClick={handleUpload} disabled={uploading}>
                                {uploading ? 'Uploading...' : 'Upload Images'}
                            </Button>
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );
}
