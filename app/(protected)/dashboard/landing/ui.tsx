'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import TestimonialsSectionDashboard from '../components/ui/testemonials';
import { LandingPageData } from '@/types/types';
import { PricingItem } from '@/app/(landing)/components/ui/pricingSection';
import { ReusableAddItemDialog } from '../components/addLandingItem';

export default function DashboardPage({ data }: { data: LandingPageData }) {







    const [landingData, setLandingData] = useState(data);



    return (
        <div className=" gap-4 px-4 py-12">
            <h1 className=" text-3xl font-bold text-gray-900 dark:text-white mb-6">Landing Page Editor</h1>

            {/* Hero Section Editor */}

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
                        onChange={(e) => setLandingData({ ...landingData, hero: { ...landingData.hero, headline: e.target.value } })}
                        placeholder="Headline"
                        defaultValue={landingData.hero.headline}
                    />
                    <Textarea
                        onChange={(e) => setLandingData({ ...landingData, hero: { ...landingData.hero, description: e.target.value } })}
                        placeholder="Description"
                        defaultValue={landingData.hero.description}
                    />
                    <Input
                        onChange={(e) => setLandingData({ ...landingData, hero: { ...landingData.hero, description: e.target.value } })}
                        placeholder="Description"
                        defaultValue={landingData.hero.cta.text}
                    />

                </CardContent>
                <CardFooter>
                    <Button onClick={() => console.log(landingData.hero)}>Send</Button>
                </CardFooter>
            </Card>



            {/* Features Section Editor */}
            <Card>
                <CardHeader>
                    <ReusableAddItemDialog itemType={'feature'} />

                    <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {landingData.features.map((feature, index) => (
                        <div key={index} className="space-y-2">
                            <Input
                                defaultValue={feature.title}
                                onChange={(e) =>
                                    setLandingData({
                                        ...landingData,
                                        features: landingData.features.map((f, i) =>
                                            i === index ? { ...f, title: e.target.value } : f
                                        ),
                                    })
                                }
                                placeholder={`Feature ${index + 1} Title`}
                            />
                            <Textarea
                                defaultValue={feature.description}
                                onChange={(e) =>
                                    setLandingData({
                                        ...landingData,
                                        features: landingData.features.map((f, i) =>
                                            i === index ? { ...f, description: e.target.value } : f
                                        ),
                                    })
                                } placeholder={`Feature ${index + 1} Description`}
                            />
                        </div>
                    ))}
                </CardContent>
                <CardFooter>
                    <Button onClick={() => console.log(landingData.features)}>Send</Button>
                </CardFooter>
            </Card>


            {/* Pricing Section Editor */}
            <Card>
                <CardHeader>
                    <ReusableAddItemDialog itemType={'plan'} />
                    <CardTitle> {landingData.pricing_section.title} </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {landingData.pricing_section.plans.map((plan, index) => (
                        <PricingItem key={index} plan={plan} />
                    ))}

                    <Button
                        variant="outline"
                        onClick={() => console.log(landingData.pricing_section)}
                    >
                        Add Plan
                    </Button>
                </CardContent>
            </Card>

            <TestimonialsSectionDashboard testimonials={data.testimonials} ></TestimonialsSectionDashboard>

            <Button onClick={() => console.log({ landingData })}>Save Changes</Button>
        </div>
    );
}
