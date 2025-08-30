"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Clock,
    Shield,
    Award,
    Heart,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import Image from 'next/image';




export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/products", label: "Laptops" },
        { href: "/services", label: "Services" },
        { href: "/warranty", label: "Warranty" },
        { href: "/contact", label: "Contact" }
    ];

    const supportLinks = [
        { href: "/faq", label: "FAQ" },
        { href: "/support", label: "Tech Support" },
        { href: "/shipping", label: "Shipping Info" },
        { href: "/returns", label: "Returns" },
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" }
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }
    ];

    return (
        <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary/15 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="shrink-0">
                                <Image width={120} height={32} src="/Relap.svg" alt="Relap logo" />
                            </Link>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                            Your trusted partner for premium refurbished laptops. Quality, affordability,
                            and reliability - delivered with every device.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">
                                <Shield className="w-3 h-3 mr-1" />
                                Certified Refurbished
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                5 Years Experience
                            </Badge>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="w-4 h-4 text-primary group-hover:text-primary/80" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Heart className="w-4 h-4 text-primary" />
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {supportLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-primary/60 group-hover:bg-primary transition-colors duration-200" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Get in Touch
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Call Us</p>
                                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Email Us</p>
                                    <p className="text-sm text-muted-foreground">hello@relap.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Visit Us</p>
                                    <p className="text-sm text-muted-foreground">123 Tech Street, Digital City</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="border-t border-border pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <p className="text-sm text-muted-foreground">
                                © {new Date().getFullYear()} ReLap. All rights reserved.
                            </p>
                            <div className="hidden md:flex items-center gap-4 text-xs text-muted-foreground">
                                <span>•</span>
                                <span>Secure payments</span>
                                <span>•</span>
                                <span>30-day returns</span>
                                <span>•</span>
                                <span>Free shipping</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Badge variant="outline" className="text-xs">
                                <Heart className="w-3 h-3 mr-1" />
                                Made with care
                            </Badge>
                            <p className="text-xs text-muted-foreground">
                                Crafted in Digital City
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}