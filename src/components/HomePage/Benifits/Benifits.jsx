import React from 'react';
import { Truck, CreditCard, Headset, HandCoins } from 'lucide-react';
import { cn } from '@/lib/utils';


// A simple Card component to simulate shadcn/ui's Card
// In a real project, you would import this from @/components/ui/card
const Card = ({ className, children }) => (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
        {children}
    </div>
);

// Array of data for each feature card
const featuresData = [
    {
        icon: <Truck className="h-10 w-10 text-primary" />,
        title: 'Free Shipping',
        description: 'For all orders over $120',
    },
    {
        icon: <CreditCard className="h-10 w-10 text-primary" />,
        title: 'Safe Payment',
        description: '100% secure payment',
    },
    {
        icon: <Headset className="h-10 w-10 text-primary" />,
        title: '24/7 Help Center',
        description: 'Dedicated 24/7 support',
    },
    {
        icon: <HandCoins className="h-10 w-10 text-primary" />,
        title: 'RETURN MONEY',
        description: 'If goods have problems',
    },
];

// FeatureCard component to render a single card
const FeatureCard = ({ icon, title, description }) => (
    <div className="flex flex-col items-center gap-2 p-6 text-center md:flex-row md:text-left">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium tracking-tight text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

// Main component to render the features section
export default function Benifits() {
    return (
        <div className="flex justify-center items-center p-4 my-10 bg-background">
            <Card className="flex flex-col items-center gap-3 justify-between overflow-hidden lg:flex-row lg:divide-x lg:divide-border">
                {featuresData.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </Card>
        </div>
    );
}
