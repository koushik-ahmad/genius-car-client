import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import img1 from '../../../assets/images/team/1.jpg';
import img2 from '../../../assets/images/team/2.jpg';
import img3 from '../../../assets/images/team/3.jpg';

const Team = () => {
    const [serviceTeam, setServiceTeam] = useState([]);

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-xl font-bold text-orange-600">Team</p>
                <h1 className="text-5xl font-semibold">Meet Our Team</h1>
                <p className='w-1/2 mx-auto py-4'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                <div className="card w-11/12 mx-auto border-2 bg-base-100 shadow-xl">
                    <figure className="px-6 pt-8">
                        <img src={img1} alt="Shoes" className="w-72 h-72 rounded-xl bg-gray-100" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">Car Engine Plug</h2>
                        <p className='text-lg text-orange-600 font-semibold'>Engine Expert</p>
                        <div className='flex text-2xl gap-3'>
                            <FaFacebook className='text-blue-700'></FaFacebook>
                            <FaTwitter className='text-blue-400'></FaTwitter>
                            <FaLinkedin className='text-blue-900'></FaLinkedin>
                            <FaInstagramSquare className='text-red-600'></FaInstagramSquare>
                        </div>
                    </div>
                </div>
                <div className="card w-11/12 mx-auto border-2 bg-base-100 shadow-xl">
                    <figure className="px-6 pt-8">
                        <img src={img2} alt="Shoes" className="w-72 h-72 rounded-xl bg-gray-100" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">Car Engine Plug</h2>
                        <p className='text-lg text-orange-600 font-semibold'>Engine Expert</p>
                        <div className='flex text-2xl gap-3'>
                            <FaFacebook className='text-blue-700'></FaFacebook>
                            <FaTwitter className='text-blue-400'></FaTwitter>
                            <FaLinkedin className='text-blue-900'></FaLinkedin>
                            <FaInstagramSquare className='text-red-600'></FaInstagramSquare>
                        </div>
                    </div>
                </div>
                <div className="card w-11/12 mx-auto border-2 bg-base-100 shadow-xl">
                    <figure className="px-6 pt-8">
                        <img src={img3} alt="Shoes" className="w-72 h-72 rounded-xl bg-gray-100" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-semibold">Car Engine Plug</h2>
                        <p className='text-lg text-orange-600 font-semibold'>Engine Expert</p>
                        <div className='flex text-2xl gap-3'>
                            <FaFacebook className='text-blue-700'></FaFacebook>
                            <FaTwitter className='text-blue-400'></FaTwitter>
                            <FaLinkedin className='text-blue-900'></FaLinkedin>
                            <FaInstagramSquare className='text-red-600'></FaInstagramSquare>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;