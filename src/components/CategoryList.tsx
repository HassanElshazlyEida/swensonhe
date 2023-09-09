import React, { useState, useEffect } from 'react';


const CategoryList  = () => {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    { id: 4, name: 'Category 4' },
    // Add more categories as needed
  ];

  const items = [
    { id: 1, title: 'Item 1', price: '$10', imageSrc: 'https://picsum.photos/200/300' },
    { id: 2, title: 'Item 2', price: '$15', imageSrc: 'https://picsum.photos/200/300' },
    { id: 3, title: 'Item 3', price: '$20', imageSrc: 'https://picsum.photos/200/300' },
    { id: 4, title: 'Item 3', price: '$20', imageSrc: 'https://picsum.photos/200/300' },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {categories.map((category) => (
        <div
        key={category.id}
        className="text-blue-500 text-center hover:text-blue-700 cursor-pointer"
        style={{ color: 'white', backgroundColor: '#5DA3A9', borderRadius: '20px', padding: '8px' }}
        >
        {category.name}
        </div>
    ))}
    </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
    {items.map((item) => (
      <div key={item.id} className="bg-white rounded-lg shadow-md relative">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <button
          className="absolute top-2 right-2 bg-slate-800 text-white rounded-full  "
          style={{
            width:'25px',
            height:'25px'
          }}
          onClick={() => {
            // Handle button click
          }}
        >
          +
        </button>
        <div className="p-4">
          <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
          <p className="text-gray-500">{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default CategoryList;