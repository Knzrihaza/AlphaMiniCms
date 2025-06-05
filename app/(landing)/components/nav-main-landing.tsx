"use client"

import { landingData } from "@/components/mockData/mockdata"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"



export function LandingNavMain() {


  const pathname = usePathname()

  return (
    <nav className="flex w-full  items-center justify-center   px-4 py-3 gap-6">
      <div className="flex gap-4 items-center">
        {landingData.navMain.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.url

          return (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary dark:text-gray-900 text-gray-300"
                  : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-900"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
