"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, ChevronDown, MoveRight, Leaf, Scale, ChefHat, Dumbbell, Apple, Salad } from 'lucide-react';
import Link from 'next/link'; // For Order Now navigation if needed

const WeeklyMenu = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        { name: 'All', icon: null },
        { name: 'High Protein', icon: '🍗' },
        { name: 'Balanced', icon: '⚖️' },
        { name: 'Vegetarian', icon: '🍅' },
        { name: 'Custom Macros', icon: '🐩' },
        { name: 'Low Carb', icon: '🥑' },
    ];

    // Mock Data - Duplicate some items to fill grid
    const menuItems = [
        {
            id: 1,
            name: 'Fiesta Chicken Bowl',
            image: '/popularMenu1.png',
            macros: { protein: '35g', carbs: '34g', fat: '10g' },
            tags: ['High Protein', 'Balanced']
        },
        {
            id: 2,
            name: 'Mexican Chicken Enchilada',
            image: '/popularMenu2.png',
            macros: { protein: '37g', carbs: '58g', fat: '29g' },
            tags: ['High Protein', 'Balanced']
        },
        {
            id: 3,
            name: 'Basil Chicken Alfredo Linguine',
            image: '/popularMenu3.png',
            macros: { protein: '64g', carbs: '64g', fat: '14g' },
            tags: ['High Protein']
        },
        {
            id: 4,
            name: 'Koshari',
            image: '/cleanFood1.jpeg',
            macros: { protein: '13g', carbs: '65g', fat: '5g' },
            tags: ['Vegetarian', 'Balanced']
        },
        {
            id: 5,
            name: 'Fiesta Chicken Bowl',
            image: '/popularMenu1.png',
            macros: { protein: '35g', carbs: '34g', fat: '10g' },
            tags: ['High Protein']
        },
        {
            id: 6,
            name: 'Mexican Chicken Enchilada',
            image: '/popularMenu2.png',
            macros: { protein: '37g', carbs: '58g', fat: '29g' },
            tags: ['Balanced']
        },
        {
            id: 7,
            name: 'Basil Chicken Alfredo Linguine',
            image: '/popularMenu3.png',
            macros: { protein: '64g', carbs: '64g', fat: '14g' },
            tags: ['Low Carb'] // Just testing tag logic
        },
        {
            id: 8,
            name: 'Koshari',
            image: '/cleanFood1.jpeg',
            macros: { protein: '13g', carbs: '65g', fat: '5g' },
            tags: ['Vegetarian']
        },
    ];

    const filteredItems = activeFilter === 'All'
        ? menuItems
        : menuItems.filter(item => item.tags.includes(activeFilter));

    return (
        <div className="min-h-screen bg-white lg:pt-34 pt-24 pb-20 font-sans md:px-20">
            <div className="mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
                        Check out this <span className="bg-[#D90000] text-white px-2 inline-block transform -skew-x-6">Weeks Menu</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Here's a taste of what's included when you subscribe to Healthy Minds
                    </p>
                </div>

                {/* Date & Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <div className="flex items-center gap-2 bg-[#F2EDE3] px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                        <Calendar size={18} className="text-[#D90000]" />
                        <span className="text-[#D90000] font-bold text-sm">26 Jan - 30 Jan 2026</span>
                    </div>

                    <Link href="/subscribe">
                        <button className="bg-[#D90000] hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 transition-transform hover:scale-105 shadow-md shadow-red-100">
                            Order Now <MoveRight size={18} />
                        </button>
                    </Link>
                </div>

                {/* Toolbar: Filters & Dropdown */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-6 mb-12">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border flex items-center gap-2 ${activeFilter === filter.name
                                        ? 'bg-[#439F48] text-white border-[#439F48] shadow-md hover:bg-green-700'
                                        : 'bg-white text-gray-700 border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {filter.icon && <span>{filter.icon}</span>} {filter.name}
                            </button>
                        ))}
                    </div>

                    {/* Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700 shadow-sm hover:border-gray-300">
                            Type Of Meal <ChevronDown size={16} />
                        </button>
                    </div>

                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 mb-16">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group">

                            {/* Round Image */}
                            <div className="md:w-[260px] md:h-[260px] w-[150px] h-[150px] relative rounded-3xl overflow-hidden mb-6 shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="w-full pl-2">
                                <h3 className="font-bold text-gray-900 md:text-lg text-sm mb-3 truncate">{item.name}</h3>

                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-gray-600">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                                        {item.macros.protein} Protein
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                                        {item.macros.carbs} Carbs
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                                        {item.macros.fat} Fat
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="text-center">
                    <button className="bg-white border border-red-200 text-gray-700 hover:text-[#D90000] hover:border-[#D90000] font-bold px-8 py-3 rounded-full transition-all text-sm shadow-sm">
                        Load More Meals
                    </button>
                </div>

            </div>
        </div>
    );
};

export default WeeklyMenu;
