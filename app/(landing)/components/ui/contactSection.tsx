'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", form)
        // You can integrate email service here (e.g. EmailJS, API route)
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })
    }

    return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-stone-900">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Have a question or want to work together? We&#39;d love to hear from you.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                    />
                </div>

                <Button type="submit" className="w-full">
                    Send Message
                </Button>

                {submitted && (
                    <p className="text-green-600 dark:text-green-400 text-sm text-center">
                        Thank you! We’ll be in touch soon.
                    </p>
                )}
            </form>
        </section>
    )
}
