'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import thunder from '../../../public/thunderstorm.svg'
import timer from '../../../public/timer.svg'
import tower from '../../../public/tower.svg'
import stars from '../../../public/stars.svg'
import capri from '../../../public/capri.svg'
import riya from '../../../public/riya.svg'
import ralph from '../../../public/ralph.svg'
import silyy from '../../../public/silyy.svg'
import left from '../../../public/left_button.svg'
import right from '../../../public/right_button.svg'

const Carousel = () => {
    const cards = [
        {
            id: 1,
            icon: thunder,
            text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non purus. Arcu nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod,dateuod muixc",
            avatar: capri,
            name: "Jane Cooper"
        },
        {
            id: 2,
            icon: stars,
            text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer,Sit quam tortor eu tellus.",
            avatar: ralph,
            name: "Ralph Edwards"
        },
        {
            id: 3,
            icon: tower,
            text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
            avatar: riya,
            name: "Courtney Henry"
        },
        {
            id: 4,
            icon: timer,
            text: "Hendrerit augue ut mi quis integer netus. Sed rhoncus magnis habitasse turpis. Egestas amet habitasse tellus ornare. Hendrerit senectus. Mauris egesta vitae praesent neque,fermentum consequat aenean libero.",
            avatar: silyy,
            name: "Cameron W."
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(4);
            }
        };


        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount)
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % cards.length
        );
    };


    const getVisibleCards = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            const index = (currentIndex + i) % cards.length;
            result.push(cards[index]);
        }
        return result;
    };

    return (
        <div className="bg-[#155ADA] w-full">
            <div className="bg-[#155ADA] py-8 md:py-12 px-4 sm:px-6 lg:px-8 text-white mt-16 md:mt-36">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8 md:mb-12">
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold">Join other Sun harvesters</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold my-2">LOREM IPSUM DOLOR SIT AMET</h2>
                            <button className="bg-white text-black px-6 sm:px-10 py-2 rounded text-sm sm:text-[15px] w-full sm:w-auto">Lorem Ipsum</button>
                        </div>
                    </div>

                    <p className="text-base sm:text-lg md:text-[18px] max-w-2xl">
                        Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique
                        condimentum congue fusce nunc, donec magnis commodo.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 xl:px-20">
                {
                    getVisibleCards().map(card => (
                        <div key={card.id} className="bg-white rounded-lg p-4 sm:p-6 text-gray-800 transition-all transform hover:scale-105 duration-300">
                            <div className="flex justify-start mb-4">
                                <Image src={card.icon} alt="icon" width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16" />
                            </div>
                            <p className="text-sm sm:text-base md:text-[18px] mb-6 sm:mb-8">
                                {card.text}
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <Image src={card.avatar} alt="avatar" width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16" />
                                <span className='text-sm sm:text-base md:text-[18px]'>{card.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center sm:justify-start px-4 sm:px-6 lg:px-8 xl:px-20 space-x-3 py-8 sm:py-12 md:py-20">
                <button
                    onClick={handlePrev}
                    className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image src={left} alt='previous' width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </button>
                <button
                    onClick={handleNext}
                    className="flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Image src={right} alt='next' width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                </button>
            </div>
        </div>
    )
}

export default Carousel