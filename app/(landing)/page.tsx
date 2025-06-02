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


const testimonialsData = [
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

export default function HomePage() {
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
                        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                        <p className="text-muted-foreground mb-6">
                            Create your personalized portfolio or private gallery today.
                        </p>
                        <Link href="/contact">
                            <Button variant="default">Contact Us</Button>
                        </Link>
                    </section>


                    {/* Features Section */}
                    <section className="grid md:grid-cols-3 gap-8 mb-16">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Easy Customization</h2>
                            <p>
                                Tailor your portfolio or gallery to reflect your unique style with our intuitive customization options.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Responsive Design</h2>
                            <p>
                                Your work will look great on any device, ensuring a seamless experience for all visitors.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Secure & Private</h2>
                            <p>
                                Keep your personal photos safe with our robust privacy settings and secure storage solutions.
                            </p>
                        </div>
                    </section>

                    <TestimonialsSection testimonials={testimonialsData} />


                    <section className="py-16 px-6 md:px-12 lg:px-24">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Pricing Plans
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mt-2">
                                Choose a plan that suits your needs.
                            </p>
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {pricingPlans.map((plan, index) => (
                                <Card key={index} className="shadow hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{plan.title}</CardTitle>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {plan.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                            {plan.price}
                                        </div>
                                        <Button className="w-full">Get Started</Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>


                    <ContactSection />




                </div>
            </Card>
        </div>
    );
}
