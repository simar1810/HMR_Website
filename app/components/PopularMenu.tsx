"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Leaf, Scale, ChefHat, BarChart3, Carrot, Beef } from 'lucide-react'; // Added icons

const PopularMenu = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        { name: 'All', icon: null },
        { name: 'High Protein', icon: '🍗' },
        { name: 'Balanced', icon: '⚖️' },
        { name: 'Vegetarian', icon: '🍅' },
        { name: "Chef's Choice", icon: '👨‍🍳' },
        { name: 'Custom Macros', icon: '🐩' }, // Using dog as placeholder or similar if specific icon unavailable, but user image has custom icon. 
        // Let's use simple lucide icons or staying with emoji/text if that's easier. 
        // User image has specific icons. I'll use emojis where appropriate or text.
        // Image shows: Leg of meat, Scale, Tomato, Chef, Chart/Cow?, Avocado, Leaf
        { name: 'Low Carb', icon: '🥑' },
        { name: 'Vegan', icon: '🥬' },
    ];

    const menuItems = [
        {
            name: 'Fiesta Chicken Bowl',
            image: '/popularMenu1.png', // Reusing existing images for now
            macros: { protein: '35g', carbs: '34g', fat: '10g' },
            tags: ['High Protein', 'Balanced']
        },
        {
            name: 'Mexican Chicken Enchilada',
            image: '/popularMenu2.png',
            macros: { protein: '37g', carbs: '58g', fat: '20g' },
            tags: ['Balanced']
        },
        {
            name: 'Basil Chicken Alfredo Linguine',
            image: '/popularMenu3.png',
            macros: { protein: '64g', carbs: '64g', fat: '14g' },
            tags: ['Chef\'s Choice']
        },
        {
            name: 'Koshari',
            image: '/cleanFood1.jpeg',
            macros: { protein: '13g', carbs: '65g', fat: '5g' },
            tags: ['Vegetarian', 'Vegan']
        },
        {
            name: 'Steak & Mash',
            image: '/cleanFood2.jpeg',
            macros: { protein: 'Customizable macros', carbs: '', fat: '' }, // Special case
            tags: ['Custom Macros', 'Low Carb']
        }
    ];

    return (
        <section className="relative w-full py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discover Our <br />
                        <span className="bg-[#419E4B] text-white px-2 py-1 transform -skew-x-2 inline-block">Daily-Changing</span> Menu
                    </h2>
                    <p className="text-gray-500 mt-4 px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all border flex items-center gap-2 ${activeFilter === filter.name
                                ? 'bg-[#419E4B] text-white border-[#419E4B] shadow-md'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {filter.icon && <span>{filter.icon}</span>}
                            {filter.name}
                        </button>
                    ))}
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 lg:gap-8 snap-x scrollbar-hide">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex-shrink-0 min-w-[280px] md:min-w-[300px] flex flex-col group cursor-pointer snap-start">
                            {/* Image Container */}
                            <div className="relative w-[240px] h-[260px] lg:w-[300px] lg:h-[350px] aspect-square rounded-[2rem] overflow-hidden mb-4 shadow-sm">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="text-left px-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>

                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                                    {item.macros.protein === 'Customizable macros' ? (
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                            <span>Customizable macros</span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                                <span>{item.macros.protein} Protein</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                                <span>{item.macros.carbs} Carbs</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                                <span>{item.macros.fat} Fat</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PopularMenu;
