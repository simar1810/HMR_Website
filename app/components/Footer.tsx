"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#D90000] text-white pt-20 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    
                    <div className="space-y-6">
                        <div className="relative w-32 h-16">
                            <Image
                                src="/footer_logo.png"
                                alt="Healthy Minds Restaurant"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-gray-100 max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail size={18} />
                                <span className="text-sm">Hello@Email.co</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} />
                                <span className="text-sm">+44 123 456 789</span>
                            </div>
                        </div>
                    </div>

                    
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-100">
                            <li><a href="#" className="hover:text-white hover:underline">Homepage</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Homepage</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Homepage</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Homepage</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Homepage</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h3 className="text-xl font-bold mb-6">Featured Links</h3>
                        <ul className="space-y-4 text-sm text-gray-100">
                            <li><a href="#" className="hover:text-white hover:underline">Customized Food</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Fully Diet Menus</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Healthy Clean Food</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Food Certificate</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Healthy Certificate</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Refund Policy</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="text-xl font-bold mb-4">Subscribe Our Newslater</h3>
                        <p className="text-sm text-gray-100 mb-6">
                            Get Our Latest Update & New Offers Sales Discount
                        </p>

                        
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                <Youtube size={16} />
                            </a>
                            
                            <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                                <div className="text-xs font-bold">P</div>
                            </a>
                        </div>

                        
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-white/20 text-white placeholder-white/70 rounded-full py-4 px-6 pr-14 border-none outline-none focus:ring-2 focus:ring-white/40"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#B90000] rounded-full flex items-center justify-center hover:bg-red-800 transition-colors shadow-lg">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>

                
                <div className="border-t border-dashed border-white/30 w-full mb-8"></div>

                
                <div className="text-center text-xs font-medium tracking-widest uppercase text-white/80">
                    ALLRIGHT RESERVED - SOUVIK DEY
                </div>
            </div>
        </footer>
    );
};

export default Footer;
