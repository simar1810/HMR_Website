import React from 'react';
import Image from 'next/image';
import { FileText, Users, ArrowUpRight } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import Voucher from '../components/Voucher';

const ServicesPage = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-black text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/service.png" // Using about.png as a placeholder for now, similar execution to about page
                        alt="Services Hero Background"
                        fill
                        priority
                        className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(15, 26, 26, 0.85) 10%, rgba(15, 26, 26, 0.16) 100%)' }} />

                </div>

                <div className="container mx-auto px-4 md:px-10 relative z-20 h-full flex items-center">
                    <div className="max-w-4xl pt-20">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 rounded-full bg-red-600"></span>
                            <span className="text-xs tracking-[0.2em] font-medium uppercase text-white/80">Services</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="relative z-10">
                                Discover
                                <span className="absolute bottom-3 left-[-5px] w-full h-4 bg-[#42a852] -z-10 skew-x-12"></span>
                            </span> Our Range Of Services In <br />
                            <span className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DB0F0E_48.08%,#DB0F0E_96.15%)] bg-clip-text text-transparent">Health And Nutrition</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Service Overview Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Image */}
                        <div className="relative h-[700px] w-full rounded-[40px] overflow-hidden shadow-xl">
                            <Image
                                src="/faq1.png" // Placeholder
                                alt="Service Overview"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Column: Content */}
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                                <span className="text-xs tracking-[0.2em] font-medium uppercase text-gray-500">Service Overview</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-black">
                                <span className="relative z-10">
                                    Comprehensive
                                    <span className="absolute bottom-2 left-[-10px] w-full h-4 bg-gray-200 -z-10"></span>
                                </span> Food <br />
                                Solutions Tailored To <br />
                                Your Needs.
                            </h2>

                            <p className="text-gray-500 leading-relaxed mb-10">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            {/* Features Card */}
                            <div className="bg-[#F4F1EA] ounded-3xl md:rounded-r-3xl r p-8 space-y-5 md:-ml-15 md:pl-28 md:w-[calc(100%+3rem)]">
                                {/* Feature 1 */}
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                                        <FileText className="w-6 h-6 text-black" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Personalized Meal Plans</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-300/50"></div>

                                {/* Feature 2 */}
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6 text-black" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-2">Corporate Meal Services</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/overlay.png')" }}>
                <div className="container mx-auto px-4 md:px-10">
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
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group relative h-[300px] w-full rounded-[30px] overflow-hidden cursor-pointer">
                                <Image
                                    src={item % 2 !== 0 ? "/service-what we do.png" : "/service-what we do 2.png"}
                                    alt="Service Card"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                    <div className="absolute top-8 right-8 w-12 h-12 bg-white backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="text-black w-6 h-6" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">Lorem Ipsum Dolor Sit</h3>
                                    <p className="text-white/80 text-sm max-w-[90%]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <HowItWorks />
            </section>
            <section>
                <Voucher />
            </section>
        </div>
    );
};

export default ServicesPage;
