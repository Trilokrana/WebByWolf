import React from 'react'
import Image from 'next/image'
import architecture from '../../../public/architecture.svg';
import budhha from '../../../public/budhha.svg';
import girl from '../../../public/girl.svg';
import santra from '../../../public/santra.svg';

const Cards = () => {
    const cardData = [
        { image: architecture, alt: "City buildings with sunset" },
        { image: budhha, alt: "White statue" },
        { image: girl, alt: "Person in colorful clothing" },
        { image: santra, alt: "Oranges with leaves" }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative">
            <div className="text-[#0546D2] mb-2">
                <a href="#" className="text-xl sm:text-2xl md:text-[24px] font-semibold">Lorem ipsum dolor sit amet</a>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-2 sm:mb-4">LOREM IPSUM DOLOR SIT</h1>

            <p className="text-gray-700 mb-8 sm:mb-12 max-w-3xl text-base sm:text-lg">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="card border border-[#F1F0F0] rounded-2xl mb-6 md:mb-12 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative w-full h-40 sm:h-48 mb-4">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                className="rounded-b-none rounded-t-2xl object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className='px-6 sm:px-10 py-4 mb-6 sm:mb-10'>
                            <h3 className="font-medium text-base sm:text-lg mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
                            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-8">
                                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                            </p>
                            <a href="#" className="text-[#0546D2] text-sm md:text-[16px] inline-block underline underline-offset-2 transition-colors duration-300 hover:text-blue-700">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards
