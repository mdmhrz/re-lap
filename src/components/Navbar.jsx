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
import LogoIcon from "./LogoIcon";
import { Menu } from 'lucide-react';
import Image from "next/image";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession();
    // console.log(session);
    const handleLogout = () => {
        signOut()
    };

    return (
        <nav className="  px-6 bg-background border-b border-border py-4 sticky top-0 z-5 ">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="border">
                    <Image width={120} height={10} src='/Relap.svg' alt="Relap logo"></Image>
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
                        status === 'authenticated' ? '' : <><Link href="/auth/login" className="hover:text-primary">
                            <Button>Login</Button>
                        </Link>
                            <Link href="/auth/register" className="hover:text-primary">
                                <Button className={'bg-background border  border-foreground text-accent-foreground outline-1'}>Register</Button>
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
                        <DropdownMenuContent align="end" className={'flex items-center justify-center flex-col gap-3 p-3'}>
                            <DropdownMenuItem><Link href={'/dashboard/add-product'}>Add Product</Link></DropdownMenuItem>
                            {status === 'authenticated' && <Button size={'sm'} onClick={() => handleLogout()} >
                                Logout
                            </Button>}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? "Close" : <Menu className="h-10 w-10" />}
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
        </nav >
    );
}
