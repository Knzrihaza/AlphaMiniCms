import { cookies } from "next/headers"
import "./theme.css"
import { AppSidebar } from "./components/app-sidebar"
import { SiteHeader } from "./components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { auth } from "@/components/providers/authProvider"
import { redirect } from "next/navigation"
import { SiteAlert } from "./components/site-alert"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()
  if (!session) redirect('/login')


  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <SiteAlert />

        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
