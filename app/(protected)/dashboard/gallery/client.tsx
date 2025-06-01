"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, CalendarDays, GalleryThumbnails, List } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import ImageDialog from "@/components/widgets/imageDialog";
import ImageDisplay from "@/components/widgets/imageDisplay";
import ImageUploaderCard from "../components/imageUploaderCard";
import { Spinner } from "@/components/ui/spinner";
import { SheetPopup } from "../components/categories";
import { MenubarDemo } from "../components/categoriesMenu";







export default function GalleryUi({ data }: { data: GalleryImage[] }) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage>();
    const [displayType, setDisplayType] = useState(false)
    const [isOpen, setIsOpen] = useState(false);




    console.log(data)





    return (
        <main className="  px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Activity Feed from db
            </h1>

            <ImageUploaderCard variant="dropzone" />

            {selectedImage && (
                <ImageDialog
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedImage={selectedImage}
                />
            )}

            {/* Image Gallery Display */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Image Gallery</CardTitle>

                    <ToggleGroup variant="outline" type="single">
                        <ToggleGroupItem onClick={() => setDisplayType(true)} value="bold" aria-label="Toggle">
                            <List className="h-4 w-4" />
                        </ToggleGroupItem>
                        <ToggleGroupItem onClick={() => setDisplayType(false)} value="italic" aria-label="Toggle">
                            <GalleryThumbnails className="h-4 w-4" />
                        </ToggleGroupItem>

                    </ToggleGroup>
                </CardHeader>
                <MenubarDemo />
                <CardContent>



                    {!displayType ? (




                        <>
                            {data.length === 0 ? (
                                <Spinner size="large" />
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {data.map((img) => (
                                        <ImageDisplay
                                            key={img._id}
                                            img={img}
                                            setSelectedImage={setSelectedImage}
                                            setIsOpen={setIsOpen} />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <Table>
                            <TableCaption>A list of your recent invoices.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>




                                {images.length === 0 ? (
                                    <p className="text-muted-foreground">No images uploaded yet.</p>
                                ) : (
                                    < >
                                        {images.map((img) => (




                                            <TableRow key={"invoice.invoice"}>

                                                <TableCell className="font-medium">

                                                    <HoverCard>
                                                        <HoverCardTrigger asChild>
                                                            <Avatar>
                                                                <AvatarImage src={img.url} />
                                                                <AvatarFallback>VC</AvatarFallback>
                                                            </Avatar>

                                                        </HoverCardTrigger>
                                                        <HoverCardContent className="w-80">
                                                            <div className="flex justify-between space-x-4">

                                                                <Image
                                                                    src={img.url}
                                                                    alt={img.filename}
                                                                    width={600}
                                                                    height={400}
                                                                    className="object-cover w-full rounded-md"
                                                                />

                                                            </div>
                                                        </HoverCardContent>
                                                    </HoverCard>





                                                </TableCell>
                                                <TableCell>{img.filename}</TableCell>
                                                <TableCell>{img.createdAt}</TableCell>

                                                <TableCell className="text-right">{img.description}</TableCell>

                                            </TableRow>

                                        ))}
                                    </>
                                )}





                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>Total</TableCell>
                                    <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </main>
    );
}
