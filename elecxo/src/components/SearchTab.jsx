import React from 'react';
import electronicProducts from '../assets/data/product';

function SearchTab({ search }) {
  // Convert search query to lowercase for case-insensitive matching
  const searchQuery = search.toLowerCase().trim();

  // Filter products that start with the search query
  const filteredProducts = electronicProducts.filter((item) =>
    item.name.toLowerCase().startsWith(searchQuery)
  );

  return (
    <div
      className={`bg-white p-4 rounded-b-xl shadow-2xl ${
        search ? '' : 'hidden'
      } max-h-60 overflow-auto`}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <div key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer">
            {item.name}
          </div>
        ))
      ) : (
        <div className="text-gray-500 p-2">No results found</div>
      )}
    </div>
  );
}

export default SearchTab;
