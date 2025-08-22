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
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession();
    console.log(session);
    const handleLogout = () => {
        signOut()
    };

    return (
        <nav className="  px-6 bg-background border-b border-border py-4 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold">
                    ReLap
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
                    {
                        status === 'authenticated' ? <Button onClick={() => handleLogout()} className="hover:text-primary">
                            Logout
                        </Button> : <><Link href="/auth/login" className="hover:text-primary">
                            Login
                        </Link>
                            <Link href="/auth/register" className="hover:text-primary">
                                Register
                            </Link></>
                    }



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
