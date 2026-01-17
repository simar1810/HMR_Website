"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckSquare, Play, Leaf, Users, Truck, FileCheck } from 'lucide-react';

const WhoWeAre = () => {
    // Using state to track active feature if interactivity represents functionality, 
    // though the design implies a specific static look. 
    // For now, I'll hardcode the "active" style to the first item to match the design.
    const [activeFeature] = useState(0);

    const features = [
        { title: "Healthy And Clean Food", icon: Leaf },
        { title: "Good For Any People", icon: Users },
        { title: "Delivery Catering Ready", icon: Truck },
        { title: "Clean Food Grade Certification", icon: FileCheck },
    ];

    return (
        <section className="bg-[#EFEEE5] py-20">
            <div className="container mx-auto px-4 md:px-8">

                {/* Top Content Row */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Left: Heading */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            <span className="text-xs tracking-[0.2em] font-medium text-gray-500 uppercase">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            We Committed To Healthy Living And Providing Nutritious Meals.
                        </h2>
                    </div>

                    {/* Right: Description & Checks */}
                    <div className="flex flex-col justify-end">
                        <p className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <CheckSquare className="text-red-600" size={20} />
                                <span className="text-sm font-medium text-gray-700">Clean Food</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckSquare className="text-red-600" size={20} />
                                <span className="text-sm font-medium text-gray-700">Good Materials</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Content Row */}
                <div className="grid md:grid-cols-3 gap-12 items-center">

                    {/* Left: Feature List */}
                    <div className="space-y-4 col-span-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all cursor-pointer font-bold ${index === activeFeature
                                        ? 'bg-green-600 text-white shadow-lg'
                                        : 'hover:bg-white hover:shadow-sm text-gray-800'
                                    }`}
                            >
                                <feature.icon size={20} className={index === activeFeature ? 'text-white' : 'text-gray-800'} />
                                <span className="text-sm md:text-base">{feature.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right: Video/Image Area */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] col-span-2">
                        {/* Placeholder Image */}
                        <div className="w-full h-full bg-gray-300 relative">
                            <Image
                                src="/who_we_are.png"
                                alt="Cooking Video"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                                <Play className="text-red-600 ml-1" fill="currentColor" size={24} />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhoWeAre;
