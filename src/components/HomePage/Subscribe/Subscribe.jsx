'use client'
import React, { useState } from 'react';
import { Mail, Send, Check, Gift, Bell, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focused, setFocused] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || isLoading) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubscribed(true);
        setIsLoading(false);
    };

    const benefits = [
        {
            icon: Gift,
            title: 'Exclusive Deals',
            description: 'Early access to special offers and discounts on premium laptops'
        },
        {
            icon: Bell,
            title: 'New Arrivals',
            description: 'Be the first to discover our latest refurbished devices'
        },
        {
            icon: Zap,
            title: 'Tech Insights',
            description: 'Expert tips, guides, and industry news delivered weekly'
        }
    ];

    if (isSubscribed) {
        return (
            <div className="w-full py-16 bg-background">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Check className="w-8 h-8 text-primary" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        Successfully Subscribed!
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Thank you for joining our newsletter. You'll receive exclusive updates soon.
                    </p>

                    <button
                        onClick={() => {
                            setIsSubscribed(false);
                            setEmail('');
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    >
                        Subscribe Another Email
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-20 bg-muted/30">
            <div className="max-w-6xl mx-auto px-6">
                <Card className="border-border/50 shadow-lg">
                    <CardContent className="p-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <div className="space-y-6">
                                <div>
                                    <Badge variant="secondary" className="mb-4">
                                        Stay Updated
                                    </Badge>
                                    <h2 className="text-3xl font-bold text-foreground mb-4">
                                        Never Miss a Deal
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Subscribe to our newsletter and get exclusive access to the best refurbished laptops,
                                        special discounts, and expert tech insights delivered straight to your inbox.
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => {
                                        const IconComponent = benefit.icon;
                                        return (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <IconComponent className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-1">
                                                        {benefit.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {benefit.description}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex items-center gap-6 pt-4 border-t border-border">
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-foreground">10K+</div>
                                        <div className="text-xs text-muted-foreground">Subscribers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-foreground">Weekly</div>
                                        <div className="text-xs text-muted-foreground">Updates</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-foreground">No Spam</div>
                                        <div className="text-xs text-muted-foreground">Guaranteed</div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="space-y-6">
                                <Card className="border-border/50 bg-card/50">
                                    <CardContent className="p-8">
                                        <div className="space-y-6">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                                                    Email Address
                                                </label>
                                                <div className={`relative transition-all duration-200 ${focused ? 'scale-[1.02]' : ''}`}>
                                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        onFocus={() => setFocused(true)}
                                                        onBlur={() => setFocused(false)}
                                                        placeholder="Enter your email address"
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={!email || isLoading}
                                                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                        Subscribing...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5" />
                                                        Subscribe to Newsletter
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-xs text-muted-foreground text-center leading-relaxed">
                                                By subscribing, you agree to receive marketing emails from us.
                                                You can unsubscribe at any time.{' '}
                                                <button type="button" className="text-primary hover:underline">
                                                    Privacy Policy
                                                </button>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Additional Info */}
                                <div className="text-center space-y-3">
                                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Trusted by 10,000+ customers</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                                        <span>✓ No spam, ever</span>
                                        <span>✓ Easy unsubscribe</span>
                                        <span>✓ Weekly updates only</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Subscribe;