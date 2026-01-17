"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Zap } from 'lucide-react';

const WhatWeDo = () => {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/overlay.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-100" 
                />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                
                <div className="text-center max-w-3xl mx-auto mb-16 relative">
                    
                    <div className="absolute -left-20 top-10 hidden md:block">
                        <Image
                            src="/arrow.png"
                            alt="Decorative Arrow"
                            width={100}
                            height={100}
                            className="w-26 h-auto opacity-100 rotate-[0deg]"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-red-600"></span>
                        <span className="text-xs tracking-[0.2em] font-medium text-gray-500 uppercase">What We Do</span>
                        
                        <Image
                            src="/green_lightning.png"
                            alt="Lightning"
                            width={80}
                            height={80}
                            className="w-10 h-auto ml-2"
                        />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        <span className="bg-red-600 text-white px-2 py-1 transform -skew-x-6 inline-block mr-2">Deliciously</span>
                        Healthy Meals For <br /> Every Day
                    </h2>

                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        
                        <div className="absolute inset-0 bg-gray-900 transition-transform group-hover:scale-105">
                            
                            <div className="w-full h-full opacity-100 bg-[url('/what_we_do1.png')] bg-cover bg-center"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                        <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            <ArrowUpRight className="text-black" size={20} />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Lorem Ipsum Dolor Sit</h3>
                            <p className="text-sm text-gray-300 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>

                    
                    <div className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gray-800 transition-transform group-hover:scale-105">
                            <div className="w-full h-full opacity-100 bg-[url('/what_we_do2.png')] bg-cover bg-center"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                        <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            <ArrowUpRight className="text-black" size={20} />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2">Lorem Ipsum Dolor Sit</h3>
                            <p className="text-sm text-gray-300 line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>

                    
                    <div className="md:col-span-2 group relative h-96 rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                        <div className="absolute inset-0 bg-gray-700 transition-transform group-hover:scale-105">
                            <div className="w-full h-full opacity-100 bg-[url('/what_we_do3.png')] bg-cover bg-center"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                        <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                            <ArrowUpRight className="text-black" size={20} />
                        </div>

                        <div className="absolute bottom-0 left-0 p-8 text-white max-w-2xl">
                            <h3 className="text-3xl font-bold mb-2">Lorem Ipsum Dolor Sit</h3>
                            <p className="text-base text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
