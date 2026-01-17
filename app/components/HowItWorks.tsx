"use client";

import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "First Choose Your Meals Plan",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks1.png", // Placeholder
            active: false
        },
        {
            number: "02",
            title: "Customize Or Choose Your Menu",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks2.png", // Placeholder
            active: false
        },
        {
            number: "03",
            title: "Place Your Order Choicing Menu",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks3.png", // Placeholder
            active: true // Red badge
        },
        {
            number: "04",
            title: "Enjoy Our Fresh Delivery Food",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks4.png", // Placeholder
            active: false
        }
    ];

    return (
        <section className="bg-white py-20 relative overflow-hidden pb-30">

            {/* Background Decoration Lines - Simplified representation */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 Q50,50 100,0" stroke="orange" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M0,20 Q50,70 100,20" stroke="orange" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        <span className="text-xs tracking-[0.2em] font-medium text-gray-500 uppercase">How It Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        <span className="bg-green-600 text-white px-2 py-1 inline-block mr-2 transform -skew-x-6">Simple</span>
                        Steps To Enjoy Our <br /> Healthy Clean Meals.
                    </h2>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-8 pt-8 ">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group mt-12">

                            {/* Number Badge - Floating at top */}
                            <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 flex items-center justify-center rounded-[1.5rem] z-30 shadow-xl ${step.active ? 'bg-[#D90000]' : 'bg-[#EFEEE5]'} `}>
                                <span className={`text-2xl font-bold ${step.active ? 'text-white' : 'text-[#B0B0B0]'}`}>
                                    {step.number}.
                                </span>
                            </div>

                            {/* Main Card Container */}
                            <div className="relative h-[350px] w-full rounded-[3rem] shadow-none">

                                {/* Image Container (Clipped) */}
                                <div className="absolute inset-0 rounded-[3rem] overflow-hidden z-0">
                                    <div className="w-full h-full bg-[#EFEEE5] relative">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content Overlay - Floating (Unclipped) */}
                                <div className="absolute -bottom-20 left-4 right-4 z-20">
                                    <div className="bg-[#439F48] rounded-[2rem] p-6 text-center text-white transition-transform group-hover:-translate-y-2 flex flex-col items-center justify-center min-h-[160px]">
                                        <h3 className="font-bold text-lg mb-2 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-white/90">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
