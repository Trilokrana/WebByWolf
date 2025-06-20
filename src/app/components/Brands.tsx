'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hero from '../../../public/hero.svg';
import honda from '../../../public/honda.svg';
import bajaj from '../../../public/bajaj.svg';
import tvs from '../../../public/tvs.svg';
import royal from '../../../public/royal.svg';
import yamah from '../../../public/yamah.svg';
import ktm from '../../../public/ktm.svg';
import ather from '../../../public/ather.svg';
import ola from '../../../public/ola.svg';
import revolt from '../../../public/revolt.svg';
import ultra from '../../../public/ultra.svg';
import torq from '../../../public/torq.svg';

const brandData = [
    { image: hero, alt: "Hero", width: 86, height: 97 },
    { image: honda, alt: "Honda", width: 121, height: 97 },
    { image: bajaj, alt: "Bajaj", width: 160, height: 90 },
    { image: tvs, alt: "TVS", width: 222, height: 62 },
    { image: royal, alt: "Royal Enfield", width: 238, height: 58 },
    { image: yamah, alt: "Yamaha", width: 173, height: 60 },
    { image: ktm, alt: "KTM", width: 136, height: 53 },
    { image: ather, alt: "Ather", width: 205, height: 74 },
    { image: ola, alt: "Ola Electric", width: 185, height: 92 },
    { image: revolt, alt: "Revolt", width: 167, height: 83 },
    { image: ultra, alt: "Ultraviolette", width: 287, height: 61 },
    { image: torq, alt: "Tork Motors", width: 101, height: 143 },
];

const Brands = () => {
    const [activeBrand, setActiveBrand] = useState<string | null>(null);

    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
                        LOREM IPSUM DOLOR SIT AMET
                        <br className="hidden sm:block" />
                        CONSECTETUR. COMMODO LEO AMET.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
                    {brandData.map((brand, index) => (
                        <motion.div
                            key={brand.alt}
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            onMouseEnter={() => setActiveBrand(brand.alt)}
                            onMouseLeave={() => setActiveBrand(null)}
                        >
                            <div className="relative group cursor-pointer transition-all duration-300 p-4">
                                <Image
                                    src={brand.image}
                                    alt={brand.alt}
                                    width={brand.width}
                                    height={brand.height}
                                    className={`h-8 sm:h-10 md:h-12 object-contain transition-all duration-300 
                                        ${activeBrand === brand.alt ? 'filter-none' : 'filter grayscale hover:grayscale-0'}`}
                                />
                                <div className={`absolute inset-0 bg-blue-50 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Brands;