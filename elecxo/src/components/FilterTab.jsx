import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function FilterTab({ onPriceChange }) {
  function valuetext(value) {
    return `₹${value}`;
  }

  const [priceRange, setPriceRange] = useState([0, 100000]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue); // Update state with selected range
    onPriceChange(newValue); // Pass updated range to ProductList
  };

  return (
    <div className='h-[100vh] bg-white shadow-sm px-2 py-4'>
      <h1 className='text-lg text-center font-bold uppercase mb-6'>Filter</h1>
      <div>
        <div className='flex justify-between'>
        <h1>BY PRICE</h1>
        <span className='font-medium'>Price: {valuetext(priceRange[0])} - {valuetext(priceRange[1])}</span>

        </div>

        <Box sx={{ width: 300, margin: 'auto' }}>
          <Slider
            min={0}
            max={100000}
            step={100}
            value={priceRange}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <div className='text-center mt-2'>
        </div>
      </div>
    </div>
  );
}

export default FilterTab;
