"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Voucher from '../components/Voucher';
import { Heart, ShieldCheck, UserCheck, MessageCircle, Utensils, Calendar, Clock, MessageSquare, Plus, Minus, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PlansPage = () => {
    const [duration, setDuration] = useState('15 Days');
    const [meals, setMeals] = useState('4 Meals');
    const [preference, setPreference] = useState('Egggetarian');
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0); // Default open first one or null
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
            text: "As a mom on a mission to support my son's fitness goals, I knew he needed a protein boost when he decided to hit the gym. That's when I discovered 6meal' Protein Boost Plan",
            author: "Nitika Raheja",
            image: "/team01.png" // Placeholder
        },
        {
            text: "The meals are absolutely delicious and healthy. I've lost weight without feeling deprived.",
            author: "Rahul Verma",
            image: "/team02.png" // Placeholder
        }
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const mealItems = [
        {
            title: "Egg Florentine on a Sourdough Toast",
            category: "BREAKFAST",
            image: "/egg .png" // Placeholder
        },
        {
            title: "Thai Pumpkin Soup",
            category: "EVENING SNACK",
            image: "/pumkin soup.png" // Placeholder
        },
        {
            title: "Stuffed Chicken with Veggies on a Bed of Quinoa",
            category: "DINNER",
            image: "/stuffed chicken with veggis.png" // Placeholder reused
        },
        {
            title: "Parfait",
            category: "BREAKFAST",
            image: "/cleanFood2.jpeg" // Placeholder reused
        },
        {
            title: "Grilled Fish with Lemon Butter Sauce",
            category: "LUNCH",
            image: "/cleanFood1.jpeg" // Placeholder reused
        }
    ];

    const faqs = [
        {
            question: "Description",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "What does the menu look like?",
            answer: "Our menu is designed by certified nutritionists to ensure a balanced diet. It changes weekly to provide variety and nutritional value."
        },
        {
            question: "Where and when do you deliver the food?",
            answer: "We deliver to your doorstep daily. Delivery slots are available from 6 AM to 9 AM for breakfast and 11 AM to 1 PM for lunch."
        },
        {
            question: "What if I have to travel in between the subscription?",
            answer: "You can pause your subscription via your account dashboard or by contacting support. The remaining days will be carried forward."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="w-full bg-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Column - Images */}
                    <div className="space-y-6">
                        <div className="relative w-full h-[550px] rounded-[40px] overflow-hidden">
                            <Image
                                src="/plans.png"
                                alt="Weight Loss Plan Main"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative w-full h-[250px] rounded-[30px] overflow-hidden">
                                <Image
                                    src="/weight management.png"
                                    alt="Weight Management"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-full h-[250px] rounded-[30px] overflow-hidden">
                                <Image
                                    src="/what's included.png"
                                    alt="What's Included"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="relative w-full h-[550px] rounded-[40px] overflow-hidden">
                            <Image
                                src="/plans.png"
                                alt="Weight Loss Plan Secondary"
                                fill
                                className="object-cover"
                            />

                        </div>
                        <div className="text-center">
                            <button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full text-sm hover:bg-gray-50 transition-colors">
                                More media
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="pt-4">
                        <h1 className="text-4xl font-bold text-black mb-4">Weight Loss Plan</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-2xl text-gray-400 line-through decoration-1">₹32,250</span>
                            <span className="text-3xl font-bold text-green-500">₹32,250</span>
                        </div>

                        {/* Plan Duration */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-3">Plan:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['3 Days', '7 Days', '15 Days', '30 Days'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setDuration(opt)}
                                        className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${duration === opt
                                            ? 'border-green-500 text-green-600 bg-white'
                                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Meals */}
                        <div className="mb-6">
                            <h3 className="font-bold text-lg mb-3">Meals:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['1 Meal', '2 Meals', '3 Meals', '4 Meals', '5 Meals'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setMeals(opt)}
                                        className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${meals === opt
                                            ? 'border-green-500 text-green-600 bg-white'
                                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Preference */}
                        <div className="mb-8">
                            <h3 className="font-bold text-lg mb-3">Preference:</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Vegetarian', 'Non - Veg', 'Egggetarian', 'Vegan'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setPreference(opt)}
                                        className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors ${preference === opt
                                            ? 'border-green-500 text-green-600 bg-white'
                                            : 'border-gray-200 text-gray-700 hover:border-gray-300'
                                            }`}
                                    >
                                        {opt === 'Egggetarian' ? 'Egggetarian' : opt}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info Input */}
                        <div className="mb-6">
                            <label className="flex items-center gap-3 cursor-pointer mb-2">
                                <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${showAdditionalInfo ? 'bg-black border-black text-white' : 'border-gray-300'}`}
                                    onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
                                >
                                    {showAdditionalInfo && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                                </div>
                                <span className="font-bold text-black">Add Additional Info</span>
                            </label>
                            {showAdditionalInfo && (
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl p-3 mt-2 text-sm focus:outline-none focus:border-black transition-colors"
                                    placeholder="Any allergies or specific requests?"
                                    rows={3}
                                />
                            )}
                        </div>

                        {/* Delivery Date & Time */}
                        <div className="mb-10">
                            <h3 className="font-bold text-lg mb-3">Delivery Date & Time:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative">
                                    <input type="text" placeholder="DD/MM/YYYY" className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-gray-400" />
                                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="HH:MM" className="w-full border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-gray-400" />
                                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <button className="flex-1 bg-[#d90000] hover:bg-[#b00000] text-white text-lg font-bold py-4 rounded-full transition-colors shadow-lg shadow-red-100">
                                Buy Now
                            </button>
                            <button className="flex-1 bg-white border border-red-200 text-[#d90000] hover:bg-red-50 text-lg font-bold py-4 rounded-full transition-colors">
                                Add To Cart
                            </button>
                        </div>

                        <div className="flex justify-center mb-10">
                            <button className="flex items-center gap-2 border border-gray-400 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                                <MessageSquare className="w-4 h-4" />
                                Speak to our expert
                            </button>
                        </div>

                        {/* Info List */}
                        <div className="mb-12">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="mt-1">
                                    <input type="checkbox" className="w-5 h-5 accent-black border-gray-300 rounded" defaultChecked />
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Ideal for healthy weight loss and maintenance with calorie-controlled, nutritionist-designed meals.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
                                {[
                                    { icon: <Heart className="w-5 h-5" />, text: "Meals customised to support your health journey" },
                                    { icon: <ShieldCheck className="w-5 h-5" />, text: "Safe & Hygienic Protocols" },
                                    { icon: <UserCheck className="w-5 h-5" />, text: "Certified Nutritionist on Board" },
                                    { icon: <MessageCircle className="w-5 h-5" />, text: "Tailored to Allergies & Preferences" },
                                    { icon: <Utensils className="w-5 h-5" />, text: "Freshly Cooked" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                                        <div className="text-gray-600">{item.icon}</div>
                                        <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dietary Icons */}
                        <div className="text-center">
                            <p className="text-xs font-medium text-gray-500 mb-4">Looking for these options? We've got you covered!</p>
                            <div className="flex justify-center gap-8">
                                <Image
                                    src="/vegan.png"
                                    alt="Dietary Options"
                                    width={300}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* FAQ Section */}
            <div className="max-w-4xl md:mx-40 mb-20 px-4 md:px-0">
                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                className="w-full py-6 flex items-start md:items-center justify-between text-left focus:outline-none group"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg md:text-xl font-bold text-black group-hover:text-gray-700 transition-colors">{faq.question}</span>
                                <span className="text-gray-400 ml-4 flex-shrink-0">
                                    {openAccordion === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openAccordion === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* What will you get to eat Section */}
            <div className="mb-20 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-4 md:px-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-1">What will you get to eat?</h2>
                            <p className="text-gray-500 text-sm">Sneak peek into your healthy menu!</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {mealItems.map((item, idx) => (
                            <div key={idx} className="min-w-[300px] h-[350px] relative rounded-[30px] overflow-hidden flex-shrink-0 group">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: 'linear-gradient(0deg, #DB0F0E 0%, #B22222 30%, rgba(0, 66, 56, 0) 60%)' }}></div>

                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="font-bold text-lg leading-tight mb-1">{item.title}</h3>
                                    <p className="text-[10px] uppercase font-bold tracking-wider opacity-80">{item.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials & Stats Section */}
            <div className="py-5 bg-cover bg-center mb-20 relative" style={{ backgroundImage: "url('/overlay.png')" }}>
                <div className="container mx-auto px-4 md:px-10">

                    {/* Testimonial Carousel */}
                    <div className="max-w-4xl mx-auto text-center mb-20 relative px-12">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                                <Image
                                    src={testimonials[activeTestimonial].image}
                                    alt={testimonials[activeTestimonial].author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-4">
                            "{testimonials[activeTestimonial].text}"
                        </h3>
                        <p className="text-gray-500 font-medium">- {testimonials[activeTestimonial].author}</p>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTestimonial(idx)}
                                    className={`w-2 h-2 rounded-full transition-colors ${idx === activeTestimonial ? 'bg-black' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">Delivered 400,000+</h2>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">meals</h2>
                        <p className="text-gray-500 mb-8">Trusted by thousands across Delhi-NCR</p>

                        <div className="flex justify-center -space-x-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden relative shadow-md">
                                    <Image
                                        src={`/team0${i > 3 ? i - 3 : i}.png`} // Reuse team images
                                        alt="User"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommended Meal Plans Section */}
            <div className="container mx-auto px-4 md:px-10 mb-20">
                <h2 className="text-3xl font-bold text-black mb-8">Recommended meal plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "PROTEIN BOOST PLAN",
                            image: "/protein boost plan.png",
                            price: "from Rs. 2,286",
                            subtitle: "PROTEIN BOOST\nPLAN"
                        },
                        {
                            title: "ON-THE-GO MEAL PLAN",
                            image: "/on the go meal plan.png",
                            price: "from Rs. 2,123",
                            subtitle: "ON-THE-GO\nMEAL PLAN"
                        },
                        {
                            title: "HEALTH SUPPORT PLAN",
                            image: "/health support plan.png",
                            price: "from Rs. 2,123",
                            subtitle: "HEALTH SUPPORT\nPLAN"
                        },
                        {
                            title: "DETOX PLAN",
                            image: "/detox plan.png",
                            price: "Rs. 6,931",
                            oldPrice: "Rs. 7,700",
                            subtitle: "DETOX\nPLAN"
                        }
                    ].map((plan, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative w-full aspect-square rounded-[30px] overflow-hidden mb-4">
                                <Image
                                    src={plan.image}
                                    alt={plan.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-gray-900 text-sm whitespace-pre-line leading-tight mb-1">{plan.subtitle}</h3>
                                <div className="text-sm text-gray-500 font-medium">
                                    {plan.oldPrice && <span className="line-through mr-2">{plan.oldPrice}</span>}
                                    {plan.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Voucher />
        </div>
    )
}

export default PlansPage