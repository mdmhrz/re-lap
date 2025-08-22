"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border text-muted-foreground">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div>
                    <h2 className="text-xl font-bold">ReLap</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Redefining Your Laptop Experience
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/" className="hover:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-primary">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-primary">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h3 className="font-semibold mb-2">Resources</h3>
                    <ul className="space-y-1">
                        <li>
                            <Link href="/blog" className="hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="hover:text-primary">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="/support" className="hover:text-primary">
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:text-primary">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-2">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                        Get the latest updates and news.
                    </p>
                    <div className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Your email"
                            className="flex-1"
                        />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 py-4 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} MyBrand. All rights reserved.
            </div>
        </footer>
    );
}
