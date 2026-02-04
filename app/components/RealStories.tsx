"use client";

import React from 'react';
import Image from 'next/image';

const RealStories = () => {
    const stories = [
        {
            name: "Shoug Naimi",
            image: "/team01.png", // Placeholder
            review: "Meals I truly like yet keep my food healthy. When facing any issue I was able to reach out through an instant customer service live chat and everyone was quick and helpful."
        },
        {
            name: "Safa Ebrahim",
            image: "/team02.png", // Placeholder
            review: "now, and I can't imagine being without it! I reached my goal weight, but I decided to keep my subscription. I like the meal variety and choices, but most of all, I love the convenience."
        },
        {
            name: "Thomas George",
            image: "/team03.png", // Placeholder
            review: "with CALO, that changed. Their tasty food makes healthy eating enjoyable. Thanks to CALO, I lost 12kg! Their variety keeps me excited and get results."
        },
        {
            name: "Sarah Johnson",
            image: "/team01.png", // Placeholder
            review: "The convenience is unmatched. I save so much time on meal prep and the food is consistently delicious and fresh. Highly recommended!"
        }
    ];

    return (
        <section className="w-full py-20 bg-[#E6F7F5] overflow-hidden">
            <div className="container mx-auto px-4 md:px-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#00A86B] font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
                        290K happy customers in Worldwide . 19M meals delivered
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                        Real results, real stories
                    </h2>
                </div>

                {/* Horizontal Scroll Cards */}
                <div className="flex overflow-x-auto pb-2 gap-6 px-4 snap-x scrollbar-hide -mx-4 md:mx-0">
                    {stories.map((story, index) => (
                        <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px] bg-white rounded-2xl p-8 shadow-sm snap-center h-auto flex flex-col">
                            {/* User Header */}
                            <div className="flex items-center gap-4 mb-2">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-black">{story.name}</h3>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                {story.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RealStories;
