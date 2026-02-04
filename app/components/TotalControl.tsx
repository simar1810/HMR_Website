"use client";

import React from 'react';
import Image from 'next/image';

const TotalControl = () => {
    return (
        <section className="flex flex-col md:flex-row w-full lg:min-h-[600px] md:min-h-[500px] min-h-[400px] ">
            {/* Left Content - 40% */}
            <div className="w-full md:w-[40%] bg-white flex flex-col justify-center px-6 md:px-10 lg:px-16 bg-[#F9FAFB] mb-5 md:mb-0 ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6 md:mb-8 lg:mb-10">
                    Total control.<br />
                    Full flexibility.
                </h2>

                {/* Green Box */}
                <div className="bg-[#439F48] text-white p-4 rounded-2xl md:mb-8 lg:mb-10 mb-5 shadow-sm">
                    <h3 className="font-bold text-sm md:text-base lg:text-xl mb-2 lg:mb-3">Calories and macros that match your goals</h3>
                    <p className="text-sm opacity-90 leading-relaxed font-medium">
                        We do the hard work for you, measuring, cooking, and preparing meals that match your goals, with nothing but fresh, whole
                    </p>
                </div>

                {/* Features */}
                <div className="space-y-5 md:space-y-6 lg:space-y-8">
                    <p className="text-gray-500 font-bold text-sm md:text-base lg:text-xl leading-tight max-w-sm">
                        Choose what you like. Swap what you don't.
                    </p>
                    <p className="text-gray-500 font-bold text-sm md:text-base lg:text-xl leading-tight max-w-sm">
                        Pause. Skip. Change.<br />
                        Anytime.
                    </p>
                </div>
            </div>

            {/* Right Image - 60% */}
            <div className="w-full md:w-[60%] relative min-h-[300px] md:min-h-auto bg-gray-200">
                <Image
                    src="/squats.png"
                    alt="Man doing squats"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Pause Button Overlay (Decorative based on image) */}
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                    <div className="flex gap-1">
                        <div className="w-1 h-4 bg-black rounded-full"></div>
                        <div className="w-1 h-4 bg-black rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalControl;
