// app/about/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <Card>
                <CardHeader className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src="/images/profile.jpg" alt="Profile Picture" />
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-2xl font-bold">Alex Bauer</CardTitle>
                    <p className="text-muted-foreground">Photographer & Visual Storyteller</p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p>
                        Welcome! I'm Alex, a passionate photographer dedicated to capturing the essence of moments through my lens. With a keen eye for detail and a love for storytelling, I transform everyday scenes into compelling visual narratives.
                    </p>
                    <Separator />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">My Journey</h2>
                        <p>
                            Over the past decade, I've explored various facets of photography, from intimate portraits to expansive landscapes. Each project has been an opportunity to connect with people and places, enriching my perspective and honing my craft.
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Let's Connect</h2>
                        <p>
                            I'm always eager to collaborate on new projects or simply chat about photography. Feel free to reach out through the contact page or connect with me on social media.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
