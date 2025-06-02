'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function FooterSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })


    return (
        <section className="py-16 px-6 md:px-12 lg:px-24  dark:bg-gray-100 bg-stone-900">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Have a question or want to work together? We'd love to hear from you.
                </p>
            </div>


        </section>
    )
}
