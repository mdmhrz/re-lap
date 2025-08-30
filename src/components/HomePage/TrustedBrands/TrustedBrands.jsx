'use client'
import React from 'react';
import { Award, Shield, Star } from 'lucide-react';

const TrustedBrands = () => {
    const brands = [
        {
            name: 'Dell',
            logo: 'https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo.png'
        },
        {
            name: 'Apple',
            logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png'
        },
        {
            name: 'Lenovo',
            logo: 'https://p4-ofp.static.pub/fes/cms/2022/11/14/h82es5y402b4rh1089sf86ay7n9sdl721044.png'
        },
        {
            name: 'HP',
            logo: 'https://logos-world.net/wp-content/uploads/2020/11/HP-Logo-700x394.png'
        },
        {
            name: 'ASUS',
            logo: 'https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png'
        },
        {
            name: 'Acer',
            logo: 'https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo-500x281.png'
        },
        {
            name: 'Microsoft',
            logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-700x394.png'
        },
        {
            name: 'Samsung',
            logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png'
        }
    ];

    // Duplicate brands for seamless loop
    const duplicatedBrands = [...brands, ...brands];

    return (
        <div className="w-full py-16 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Trusted Brands
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We work with the world's leading laptop manufacturers
                    </p>
                </div>

                {/* Auto-scrolling Brand Carousel */}
                <div className="relative mb-16 overflow-hidden">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Scrolling Container */}
                    <div className="flex animate-scroll">
                        {duplicatedBrands.map((brand, index) => (
                            <div
                                key={`${brand.name}-${index}`}
                                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                            >
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-h-12 max-w-24 object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'block';
                                    }}
                                />
                                <div className="hidden text-lg font-semibold text-foreground">
                                    {brand.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <Award className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-foreground">8+</div>
                            <div className="text-sm text-muted-foreground">Premium Brands</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-foreground">100%</div>
                            <div className="text-sm text-muted-foreground">Authentic Products</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <Star className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-foreground">5★</div>
                            <div className="text-sm text-muted-foreground">Quality Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default TrustedBrands;