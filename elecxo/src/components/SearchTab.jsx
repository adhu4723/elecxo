import React from 'react';
import electronicProducts from '../assets/data/product';
import { Link } from 'react-router-dom';

function SearchTab({ search, setSearch, setShowDropdown }) {
  const searchQuery = search.toLowerCase().trim();

  // Filter products that contain the search query (not just starting with it)
  const filteredProducts = electronicProducts.filter((item) =>
    item.name.toLowerCase().includes(searchQuery)
  );

  const handleSelectProduct = (name) => {
    setSearch(name); // Set full product name in input field
    setShowDropdown(false); // Close dropdown after selection
  };

  const highlightMatch = (name) => {
    const index = name.toLowerCase().indexOf(searchQuery);
    console.log(index);
    
    if (index === -1) return name; // If no match, return original name

    return (
      <>
        {name.substring(0, index)}
        <span className="bg-gray-300 p-2 text-black font-semibold">
          {name.substring(index, index + searchQuery.length)}
        </span>
        {name.substring(index + searchQuery.length)}
      </>
    );
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
            to={`/productdetails/${item.id}`} 
            key={item.id} 
            onClick={() => handleSelectProduct(item.name)}
          >
            <div className="p-2 hover:bg-gray-100 cursor-pointer">
              {highlightMatch(item.name)}
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
