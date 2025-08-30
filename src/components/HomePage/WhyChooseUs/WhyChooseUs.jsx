import { ShieldCheck, DollarSign, Zap, Headset } from 'lucide-react';

const WhyChooseUs = () => {
    // Data for the feature cards, using Lucide icons
    const features = [
        {
            title: "Quality Guaranteed",
            description: "Every laptop undergoes rigorous testing and comes with a comprehensive warranty.",
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        },
        {
            title: "Best Prices",
            description: "Save up to 60% compared to new laptops without compromising on quality.",
            icon: <DollarSign className="h-8 w-8 text-primary" />,
        },
        {
            title: "Fast Processing",
            description: "Quick order processing and same-day shipping for most orders.",
            icon: <Zap className="h-8 w-8 text-primary" />,
        },
        {
            title: "Expert Support",
            description: "Our tech experts are here to help you find the perfect laptop.",
            icon: <Headset className="h-8 w-8 text-primary" />,
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-screen-lg">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                        Why Choose RefurbTech?
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        We're committed to providing the best refurbished laptop experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-card text-card-foreground rounded-xl shadow-lg border border-border p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-center p-3 rounded-full bg-accent text-accent-foreground mb-4 transition-all duration-300 group-hover:bg-primary/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
