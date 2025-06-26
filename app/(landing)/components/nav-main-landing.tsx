"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { landingData } from "@/components/mockData/mockdata"
import { cn } from "@/lib/utils"

export function LandingNavMain() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white dark:bg-stone-950 relative">
      {/* Mobile Header (Title + Hamburger Icon) */}
      <div className="flex items-center justify-between sm:hidden">
        <span className="text-lg font-semibold text-gray-800 dark:text-white">
          Menu
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-stone-900"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-4 mt-0">
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
                  ? "bg-primary text-white dark:text-gray-900"
                  : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-stone-900"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-white dark:bg-stone-900 z-50 transform transition-transform duration-300 sm:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="p-4 space-y-4">
          {landingData.navMain.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.url

            return (
              <li key={item.url}>
                <Link
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-white dark:text-gray-900"
                      : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
