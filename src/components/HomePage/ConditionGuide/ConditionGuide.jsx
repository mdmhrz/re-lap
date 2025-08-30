import React from 'react';
import { Check, Star, Award, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ConditionGuide = () => {
    const conditions = [
        {
            title: 'Excellent',
            subtitle: 'Like new condition with minimal signs of use. Perfect for professionals.',
            icon: Award,
            badgeVariant: 'default',
            features: [
                'No visible scratches',
                'Perfect screen',
                'All ports working',
                'Original accessories'
            ],
            gradient: 'from-emerald-500/10 to-green-500/10',
            iconBg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
            iconColor: 'text-emerald-600 dark:text-emerald-400'
        },
        {
            title: 'Good',
            subtitle: 'Light signs of use but fully functional. Great value for everyday use.',
            icon: Star,
            badgeVariant: 'secondary',
            features: [
                'Minor cosmetic wear',
                'Excellent performance',
                'All functions work',
                'Tested thoroughly'
            ],
            gradient: 'from-blue-500/10 to-cyan-500/10',
            iconBg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
            iconColor: 'text-blue-600 dark:text-blue-400'
        },
        {
            title: 'Fair',
            subtitle: 'Noticeable wear but reliable performance. Perfect for budget-conscious buyers.',
            icon: ShieldCheck,
            badgeVariant: 'outline',
            features: [
                'Visible wear marks',
                'Fully functional',
                'Great for basic tasks',
                'Best value option'
            ],
            gradient: 'from-amber-500/10 to-orange-500/10',
            iconBg: 'bg-amber-500/10 group-hover:bg-amber-500/20',
            iconColor: 'text-amber-600 dark:text-amber-400'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto p-6">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Quality Assurance</span>
                </div>

                <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
                    Condition Guide
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Understanding our laptop condition ratings to help you make the perfect choice
                </p>
            </div>

            {/* Condition Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {conditions.map((condition, index) => {
                    const IconComponent = condition.icon;

                    return (
                        <Card
                            key={index}
                            className={`relative overflow-hidden group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/20 hover:scale-[1.02] bg-gradient-to-br ${condition.gradient}`}
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${condition.iconBg} transition-all duration-300`}>
                                        <IconComponent className={`w-6 h-6 ${condition.iconColor}`} />
                                    </div>
                                    <Badge variant={condition.badgeVariant} className="text-xs font-semibold px-3 py-1">
                                        {condition.title}
                                    </Badge>
                                </div>

                                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                    {condition.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {condition.subtitle}
                                </p>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <div className="space-y-3">
                                    {condition.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-start gap-3 group/item"
                                            style={{
                                                animationDelay: `${featureIndex * 100}ms`
                                            }}
                                        >
                                            <div className="mt-0.5 p-1 rounded-full bg-emerald-500/10 group-hover/item:bg-emerald-500/20 transition-all duration-200">
                                                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                                            </div>
                                            <span className="text-sm text-foreground font-medium group-hover/item:text-primary transition-colors duration-200">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Quality Indicator Bar */}
                                <div className="mt-6 pt-4 border-t border-border/50">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-muted-foreground">Quality Rating</span>
                                        <span className="text-xs font-semibold text-foreground">
                                            {index === 0 ? '95-100%' : index === 1 ? '80-94%' : '65-79%'}
                                        </span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-1000 ease-out ${index === 0 ? 'bg-emerald-500 w-full' :
                                                    index === 1 ? 'bg-blue-500 w-4/5' :
                                                        'bg-amber-500 w-3/5'
                                                }`}
                                            style={{
                                                animationDelay: `${index * 200}ms`
                                            }}
                                        />
                                    </div>
                                </div>
                            </CardContent>

                            {/* Subtle animated border effect */}
                            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-[1px] rounded-lg bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                        All laptops undergo rigorous testing and quality assurance
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ConditionGuide;