"use client";

import React from 'react';
import Image from 'next/image';

const SlammedSchedule = () => {
    return (
        <section className="relative w-full md:h-[500px] h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/what_we_do1.png"
                    alt="Slammed Schedule Background"
                    fill
                    className="object-cover"
                />
                {/* Dark Overlay for text readability if needed, though image looks dark */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight bg-red">
                    <span className="bg-[#DB0F0E] px-4 py-1 inline-block transform md:-skew-x-6 mr-3">Slammed</span>
                    Schedule? <br />
                    Personalized Meals <br />
                    Ready To Eat
                </h2>
            </div>
        </section>
    );
};

export default SlammedSchedule;
