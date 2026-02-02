import React from 'react';
import Image from 'next/image';
import WhoWeAre from '../components/WhoWeAre';
import Voucher from '../components/Voucher';


const AboutPage = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center bg-black text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  
                    <Image
                        src="/about.png" // Temporary placeholder, maybe the user wants a specific one.
                        alt="About Hero Background"
                        fill
                        priority
                        className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container mx-auto px-4 md:px-10 relative z-10 h-full flex items-center">
                    <div className="max-w-4xl pt-20"> {/* pt-20 to account for navbar */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 rounded-full bg-red-600"></span>
                            <span className="text-xs tracking-[0.2em] font-medium uppercase text-white/80">About Us</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="relative z-10">
                                Discovering
                                <span className="absolute bottom-3 left-[-10px] w-[90%] h-4 bg-[#42a852] -z-10 skew-x-12"></span>
                            </span> Our Commitment To <br />
                            <span className="bg-[linear-gradient(90deg,#FFFFFF_0%,#DB0F0E_48.08%,#DB0F0E_96.15%)] bg-clip-text text-transparent">Health And Nutrition</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Passion for Nutritious Section */}
            <section className="bg-white py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/overlay.png')" }}>
                <div className="container mx-auto px-4 md:px-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative h-[268px] md:h-[350px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/fresh_vegetables.png" // Placeholder
                                    alt="Preparing fresh vegetables"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative md:h-[200px] h-[168px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/testimonial.png" // Placeholder
                                    alt="Mother and child cooking"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative md:h-[200px] h-[168px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/cleaning kitchen.png" // Placeholder
                                    alt="Staff cleaning kitchen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-red-600"></span>
                                <span className="text-xs tracking-[0.2em] font-medium uppercase text-gray-500">Learn About Us</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                                About Our Passion For <br />
                                <span className="text-green-600">Nutritious And Clean</span><span> Eating</span>
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                            <div className="space-y-6 pt-4">
                                {/* Feature 1 */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-[#F4F1EA] flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D90000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">We Use Only The Freshest</h3>
                                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-12 min-h-12 rounded-full bg-[#F4F1EA] flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D90000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">Tailored Meal Plans</h3>
                                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button className="bg-[#D90000] hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2 group cursor-pointer shadow-lg shadow-red-600/20">
                                    Learn More
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <WhoWeAre />
            </section>
            {/* Vision and Mission Section */}
            <section className="bg-red-800 text-white py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #DB0F0E 0%, #5D0000 100%)' }}>
                {/* Background Pattern/Overlay if needed, using solid color for now as per image */}

                <div className="container mx-auto px-4 md:px-10 relative z-10">

                    {/* Vision Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-xs tracking-[0.2em] font-medium uppercase text-white/80">HOW IT WORK</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
                            Our <span className="bg-green-600 px-2 text-white inline-block transform -skew-x-6">Vision -</span> We're Help People To Get The Clean Food And Meals For Any Healthy Purpose And Diet Programs.
                        </h2>
                    </div>

                    {/* Video Placeholder */}
                    <div className="relative w-full aspect-video md:h-[500px] mb-20 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/who_we_are.png" // Using existing image as placeholder for video thumbnail
                            alt="Vision Video"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#D90000" stroke="none">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Mission and Values Grid */}
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Left: Mission Content */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-1 bg-green-600"></span>
                                <h3 className="text-3xl md:text-4xl font-bold">Our Mission</h3>
                            </div>
                            <p className="text-white/80 leading-relaxed mb-8">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <div className="border-l-2 border-white/20 pl-6 mb-8">
                                <p className="text-white/90 italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D90000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D90000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Right: Values Cards */}
                        <div className="space-y-4">
                            {/* Sustainability */}
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Sustainability</h4>
                                        <p className="text-white/70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                                    </div>
                                </div>
                            </div>

                            {/* Community Engagements */}
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Community Engagements</h4>
                                        <p className="text-white/70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                                    </div>
                                </div>
                            </div>

                            {/* Innovation */}
                            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-colors">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                                            <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                                            <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                                            <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                                            <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                                            <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Innovation</h4>
                                        <p className="text-white/70 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-10">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-3 h-3 rounded-full bg-red-600"></span>
                            <span className="text-xs tracking-[0.2em] font-medium uppercase text-gray-400">MEET THE TEAM</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
                            <span className="bg-green-600 px-3 text-white inline-block transform -skew-x-6 mr-2">Meet Our</span>
                            Dedicated And <br /> Passionate Team.
                        </h2>
                        <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Members Map */}
                        {[
                            {
                                name: "Ananya Rao",
                                role: "Founder & CEO",
                                image: "/team01.png"
                            },
                            {
                                name: "David Miller",
                                role: "Co-Founder & Chief Operating Officer",
                                image: "/team02.png"
                            },
                            {
                                name: "Vikram Sethi",
                                role: "Head of Strategy & Growth",
                                image: "/team02.png"
                            },
                            {
                                name: "Dr. Kavita Sharma",
                                role: "Chief Nutrition Officer (CNO)",
                                image: "/team03.png"
                            }
                        ].map((member, index) => (
                            <div key={index} className="group relative h-[350px] rounded-3xl overflow-hidden cursor-pointer">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Default State: Green Badge */}
                                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] bg-green-600 rounded-2xl p-4 text-center text-white transition-opacity duration-300 group-hover:opacity-0 z-10">
                                    <h3 className="font-bold text-lg">{member.name}</h3>
                                    <p className="text-xs font-medium opacity-90">{member.role}</p>
                                </div>

                                {/* Hover State: Red Overlay */}
                                <div className="absolute inset-0 bg-[#900B0B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20">
                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 bg-red-600 text-white rounded-md flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </button>
                                        <button className="w-10 h-10 bg-red-600 text-white rounded-md flex items-center justify-center hover:bg-white hover:text-red-600 transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-8 text-center text-white">
                                        <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                        <p className="text-sm opacity-90">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <Voucher />
            </section>
        </div>
    );
};

export default AboutPage;
