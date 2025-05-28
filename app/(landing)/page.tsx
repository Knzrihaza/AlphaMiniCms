// app/page.tsx

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const carouselImages = [
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 1" },
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 2" },
    { src: "https://images.pexels.com/photos/31556575/pexels-photo-31556575/free-photo-of-cozy-morning-coffee-on-bed-with-newspaper.jpeg", alt: "Slide 3" },
];

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


                </div>
            </Card>
        </div>
    );
}
