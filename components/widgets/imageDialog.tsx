import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GalleryImage } from "@/types/types";
import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
interface ImageDialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    selectedImage: GalleryImage;
}

export default function ImageDialog({
    isOpen,
    setIsOpen,
    selectedImage,
}: ImageDialogProps) {



    if (!selectedImage) return null


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>

            <DialogContent className="md:max-w-fit">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>


                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Framework</Label>
                                    <Select>
                                        <SelectTrigger id="framework">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Next.js</SelectItem>
                                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                                            <SelectItem value="astro">Astro</SelectItem>
                                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </form>

                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>

                    </DialogDescription>
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

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}