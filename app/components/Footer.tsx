"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronDown, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 pt-4 pb-2 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">

                    {/* Left Section */}
                    <div className="flex-1 space-y-10">
                        {/* Logo */}
                        <div className="relative w-16 h-16">
                            <Image
                                src="/logo.png" // Assuming reusing same logo, might need a colored version if original was white-only. Usually logos work on both or have variants. 
                                alt="Healthy Minds Restaurant"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        {/* Navigation */}
                        <nav className="flex flex-wrap gap-6 text-sm font-medium text-gray-600">
                            <a href="#" className="hover:text-black transition-colors">Plans & Packages</a>
                            <a href="#" className="hover:text-black transition-colors">Menu</a>
                            <a href="#" className="hover:text-black transition-colors">The Cafe</a>
                            <a href="#" className="hover:text-black transition-colors">Careers</a>
                            <a href="#" className="hover:text-black transition-colors">Blog</a>
                        </nav>

                        {/* Selectors */}
                        <div className="flex gap-4">
                            <div className="relative">
                                <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-gray-300 bg-white shadow-sm min-w-[140px] justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg">🌍</span> {/* Placeholder for World Icon */}
                                        <span>World</span>
                                    </div>
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                            <div className="relative">
                                <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 hover:border-gray-300 bg-white shadow-sm min-w-[140px] justify-between">
                                    <span>English</span>
                                    <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                            <span>© 2026 HMR Inc. Privacy Policy</span>
                            <a href="#" className="hover:text-gray-600">Terms & Conditions</a>
                            <a href="#" className="hover:text-gray-600">Cookies</a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-start lg:items-end gap-10">

                        {/* QR Code App Download */}
                        <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative w-16 h-16 bg-gray-900 rounded-lg p-1">
                                {/* Placeholder for QR Code */}
                                <div className="w-full h-full bg-white p-1">
                                    <div className="w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover"></div>
                                </div>
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-gray-900 text-sm mb-1">Scan the QR code</p>
                                <p className="text-xs text-gray-500">to download app</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            <span className="font-bold text-gray-900 text-sm">Follow us</span>
                            <div className="flex gap-4 text-gray-400">
                                <a href="#" className="hover:text-black transition-colors"><Image src="/tiktok.svg" width={20} height={20} alt="TikTok" className="w-5 h-5 opacity-60 hover:opacity-100" /></a>
                                {/* If icons aren't available as SVG files, I'll allow Lucide fallback or text logic, but user requested specific design. I will use standard lucide icons where possible closely matching or placeholders if needed. Based on image: Tiktok, Insta, X, Linkedin. */}
                                {/* Let's use Lucide for standard ones and placeholder for others or FontAwesome logic if available, currently only Lucide. */}
                                {/* Actually, let's use Lucide for robust code. */}
                                <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
