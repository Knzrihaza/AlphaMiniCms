// components/PortfolioGrid.tsx

'use client';

import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { GalleryImage } from '@/types/types';
import ImageDialog from '../../../components/widgets/imageDialog';
import ImageDisplay from '@/components/widgets/imageDisplay';
import { CategoriesMainMenu } from '@/app/(protected)/dashboard/components/categoriesMainMenu';

// data/projects.ts





export default function GalleryLandingUi() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [selectedImage, setSelectedImage] = useState<GalleryImage>();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategorie] = useState("all")

    useEffect(() => {
        async function fetchImages() {
            const res = await fetch("/api/gallery/images");
            const data: GalleryImage[] = await res.json();
            setImages(data);
        }

        fetchImages();
    }, []);


    useEffect(() => {
        console.log(selectedCategory)


    }, [selectedCategory])


    return (
        <div className="w-full mx-auto p-6 gap-3">


            <CategoriesMainMenu setSelectedCategorie={setSelectedCategorie} />


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
                            {(selectedCategory === "all"
                                ? images
                                : images.filter(img => img.category === selectedCategory)
                            ).map((img) => (
                                <ImageDisplay
                                    key={img._id}
                                    img={img}
                                    setSelectedImage={setSelectedImage}
                                    setIsOpen={setIsOpen}
                                />
                            ))}
                        </>
                    )}

                </div>


            </Card>
        </div>
    );
}
