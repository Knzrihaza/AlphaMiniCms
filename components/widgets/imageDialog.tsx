import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GalleryImage } from "@/types/types";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { handleEditImage, handleFetchCategory } from "@/lib/functions";
import { Category } from "@/app/(protected)/dashboard/gallery/client";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";
interface ImageDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedImage: GalleryImage;
}

export function CategorySelecter(prop) {

    const [categories, setCategories] = useState<Category[]>([])
    useEffect(() => {
        async function dataFetcher() {
            const data = await handleFetchCategory()
            setCategories(data)
        }
        dataFetcher()
    }, [])



    return (
        <Select onValueChange={prop.setSelectedCategory}>
            <SelectTrigger className="w-full" id="framework">
                {!categories ? (<Spinner></Spinner>) : (
                    <SelectValue placeholder="Select" />
                )}
            </SelectTrigger>
            <SelectContent position="popper">
                {categories && categories.map((option) => (
                    <SelectItem key={option.categoryName} value={option.categoryName}>
                        {option.categoryName}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default function ImageDialog({
    isOpen,
    setIsOpen,
    selectedImage,
}: ImageDialogProps) {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [imageName, setImageName] = useState("")
    const [isLoading, setIsLoading] = useState(false)






    console.log(selectedCategory)



    async function onSubmit() {
        setIsLoading(true)
        console.log(imageName, selectedCategory)
        const message = await handleEditImage(selectedImage._id, imageName, selectedCategory)
        toast(message)
        setIsLoading(false)
    }


    if (!selectedImage) return null

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogContent className="md:max-w-fit">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>


                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" onChange={(e => { setImageName(e.target.value) })} placeholder="enter Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Framework</Label>
                                <CategorySelecter setSelectedCategory={setSelectedCategory} />
                            </div>
                        </div>
                    </form>


                </DialogHeader>
                <div className="">
                    <Image
                        src={selectedImage.url || "https://images.pexels.com/photos/789141/pexels-photo-789141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                        alt={selectedImage.filename}
                        width={1600}
                        height={1400}
                    />
                </div>
                <DialogFooter>

                    <Button variant="outline">Cancel</Button>
                    {!isLoading ? (
                        <Button onClick={onSubmit}>

                            Deploy

                        </Button>
                    ) : (
                        <Button disabled>
                            <Spinner />
                            Loading ...

                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


