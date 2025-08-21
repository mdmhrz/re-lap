"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="  px-6 bg-background border-b border-border py-4 ">
            <div className=" container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    ByteCart
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/products" className="hover:text-primary">
                        Products
                    </Link>
                    <Link href="/about" className="hover:text-primary">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-primary">
                        Contact
                    </Link>
                    <ModeToggle></ModeToggle>

                    {/* User Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/avatar.png" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? "Close" : "Menu"}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-background border-t border-border flex flex-col md:hidden p-4 space-y-2">
                        <Link href="/products" className="hover:text-primary">
                            Products
                        </Link>
                        <Link href="/about" className="hover:text-primary">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-primary">
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
