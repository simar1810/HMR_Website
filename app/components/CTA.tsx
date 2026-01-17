"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden ">
            
            <div className="absolute inset-0 z-0">
                <Image
                    src="/what_we_do1.png"
                    alt="Fresh Food Background"
                    fill
                    className="object-cover"
                />
                
                <div className="absolute inset-0"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    
                    <div></div>

                    
                    <div className="text-white">
                        
                        <div className="mb-6 flex md:justify-start justify-center">
                            <Image
                                src="/pumpkin.png"
                                alt="Pumpkin Icon"
                                width={60}
                                height={60}
                                className="w-12 h-auto opacity-100"
                            />
                        </div>

                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
                            <span className="relative inline-block">
                                Ready To Eat
                                
                                <span className="absolute -left-4 bottom-6 w-full h-5 bg-red-600 -z-10 opacity-80 transform -skew-x-6"></span>
                            </span>{" "}
                            Healthier - Lets Get Started Today.
                        </h2>

                        
                        <p className="text-gray-300 text-base mb-10 text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        
                        <div className="flex justify-center md:justify-start">
                            <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-full inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg group">
                                Contact Us
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
