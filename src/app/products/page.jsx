import React from 'react';
import dbConnect, { collectionName } from '@/lib/dbConnect';
import ProductsCard from '@/components/ProductsCard';


const FeaturedProducts = async () => {
    const laptops = await dbConnect(collectionName.LAPTOPS).find().toArray()
    // console.log(laptops);
    return (
        <section className='max-w-7xl mx-auto px-6 py-10'>
            <h2 className='text-center font-bold text-4xl mb-8'>All Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                {laptops.map(laptop => <ProductsCard laptop={laptop} key={laptop._id}></ProductsCard>)}
            </div>
        </section >
    );
};

export default FeaturedProducts;