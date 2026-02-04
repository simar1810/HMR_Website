"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



    const isActive = (path: string) => pathname === path;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="absolute top-0 w-full z-50 bg-transparent">
            <div className="container mx-auto px-4 md:px-8 h-24 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src={pathname === '/' ? "/footer_logo.png" : "/logo.png"}
                            alt="Healthy Minds Restaurant"
                            width={300}
                            height={100}
                            className="h-16 w-auto object-contain" // Adjusted height
                            priority
                        />
                    </Link>
                </div>

                {/* Right Side Menu Trigger */}
                <div>
                    <button
                        onClick={toggleMobileMenu}
                        className="bg-[#D90000] hover:bg-red-700 text-white w-16 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={34} />}
                    </button>
                </div>
            </div>


            {/* Full Screen Slide-Up Menu */}
            <div className={`fixed inset-0 z-[100] bg-white flex flex-col lg:flex-row transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>

                {/* Left Side (Green) - Bottom on Mobile, Left on Desktop */}
                <div className="w-full lg:w-[65%] bg-[#439F48] relative flex flex-col items-center justify-center p-8 md:p-12 lg:p-12 overflow-hidden order-2 lg:order-1">

                    {/* Main Image - Hidden on Mobile */}
                    <div className="hidden lg:block relative w-full aspect-square rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                        <Image
                            src="/what_we_do1.png" // Placeholder close to "people eating/talking"
                            alt="Download App"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>

                        {/* Floating Button on Image */}
                        <button className="absolute bottom-6 left-6 bg-[#D90000] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                            Join Us &rarr;
                        </button>
                    </div>

                    <div className="w-full flex lg:block flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
                        {/* Mobile-optimized Download Text */}
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 lg:mb-6">Download Now</h2>

                        <div className="flex gap-4">
                            {/* App Store Placeholder */}
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-2 px-4 flex items-center gap-2 text-white transition-colors">
                                <div className="text-2xl"></div> {/* Apple Icon */}
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">Download on the</div>
                                    <div className="text-sm font-bold leading-none">App Store</div>
                                </div>
                            </button>
                            {/* Play Store Placeholder */}
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-2 px-4 flex items-center gap-2 text-white transition-colors">
                                <div className="text-xl">▶</div> {/* Play Icon */}
                                <div className="text-left">
                                    <div className="text-[10px] uppercase">GET IT ON</div>
                                    <div className="text-sm font-bold leading-none">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side (White) - Top on Mobile, Right on Desktop */}
                <div className="w-full lg:w-[35%] bg-white relative flex flex-col p-8 md:p-12 lg:p-16 order-1 lg:order-2 flex-1 lg:h-full justify-start">

                    {/* Mobile Logo */}
                    <div className="absolute top-6 left-6 lg:hidden">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={40}
                            className="object-contain"
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-8 right-8 text-gray-900 hover:text-red-600 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    {/* Nav Links */}
                    <nav className="flex flex-col gap-6 mt-30 md:mt-24 lg:mt-24">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Plans & Package', href: '/subscribe' }, // Updating name to match UI
                            { name: 'Menu', href: '/menu' }, // New Link
                            { name: 'Blogs', href: '/blogs' }, // New Link?
                            { name: 'Contact Us', href: '/contact' }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl md:text-3xl font-bold pb-4 border-b border-gray-100 transition-colors flex justify-between group ${isActive(link.href) ? 'text-[#D90000]' : 'text-gray-900 hover:text-[#439F48]'
                                    }`}
                            >
                                {link.name}
                                <span className={`transition-opacity text-[#439F48] ${isActive(link.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>&rarr;</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Language Selector */}
                    <div className="mt-auto pt-10">
                        <button className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-full text-gray-600 font-medium">
                            Language: <span className="text-gray-900 font-bold">Arabic</span> <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
