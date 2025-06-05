
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { features } from "process";
import DeleteBtn from "./deleteBtn";
import { DeleteButton } from "@/app/(protected)/dashboard/components/deleteButton";


type Plan = {
    name: string;
    audience: string;
    price: number | null;
    currency: string;
    billing_cycle: 'monthly' | 'custom';
    features: string[];
    is_free: boolean;
    custom_pricing?: boolean;
    contact_sales?: boolean;
};

type PricingSection = {
    title: string,
    subtitle: string,
    plans: Plan[]
}

type PricingSectionProps = {
    data: PricingSection
}

type PricingItemProps = {
    plan: Plan
}

export const PricingItem = ({ plan }: PricingItemProps) => {
    return (
        <Card className="shadow hover:shadow-lg transition-shadow">
            <CardHeader>
                <DeleteButton itemId={"684140c220702bea123be850"} collectionName={"landingPage"}
                    pathToRevalidate={"/dashboard/landing"} />
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <ul className="text-gray-500 dark:text-gray-400 text-sm">
                    {plan.features.map((feature, index) => (
                        <li key={index}>
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardHeader>
            <CardContent>
                {!plan.custom_pricing ? (
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {plan.price + ' ' + plan.currency}
                    </div>
                ) : (
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        CustomPricing
                    </div>
                )}




                <Button className="w-full">Get Started</Button>
            </CardContent>
        </Card>
    )
}

export default function PricingSection({ data }: PricingSectionProps) {
    //if (!data.testimonials || testimonials.length === 0) return null

    return (
        <section className="py-16 px-6 md:px-12 lg:px-24">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {data.subtitle}
                </p>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {data.plans.map((plan, index) => (
                    <PricingItem key={index} plan={plan} />

                ))}
            </div>
        </section>
    )
}


