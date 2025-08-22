import React from 'react';
import ProductsCard from '../../ProductsCard';
import dbConnect, { collectionName } from '@/lib/dbConnect';

const FeaturedProducts = async () => {
    const laptopsCollection = await dbConnect(collectionName.LAPTOPS);
    const laptops = await laptopsCollection.find().toArray();

    return (
        <section className='max-w-7xl mx-auto px-6 py-10'>
            <h2 className='text-center font-bold text-4xl mb-8'>Featured Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                {laptops.map(laptop => (
                    <ProductsCard laptop={laptop} key={laptop._id.toString()} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
