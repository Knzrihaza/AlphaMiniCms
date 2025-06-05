// app/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import TestimonialsSection from "./components/ui/testemonialSection";
import ContactSection from "./components/ui/contactSection";
import client from "@/lib/mongoDb";
import { LandingPageData } from "@/types/types";
import { fetchCollectionData } from "@/lib/functions";
import PricingSection from "./components/ui/pricingSection";

const carouselImages = [
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 1" },
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 2" },
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 3" },
];



const pricingPlans = [
    { title: "Basic", description: "For individuals", price: "Free" },
    { title: "Pro", description: "For professionals", price: "$9/mo" },
    { title: "Enterprise", description: "For large teams", price: "Custom" },
]


export const testimonialsData = [
    {
        name: "Alice Johnson",
        quote: "The customization options are amazing — exactly what I needed.",
        role: "UI Designer"
    },
    {
        name: "Mark Patel",
        quote: "Simple, clean, and powerful. This platform just works.",
        role: "Photographer"
    },
    {
        name: "Sara Kim",
        quote: "I love how intuitive everything is. It saved me so much time!",
        role: "Freelancer"
    }
]

export default async function HomePage() {


    try {
        const db = await client.db("photoGemma")

        const dataArray: LandingPageData[] = await fetchCollectionData<LandingPageData>(db, "landingPage")
        const data: LandingPageData = dataArray[0]


        console.log("ooooooooo", data.hero)
        return (
            <div className="w-full mx-auto p-6 ">
                <Card className="w-full mx-auto p-6  shadow-xl rounded-2x">
                    <div className="max-w-7xl mx-auto px-4 py-12">

                        {/* Hero Section with Carousel */}
                        <section className="mb-16 p-4 ">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {carouselImages.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative h-96 w-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </section>
                        {/* Call to Action */}
                        <section className="text-center mb-16">
                            <h2 className="text-2xl font-semibold mb-4"> {data.hero.headline} </h2>
                            <p className="text-muted-foreground mb-6">
                                {data.hero.description}
                            </p>
                            <Link href={data.hero.cta.link}>
                                <Button variant="default">{data.hero.cta.text}</Button>
                            </Link>
                        </section>


                        {/* Features Section */}
                        <section className="grid md:grid-cols-3 gap-8 mb-16">
                            {data.features.map((feature, index) => (
                                <div key={index}>
                                    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </section>





                        <PricingSection data={data.pricing_section} />

                        <TestimonialsSection data={data.testimonials} />


                        <ContactSection />




                    </div>
                </Card>
            </div>
        );
    } catch (error) {
        console.log(error)
        return <h1>Something bad happened</h1>;
    }






}
