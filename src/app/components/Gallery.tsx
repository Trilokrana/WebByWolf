import React from 'react';
import Image from 'next/image';
import bikers1 from '../../../public/bikers1.svg';
import double from '../../../public/double.svg';
import bikers3 from '../../../public/bikers3.svg';
import bikers4 from '../../../public/bikers4.svg';
import bikers5 from '../../../public/bikers5.svg';
import bikers6 from '../../../public/bikers6.svg';
import red from '../../../public/red_bikes.svg';
import mens from '../../../public/mens.svg';

const Gallery = () => {
    return (
        <section className="w-full py-12 px-4 flex justify-center items-center bg-white">
            <div className="flex flex-col lg:flex-row gap-8 bg-[#F1F5F9] max-w-7xl w-full p-4 sm:p-6 md:p-8">
               
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="px-2 md:px-6">
                        <h4 className="text-[18px] sm:text-[20px] font-medium text-[#475569] mb-2">NO LIMITS</h4>
                        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-4 leading-tight">
                            LOREM IPSUM DOLOR SIT AMET
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-[16px]">
                            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                            <button className="bg-[#1959AC] text-white px-6 py-2 flex items-center justify-center shadow-md text-[15px] font-semibold rounded hover:bg-blue-700 transition-colors">
                                Loerum Ipsum
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <Image
                                src={bikers4}
                                alt="Motorcyclists at sunset"
                                width={135}
                                height={241}
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-end mt-auto px-2 md:px-6">
                        <Image
                            src={bikers6}
                            alt="Motorcycle parts"
                            width={135}
                            height={312}
                            className="object-cover"
                        />
                        <Image
                            src={bikers5}
                            alt="Motorcycle detail"
                            width={459}
                            height={312}
                            className="object-cover"
                        />
                    </div>
                </div>

            
                <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6 px-2 md:px-6">
              
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        <Image
                            src={bikers1}
                            alt="Vertical biker"
                            width={135}
                            height={240}
                            className="object-cover mt-4 sm:mt-8"
                        />
                        <Image
                            src={double}
                            alt="Wide biker"
                            width={459}
                            height={240}
                            className="object-cover"
                        />
                    </div>

               
                    <Image
                        src={bikers3}
                        alt="Motorcyclists"
                        width={624}
                        height={312}
                        className="object-cover"
                    />

                  
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                        <Image
                            src={red}
                            alt="Red bike"
                            width={135}
                            height={210}
                            className="object-cover"
                        />
                        <Image
                            src={mens}
                            alt="Men"
                            width={459}
                            height={210}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
