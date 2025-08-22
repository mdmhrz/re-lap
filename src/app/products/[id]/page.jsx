// app/product/[id]/page.js
import React from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Heart,
    ShoppingCart,
    Share2,
    Shield,
    Truck,
    RotateCcw,
    Star,
    Check,
    Clock,
    Monitor,
    Cpu,
    HardDrive,
    Battery,
    Weight,
    ArrowLeft,
    Plus,
    Minus,
    Info,
    Award,
    Zap
} from "lucide-react";

import { ObjectId } from "mongodb";
import dbConnect, { collectionName } from "@/lib/dbConnect";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ProductDetails = async ({ params }) => {
    const p = await params;
    // Fetch product directly from MongoDB
    const laptop = await dbConnect(collectionName.LAPTOPS).findOne({ _id: new ObjectId(p.id) });

    if (!laptop) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Card className="max-w-md mx-4">
                    <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                            <Monitor className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Product Not Found</h2>
                        <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
                        <Button variant="outline" className="w-full">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Products
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const specifications = [
        { icon: Cpu, label: "Processor", value: laptop.processor, category: "Performance" },
        { icon: Monitor, label: "RAM", value: laptop.ram, category: "Memory" },
        { icon: HardDrive, label: "Storage", value: laptop.storage, category: "Storage" },
        { icon: Monitor, label: "Graphics", value: laptop.graphics, category: "Graphics" },
        { icon: Monitor, label: "Display", value: laptop.display, category: "Display" },
        { icon: Battery, label: "Battery", value: laptop.battery, category: "Power" },
        { icon: Weight, label: "Weight", value: laptop.weight, category: "Physical" },
        { icon: Monitor, label: "OS", value: laptop.os, category: "Software" },
    ];

    const features = [
        { icon: Zap, text: "High-performance computing for demanding tasks" },
        { icon: Award, text: "Premium build quality with durable materials" },
        { icon: Battery, text: "Energy efficient design for extended battery life" },
        { icon: Shield, text: "Advanced thermal management system" },
        { icon: Monitor, text: "Multiple connectivity options and ports" },
    ];

    const trustIndicators = [
        {
            icon: Shield,
            title: "Warranty Protection",
            description: laptop.warranty,
            accent: "text-emerald-600 dark:text-emerald-400"
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "2-3 business days",
            accent: "text-blue-600 dark:text-blue-400"
        },
        {
            icon: RotateCcw,
            title: "Easy Returns",
            description: "30 days hassle-free",
            accent: "text-purple-600 dark:text-purple-400"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
            {/* Breadcrumb */}
            <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm" className="h-auto p-0 hover:bg-transparent">
                            <Link className="flex items-center justify-center" href={'/products'}>
                                <ArrowLeft className="h-4 w-4 mr-1" />
                                Back
                            </Link>
                        </Button>
                        <span>/</span>
                        <span>Products</span>
                        <span>/</span>
                        <span className="text-foreground font-medium">{laptop.brand} {laptop.model}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Product Images - Left Column */}
                    <div className="lg:col-span-6 space-y-6">
                        <Card className="overflow-hidden border-0 shadow-xl bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-background to-muted/10">
                                <Image
                                    src={laptop.image}
                                    alt={`${laptop.brand} ${laptop.model}`}
                                    fill
                                    className="object-contain transition-all duration-500 hover:scale-105 p-8"
                                    priority
                                />
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <Badge
                                        variant={laptop.condition === "New" ? "default" : "secondary"}
                                        className="shadow-md"
                                    >
                                        {laptop.condition}
                                    </Badge>
                                    {laptop.condition === "New" && (
                                        <Badge variant="outline" className="bg-background/80 backdrop-blur">
                                            Latest Model
                                        </Badge>
                                    )}
                                </div>
                                <div className="absolute top-6 right-6 flex gap-2">
                                    <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur hover:bg-background/90">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur hover:bg-background/90">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {trustIndicators.map((indicator, index) => (
                                <Card key={index} className="border-0 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/30 hover:bg-card/50 transition-colors duration-200">
                                    <CardContent className="p-6 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="p-3 rounded-full bg-muted/50">
                                                <indicator.icon className={`h-6 w-6 ${indicator.accent}`} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-sm">{indicator.title}</p>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    {indicator.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Product Information - Right Column */}
                    <div className="lg:col-span-6 space-y-8">
                        {/* Product Header */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <Badge variant="outline" className="w-fit bg-primary/5 text-primary border-primary/20">
                                    {laptop.brand}
                                </Badge>
                                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    {laptop.model}
                                </h1>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 fill-primary text-primary"
                                            />
                                        ))}
                                    </div>
                                    <Separator orientation="vertical" className="h-6" />
                                    <span className="text-muted-foreground">
                                        <span className="font-semibold text-foreground">4.8</span> (124 reviews)
                                    </span>
                                </div>
                            </div>

                            {/* Pricing Section */}
                            <Card className="border-0 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent p-6">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-4xl font-bold text-primary">
                                                {laptop.currency} {laptop.price}
                                            </span>
                                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
                                                <Clock className="h-3 w-3 mr-1" />
                                                In Stock
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span>Year: <span className="font-medium text-foreground">{laptop.year}</span></span>
                                            <Separator orientation="vertical" className="h-4" />
                                            <span>Condition: <span className="font-medium text-foreground">{laptop.condition}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Quick Specifications */}
                        <Card className="border-0 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-2">
                                    <Info className="h-5 w-5" />
                                    Key Specifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {specifications.slice(0, 4).map((spec, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                                            <div className="p-2 rounded-md bg-primary/10">
                                                <spec.icon className="h-4 w-4 text-primary" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-medium text-sm">{spec.label}</p>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {spec.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quantity and Actions */}
                        <Card className="border-0 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-medium">Quantity:</span>
                                    <div className="flex items-center border rounded-lg">
                                        <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="w-12 text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Button size="lg" className="flex-1 h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                                        <ShoppingCart className="h-5 w-5 mr-2" />
                                        Add to Cart
                                    </Button>
                                    <Button size="lg" variant="outline" className="flex-1 h-12 text-base font-semibold">
                                        Buy Now
                                    </Button>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/30 rounded-lg p-3">
                                    <Check className="h-4 w-4 text-emerald-600" />
                                    <span>Free shipping on orders over $500</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className="mt-16">
                    <Tabs defaultValue="specs" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/30 backdrop-blur">
                            <TabsTrigger value="specs" className="text-base font-medium">
                                Specifications
                            </TabsTrigger>
                            <TabsTrigger value="features" className="text-base font-medium">
                                Features
                            </TabsTrigger>
                            <TabsTrigger value="reviews" className="text-base font-medium">
                                Reviews
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="specs" className="mt-8">
                            <Card className="border-0 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/30">
                                <CardHeader>
                                    <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <div className="divide-y divide-border/50">
                                        {specifications.map((spec, index) => (
                                            <div key={index} className="flex items-center justify-between p-6 hover:bg-muted/20 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <spec.icon className="h-5 w-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold">{spec.label}</span>
                                                        <p className="text-xs text-muted-foreground mt-1">{spec.category}</p>
                                                    </div>
                                                </div>
                                                <span className="text-muted-foreground font-medium">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="features" className="mt-8">
                            <Card className="border-0 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/30">
                                <CardHeader>
                                    <CardTitle className="text-xl">Product Features</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                                            <div className="p-2 rounded-lg bg-primary/10 mt-1">
                                                <feature.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium leading-relaxed">{feature.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="reviews" className="mt-8">
                            <Card className="border-0 bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/30">
                                <CardContent className="p-16 text-center">
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                                            <Star className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
                                            <p className="text-muted-foreground">
                                                Reviews and ratings will be available soon. Be the first to share your experience!
                                            </p>
                                        </div>
                                        <Button variant="outline" className="mt-4">
                                            Write a Review
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;