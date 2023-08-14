import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 p-5 border-2 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-center items-center'>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className=''>
                        <Link to={`/checkout/${_id}`}>
                            <button className='btn btn-primary'>Checkout
                                <FaArrowRight className='text-md text-orange-600'></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;