"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, Leaf } from 'lucide-react';

const PopularMenu = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        { name: 'All', icon: null },
        { name: 'High Protein', icon: '🥩' },
        { name: 'Balanced', icon: '⚖️' },
        { name: 'Vegetarian', icon: '🥗' },
        { name: "Chef's Choice", icon: '👨‍🍳' },
        { name: 'Custom Macros', icon: '📊' },
        { name: 'Low Carb', icon: '🥑' },
        { name: 'Vegan', icon: '🌱' },
    ];

    const menuItems = [
        {
            name: 'Clean Health Smoothies',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
            image: '/popularMenu1.png',
            nutrition: {
                calories: 250,
                carbohydrates: 35,
                proteins: 12,
                fats: 8
            }
        },
        {
            name: 'Zucchini Noodles',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
            image: '/popularMenu2.png',
            nutrition: {
                calories: 320,
                carbohydrates: 45,
                proteins: 18,
                fats: 10
            }
        },
        {
            name: 'Grilled Chicken Quinoa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.',
            image: '/popularMenu3.png',
            nutrition: {
                calories: 420,
                carbohydrates: 38,
                proteins: 35,
                fats: 15
            }
        }
    ];

    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/red_overlay.png"
                    alt="Red Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 md:px-2 relative z-10">

                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className='w-4 h-4 rounded-full bg-green-600'></div>
                        <span className="text-xs tracking-[0.2em] font-medium text-white uppercase">Popular Menu</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        <span className="relative inline-block mr-2">
                            <span className="absolute inset-x-0 bottom-6 h-4 bg-[#419E4B] -z-10 skew-x-6"></span>
                            <span className="relative z-10">Customer Favorites</span>
                        </span>
                        Food Based <br /> From Choicing.
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeFilter === filter.name
                                ? 'bg-[#DB0F0E] text-white shadow-lg'
                                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                                }`}
                        >
                            {filter.icon && <span className="mr-2">{filter.icon}</span>}
                            {filter.name}
                        </button>
                    ))}
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                    {menuItems.map((item, index) => (
                        <div key={index} className="relative mt-12 group">
                            
                            <div className="backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-xl overflow-visible pt-56 pb-8 px-6 relative z-0 h-full">
                                
                                <div className="text-white text-center">
                                    <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                                    <p className="text-sm text-white/80 mb-6 leading-relaxed">{item.description}</p>

                                    
                                    <div className="space-y-4 text-left">
                                        
                                        <div className="flex justify-between items-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-transparent border border-[#439F48] p-0.5 rounded-sm">
                                                    <CheckCircle2 size={12} className="text-[#439F48]" />
                                                </div>
                                                <span className="text-sm font-medium">Calories</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="bg-transparent border border-[#439F48] p-0.5 rounded-sm">
                                                    <CheckCircle2 size={12} className="text-[#439F48]" />
                                                </div>
                                                <span className="text-sm font-medium">Carbohydrates</span>
                                            </div>
                                        </div>

                                        
                                        <div className="border-t border-dashed border-white/50 w-full"></div>

                                        
                                        <div className="flex justify-between items-center gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-transparent border border-[#439F48] p-0.5 rounded-sm">
                                                    <CheckCircle2 size={12} className="text-[#439F48]" />
                                                </div>
                                                <span className="text-sm font-medium">Proteins</span>
                                            </div>
                                            <div className="flex items-center gap-2 w-[45%]">
                                                <div className="bg-transparent border border-[#439F48] p-0.5 rounded-sm">
                                                    <CheckCircle2 size={12} className="text-[#439F48]" />
                                                </div>
                                                <span className="text-sm font-medium">Fats</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[90%] h-64 z-10 transition-transform group-hover:-translate-y-2">
                                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-fit"
                                    />
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
