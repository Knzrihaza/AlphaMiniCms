// components/MainMenu.tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SheetPopup } from "./categories"
import client from "@/lib/mongoDb"
import { useEffect, useState } from "react"
import { handleFetchCategory } from "@/lib/functions"

const menuItems = [
    { label: "Wedding" },
    { label: "About" },
    { label: "Services" },
    { label: "Contact" },
]


type CategoryType = {
    _id: string
    categoryName: string
}


export function MenubarDemo() {
    const [sts, usests] = useState<CategoryType[]>([])


    async function dataFetcher() {
        usests(await handleFetchCategory())
    }

    useEffect(() => {

        dataFetcher()
    }, [])
    console.log("ppppppppppppppppppp", sts)
    return (
        <nav className="flex gap-4 p-4 border-b">
            <SheetPopup datafetcher={dataFetcher} />
            {!sts ? (
                <span className="text-sm text-muted-foreground">Loading...</span>
            ) : (
                sts.map((item) => (
                    <Button
                        key={item._id}
                        variant="ghost"
                        className={cn("text-sm font-medium")}
                    >
                        {item.categoryName}
                    </Button>
                ))
            )}
        </nav>
    )
}