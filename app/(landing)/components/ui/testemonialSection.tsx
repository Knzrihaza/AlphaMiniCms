'use client'

import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type Testimonial = {
    name: string
    quote: string
    role?: string
}

type TestimonialsSectionProps = {
    data: Testimonial[]
}

export default function TestimonialsSection({ data }: TestimonialsSectionProps) {
    if (!data || data.length === 0) return null

    return (
        <>
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-stone-900">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">What People Say</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Hear from users who love the experience.
                    </p>
                </div>

                <div className=" ">
                    <Carousel plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                        opts={{
                            align: "start",
                        }}
                        className="w-full  ">
                        <CarouselContent>
                            {data.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">

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
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    </Carousel>
                </div>
            </section>
        </>
    )
}
