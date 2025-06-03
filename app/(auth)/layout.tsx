
import { auth } from "@/components/providers/authProvider"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth()

  console.log("", session)
  if (session) redirect('/dashboard')




  return (

    <div className="flex flex-1 flex-col">{children}</div>

  )
}
