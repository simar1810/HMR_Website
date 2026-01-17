"use client";

import React from 'react';
import Image from 'next/image';
import { FileText, Handshake, Smile, Store, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen min-h-[600px] bg-black text-white overflow-hidden md:pt-10">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0" />
            </div>

            <div className="container mx-auto px-4 md:px-10 h-full relative z-10 flex items-center">
                <div className="grid md:grid-cols-2 gap-12 w-full items-center">

                    {/* Left Content */}
                    <div className="space-y-3">
                        {/* Tag */}
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            <span className="text-xs tracking-[0.2em] font-medium text-gray-300">HEALTHY MINDS RESTAURANT</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Your <span className="relative inline-block">
                                Trusted
                                <span className="absolute bottom-2 -left-44 w-full h-5 bg-green-500/80 -z-10 -rotate-1 skew-x-12"></span>
                            </span> <br />
                            Nutritious Food And <br />
                            Healthy Food.
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 max-w-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        {/* CTA and Social Proof */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <button className="bg-[#D90000] hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2 group cursor-pointer">
                                Get Started
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="flex items-center gap-4">
                                {/* Avatar Group */}
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative bg-gray-700">
                                            {/* Placeholder generic avatars if generic images aren't available, but using colors for now */}
                                            <div className={`w-full h-full ${i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-purple-400' : 'bg-yellow-400'}`}></div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs font-bold">890+ People Trust Us.</p>
                                    <p className="text-[10px] text-gray-400">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Floating Cards */}
                    <div className="relative h-[400px] hidden md:block">

                        {/* Card 1 - Menus */}
                        <div className="absolute -top-15 left-1/4 w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl hover:bg-white/15 transition-colors">
                            <div className="self-end text-white/80"><FileText size={24} /></div>
                            <div>
                                <h3 className="text-3xl font-bold">250+</h3>
                                <p className="text-sm text-gray-300">Unique Menus</p>
                            </div>
                        </div>

                        {/* Card 2 - Clients */}
                        <div className="absolute -top-0 right-0 w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl hover:bg-white/15 transition-colors" >
                            <div className="self-end text-white/80"><Handshake size={24} /></div>
                            <div>
                                <h3 className="text-3xl font-bold">375+</h3>
                                <p className="text-sm text-gray-300">Corporate Clients</p>
                            </div>
                        </div>

                        {/* Card 3 - Rate */}
                        <div className="absolute bottom-12 left-1/4 w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl hover:bg-white/15 transition-colors">
                            <div className="self-end text-white/80"><Smile size={24} /></div>
                            <div>
                                <h3 className="text-3xl font-bold">98%</h3>
                                <p className="text-sm text-gray-300">Customer Rate</p>
                            </div>
                        </div>

                        {/* Card 4 - Branch */}
                        <div className="absolute -bottom-4 right-0 w-48 h-48 bg-green-600/20 backdrop-blur-md rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl hover:bg-white/15 transition-colors">
                            <div className="self-end text-white/80"><Store size={24} /></div>
                            <div>
                                <h3 className="text-3xl font-bold">75+</h3>
                                <p className="text-sm text-gray-300">City Branch</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {/* Features Strip */}
            <div className="absolute bottom-0 w-full bg-white z-20 shadow-lg ">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-around gap-6">

                    <div className="flex items-center gap-2">
                        <Image
                            src="/natural_ingredients.png"
                            alt="Natural Ingredients"
                            width={200}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                    </div>

                    <div className="hidden md:block w-px h-8"></div>

                    <div className="flex items-center gap-2">
                        <Image
                            src="/allergen-friendly.png"
                            alt="Allergen Friendly"
                            width={200}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                    </div>

                    <div className="hidden md:block w-px h-8"></div>

                    <div className="flex items-center gap-2">
                        <Image
                            src="/vegetarian_options.png"
                            alt="Vegetarian Options"
                            width={200}
                            height={50}
                            className="h-8 w-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
