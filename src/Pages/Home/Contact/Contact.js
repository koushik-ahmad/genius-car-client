import React from 'react';
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className="px-4 py-16 bg-black text-white rounded-lg my-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid row-gap-8 lg:grid-cols-3 md:grid-cols-3">
                <div className="flex gap-4 items-center justify-center">
                    <div className='text-4xl text-orange-600'>
                        <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    <div>
                        <h6 className="">We are open monday-friday</h6>
                        <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div className='text-4xl text-orange-600'>
                        <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <div>
                        <h6 className="">Have a question?</h6>
                        <p className="text-2xl font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <div className='text-4xl text-orange-600'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                    </div>
                    <div>
                        <h6 className="">Need a repair? our address</h6>
                        <p className="text-2xl font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;