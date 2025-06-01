"use client"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
import { NavUser } from "./nav-user"
import { data } from "@/components/mockData/mockdata"
import { auth } from "@/components/providers/authProvider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, PopcornIcon, AlertCircleIcon } from "lucide-react"
import { useState } from "react"

export function SiteAlert() {
  const [alert, setAlert] = useState("")
  if (alert) {
    return (
      <div className="">

        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>
            <p>{alert}</p>
          </AlertDescription>
        </Alert>
      </div>
    )
  }


}
