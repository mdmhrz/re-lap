import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Heart,
    Star,
    ShoppingCart,
    ArrowRight,
    Eye,
    StarHalf
} from 'lucide-react';
import Link from 'next/link';

const ProductsCard = ({ laptop }) => {
    // Helper function to render star ratings
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        // Full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            );
        }

        // Half star
        if (hasHalfStar) {
            stars.push(
                <StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            );
        }

        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground/30" />
            );
        }

        return stars;
    };

    // Get condition styling
    const getConditionBadge = (condition) => {
        const styles = {
            'new': 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
            'used': 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
            'refurbished': 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
        };
        return styles[condition?.toLowerCase()] || 'bg-secondary text-secondary-foreground';
    };

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-card pt-0">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/5">
                <div className="absolute inset-0 bg-white p-6">
                    <img
                        src={laptop.image}
                        alt={`${laptop.brand} ${laptop.model}`}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Floating Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-background/90 backdrop-blur-sm hover:bg-background shadow-sm"
                    >
                        <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-background/90 backdrop-blur-sm hover:bg-background shadow-sm"
                    >
                        <Eye className="h-4 w-4" />
                    </Button>
                </div>

                {/* Condition Badge */}
                {laptop.condition && (
                    <div className="absolute top-3 left-3">
                        <Badge variant="outline" className={getConditionBadge(laptop.condition)}>
                            {laptop.condition}
                        </Badge>
                    </div>
                )}

                {/* Quick Add to Cart - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/20 to-transparent opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <Button
                        size="sm"
                        className="w-full bg-background text-foreground hover:bg-background/90 shadow-sm"
                        variant="secondary"
                    >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Quick Add
                    </Button>
                </div>
            </div>

            <CardContent className="p-6 space-y-4">
                {/* Brand */}
                <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20">
                        {laptop.brand}
                    </Badge>
                    {laptop.year && (
                        <span className="text-xs text-muted-foreground font-medium">
                            {laptop.year}
                        </span>
                    )}
                </div>

                {/* Product Name */}
                <div className="space-y-2 flex items-center justify-between">
                    <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
                        {laptop.model}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            {renderStars(laptop.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                            {laptop?.reviewCount}
                        </span>
                    </div>
                </div>

                <Separator />

                {/* Price Section */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-foreground">
                                    {laptop.discount ? (laptop.originalPrice - (laptop.originalPrice * laptop.discount / 100)).toFixed(0) : laptop.originalPrice}
                                </span>
                                {laptop.originalPrice && (
                                    <span className="text-sm text-muted-foreground line-through">
                                        ${laptop.originalPrice}
                                    </span>
                                )}
                            </div>
                            {laptop.discount && (
                                <Badge variant="destructive" className="text-xs">
                                    {laptop.discount}% OFF
                                </Badge>
                            )}
                        </div>

                        <Badge
                            variant="outline"
                            className="bg-emerald-50 text-emerald-700 border-emerald-200"
                        >
                            In Stock
                        </Badge>
                    </div>

                    {/* Additional Info */}
                    {laptop.warranty && (
                        <p className="text-xs text-muted-foreground">
                            🛡️ {laptop.warranty} warranty included
                        </p>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
                <Button className="w-full group/btn" size="lg">
                    <Link href={`/products/${laptop._id}`} className="flex items-center justify-center gap-2">
                        View Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
        </Card>
    );
};

export default ProductsCard;
