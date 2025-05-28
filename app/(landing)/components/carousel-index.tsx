import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'



export function CarouselDemo() {
    return (
        <Carousel className="w-full max-w-md">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem className="md:basis-1/2 lg:basis-full" key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src="https://images.pexels.com/photos/30085252/pexels-photo-30085252/free-photo-of-majestic-volcano-landscape-with-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                        width={600}
                                        height={500}
                                        alt="Picture of the author"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
