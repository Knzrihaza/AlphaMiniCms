'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card"

type Testimonial = {
    name: string
    quote: string
    role?: string
}

type TestimonialsSectionProps = {
    testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    if (!testimonials || testimonials.length === 0) return null

    return (
        <>
            <section className="py-16 px-2 md:px-6 lg:px-12 bg-white dark:bg-stone-900">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What People Say</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Hear from users who love the experience.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="shadow-sm border-muted">
                            <CardHeader>
                                <blockquote className="text-sm text-gray-800 dark:text-gray-100 italic">
                                    “{testimonial.quote}”
                                </blockquote>
                            </CardHeader>
                            <CardContent>
                                <p className="text-base font-semibold text-gray-900 dark:text-white">
                                    {testimonial.name}
                                </p>
                                {testimonial.role && (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
