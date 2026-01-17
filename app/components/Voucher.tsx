"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Voucher = () => {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image copy.png"
                    alt="Fresh vegetables background"
                    fill
                    className="object-cover"
                />
                
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 "></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">

                <div className="flex justify-center -space-x-3 mb-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative bg-gray-700">
                            <div className={`w-full h-full ${i === 1 ? 'bg-blue-400' : i === 2 ? 'bg-purple-400' : 'bg-yellow-400'}`}></div>
                        </div>
                    ))}
                    <div className="relative w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
                        <span className="text-green-600 font-bold text-xs">+2k</span>
                    </div>
                </div>

                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
                    Get Your <span className="bg-[#419E4B] px-2">First Meal</span> - Claim Your <br /> 20% Off Voucher.
                </h2>

                
                <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                
                <div className="max-w-xl mx-auto bg-white rounded-full p-1.5 md:p-2 flex items-center shadow-2xl">
                    <input
                        type="email"
                        placeholder="info@example.com"
                        className="flex-1 bg-transparent border-none outline-none px-4 md:px-6 text-sm md:text-base text-gray-700 placeholder-gray-400 min-w-0"
                    />
                    <button className="bg-[#D91B1B] text-white px-4 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base inline-flex items-center gap-2 hover:bg-red-700 transition-colors whitespace-nowrap shrink-0">
                        Get Voucher
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Voucher;
