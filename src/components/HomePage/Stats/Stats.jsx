'use client'
import React, { useState, useEffect } from 'react';
import { Calendar, Laptop, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutCubic * end);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};

const Stats = () => {
    const stats = [
        {
            icon: Calendar,
            value: 5,
            suffix: '',
            title: 'Years in Business',
            description: 'Providing quality refurbished laptops for over 5 years.',
        },
        {
            icon: Laptop,
            value: 1000,
            suffix: '',
            title: 'Laptops Sold',
            description: 'Over 1000 refurbished laptops sold to satisfied customers.',
        },
        {
            icon: Users,
            value: 15,
            suffix: '',
            title: 'Expert Team',
            description: 'Our team of 15 experts ensures top-quality refurbishment.',
        },
        {
            icon: Star,
            value: 98,
            suffix: '%',
            title: 'Customer Satisfaction',
            description: '98% of our customers are satisfied with our products.',
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                        <IconComponent className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-foreground mb-1">
                                            <CountUp
                                                end={stat.value}
                                                duration={2000 + index * 200}
                                                suffix={stat.suffix}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                        {stat.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Subtle gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Stats;