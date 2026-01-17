"use client";

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image with Green Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/testimonial-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-green-600/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-green-900/20"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-600 "></div>
                        <span className="text-xs tracking-[0.2em] font-medium text-white uppercase">Client Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
                        <span className="relative inline-block mr-2">
                            Discover
                            <span className="absolute left-0 -bottom-2 w-full h-2 bg-red-600 -skew-x-12"></span>
                        </span>
                        What Our Clients Say <br /> About Our Catering.
                    </h2>
                </div>

                {/* Glassmorphism Card */}
                <div className="bg-[#1a472a]/40 backdrop-blur-sm rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Side: Testimonial content */}
                        <div className="p-12 flex flex-col justify-center relative">
                            {/* Logo/Icon */}
                            <div className="mb-8 relative w-24 h-12">
                                {/* Using a placeholder icon/text for the logo in the image */}
                                <div className="relative w-24 h-12">
                                    <Image
                                        src="/ipsum.png"
                                        alt="Ipsum Logo"
                                        fill
                                        className="object-contain opacity-100"
                                    />
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium mb-12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            <div className="mt-auto">
                                <div className="w-12 h-1 bg-red-600 mb-6"></div>
                                <h4 className="text-white font-bold text-lg">Mr. John Doe</h4>
                                <span className="text-green-300 text-xs tracking-widest uppercase mt-1 block">Clients</span>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="relative h-[400px] lg:h-[500px] p-10 py-2 md:py-20">
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                                <Image
                                    src="/testimonial.png"
                                    alt="Client cooking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    <button className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white transition-colors"></button>
                    <button className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white transition-colors"></button>
                    <button className="w-8 h-2.5 rounded-full bg-[#419E4B]"></button>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
