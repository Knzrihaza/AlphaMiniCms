"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SheetPopup } from "./sheetPopup"
import { useEffect, useState } from "react"
import { handleFetchCategory } from "@/lib/functions"
import { GalleryImage } from "@/types/types"

type CategoryType = {
    _id: string
    categoryName: string
}

type MenuBarProps = {

    setSelectedCategorie: React.Dispatch<React.SetStateAction<string>>

    isDashboard?: boolean // default to false (Landing Page)
}

export function CategoriesMainMenu({ setSelectedCategorie, isDashboard = false }: MenuBarProps) {
    const [categories, setCategories] = useState<CategoryType[]>([])





    async function dataFetcher() {
        const data = await handleFetchCategory()
        setCategories(data)
    }

    useEffect(() => {
        dataFetcher()
    }, [])

    return (
        <nav className="flex gap-4 p-4 border-b items-center">
            {isDashboard ? (
                <SheetPopup datafetcher={dataFetcher} />
            ) : (
                <></>
            )}

            <Button
                className="text-sm font-medium"
                onClick={() => { setSelectedCategorie("all") }}
            >
                All
            </Button>
            {categories.length === 0 ? (
                <span className="text-sm text-muted-foreground">Loading...</span>
            ) : (
                categories.map((item) => (
                    <Button
                        key={item._id}
                        variant="ghost"
                        className={cn("text-sm font-medium")}
                        onClick={() => { setSelectedCategorie(item.categoryName) }}

                    >
                        {item.categoryName}
                    </Button>
                ))
            )}
        </nav>
    )
}
