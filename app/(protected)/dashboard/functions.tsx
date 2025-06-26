"use server"
import { signOut } from "@/components/providers/authProvider";
import { redirect } from "next/navigation";

export async function logout() {
    await signOut()
    redirect('/')
}