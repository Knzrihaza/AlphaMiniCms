import { cookies } from "next/headers"
import "./theme.css"
import { SiteHeader } from "./components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import FooterSection from "./components/ui/footerSection"

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >

      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col ">{children}</div>
        <FooterSection />
      </SidebarInset>
    </SidebarProvider>
  )
}
