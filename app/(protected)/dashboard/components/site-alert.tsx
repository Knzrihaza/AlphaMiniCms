"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"
import { useState } from "react"

export function SiteAlert() {
  const [alert, setAlert] = useState("")
  setAlert("This site is under heavy developement")
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
