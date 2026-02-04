"use client";

import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "First Choose Your Meals Plan",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks1.png",
            active: false
        },
        {
            number: "02",
            title: "Customize Or Choose Your Menu",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks2.png",
            active: false
        },
        {
            number: "03",
            title: "Place Your Order Choicing Menu",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks3.png",
            active: true // Red badge for 03 as per design
        },
        {
            number: "04",
            title: "Enjoy Our Fresh Delivery Food",
            description: "Lorem ipsum dolor sit amet consectetur.",
            image: "/howItWorks4.png",
            active: false
        }
    ];

    return (
        <section className="bg-white py-20 relative overflow-hidden pb-30">


            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 Q50,50 100,0" stroke="orange" fill="none" vectorEffect="non-scaling-stroke" />
                    <path d="M0,20 Q50,70 100,20" stroke="orange" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] font-medium text-gray-400 uppercase">HOW ITS WORK</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-4 md:mb-6">
                        <span className="bg-[#439F48] text-white px-2 py-0.5 inline-block mr-2 transform -skew-x-6">Customer</span>
                        Favorites Food Based<br className="hidden md:block" /> From Choicing.
                    </h2>
                    <p className="text-gray-500 text-xs md:text-base max-w-lg mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Steps Grid */}
                {/* Mobile: grid-cols-2, Gap reduced */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 pt-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group mt-8 md:mt-12">

                            {/* Number Badge */}
                            {/* Positioned slightly over the top, centered */}
                            <div className={`absolute -top-6 md:-top-10 left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-[1rem] md:rounded-[1.5rem] z-30 shadow-sm ${step.active ? 'bg-[#D90000]' : 'bg-[#EFEEE5]'}`}>
                                <span className={`text-sm md:text-2xl font-bold ${step.active ? 'text-white' : 'text-[#B0B0B0]'}`}>
                                    {step.number}.
                                </span>
                            </div>

                            {/* Card Container */}
                            <div className="relative h-[220px] md:h-[350px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-none">

                                {/* Image Background */}
                                <div className="absolute inset-0 z-0">
                                    <div className="w-full h-full bg-[#EFEEE5] relative">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Green Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 z-20">
                                    <div className="bg-[#439F48] rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-6 text-center text-white flex flex-col items-center justify-center min-h-[90px] md:min-h-[160px] mx-1 mb-1 md:mx-0 md:mb-0">
                                        <h3 className="font-bold text-[10px] md:text-lg mb-1 md:mb-2 leading-tight px-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-[8px] md:text-sm text-white/90 hidden md:block">
                                            {step.description}
                                        </p>
                                        {/* Mobile description simplified or hidden if too small, keeping visible for now but small */}
                                        <p className="text-[8px] text-white/80 md:hidden leading-tight line-clamp-2">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
