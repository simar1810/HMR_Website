"use client";

import React from 'react';
import Image from 'next/image';

const CommunityScroller = () => {
    const communityPosts = [
        {
            handle: "@mostyle_coach",
            image: "/popularMenu1.png", // Placeholder
            avatar: "/team01.png"
        },
        {
            handle: "@kate_hogg",
            image: "/popularMenu2.png", // Placeholder
            avatar: "/team02.png"
        },
        {
            handle: "@sultanfalasi",
            image: "/popularMenu3.png", // Placeholder
            avatar: "/team03.png"
        },
        {
            handle: "@s_mozakzak",
            image: "/cleanFood1.jpeg", // Placeholder
            avatar: "/team01.png"
        },
        {
            handle: "@laurazara",
            image: "/cleanFood2.jpeg", // Placeholder
            avatar: "/team02.png"
        },
        {
            handle: "@khadija.chahmoud",
            image: "/popularMenu1.png", // Placeholder
            avatar: "/team03.png"
        }
    ];

    // Duplicate list for infinite scroll effect
    const scrollerContent = [...communityPosts, ...communityPosts];

    return (
        <section className="w-full py-20 bg-[#439F48] overflow-hidden">
            <div className="container mx-auto px-4 md:px-10 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    From The Community
                </h2>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee w-max py-4">
                    {scrollerContent.map((post, index) => (
                        <div key={index} className="w-[250px] h-[300px] mx-3 bg-white rounded-3xl p-3 flex flex-col shadow-lg flex-shrink-0">
                            {/* Main Post Image */}
                            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden mb-3">
                                <Image
                                    src={post.image}
                                    alt="Community Post"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* User Info */}
                            <div className="mt-auto px-1 pb-1 flex items-center gap-3">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100">
                                    <Image
                                        src={post.avatar}
                                        alt={post.handle}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-bold text-sm text-gray-800">{post.handle}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityScroller;
