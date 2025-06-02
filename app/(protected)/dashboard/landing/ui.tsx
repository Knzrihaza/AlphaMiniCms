'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function DashboardPage() {
    const [hero, setHero] = useState({
        headline: 'Ready to Get Started?',
        description: 'Create your personalized portfolio or private gallery today.',
        cta: 'Contact Us',
    });

    const [features, setFeatures] = useState([
        {
            title: 'Easy Customization',
            desc: 'Tailor your portfolio or gallery to reflect your unique style with our intuitive customization options.',
        },
        {
            title: 'Responsive Design',
            desc: 'Your work will look great on any device, ensuring a seamless experience for all visitors.',
        },
        {
            title: 'Secure & Private',
            desc: 'Keep your personal photos safe with our robust privacy settings and secure storage solutions.',
        },
    ]);

    const updateFeature = (index: number, field: 'title' | 'desc', value: string) => {
        const updated = [...features];
        updated[index][field] = value;
        setFeatures(updated);
    };


    const [pricing, setPricing] = useState([
        { title: 'Basic Plan', description: 'Good for individuals.', price: 'Free' },
    ]);

    const updatePricing = (index: number, field: 'title' | 'description' | 'price', value: string) => {
        const updated = [...pricing];
        updated[index][field] = value;
        setPricing(updated);
    };

    return (
        <div className=" gap-4 px-4 py-12">
            <h1 className=" text-3xl font-bold text-gray-900 dark:text-white mb-6">Landing Page Editor</h1>


            <Card>
                <CardHeader>
                    <CardTitle>Hero Section</CardTitle>
                    <div className="flex items-center space-x-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        value={hero.headline}
                        onChange={(e) => setHero({ ...hero, headline: e.target.value })}
                        placeholder="Headline"
                    />
                    <Textarea
                        value={hero.description}
                        onChange={(e) => setHero({ ...hero, description: e.target.value })}
                        placeholder="Description"
                    />
                    <Input
                        value={hero.cta}
                        onChange={(e) => setHero({ ...hero, cta: e.target.value })}
                        placeholder="CTA Button Text"
                    />
                </CardContent>
            </Card>

            {/* Hero Section Editor */}
            <Card>
                <CardHeader>
                    <CardTitle>Hero Section</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Input
                        value={hero.headline}
                        onChange={(e) => setHero({ ...hero, headline: e.target.value })}
                        placeholder="Headline"
                    />
                    <Textarea
                        value={hero.description}
                        onChange={(e) => setHero({ ...hero, description: e.target.value })}
                        placeholder="Description"
                    />
                    <Input
                        value={hero.cta}
                        onChange={(e) => setHero({ ...hero, cta: e.target.value })}
                        placeholder="CTA Button Text"
                    />
                </CardContent>
            </Card>

            {/* Features Section Editor */}
            <Card>
                <CardHeader>
                    <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                            <Input
                                value={feature.title}
                                onChange={(e) => updateFeature(index, 'title', e.target.value)}
                                placeholder={`Feature ${index + 1} Title`}
                            />
                            <Textarea
                                value={feature.desc}
                                onChange={(e) => updateFeature(index, 'desc', e.target.value)}
                                placeholder={`Feature ${index + 1} Description`}
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Pricing Plans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {pricing.map((plan, index) => (
                        <div key={index} className="space-y-2">
                            <Input
                                value={plan.title}
                                onChange={(e) => updatePricing(index, 'title', e.target.value)}
                                placeholder={`Plan ${index + 1} Title`}
                            />
                            <Textarea
                                value={plan.description}
                                onChange={(e) => updatePricing(index, 'description', e.target.value)}
                                placeholder={`Plan ${index + 1} Description`}
                            />
                            <Input
                                value={plan.price}
                                onChange={(e) => updatePricing(index, 'price', e.target.value)}
                                placeholder={`Plan ${index + 1} Price`}
                            />
                        </div>
                    ))}
                    <Button
                        variant="outline"
                        onClick={() => setPricing([...pricing, { title: '', description: '', price: '' }])}
                    >
                        Add Plan
                    </Button>
                </CardContent>
            </Card>



            <Button onClick={() => console.log({ hero, features })}>Save Changes</Button>
        </div>
    );
}
