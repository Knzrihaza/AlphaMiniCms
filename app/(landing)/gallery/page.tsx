// components/PortfolioGrid.tsx

'use client';

import { Card } from '@/components/ui/card';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarShortcut, MenubarSeparator, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubContent, MenubarSubTrigger } from '@/components/ui/menubar';
import { useEffect, useState } from 'react';
import { GalleryImage } from '@/types/types';
import ImageDialog from '../../../components/widgets/imageDialog';
import ImageDisplay from '@/components/widgets/imageDisplay';

// data/projects.ts





export default function PortfolioGrid() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [selectedImage, setSelectedImage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        async function fetchImages() {
            const res = await fetch("/api/gallery/images");
            const data: GalleryImage[] = await res.json();
            setImages(data);
        }

        fetchImages();
    }, []);





    return (
        <div className="w-full mx-auto p-6 ">
            <Card className="w-full mx-auto p-6  shadow-xl rounded-2x">



                <ImageDialog
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedImage={selectedImage}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                    {images.length === 0 ? (
                        <p className="text-muted-foreground">No images uploaded yet.</p>
                    ) : (
                        < >
                            {images.map((img) => (
                                <ImageDisplay
                                    key={img._id}
                                    img={img}
                                    setSelectedImage={setSelectedImage}
                                    setIsOpen={setIsOpen} />
                            ))}
                        </>
                    )}







                </div>


            </Card>
        </div>
    );
}
