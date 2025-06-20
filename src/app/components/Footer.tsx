import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#1959AC] text-white py-6 sm:py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
    
                    <div className="col-span-1 xs:col-span-2 md:col-span-1">
                        <div className="bg-white text-black px-3 py-1 md:px-5 md:py-2 font-bold text-xl md:text-2xl lg:text-[32px] mb-3 md:mb-6 inline-block">
                            LOGO
                        </div>
                        <p className="text-white/90 mb-4 text-xs sm:text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-base sm:text-lg mb-2 md:mb-4">Quick Links</h3>
                        <ul className="space-y-1 sm:space-y-2">
                            {["Home", "About", "Services", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/90 hover:text-white text-xs sm:text-sm md:text-base block py-0.5 md:py-1">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h3 className="font-bold text-base sm:text-lg mb-2 md:mb-4">Resources</h3>
                        <ul className="space-y-1 sm:space-y-2">
                            {["Blog", "Help Center", "Privacy Policy", "Terms of Service"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-white/90 hover:text-white text-xs sm:text-sm md:text-base block py-0.5 md:py-1">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 xs:col-span-2 md:col-span-1 mt-2 xs:mt-4 md:mt-0">
                        <h3 className="font-bold text-base sm:text-lg mb-2 md:mb-4">Contact Info</h3>
                        <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                            {[
                                { icon: "📧", text: "info@example.com" },
                                { icon: "📞", text: "+1 234 567 8900" },
                                { icon: "📍", text: "123 Street, City, Country" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="mr-2 text-base md:text-lg">{item.icon}</span>
                                    <span className="text-white/90 text-xs sm:text-sm md:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="border-t border-white/20 mt-6 sm:mt-8 md:mt-10 lg:mt-12 pt-4 sm:pt-6 md:pt-8">
                    <div className="flex flex-col xs:flex-row justify-between items-center">
                        <p className="text-white/70 text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-0 text-center xs:text-left">
                            © 2025 Company Name. All rights reserved.
                        </p>
                        <div className="flex space-x-3 sm:space-x-5 md:space-x-6">
                            {["Privacy", "Terms", "Cookies"].map((link) => (
                                <a key={link} href="#" className="text-white/70 hover:text-white text-[10px] xs:text-xs sm:text-sm py-1">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
