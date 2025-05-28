import { GalleryImage } from "@/types/types";
import { Card } from "../ui/card";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";


interface ImageDisplayProps {
    img: GalleryImage;
    setSelectedImage: Dispatch<SetStateAction<GalleryImage>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ImageDisplay({
    img,
    setSelectedImage,
    setIsOpen,
}: ImageDisplayProps) {
    return (
        <Card
            className="overflow-hidden cursor-pointer"
            onClick={() => {
                console.log(img);
                setSelectedImage(img);
                setIsOpen(true);
            }}
        >
            <div className="overflow-hidden">
                <Image
                    src={img.url}
                    alt={img.filename}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <p className="text-sm mt-1 font-medium">{img.filename}</p>
            </div>
        </Card>
    );
}
