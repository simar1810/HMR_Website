"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/', hasDropdown: false },
        { name: 'About', href: '/about', hasDropdown: true },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Menus', href: '/menus', hasDropdown: true },
        { name: 'Pages', href: '/pages', hasDropdown: true },
    ];

    const isActive = (path: string) => pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="w-full bg-white shadow-sm border-t-4 font-sans relative z-50 sticky top-0">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Healthy Minds Restaurant"
                        width={300}
                        height={100}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-1 cursor-pointer transition-colors ${isActive(link.href) ? 'text-red-600' : 'hover:text-red-600'
                                }`}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={14} />}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button (Desktop) */}
                <div className="hidden md:flex items-center">
                    <button className="bg-[#D90000] hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors cursor-pointer">
                        Get A Quotation
                    </button>
                </div>

                
                <button
                    className="md:hidden text-gray-700 hover:text-red-600 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-4 bg-opacity-95 backdrop-blur-sm animate-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col gap-4 text-base font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center justify-between py-2 border-b border-gray-50 ${isActive(link.href) ? 'text-red-600' : 'hover:text-red-600'
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex items-center gap-2">
                                    {link.name}
                                </span>
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-6 flex flex-col">
                        <button className="w-full bg-[#D90000] hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer text-center">
                            Get A Quotation
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
