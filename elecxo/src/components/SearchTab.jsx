import React from 'react';
import electronicProducts from '../assets/data/product';
import { Link } from 'react-router-dom';

function SearchTab({ search, setSearch, setShowDropdown }) {
  const searchQuery = search.toLowerCase().trim();

  // Filter products that start with the search query
  const filteredProducts = electronicProducts.filter((item) =>
    item.name.toLowerCase().startsWith(searchQuery)
  );

  const handleSelectProduct = (name) => {
    setSearch(name); // Set full product name in input field
    setShowDropdown(false); // Close dropdown after selection
  };

  return (
    <div
      className={`bg-white p-4 rounded-b-xl shadow-2xl ${
        search ? '' : 'hidden'
      } max-h-60 overflow-auto`}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Link 
            to={`/product/${item.id}`} 
            key={item.id} 
            onClick={() => handleSelectProduct(item.name)}
          >
            <div className="p-2 hover:bg-gray-100 cursor-pointer">
              {item.name}
            </div>
          </Link>
        ))
      ) : (
        <div className="text-gray-500 p-2">No results found</div>
      )}
    </div>
  );
}

export default SearchTab;
