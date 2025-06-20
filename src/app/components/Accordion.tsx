'use client'
import React, { useState } from 'react'

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "What services do you offer?",
        answer: "We offer web design, development, and optimization services."
    },
    {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on project requirements. Contact us for a quote."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines depend on complexity and scope. We'll provide an estimate after consultation."
    }, {
        question: "What tech Stack this project is using ?",
        answer: "We are using Next.js, React, Tailwind CSS, and TypeScript for this project."
    }
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-20 md:mt-30">
            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-bold mb-8 sm:mb-12 md:mb-20 text-center sm:text-left">
                FREQUENTLY ASKED QUESTIONS (FAQS)
            </h1>

            <div className="border-t border-gray-200">
                {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                        <div
                            className="py-4 sm:py-6 flex justify-between items-center cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-base sm:text-lg font-medium pr-2">{item.question}</h3>
                            <span className="text-lg sm:text-[18px] flex-shrink-0">{openIndex === index ? '−' : '+'}</span>
                        </div>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-4 sm:pb-6' : 'max-h-0'
                                }`}
                        >
                            <p className="text-gray-700 text-sm sm:text-base md:text-[18px]">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Accordion