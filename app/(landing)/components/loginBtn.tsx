import { auth } from "@/components/providers/authProvider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function LoginBtn() {
    const session = await auth()

    if (session?.user) return (
        < Link href="/dashboard" >
            <Button variant="default">Dashboard</Button>
        </Link >
    )


    return (
        < Link href="/login" >
            <Button variant="default">Login</Button>
        </Link >
    )
}