"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        avatarUrl: "",
        phone: "",
        contactEmail: "",
        bioIntro: "",
        bioJourney: "",
        bioConnect: "",
    });




    async function fetchUser() {
        const res = await fetch("/api/user");
        const data = await res.json();

        console.log("regggggggs", data)
    }



    const handleChange = (key: keyof typeof profile, value: string) => {
        setProfile((prev) => ({ ...prev, [key]: value }));
    };

    const handleSave = () => {
        console.log("Saving profile:", profile);
        // Add your server action or fetch logic here
    };


    fetchUser()

    return (
        <div className="max-w-6xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side: Contact & Identity Data */}
            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                            <AvatarImage src={profile.avatarUrl || "/placeholder-avatar.png"} />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <Input
                            type="url"
                            placeholder="Avatar Image URL"
                            value={profile.avatarUrl}
                            onChange={(e) => handleChange("avatarUrl", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Admin Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="contactEmail">Public Contact Email</Label>
                        <Input
                            id="contactEmail"
                            type="email"
                            value={profile.contactEmail}
                            onChange={(e) => handleChange("contactEmail", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            value={profile.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Right Side: About Section Data */}
            <Card>
                <CardHeader>
                    <CardTitle>About Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="bioIntro">Intro</Label>
                        <Textarea
                            id="bioIntro"
                            value={profile.bioIntro}
                            onChange={(e) => handleChange("bioIntro", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="bioJourney">My Journey</Label>
                        <Textarea
                            id="bioJourney"
                            value={profile.bioJourney}
                            onChange={(e) => handleChange("bioJourney", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="bioConnect">Let's Connect</Label>
                        <Textarea
                            id="bioConnect"
                            value={profile.bioConnect}
                            onChange={(e) => handleChange("bioConnect", e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={handleSave}>Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}