'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import defaultArtistImage from '../../../public/artist.svg'

interface ArtistProps {
    title?: string;
    description?: string;
    artistImage?: StaticImageData | string;
    artistInfo?: {
        title: string;
        summary: string;
        fullStoryLink: string;
    };
}

const Artist: React.FC<ArtistProps> = ({
    title = "LOREM IPSUM DOLOR SIT AMET",
    description = "Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.",
    artistImage = defaultArtistImage,
    artistInfo = {
        title: "Artist & Investor",
        summary: "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisi quis est ...",
        fullStoryLink: "#"
    }
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    return (
        <section className="py-8 sm:py-12 px-4 max-w-7xl mx-auto mt-40 sm:mt-40 md:mt-40">

            <header className="text-center mb-8 sm:mb-12">
                <h1 className="text-[28px] sm:text-[32px] md:text-[42px] font-bold mb-4 sm:mb-6">
                    {title}
                </h1>
                <p className="text-gray-700 max-w-4xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] px-2">
                    {description}
                </p>
            </header>


            <div className="relative flex flex-col md:flex-row items-start mt-6 sm:mt-10">
       
                <div className="w-full md:w-3/4 lg:w-2/3">
                    <Image
                        src={artistImage}
                        alt="Artist portrait"
                        width={680}
                        height={412}
                        className="max-w-full h-auto rounded-sm"
                        priority
                    />
                </div>

       
                <div
                    className="w-full md:w-[45%] lg:w-[40%] bg-white p-6 sm:p-8 shadow-lg mt-6 md:mt-0 md:absolute md:right-30 lg:right-30 md:top-24 lg:top-20 xl:top-20 max-w-full transition-shadow duration-300"
                    style={{
                        boxShadow: isHovering ? '0 10px 25px rgba(0,0,0,0.15)' : '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-gray-800 mb-3 sm:mb-4">
                        {artistInfo.title}
                    </h2>
                    <p className="text-gray-600 mb-5 sm:mb-6 text-[14px] sm:text-[16px] md:text-[18px]">
                        {artistInfo.summary}
                    </p>
                    <a
                        href={artistInfo.fullStoryLink}
                        className="text-blue-600 flex items-center font-medium text-sm md:text-base"
                        onMouseEnter={() => setIsLinkHovered(true)}
                        onMouseLeave={() => setIsLinkHovered(false)}
                    >
                        Read Full Story
                        <svg
                            className="h-5 w-5 ml-2 transition-transform duration-300"
                            style={{
                                transform: isLinkHovered ? 'translateX(4px)' : 'translateX(0)'
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Artist
