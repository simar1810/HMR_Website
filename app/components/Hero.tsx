"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-[600px] bg-black text-white overflow-hidden pt-20 md:pt-10 pb-10">

            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </div>

            <div className="container mx-auto px-4 md:px-10 h-full relative z-10 flex items-center">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full items-center">


                    <div className="space-y-3">

                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#D90000] animate-pulse"></span>
                            <span className="text-[10px] md:text-xs tracking-[0.2em] font-medium text-gray-200 uppercase">HEALTHY MINDS RESTAURANT</span>
                        </div>


                        <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-tight">
                            Your <span className="relative inline-block">
                                Trusted
                                <span className="absolute bottom-1 left-0 w-full h-3 md:h-5 bg-green-500/80 -z-10 -rotate-1 skew-x-12"></span>
                            </span> <br />
                            Nutritious Food And <br />
                            Healthy Food.
                        </h1>


                        <p className="text-gray-300 max-w-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>


                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                            <Link href="/subscribe">
                                <button className="bg-[#D90000] hover:bg-red-700 text-white lg:px-8 px-2 py-2 rounded-full font-bold text-xs md:text-base transition-transform hover:scale-105 flex items-center gap-2 group cursor-pointer shadow-lg shadow-red-900/20">
                                    Get Started
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="flex items-center gap-4">

                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black overflow-hidden relative bg-gray-700">

                                            <div className={`w-full h-full ${i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-purple-400' : 'bg-yellow-400'}`}></div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">290K Happy Customers</p>
                                    <p className="text-[10px] text-gray-400 font-medium">In Worldwide<br />19M meals delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="relative h-[650px] w-[550px] hidden lg:flex items-center justify-center overflow-hidden ml-20 ">
                        <Image
                            src="/overlayHero.png"
                            alt="Hero Statistics"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Mobile Image Card Design */}
                    <div className="relative h-[400px] w-[360px] flex justify-center lg:hidden mt-2 mb-30">
                        <div className="relative w-full  ">
                            <Image
                                src="/overlayHero.png"
                                alt="Hero Mobile"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Gradient for integration if needed */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div> */}
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
