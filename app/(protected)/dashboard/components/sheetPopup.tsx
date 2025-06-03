"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Spinner } from "@/components/ui/spinner"
import { handleCreateCategory } from "@/lib/functions"
import { useState } from "react"
import { toast } from "sonner"




export function SheetPopup({ datafetcher }) {
    const [isLoading, setIsLoading] = useState(false)
    const [newCategory, setNewCategory] = useState("");

    async function onSubmit() {

        setIsLoading(true)
        console.log(newCategory)
        toast(await handleCreateCategory(newCategory))
        setNewCategory("")
        setIsLoading(false)
        datafetcher()


    }


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">Create a Category</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">

                        <p className="text-muted-foreground text-sm">
                            Enter the category name
                        </p>
                    </div>
                    <div className="grid gap-2">

                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Name: </Label>
                            <Input className="col-span-2 h-8"
                                name="title" placeholder="Title" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />



                        </div>
                        {isLoading ? (
                            <Button disabled>
                                <Spinner size="small" className="text-black" />
                                loading ...
                            </Button>
                        ) : (
                            <Button onClick={onSubmit} disabled={newCategory === ""}>
                                Add Post
                            </Button>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
