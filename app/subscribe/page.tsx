"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Scale, Dumbbell, Apple, Leaf, Settings, Check, TicketPercent } from 'lucide-react';
import Image from 'next/image';

// Types
type MealType = 'Balanced' | 'Weight Gain' | 'Weight Loss' | 'Vegetarian' | 'Custom Macros';
type MealTime = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
type Day = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
type Duration = '15 Days' | '30 Days' | '90 Days';

// Data
const mealTypes: { id: MealType; title: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'Balanced', title: 'Balanced', desc: 'Provides the nutrients your body needs to thrive', icon: <Scale size={40} className="text-gray-500" /> },
    { id: 'Custom Macros', title: 'Custom Macros', desc: 'Designed for athletes and fitness focused individuals', icon: <Settings size={40} className="text-gray-500" /> },
    { id: 'Weight Gain', title: 'Weight Gain', desc: 'Boosts muscle strength and vitality with lean proteins', icon: <Dumbbell size={40} className="text-gray-500" /> },
    { id: 'Weight Loss', title: 'Weight Loss', desc: 'Low in carbs, but high in healthy fats, and non-starchy veggies', icon: <Apple size={40} className="text-gray-500" /> },
    { id: 'Vegetarian', title: 'Vegetarian', desc: 'Plant-based dishes with veggies & grains', icon: <Leaf size={40} className="text-gray-500" /> },
];

const mealTimes: MealTime[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
const days: Day[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; // Starting Sun as per image
const durations: { id: Duration; label: string; pricePerDay: number; discount?: number }[] = [
    { id: '15 Days', label: '15 Days', pricePerDay: 6.05 },
    { id: '30 Days', label: '30 Days', pricePerDay: 6.05, discount: 5 },
    { id: '90 Days', label: '90 Days', pricePerDay: 4.703, discount: 10 },
];

export default function SubscribePage() {
    // State
    const [selectedMealType, setSelectedMealType] = useState<MealType>('Balanced');
    const [selectedMeals, setSelectedMeals] = useState<MealTime[]>(['Lunch', 'Dinner']);
    const [selectedDays, setSelectedDays] = useState<Day[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
    const [selectedDuration, setSelectedDuration] = useState<Duration>('15 Days');
    const [coupon, setCoupon] = useState('');

    // Sticky Bar Observer
    const pricingRef = useRef<HTMLDivElement>(null);
    const [showStickyBar, setShowStickyBar] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowStickyBar(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (pricingRef.current) {
            observer.observe(pricingRef.current);
        }

        return () => {
            if (pricingRef.current) {
                observer.unobserve(pricingRef.current);
            }
        };
    }, []);

    // Pricing Logic
    const baseMealPrice = 25; // AED per meal roughly
    const deliveryFee = 0; // Free as per image

    // Calculate Total
    const numMealsPerDay = selectedMeals.length;
    const numDaysPerWeek = selectedDays.length;

    // Determine actual total days based on subscription duration period
    const getDurationDays = (d: Duration) => {
        if (d === '15 Days') return 15;
        if (d === '30 Days') return 30;
        return 90;
    };

    const durationDays = getDurationDays(selectedDuration);

    // Calculate total number of meals in the plan duration
    // Logic: (Duration / 7) * DaysPerWeek * MealsPerDay ? 
    // Or just simple: It's a N-day plan. Usually it means N delivery days. 
    // Let's assume '15 Days' means 15 days of food. 
    // So Total Meals = (15) * MealsPerDay.
    // Price = TotalMeals * BasePrice.

    const totalMealsCount = durationDays * numMealsPerDay;
    const subtotal = totalMealsCount * baseMealPrice;

    // Discount
    const durationObj = durations.find(d => d.id === selectedDuration);
    const discountPercent = durationObj?.discount || 0;
    const discountAmount = (subtotal * discountPercent) / 100;

    // VAT (5%)
    const vatRate = 0.05;
    const taxableAmount = subtotal - discountAmount;
    const vat = taxableAmount * vatRate;

    const total = taxableAmount + vat;


    return (
        <div className="min-h-screen bg-white pt-32 pb-20 font-sans">
            <div className="container mx-auto px-4 md:px-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        <span className="bg-[#D90000] text-white px-4 py-1 skew-x-[-10deg] inline-block mr-2 transform">Customize</span>
                        Your Perfect Meal Plan
                    </h1>
                    <div className="h-1 w-64 bg-[#D90000] mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT COLUMN: Configuration */}
                    <div className="flex-1 space-y-12">

                        {/* 1. Meal Type Selection */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">What kind of meals do you prefer?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {mealTypes.map((type) => (
                                    <div
                                        key={type.id}
                                        onClick={() => setSelectedMealType(type.id)}
                                        className={`relative p-6 rounded-3xl border-2 transition-all cursor-pointer group flex items-start justify-between gap-4 ${selectedMealType === type.id
                                            ? 'border-red-500 bg-white shadow-lg'
                                            : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
                                            }`}
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">{type.title}</h3>
                                            <p className="text-xs text-gray-500 leading-relaxed">{type.desc}</p>

                                            <button className={`mt-4 text-xs font-bold flex items-center gap-1 transition-colors ${selectedMealType === type.id ? 'text-[#439F48]' : 'text-[#D90000]'
                                                }`}>
                                                Learn More &rarr;
                                            </button>
                                        </div>

                                        <div className="flex flex-col items-center justify-between h-full gap-4">
                                            <div className="w-12 h-12 flex items-center justify-center">
                                                {/* In a real app, use specific images. Using icons for now. */}
                                                {type.icon}
                                            </div>

                                            {selectedMealType === type.id ? (
                                                <div className="bg-[#439F48] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                                                    <Check size={12} /> Selected
                                                </div>
                                            ) : (
                                                <div className="bg-gray-100 text-gray-500 text-xs font-bold px-4 py-1.5 rounded-full group-hover:bg-[#439F48]/10 group-hover:text-[#439F48]">
                                                    Select Plan
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. Meals Per Day */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">How many meals per day?</h2>
                            <p className="text-gray-500 text-sm mb-6">Select a minimum of 2 meals, including lunch or dinner.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                                {mealTimes.map((time) => {
                                    const isSelected = selectedMeals.includes(time);
                                    return (
                                        <div
                                            key={time}
                                            onClick={() => {
                                                if (isSelected) {
                                                    // Prevent unselecting if it goes below 2? User requirement "min 2".
                                                    // Let's implement soft validation or just allow it and show error in summary.
                                                    setSelectedMeals(prev => prev.filter(m => m !== time));
                                                } else {
                                                    setSelectedMeals(prev => [...prev, time]);
                                                }
                                            }}
                                            className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${isSelected
                                                ? 'border-[#D90000] shadow-sm'
                                                : 'border-gray-100 hover:border-gray-200'
                                                }`}
                                        >
                                            <span className={`font-bold ${isSelected ? 'text-[#D90000]' : 'text-gray-700'}`}>{time}</span>
                                            <div className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${isSelected ? 'bg-[#D90000]' : 'bg-gray-100'
                                                }`}>
                                                {isSelected && <Check size={16} className="text-white" />}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* 3. Frequency */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-1">How many days a week are you eating?</h2>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select your Frequency</h3>
                            <p className="text-gray-500 text-sm mb-4">Select a minimum of 5 days</p>

                            <div className="flex flex-wrap gap-3">
                                {days.map((day) => {
                                    const isSelected = selectedDays.includes(day);
                                    const isWeekend = day === 'Sun' || day === 'Sat'; // Assuming standard weekend or user choice
                                    return (
                                        <button
                                            key={day}
                                            onClick={() => {
                                                if (isSelected) {
                                                    setSelectedDays(prev => prev.filter(d => d !== day));
                                                } else {
                                                    setSelectedDays(prev => [...prev, day]);
                                                }
                                            }}
                                            className={`w-14 h-14 rounded-2xl font-bold text-sm transition-all flex items-center justify-center ${isSelected
                                                ? 'bg-[#D90000] text-white shadow-md transform scale-105'
                                                : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    );
                                })}
                            </div>
                        </section>

                        {/* 4. Subscriptions */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscriptions</h2>

                            <div className="space-y-4 max-w-2xl">
                                {durations.map((dur) => {
                                    const isSelected = selectedDuration === dur.id;
                                    return (
                                        <div
                                            key={dur.id}
                                            onClick={() => setSelectedDuration(dur.id)}
                                            className={`relative p-6 rounded-3xl border-2 transition-all cursor-pointer flex items-center justify-between ${isSelected
                                                ? 'border-[#D90000] bg-white shadow-md'
                                                : 'border-gray-100 bg-white hover:border-gray-200'
                                                }`}
                                        >
                                            {dur.discount && (
                                                <div className="absolute -top-3 left-6 bg-[#D90000] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                                                    Upto {dur.discount}% Off
                                                </div>
                                            )}

                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900">{dur.label}</h4>
                                                {/* Placeholder text for weekly calculation */}
                                                <p className="text-xs text-gray-400 mt-1">AED {(dur.pricePerDay * 5).toFixed(2)} Per week</p>
                                                {dur.id === '90 Days' && <p className="text-[10px] text-[#D90000] font-bold mt-1">3 month gym membership &gt;</p>}
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <span className="font-bold text-gray-700">AED {dur.pricePerDay}/day</span>
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-[#D90000]' : 'border-gray-200'
                                                    }`}>
                                                    {isSelected && <div className="w-3 h-3 rounded-full bg-[#D90000]" />}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                    </div>


                    {/* RIGHT COLUMN: Summary Sidebar */}
                    <div className="w-full lg:w-[400px]" ref={pricingRef}>
                        <div className="sticky top-28">

                            {/* Main Summary Card */}
                            <div className="bg-[#FAFAFA] rounded-[30px] p-6 shadow-sm border border-gray-100">

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-sm">
                                        {/* Assuming 'Image' is a Next.js Image component or similar. If not, replace with <img> */}
                                        <Image
                                            src="/fresh_vegetables.png"
                                            alt="Salad"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">Your package, your way</h3>
                                </div>

                                {/* Details Box */}
                                <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 space-y-4 shadow-sm">
                                    <div className="flex items-start gap-2">
                                        <span className="text-gray-900 font-bold min-w-[80px]">Meal Type:</span>
                                        <span className="text-gray-600">{selectedMealType}</span>
                                    </div>
                                    <div className="flex items-start gap-2 border-t border-gray-100 pt-3">
                                        <span className="text-gray-900 font-bold min-w-[80px]">No. of Meals (Per day):</span>
                                        <span className="text-gray-600">
                                            {selectedMeals.length > 0 ? selectedMeals.join(', ') : 'None'}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2 border-t border-gray-100 pt-3">
                                        <span className="text-gray-900 font-bold min-w-[80px]">Frequency:</span>
                                        <span className="text-gray-600">
                                            {selectedDays.length === 7 ? 'Every Day' : selectedDays.join(', ')}
                                        </span>
                                    </div>
                                </div>

                                {/* Coupon */}
                                <div className="flex gap-3 mb-8">
                                    <div className="relative flex-1">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <TicketPercent size={18} className="text-[#439F48]" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="DiscountMonthCoupon"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-[#439F48] placeholder-[#439F48] outline-none focus:border-[#439F48] transition-colors"
                                        />
                                    </div>
                                    <button className="bg-[#439F48] hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-green-100">
                                        Apply
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-red-400 mb-6"></div>

                                {/* Payment Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment summary</h3>

                                {/* Pricing */}
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium text-base">Plan price</span>
                                        <span className="text-gray-900 font-bold text-base">AED {subtotal.toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium text-base">Delivery fee</span>
                                        <span className="text-[#439F48] font-bold text-base">Free</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-[#439F48] font-bold text-base">Discount</span>
                                        <span className="text-[#439F48] font-bold text-base">AED {discountAmount.toFixed(0)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 font-medium text-base">VAT ({vatRate * 100}%)</span>
                                        <span className="text-gray-900 font-bold text-base">AED {vat.toFixed(0)}</span>
                                    </div>
                                </div>

                                {/* Total Divider */}
                                <div className="border-t border-gray-200 my-4"></div>

                                {/* Total */}
                                <div className="flex justify-between items-center mb-8">
                                    <span className="font-bold text-gray-900 text-xl">Total</span>
                                    <span className="font-bold text-gray-900 text-xl">AED {total.toFixed(0)}</span>
                                </div>

                                {/* Continue Button */}
                                <button className="w-full bg-[#439F48] hover:bg-green-700 text-white text-lg font-bold py-4 rounded-full shadow-xl shadow-green-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Continue
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Details Bar */}
            <div className={`fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 lg:hidden ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <div className="flex items-baseline gap-1">
                            <h3 className="text-xl font-extrabold text-[#3a4053]">AED {total.toFixed(2)}</h3>
                            <span className="text-xs text-gray-400 font-bold">/ Month</span>
                        </div>
                        <p className="text-[10px] text-[#3a4053] font-semibold mt-0.5 opacity-80 overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                            {selectedMealType}, {selectedMeals.length > 0 ? selectedMeals.join(' & ') : ''}, {selectedDays.length} Days a week
                        </p>
                    </div>
                    <button className="bg-[#439F48] hover:bg-green-700 text-white text-sm font-bold px-8 py-3 rounded-full shadow-lg shadow-green-100 transition-all">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
