import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4 pt-10'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h1 className="text-5xl font-semibold">Browse Our Products</h1>
                <p className='w-1/2 mx-auto py-4'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center mb-10'>
                <button className="btn btn-outline btn-error">More Products</button>
            </div>
        </div>
    );
};

export default Products;