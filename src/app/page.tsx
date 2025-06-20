'use client'
import React from 'react';
import Image from 'next/image';
import { Roboto_Condensed, Inter } from 'next/font/google';
import rider from '../../public/rider.svg';  
import arrow from '../../public/arrow.svg'; 
import bike from '../../public/bike.svg';
import hands from '../../public/hands.svg';
import friends from '../../public/friends.svg';
import motor from '../../public/motor-bike.svg';
import phone from '../../public/phone.svg';
import drive from '../../public/drive.svg';
import drawn from '../../public/drawn.svg';
import music from '../../public/music.svg';
import Brands from './components/Brands';
import Cards from './components/Cards';
import Form from './components/Form';
import iphone from '../../public/hand_mobile.svg';
import google from '../../public/google_play.svg';
import apple from '../../public/apple_play.svg'; 
import Gallery from './components/Gallery';
import cycle from '../../public/chirodc_Two.svg'
import Carousel from './components/Carousel';
import partner from '../../public/partner.svg'
import teer from '../../public/teer.svg'
import dealer from '../../public/dealer.svg'
import push from '../../public/push.svg'
import Artist from './components/Artist';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';


const robotoCondensed = Roboto_Condensed({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed',
});

const inter = Inter({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const Page = () => {
  return (
    <main className='bg-white'>
      <div
        className={`relative min-h-screen flex flex-col md:flex-row ${robotoCondensed.variable} ${inter.variable}`}
      >
   
        {(() => {
          const [scrolled, setScrolled] = useState(false);
          const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

          useEffect(() => {
            const handleScroll = () => {
              setScrolled(window.scrollY > 50);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
          }, []);

          return (
            <>
              <motion.header
                className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 z-30 transition-all ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
                  }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              >
                <motion.div
                  className="bg-gray-200 px-4 py-2 font-bold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  LOGO
                </motion.div>

                <nav className="hidden md:flex bg-amber-200">
                  <ul className="flex list-none gap-6">
                    {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ scale: 1.1, color: '#0546D2' }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <a href="#" className="text-[#1959AC] no-underline">
                          {item}{' '}
                          <span>
                            <Image
                              src={arrow}
                              alt="dropdown"
                              width={12}
                              height={12}
                              className="inline-block"
                            />
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center">
                  <motion.button
                    className="bg-white border rounded px-4 sm:px-8 py-2 cursor-pointer shadow mr-2 sm:mr-10 font-bold hidden sm:block"
                    whileHover={{ scale: 1.05, backgroundColor: '#f8f8f8' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>

                  <button
                    className="md:hidden p-2 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {mobileMenuOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                      ) : (
                        <>
                          <path d="M3 12h18M3 6h18M3 18h18" />
                        </>
                      )}
                    </svg>
                  </button>
                </div>
              </motion.header>


              <AnimatePresence>
                {mobileMenuOpen && (
                  <>
 
                    <motion.div
                      className="fixed inset-0 bg-gray-400 bg-opacity-50 z-10 md:hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="fixed top-[60px] left-0 w-full bg-white z-20 shadow-lg py-4 md:hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <nav className="px-4">
                        <ul className="flex flex-col list-none gap-4">
                          {['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'].map((item, index) => (
                            <li key={index} className="py-2 border-b border-gray-300">
                              <a href="#" className="text-[#1959AC] no-underline flex justify-between">
                                {item}
                                <Image src={arrow} alt="dropdown" width={12} height={12} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </>
          );
        })()}


        <div className="flex flex-col md:flex-row w-full mt-16 md:mt-0">

          <motion.div
            className="flex-1 flex flex-col justify-center p-4 sm:p-8 z-10 mt-12 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="font-[var(--font-roboto-condensed)]">
              <h1 className="text-3xl md:text-[42px] font-bold mb-4 text-[#222222] tracking-[-0.02em]">
                Lorem ipsum dolor sit amet
              </h1>
            </div>

            <div className="font-[var(--font-inter)]">
              <p className="text-base sm:text-lg md:text-[20px] font-semibold mb-6 md:mb-8 leading-relaxed text-[#222222] tracking-[-0.02em]">
                Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis.
                Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
                Justo suspendisse tristique posuere quis eget viverra.
                Nunc euismod ultrices etiam nulla habitasse.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row mb-4">
              <div className="flex-1 sm:mr-2 mb-2 sm:mb-0">
                <input
                  type="text"
                  className="w-full py-3 px-3 border border-gray-300 rounded"
                  placeholder="Enter your email"
                />
              </div>
              <motion.button
                className="bg-[#0546D2] text-white border-none rounded py-3 px-6 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Submit <span>→</span>
              </motion.button>
            </div>

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-5 h-5 rounded-full bg-[#1959AC] flex justify-center items-center">
                <div className="text-white text-xs">✓</div>
              </div>
              <span className="text-[#222222]">No credit card required!</span>
            </motion.div>
          </motion.div>


          <motion.div
            className="flex-1 relative h-[50vh] md:h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
              <Image
                src={rider}
                alt="Motorcyclists riding on street"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto shadow-xl bg-[#FFFFFF99] mt-24">
    
        <div className="max-w-7xl mx-auto px-8 pt-4 ">

  
          <div className="text-[#0546D2] text-[24px] mb-4 font-semibold">
            <a href="#" className="hover:underline ">Lorem ipsum dolor sit</a>
          </div>

       
          <div className="flex flex-col md:flex-row gap-12 mb-8">

       
            <div className="w-full md:w-1/2">
         
              <div className="font-[var(--font-roboto-condensed)]">
                <h2 className="text-[42px] font-bold uppercase tracking-tight leading-tight mb-4">
                  LOREM IPSUM<br />DOLOR SIT AMET
                </h2>
              </div>

           
              <p className="font-[var(--font-inter)] text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui.
                Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>

          
              <div className="space-y-4">
             
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={bike}
                      alt="Motorcycle rider"
                      width={146}
                      height={146}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={hands}
                      alt="Motorcycle"
                      width={146}
                      height={146}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.
                    </p>
                  </div>
                </div>

               
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={friends}
                      alt="Motorcycle shop"
                      width={146}
                      height={146}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] h-full">
                <Image
                  src={motor}
                  alt="Motorcycles display"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

      
          <div className="flex flex-wrap items-center gap-6 mt-6 mb-10">
            <a href="#" className="bg-[#1959AC] text-white px-4 py-2 rounded text-lg font-bold flex items-center">
              <span>Lorem ipsum</span>
              <span className="ml-2">→</span>
            </a>

            <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src={phone}
                  alt="phone icon"
                  width={24}
                  height={24}
                  priority
                  className="object-cover"
                />
              </span>
              <span className='text-[#043898] font-semibold'>123456789</span>
            </div>
          </div>

       

        </div>
        <div className="max-w-7xl mx-auto pr-8">
          <div className="w- h-3 pr-8 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto shadow-xl bg-[#FFFFFF99] mt-24 mb-24">
        <div className="max-w-7xl mx-auto px-8 pt-4 pb-8 mb-12 ">
       
          <div className="text-[#0546D2] text-[24px] mb-4 font-semibold">
            <a href="#" className="hover:underline">Lorem ipsum dolor sit amet</a>
          </div>

       
          <div className="flex flex-col md:flex-row gap-12">
        
            <div className="w-full md:w-1/2">
            
              <div className="font-[var(--font-roboto-condensed)]">
                <h2 className="text-[32px] font-bold tracking-tight leading-tight mb-6">
                  LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR. EU<br />ELIT.
                </h2>
              </div>

            
              <p className="font-[var(--font-inter)] text-lg mb-8">
                Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
              </p>

         
              <div className="space-y-4">
             
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={drive}
                      alt="icon"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-inter)] text-base mb-2 text-[20px] font-semibold">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>

              
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={drive}
                      alt="icon"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-inter)] font-semibold text-base mb-2 text-[20px]">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>

            
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={drive}
                      alt="icon"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-inter)] font-semibold text-base mb-2 text-[20px]">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</h3>
                    <p className="font-[var(--font-inter)] text-lg">
                      Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

      
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[4/3] h-full">
                <Image
                  src={friends}
                  alt="Two people talking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto ">
          <div className="h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]" />
        </div>
      </div>
      
      <motion.div
        className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] overflow-hidden mb-16 sm:mb-20 md:mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
      
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{
            scale: 1.0,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image
            src={drawn}
            alt="Motorcyclist in rain"
            fill
            priority
            className="object-cover brightness-75 hover:brightness-70 transition-all duration-700"
            sizes="100vw"
          />
        </motion.div>

    
        <motion.div
          className="absolute top-4 sm:top-6 left-4 sm:left-8 md:left-14 bg-white px-4 sm:px-6 py-1 sm:py-2 font-extrabold text-xl sm:text-2xl md:text-[32px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
          }}
        >
          LOGO
        </motion.div>

 
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 mt-15">
         
          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-[var(--font-roboto-condensed)] mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-xl md:max-w-4xl uppercase tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.5,
              duration: 0.8
            }}
            whileHover={{ scale: 1.02 }}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
          </motion.h2>

       
          <motion.div
            className="max-w-xs sm:max-w-lg md:max-w-3xl space-y-3 sm:space-y-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-white text-sm sm:text-base md:text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
              nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed.
            </p>

            <p className="text-white text-sm sm:text-base md:text-[18px] hidden sm:block">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non.
              Ornare semper in tincidunt pellentesque cras mauris in vitae.
            </p>
          </motion.div>

      
          <motion.button
            className="bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-6 py-2 mt-6 sm:mt-8 font-medium text-sm sm:text-base transition-colors duration-300 hidden sm:block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

       
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
      </motion.div>
      <Brands />
      <Cards />
      <motion.div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mb-16 sm:mb-20 md:mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
 
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          animate={{
            scale: 1.0,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Image
            src={music}
            alt="Motorcyclist in rain"
            fill
            priority
            className="object-cover brightness-75 hover:brightness-70 transition-all duration-700"
            sizes="100vw"
          />
        </motion.div>

       
        <motion.div
          className="absolute top-4 sm:top-6 left-4 sm:left-8 md:left-14 bg-white px-4 sm:px-6 py-1 sm:py-2 font-extrabold text-xl sm:text-2xl md:text-[32px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.3
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
          }}
        >
          LOGO
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">

          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-[42px] lg:text-5xl font-[var(--font-roboto-condensed)] font-bold mb-4 sm:mb-8 md:mb-8 max-w-xs sm:max-w-xl md:max-w-4xl uppercase tracking-tight my-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.5,
              duration: 0.8
            }}
            whileHover={{ scale: 1.02 }}
          >
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing
          </motion.h2>

          <motion.button
            className="bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-6 py-2  font-medium text-sm sm:text-base transition-colors duration-300 hidden sm:block"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none"></div>
      </motion.div>
      <Form />
      <motion.div
        className="max-w-8xl mx-auto my-12 md:my-24 px-4 sm:px-8 md:px-16 lg:px-25 bg-[#F3F3F3] py-12 md:py-20 overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <motion.div
              className="text-[#0546D2] text-xl sm:text-[24px] mb-2 font-semibold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Lorem Ipsum
            </motion.div>


            <motion.h2
              className="text-3xl sm:text-4xl md:text-[42px] font-[var(--font-roboto-condensed)] text-[#222222] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Lorem Ipsum Dolor<br className="hidden sm:block" />Sit Amet
            </motion.h2>

            <motion.p
              className="text-[#222222] mb-6 sm:mb-8 font-[var(--font-inter)] text-base sm:text-lg md:text-[18px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
            </motion.p>


            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={google}
                  alt="Get it on Google Play"
                  width={130}
                  height={44}
                  className="object-contain w-[120px] sm:w-[150px]"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={apple}
                  alt="Download on the App Store"
                  width={117}
                  height={40}
                  className="object-contain w-[108px] sm:w-[135px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative w-full aspect-[3/2] max-w-md mx-auto"
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <Image
                src={iphone}
                alt="Hand holding smartphone"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Gallery />
      <section className="w-full flex items-center  pt-0 px-4 relative overflow-visible pr-10 mt-50">
        <div className="relative max-w-7.5xl w-full  bg-[#f9f9f9]">

          <div className="hidden lg:block absolute -top-20 -left-5 z-10 ml-5 ">
            <Image
              src={cycle}
              alt="Motorcyclists"
              className="object-cover border-white shadow-lg"
              width={550}
              height={550}
            />
          </div>


          <div className="relative z-0 lg:ml-[50%] p-8">

            <p className="text-[#0546D2] mb-2 text-[24px] font-semibold">Lorem ipsum</p>
            <h2 className="text-[42px] font-[var(--font-roboto-condensed)] uppercase tracking-tight leading-tight mb-4">
              <span className='text-[#1959AC] '>LOREM</span> IPSUM DOLOR SIT<br />AMET CONSECTETUR. ENIM<br />DONEC.
            </h2>


            <p className="font-[var(--font-inter)] text-base mb-6 text-[#222222] text-[18px]">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>


            <div className="grid grid-cols-2 gap-4 mb-6 text-[#222222] text-[20px] font-var(--font-inter)] ">
              {Array(6).fill('Lorem Ipsum').map((text, i) => (
                <p key={i} className="font-[var(--font-inter)] h-[48px]">{text}</p>
              ))}
            </div>


            <div className="mt-4">
              <a href="#" className="inline-flex items-center justify-center bg-[#1959AC] text-white px-6 py-2 rounded text-lg font-medium shadow">
                <span>Lorem ipsum</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          <div className="max-w-7.5xl mx-auto pr-8 mt-12">
            <div className="w- h-3 pr-8 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]" />
          </div>
        </div>

      </section>
      <Carousel />
      <motion.div
        className="max-w-7xl mx-auto bg-[#FFFFFF99] my-12 sm:my-16 md:my-24 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-[42px] font-[var(--font-roboto-condensed)] mb-4 sm:mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </motion.h2>

            
            <motion.div
              className="flex flex-wrap sm:flex-nowrap mb-4 sm:mb-6 border rounded-md overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-[#F1F5F9] text-[#222222] font-medium text-sm sm:text-base"
                whileHover={{ backgroundColor: "#E2E8F0" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Research
              </motion.button>
              <motion.button
                className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-white text-[#222222] font-medium text-sm sm:text-base border-x"
                whileHover={{ backgroundColor: "#F8FAFC" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Plan
              </motion.button>
              <motion.button
                className="flex-1 py-2 sm:py-3 px-3 sm:px-4 bg-[#F9F9F9] text-[#222222] font-medium text-sm sm:text-base"
                whileHover={{ backgroundColor: "#F1F1F1" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Design
              </motion.button>
            </motion.div>

            <motion.p
              className="text-[#222222] text-base sm:text-[18px] leading-relaxed mb-4 sm:mb-6 font-[var(--font-inter)]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
            </motion.p>

            <motion.a
              href="#"
              className="inline-flex items-center text-[#0546D2] font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ x: 5 }}
            >
              Check tools
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                <Image
                  src={teer}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </motion.span>
            </motion.a>
          </motion.div>

         
          <motion.div
            className="w-full md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="relative w-full aspect-[16/9] overflow-hidden  shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={partner}
                alt="Handshake"
                width={600}
                height={406}
                className="object-cover w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="max-w-7xl mx-auto bg-[#FFFFFF99] mt-12 sm:mt-16 md:mt-24 py-6 sm:py-8 md:py-10 relative overflow-visible px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.section
          className="w-full flex flex-col items-center pt-0 relative overflow-visible"
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full bg-[#f9f9f9] shadow-sm">
            <div className="relative z-0 p-4 sm:p-6 md:p-8 mb-16 sm:mb-20 md:mb-40 lg:mr-[50%]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h2
                  className="text-[#1959AC] text-2xl sm:text-3xl md:text-[42px] font-[var(--font-roboto-condensed)] uppercase tracking-tight leading-tight mb-4 sm:mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  LOREM IPSUM DOLOR SIT<br className="hidden sm:block" />AMET CONSECTETUR.<br className="hidden sm:block" />DIGNISSIM TELLUS.
                </motion.h2>

                <motion.p
                  className="text-[#222222] text-base sm:text-lg mb-6 sm:mb-8 font-[var(--font-inter)]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
                  Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
                  Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
                </motion.p>

                <motion.a
                  href="#"
                  className="bg-[#1959AC] text-white px-4 py-2 rounded text-lg font-medium inline-flex items-center"
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Lorem ipsum</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >→</motion.span>
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block absolute -top-10 -right-5 z-10 mr-5"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src={dealer}
                alt="Motorcyclists"
                className="object-cover border-white shadow-lg"
                width={550}
                height={550}
              />
            </motion.div>
          </div>
        </motion.section>

       
        <div className="w-full lg:w-1/2 relative mx-auto lg:ml-3 mt-10">
          
          <motion.div
            className="absolute -top-20 sm:-top-30 md:-top-40 right-0 left-0 lg:left-auto lg:right-4 xl:right-35 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 50 }}
          >
            <motion.div
              className="bg-white p-4 sm:p-6 shadow-md relative"
              whileHover={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                y: -5
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="absolute top-4 right-4"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={push}
                  alt="Pin icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </motion.div>

              <motion.h3
                className="font-bold text-lg mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Lorem ipsum dolor sit
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
                </p>

                <p className="text-gray-700 text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto mt-20 sm:mt-16 md:mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ originX: 0 }}
        >
          <div className="h-3 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mr-0 sm:mr-24 md:mr-40 lg:mr-56" />
        </motion.div>
      </motion.div>
      <Artist />
      <Accordion />
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mb-12 md:mb-24 mt-10 md:mt-30">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
          <div className="bg-[#DBDBDB] px-4 sm:px-6 py-1 sm:py-2 font-bold text-center mb-4 sm:mb-6 md:mb-8 text-xl sm:text-2xl md:text-[32px]">
            LOGO
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold mb-3 sm:mb-4 md:mb-6 uppercase max-w-4xl px-2">
            LOREM IPSUM DOLOR SIT AMET <br className="hidden sm:inline" />CONSECTETUR. DUI.
          </h2>

          <p className="text-sm sm:text-base mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl px-2">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <a href="#" className="inline-flex items-center bg-[#1959AC] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded text-base sm:text-lg">
            <span>Loerum Ipsum</span>
            <span className="ml-1 sm:ml-2">→</span>
          </a>
        </div>
      </div>
      <Footer />

    </main >
  );
};

export default Page;
