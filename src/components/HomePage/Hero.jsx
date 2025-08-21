

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-background text-foreground relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">

                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Discover the Future of <span className="text-primary">Electronics</span>
                    </h1>
                    <p className="text-muted-foreground mb-6 sm:text-lg">
                        ByteCart brings you the latest gadgets, smart devices, and accessories at unbeatable prices. Upgrade your tech lifestyle today!
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                            Shop Now
                        </Button>
                        <Button variant="outline" className="border-muted-foreground hover:bg-muted">
                            Learn More
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
                    <div className="relative w-full h-80 sm:h-96 lg:h-[28rem]">
                        <Image
                            src="/hero-electronics.png" // Replace with your hero image
                            alt="Electronics"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
