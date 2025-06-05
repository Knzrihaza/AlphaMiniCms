"use client"

import * as React from "react"
import {

  IconInnerShadowTop,

} from "@tabler/icons-react"


import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { data } from "@/components/mockData/mockdata"
import Link from "next/link"
import { ArrowUpNarrowWide } from "lucide-react"




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <ArrowUpNarrowWide className="!size-5" />
                <span className="text-base font-semibold">Back to Website</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>

      </SidebarFooter>
    </Sidebar>
  )
}
