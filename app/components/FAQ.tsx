"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = [
        {
            question: "What is the healthy minds ?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            question: "Vegetarian ready for ordering ?",
            answer: "Yes, we offer a wide range of vegetarian options tailored to your dietary needs and preferences."
        },
        {
            question: "This is 24 hours food ?",
            answer: "We offer delivery during specific hours to ensure freshness, but you can place orders 24/7."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#F3F1EA] py-24 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-1 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-xs tracking-[0.2em] font-medium text-gray-400 uppercase">CUSTOMIZED FAQS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Common Questions And Answers <br /> About Services.
                        </h2>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <p className="text-gray-500 max-w-sm lg:text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.
                        </p>
                        <button className="bg-red-600 text-white px-8 py-3 mb-5 md:mb-0 rounded-full font-medium inline-flex items-center gap-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                            Get Answered
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Accordion */}
                    <div className="space-y-4">
                        {questions.map((item, index) => (
                            <div key={index} className="overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`w-full flex items-center justify-between p-6 px-8 rounded-full transition-all duration-300 ${openIndex === index
                                            ? 'bg-[#D91B1B] text-white shadow-xl shadow-red-900/10'
                                            : 'bg-white text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="font-bold text-lg">{item.question}</span>
                                    <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        {openIndex === index ? (
                                            <ArrowRight size={20} className="rotate-[90deg]" />
                                        ) : (
                                            <ChevronDown size={20} />
                                        )}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="py-2 px-2 text-gray-500 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Images */}
                    <div className="relative h-[500px] hidden lg:flex gap-6 items-center">
                        <div className="w-1/2 h-[60%] relative rounded-[2.5rem] overflow-hidden ml-auto">
                            <Image
                                src="/faq1.png"
                                alt="Woman with apple"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-1/2 h-[60%] relative rounded-[2.5rem] overflow-hidden">
                            <Image
                                src="/faq2.png"
                                alt="Woman working"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
