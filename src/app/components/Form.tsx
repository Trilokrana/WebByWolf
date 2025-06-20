'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import drop from '../../../public/drop.svg'

type FormData = {
    name: string;
    email: string;
    phone: string;
    timeFrame: string;
    size: string;
    quantity: string;
    description: string;
}

type FormErrors = {
    [key in keyof FormData]?: string;
} & {
    submit?: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        timeFrame: '',
        size: '',
        quantity: '',
        description: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const timeFrameOptions = ['Urgent (1-2 weeks)', '1 month', '2-3 months', 'More than 3 months'];
    const sizeOptions = ['Small', 'Medium', 'Large', 'Custom'];
    const quantityOptions = ['1-10', '11-50', '51-100', '101-500', '500+'];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });


        if (errors[id as keyof FormData]) {
            setErrors({ ...errors, [id]: undefined });
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.timeFrame) newErrors.timeFrame = "Please select a time frame";
        if (!formData.size) newErrors.size = "Please select a size";
        if (!formData.quantity) newErrors.quantity = "Please select a quantity";
        if (!formData.description.trim()) newErrors.description = "Project description is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);

            try {

                await new Promise(resolve => setTimeout(resolve, 1500));


                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    timeFrame: '',
                    size: '',
                    quantity: '',
                    description: ''
                });


                setTimeout(() => setIsSuccess(false), 3000);
            } catch (error) {
                console.error(error);
                setErrors({ ...errors, submit: "Failed to submit form. Please try again." });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-center text-2xl sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10">REQUEST A QUOTE</h2>

            <form className="space-y-3 sm:space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">

                    <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Name*</label>
                        <motion.input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                        {errors.name && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.name}
                            </motion.p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">E-mail*</label>
                        <motion.input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                            whileFocus={{ scale: 1.01 }}
                        />
                        {errors.email && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.email}
                            </motion.p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Phone Number*</label>
                        <motion.input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                            whileFocus={{ scale: 1.01 }}
                        />
                        {errors.phone && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.phone}
                            </motion.p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="timeFrame" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Time Frame*</label>
                        <div className="relative">
                            <motion.select
                                id="timeFrame"
                                value={formData.timeFrame}
                                onChange={handleChange}
                                className={`w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base ${errors.timeFrame ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <option value="" disabled>Choose Time Frame</option>
                                {timeFrameOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </motion.select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <Image src={drop} alt="Dropdown" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        {errors.timeFrame && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.timeFrame}
                            </motion.p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="size" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Size*</label>
                        <div className="relative">
                            <motion.select
                                id="size"
                                value={formData.size}
                                onChange={handleChange}
                                className={`w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base ${errors.size ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <option value="" disabled>Choose Size</option>
                                {sizeOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </motion.select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <Image src={drop} alt="Dropdown" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        {errors.size && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.size}
                            </motion.p>
                        )}
                    </div>


                    <div>
                        <label htmlFor="quantity" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Quantity*</label>
                        <div className="relative">
                            <motion.select
                                id="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className={`w-full p-2 sm:p-2.5 border rounded appearance-none transition-all text-sm sm:text-base ${errors.quantity ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                                whileFocus={{ scale: 1.01 }}
                            >
                                <option value="" disabled>Choose Quantity</option>
                                {quantityOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </motion.select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                <Image src={drop} alt="Dropdown" width={16} height={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                        </div>
                        {errors.quantity && (
                            <motion.p
                                className="text-red-500 text-xs mt-1"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {errors.quantity}
                            </motion.p>
                        )}
                    </div>
                </div>


                <div>
                    <label htmlFor="description" className="block text-xs sm:text-sm mb-1 text-[#0E0D0D]">Please Describe Your Project*</label>
                    <motion.textarea
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements"
                        className={`w-full p-2 sm:p-2.5 border rounded transition-all text-sm sm:text-base ${errors.description ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-gray-100'}`}
                        whileFocus={{ scale: 1.01 }}
                    ></motion.textarea>
                    {errors.description && (
                        <motion.p
                            className="text-red-500 text-xs mt-1"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {errors.description}
                        </motion.p>
                    )}
                </div>

                <div className="text-center text-xs sm:text-sm text-gray-600">
                    By submitting this form you agree to our{' '}
                    <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">Terms of Service</a> and{' '}
                    <a href="#" className="underline text-blue-600 hover:text-blue-800 transition-colors">Privacy Policy</a>.
                </div>


                <div className="flex justify-center mt-2 sm:mt-4">
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md flex items-center justify-center min-w-[140px] sm:min-w-[180px] text-sm sm:text-base relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isSubmitting ? (
                            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <>
                                Submit Request
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </>
                        )}
                    </motion.button>
                </div>


                {errors.submit && (
                    <motion.div
                        className="text-center text-red-500 mt-3 sm:mt-4 text-xs sm:text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {errors.submit}
                    </motion.div>
                )}


                <AnimatePresence>
                    {isSuccess && (
                        <motion.div
                            className="text-center text-green-600 bg-green-50 p-2 sm:p-3 rounded-md mt-3 sm:mt-4 text-xs sm:text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            Thank you! Your form has been submitted successfully.
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </motion.div>
    )
}

export default Form
