'use client'
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            quote: "Amazing quality! My refurbished MacBook works like new and saved me hundreds of dollars. The attention to detail in the refurbishment process is incredible.",
            name: "Sarah Johnson",
            role: "Graphic Designer",
            company: "Creative Studio",
            rating: 5,
            image: "SJ",
            color: "from-purple-500/10 to-pink-500/10",
            accent: "border-purple-500/20"
        },
        {
            id: 2,
            quote: "Great customer service and fast shipping. The laptop exceeded my expectations in terms of performance and condition. Highly professional service throughout.",
            name: "Mike Chen",
            role: "Software Developer",
            company: "Tech Solutions",
            rating: 5,
            image: "MC",
            color: "from-blue-500/10 to-cyan-500/10",
            accent: "border-blue-500/20"
        },
        {
            id: 3,
            quote: "Perfect for my studies and budget-friendly. Highly recommend RefurbTech! The laptop runs all my development tools smoothly without any issues.",
            name: "Emily Davis",
            role: "Computer Science Student",
            company: "University",
            rating: 5,
            image: "ED",
            color: "from-emerald-500/10 to-green-500/10",
            accent: "border-emerald-500/20"
        },
        {
            id: 4,
            quote: "Outstanding build quality and excellent warranty support. The refurbished ThinkPad feels brand new and performs exceptionally well for business tasks.",
            name: "David Rodriguez",
            role: "Business Analyst",
            company: "Finance Corp",
            rating: 5,
            image: "DR",
            color: "from-amber-500/10 to-orange-500/10",
            accent: "border-amber-500/20"
        },
        {
            id: 5,
            quote: "Impressed by the packaging and presentation. The laptop arrived in perfect condition with all accessories. Professional service from start to finish.",
            name: "Lisa Wang",
            role: "Marketing Manager",
            company: "Digital Agency",
            rating: 5,
            image: "LW",
            color: "from-rose-500/10 to-red-500/10",
            accent: "border-rose-500/20"
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <div className="w-full py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Customer Love</span>
                    </div>

                    <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Real reviews from satisfied customers who trust our quality
                    </p>
                </div>

                {/* Testimonial Showcase */}
                <div className="relative">
                    {/* Main Testimonial Display */}
                    <div className="grid lg:grid-cols-3 gap-8 items-center mb-12">
                        {/* Left Side - Previous Testimonial Preview */}
                        <div className="hidden lg:block">
                            <Card className="opacity-40 scale-90 transition-all duration-500 hover:opacity-60 cursor-pointer" onClick={prevTestimonial}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                                            {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].image}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm text-foreground">
                                                {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].role}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].quote}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Center - Active Testimonial */}
                        <div className="relative">
                            <Card className={`${testimonials[activeIndex].accent} border-2 bg-gradient-to-br ${testimonials[activeIndex].color} shadow-2xl transform transition-all duration-700 hover:scale-105`}>
                                <CardContent className="p-8 text-center">
                                    {/* Quote Icon */}
                                    <div className="mb-6">
                                        <Quote className="w-12 h-12 text-primary/40 mx-auto" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-lg text-foreground mb-8 leading-relaxed italic">
                                        "{testimonials[activeIndex].quote}"
                                    </blockquote>

                                    {/* Customer Info */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary shadow-lg">
                                            {testimonials[activeIndex].image}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-foreground text-lg">
                                                {testimonials[activeIndex].name}
                                            </div>
                                            <div className="text-muted-foreground text-sm">
                                                {testimonials[activeIndex].role}
                                            </div>
                                            <Badge variant="secondary" className="text-xs mt-1">
                                                {testimonials[activeIndex].company}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevTestimonial}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <ChevronLeft className="w-5 h-5 text-primary" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                            >
                                <ChevronRight className="w-5 h-5 text-primary" />
                            </button>
                        </div>

                        {/* Right Side - Next Testimonial Preview */}
                        <div className="hidden lg:block">
                            <Card className="opacity-40 scale-90 transition-all duration-500 hover:opacity-60 cursor-pointer" onClick={nextTestimonial}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                                            {testimonials[(activeIndex + 1) % testimonials.length].image}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm text-foreground">
                                                {testimonials[(activeIndex + 1) % testimonials.length].name}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {testimonials[(activeIndex + 1) % testimonials.length].role}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {testimonials[(activeIndex + 1) % testimonials.length].quote}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Dot Navigation */}
                    <div className="flex justify-center gap-3 mb-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-primary shadow-lg shadow-primary/50'
                                    : 'bg-border hover:bg-primary/50'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Auto-play Indicator */}
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-primary animate-pulse' : 'bg-border'}`} />
                        <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-2">500+</div>
                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Star className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-2">4.9/5</div>
                        <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground mb-2">98%</div>
                        <div className="text-sm text-muted-foreground">Would Recommend</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;