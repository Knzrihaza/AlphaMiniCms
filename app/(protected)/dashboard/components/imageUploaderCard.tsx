"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation';

type ImageUploadCardProps = {
    variant?: "dropzone" | "input";
};

export default function ImageUploadCard({ variant = "dropzone" }: ImageUploadCardProps) {
    const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
    const [uploading, setUploading] = useState(false);

    const router = useRouter();



    const onFilesSelected = (files: FileList | File[]) => {
        const accepted = Array.from(files).filter(file => file.type.startsWith("image/"));
        const newImages = accepted.map(file => ({
            file,
            preview: URL.createObjectURL(file),
        }));
        setImages(prev => [...prev, ...newImages]);
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        onFilesSelected(acceptedFiles);
    }, []);

    const handleUpload = async () => {
        if (images.length === 0) return;

        setUploading(true);
        const formData = new FormData();
        images.forEach((img) => formData.append("images", img.file));

        try {
            const res = await fetch("/api/gallery/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Upload failed");
            toast("Uploaded Successfully");
            setImages([]);
        } catch (err) {
            console.error(err);
            toast("An error occurred during upload");
        } finally {
            setUploading(false);
            router.refresh()
        }
    };

    const handleDelete = (indexToRemove: number) => {
        setImages(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: true,
        disabled: variant !== "dropzone",
    });

    return (
        <Card className="w-full mx-auto p-4">
            <CardContent>
                {variant === "dropzone" ? (
                    <> <div
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
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative w-32 h-24 rounded-md overflow-hidden">
                                            <Image src={image.preview} alt="Preview" fill className="object-cover" />
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
                                        {uploading ? "Uploading..." : "Upload Images"}
                                    </Button>
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                                if (e.target.files) onFilesSelected(e.target.files);
                            }}
                        />
                    </div>
                )}


            </CardContent>
        </Card>
    );
}
