import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div className="card w-96 mx-auto border-2 bg-base-100 shadow-xl">
            <figure className="px-6 pt-8">
                <img src={img} alt="Shoes" className="w-72 h-56 rounded-xl bg-gray-100" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex text-warning gap-1'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <h2 className="card-title font-semibold">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'> ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;