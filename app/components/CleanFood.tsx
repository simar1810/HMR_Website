"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Scale, Drumstick } from 'lucide-react';

const CleanFood = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const foodItems = [
        {
            title: "High Protein",
            image: "/cleanFood1.jpeg",
            icon: <Drumstick size={20} className="text-red-500" />,
            nutrition: { protein: "50%", carbs: "40%", fat: "20%" }
        },
        {
            title: "Balanced",
            image: "/cleanFood2.jpeg",
            icon: <Scale size={20} className="text-blue-500" />,
            nutrition: { protein: "35%", carbs: "55%", fat: "30%" }
        },
        {
            title: "High Protein",
            image: "/cleanFood1.jpeg",
            icon: <Drumstick size={20} className="text-red-500" />,
            nutrition: { protein: "50%", carbs: "40%", fat: "20%" }
        },
        {
            title: "Balanced",
            image: "/cleanFood2.jpeg",
            icon: <Scale size={20} className="text-blue-500" />,
            nutrition: { protein: "35%", carbs: "55%", fat: "30%" }
        },
        {
            title: "Balanced",
            image: "/cleanFood2.jpeg",
            icon: <Scale size={20} className="text-blue-500" />,
            nutrition: { protein: "35%", carbs: "55%", fat: "30%" }
        }
    ];

    return (
        <section className="bg-white py-20 overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <Image
                    src="/overlay.png"
                    alt="Overlay Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-3 h-3 rounded-full bg-red-600"></span>
                        <span className="text-xs tracking-[0.2em] font-medium text-gray-500 uppercase">Why Choice Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        We Give <span className="bg-[#419E4B] text-white px-2 py-1 inline-block transform -skew-x-6">Clean Food</span> And Tailored <br /> To Your Dietary Needs.
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>


                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {foodItems.map((item, index) => (
                        <div key={index} className="min-w-[300px] md:min-w-[350px] snap-center relative group">
                            <div className="bg-[#F3F4F6] rounded-[2.5rem] p-6 h-[420px] relative overflow-hidden">
                                {/* Food Image */}
                                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>


                                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4">
                                    <div className="bg-gray-100 p-2 rounded-full shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h4>

                                        <div className="mt-3">

                                            <div className="flex w-full h-2 rounded-full overflow-hidden gap-1 mb-2">
                                                <div className="bg-[#8B5CF6] w-[50%] rounded-l-full"></div>
                                                <div className="bg-[#F59E0B] w-[40%]"></div>
                                                <div className="bg-[#3B82F6] w-[20%] rounded-r-full"></div>
                                            </div>


                                            <div className="flex justify-between text-[10px] text-gray-500 font-medium px-0.5">
                                                <div className="w-[50%] text-left pl-1">
                                                    <span className="text-gray-700">{item.nutrition.protein}</span> Protein
                                                </div>
                                                <div className="w-[40%] text-center">
                                                    <span className="text-gray-700">{item.nutrition.carbs}</span> Carbs
                                                </div>
                                                <div className="w-[20%] text-right pr-1">
                                                    <span className="text-gray-700">{item.nutrition.fat}</span> Fat
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={scrollLeft}
                        className="w-12 h-12 rounded-full bg-[#E5F4E7] flex items-center justify-center text-[#419E4B] hover:bg-[#419E4B] hover:text-white transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-12 h-12 rounded-full bg-[#E5F4E7] flex items-center justify-center text-[#419E4B] hover:bg-[#419E4B] hover:text-white transition-colors"
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default CleanFood;
