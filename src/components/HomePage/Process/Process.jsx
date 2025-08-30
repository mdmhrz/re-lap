'use client'
import React, { useState } from 'react';
import { Search, Sparkles, Wrench, CheckCircle, ArrowRight, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Process = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: '01',
            title: 'Inspection',
            subtitle: 'Thorough Assessment',
            description: 'Thorough hardware and software testing to identify all components and performance metrics',
            icon: Search,
            color: 'from-blue-500/10 to-indigo-500/10',
            iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
            iconColor: 'text-blue-600 dark:text-blue-400',
            details: ['Hardware diagnostics', 'Performance benchmarking', 'Component assessment', 'Initial grading']
        },
        {
            id: '02',
            title: 'Cleaning',
            subtitle: 'Deep Sanitization',
            description: 'Professional cleaning and sanitization using specialized equipment and eco-friendly solutions',
            icon: Sparkles,
            color: 'from-emerald-500/10 to-green-500/10',
            iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
            iconColor: 'text-emerald-600 dark:text-emerald-400',
            details: ['Internal component cleaning', 'Screen restoration', 'Keyboard sanitization', 'Exterior polishing']
        },
        {
            id: '03',
            title: 'Repair',
            subtitle: 'Expert Restoration',
            description: 'Replace any faulty components with genuine parts and restore optimal functionality',
            icon: Wrench,
            color: 'from-amber-500/10 to-orange-500/10',
            iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
            iconColor: 'text-amber-600 dark:text-amber-400',
            details: ['Component replacement', 'System optimization', 'Software updates', 'Performance tuning']
        },
        {
            id: '04',
            title: 'Testing',
            subtitle: 'Quality Assurance',
            description: 'Final quality assurance testing to ensure every laptop meets our rigorous standards',
            icon: CheckCircle,
            color: 'from-purple-500/10 to-pink-500/10',
            iconBg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
            iconColor: 'text-purple-600 dark:text-purple-400',
            details: ['Stress testing', 'Battery calibration', 'Final inspection', 'Quality certification']
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Quality Process</span>
                </div>

                <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
                    Our Refurbishment Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    How we ensure every laptop meets our high standards through a meticulous 4-step process
                </p>
            </div>

            {/* Process Steps */}
            <div className="relative">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;
                        const isActive = activeStep === index;

                        return (
                            <div key={index} className="relative">
                                <Card
                                    className={`group cursor-pointer transition-all duration-500 hover:shadow-xl border-border/50 hover:border-primary/30 bg-gradient-to-br ${step.color} ${isActive ? 'ring-2 ring-primary/20 shadow-lg' : ''}`}
                                    onMouseEnter={() => setActiveStep(index)}
                                    onMouseLeave={() => setActiveStep(-1)}
                                >
                                    <CardContent className="p-6">
                                        {/* Step Number & Icon */}
                                        <div className="flex items-center justify-between mb-6">
                                            <Badge
                                                variant="outline"
                                                className="text-xs font-bold px-3 py-1 border-primary/30 text-primary bg-primary/5"
                                            >
                                                {step.id}
                                            </Badge>
                                            <div className={`p-3 rounded-xl ${step.iconBg} transition-all duration-300`}>
                                                <IconComponent className={`w-6 h-6 ${step.iconColor}`} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3 mb-6">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm font-medium text-primary/80">
                                                {step.subtitle}
                                            </p>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Details List */}
                                        <div className={`space-y-2 transition-all duration-300 ${isActive ? 'opacity-100 max-h-32' : 'opacity-60 max-h-20 overflow-hidden'}`}>
                                            {step.details.map((detail, detailIndex) => (
                                                <div key={detailIndex} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                                    <span className="text-xs text-foreground font-medium">
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Indicator */}
                                        <div className="mt-6 pt-4 border-t border-border/30">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    Step {index + 1} of {steps.length}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    {steps.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i <= index ? 'bg-primary' : 'bg-border'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>

                                    {/* Arrow Connector (Desktop) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                                            <div className="p-2 rounded-full bg-background border border-border shadow-sm group-hover:border-primary/30 transition-all duration-300">
                                                <ArrowRight className="w-4 h-4 text-primary" />
                                            </div>
                                        </div>
                                    )}
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <div className="text-left">
                        <p className="text-sm font-semibold text-foreground">Quality Guaranteed</p>
                        <p className="text-xs text-muted-foreground">Every laptop comes with our comprehensive warranty</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;