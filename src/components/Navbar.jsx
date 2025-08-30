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
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession();

    const handleLogout = () => {
        signOut();
    };

    return (
        <nav className="bg-background border-b border-border py-4 sticky top-0 z-50">
            {/* 3-column grid: [logo][search grows][right nav / mobile toggle] */}
            <div className="container mx-auto grid grid-cols-[auto_1fr_auto] gap-4 px-6">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image width={120} height={32} src="/Relap.svg" alt="Relap logo" />
                </Link>

                {/* Search Bar (fills the middle column only, never overlaps) */}
                <div className="flex items-center w-full max-w-[600px] min-w-0 mx-auto">
                    <Input className="w-full  rounded-e-none" placeholder="Search..." />
                    <Button className="rounded-s-none bg-unique">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

                {/* Right side: Desktop Links + User menu (don’t shrink) */}
                <div className="hidden md:flex items-center gap-4 shrink-0">
                    <Link href="/products" className="hover:text-primary">
                        Products
                    </Link>
                    <Link href="/about" className="hover:text-primary">
                        About
                    </Link>
                    <Link href="/contact" className="hover:text-primary">
                        Contact
                    </Link>

                    {status !== "authenticated" && (
                        <>
                            <Link href="/auth/login">
                                <Button>Login</Button>
                            </Link>
                            <Link href="/auth/register">
                                <Button className="bg-background border border-foreground text-accent-foreground">
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}

                    <ModeToggle />

                    {/* User Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/avatar.png" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="flex items-center justify-center flex-col gap-3 p-3"
                        >
                            <DropdownMenuItem>
                                <Link href="/dashboard/add-product">Add Product</Link>
                            </DropdownMenuItem>
                            {status === "authenticated" && (
                                <Button size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Mobile Menu Toggle (right column on small screens) */}
                <div className="md:hidden justify-self-end">
                    <Button
                        variant="ghost"
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? "Close" : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Menu (full width row below) */}
                {isMobileMenuOpen && (
                    <div className="col-span-3 mt-3 bg-background border-t border-border flex flex-col md:hidden p-4 space-y-2">
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
