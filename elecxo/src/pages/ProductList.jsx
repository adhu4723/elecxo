import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalCard from '../components/HorizontalCard';
import FilterTab from '../components/FilterTab';
import electronicProducts from '../assets/data/product';

function ProductList() {
    const { category } = useParams();
    console.log(category);

    const [priceRange, setPriceRange] = useState([0, 100000]);

    const handlePriceChange = (newRange) => {
        setPriceRange(newRange);
    };

    const relatedProduct = electronicProducts.filter(
        item => item.category === category && item.rate >= priceRange[0] && item.rate <= priceRange[1]
    );
    
    console.log(relatedProduct);

    return (
        <>
            <div className='grid grid-cols-3 lg:grid-cols-4 px-4 py-2 bg-gray-100 gap-4'>
                <div className='col-span-1 hidden lg:block top-0'>
                    <FilterTab onPriceChange={handlePriceChange} />
                </div>

                <div className='space-y-4 col-span-3 bg-gray-100 shadow-sm px-2 py-4'>
                    <div className='flex items-center gap-4 justify-between'>
                        <h1>Showing {relatedProduct.length} results for <strong>{category}</strong></h1>
                        <button className='px-4 lg:hidden py-2 bg-white rounded-sm shadow-sm'>Filter</button>
                    </div>
                    {relatedProduct.map(items => (
                        <HorizontalCard key={items.id} productData={items} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
