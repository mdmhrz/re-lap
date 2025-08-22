import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Heart,
    Star,
    Cpu,
    HardDrive,
    Monitor,
    ArrowRight,
    ShoppingCart,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({ laptop }) => {
    // Quick specs for display


    // Determine condition styling
    const getConditionStyle = (condition) => {
        switch (condition?.toLowerCase()) {
            case 'new':
                return 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800';
            case 'used':
                return 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800';
            case 'refurbished':
                return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800';
            default:
                return 'bg-secondary text-secondary-foreground border-secondary';
        }
    };

    return (
        <Card className="group relative overflow-hidden bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 border-0 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-background via-muted/10 to-muted/20">
                <Image
                    src={laptop.image}
                    alt={`${laptop.brand} ${laptop.model}`}
                    fill
                    className="object-contain p-6 transition-all duration-500 group-hover:scale-110"
                />

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-background/80 backdrop-blur hover:bg-background/90 border-0 shadow-md"
                    >
                        <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 bg-background/80 backdrop-blur hover:bg-background/90 border-0 shadow-md"
                    >
                        <ShoppingCart className="h-4 w-4" />
                    </Button>
                </div>

                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                    <Badge className={`${getConditionStyle(laptop.condition)} font-medium shadow-sm`}>
                        {laptop.condition}
                    </Badge>
                </div>

                {/* Year Badge */}
                {laptop.year && (
                    <div className="absolute bottom-4 left-4">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur text-xs">
                            {laptop.year}
                        </Badge>
                    </div>
                )}
            </div>

            <CardContent className="p-6 space-y-4">
                {/* Brand & Model */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20">
                            {laptop.brand}
                        </Badge>
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                        </div>
                    </div>
                    <h3 className="font-bold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {laptop.model}
                    </h3>
                </div>

                {/* Quick Specifications */}
                {/* <div className="space-y-3">
                    <Separator className="opacity-50" />
                    <div className="grid grid-cols-3 gap-3">
                        {quickSpecs.map((spec, index) => (
                            <div key={index} className="text-center space-y-1">
                                <div className="flex justify-center">
                                    <div className="p-1.5 rounded-md bg-muted/50">
                                        <spec.icon className="h-3 w-3 text-muted-foreground" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-medium truncate" title={spec.value}>
                                        {spec.value}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">{spec.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Pricing */}
                <div className="space-y-3">
                    <Separator className="opacity-50" />
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-primary">
                                {laptop.currency} {laptop.price}
                            </p>
                            {laptop.warranty && (
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Zap className="h-3 w-3" />
                                    <span>Warranty: {laptop.warranty}</span>
                                </div>
                            )}
                        </div>
                        <Badge
                            variant="secondary"
                            className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800"
                        >
                            In Stock
                        </Badge>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
                <Link href={`/products/${laptop._id}`} className="w-full">
                    <Button
                        className="w-full group/btn relative overflow-hidden"
                        size="lg"
                    >
                        <span className="flex items-center justify-center gap-2 relative z-10">
                            View Details
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </span>

                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Button>
                </Link>
            </CardFooter>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60 group-hover:w-full transition-all duration-500" />
        </Card>
    );
};

export default ProductsCard;