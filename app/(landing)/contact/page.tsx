import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full mx-auto p-6 ">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

            <Card className="shadow-xl rounded-2x">
                <CardContent className="p-6 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="name">
                                Name
                            </label>
                            <Input id="name" placeholder="Your full name" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">
                                Email
                            </label>
                            <Input id="email" type="email" placeholder="you@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="message">
                                Message
                            </label>
                            <Textarea id="message" rows={4} placeholder="Tell us what's on your mind..." />
                        </div>
                    </div>

                    <Button className="w-full flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                    </Button>
                </CardContent>
            </Card>

            <div className="mt-10 text-center text-sm text-muted-foreground">
                <div className="flex justify-center items-center gap-2 mb-1">
                    <Mail size={16} />
                    contact@yourdomain.com
                </div>
                <div className="flex justify-center items-center gap-2">
                    <Phone size={16} />
                    +1 (123) 456-7890
                </div>
            </div>
        </div>
    );
}
