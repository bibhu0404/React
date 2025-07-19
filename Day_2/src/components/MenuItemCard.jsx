import React from "react";

const MenuItemCard = ({ name, desc, price, emoji }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center">
      <div className="text-5xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600 mb-3">{desc}</p>
      <div className="text-red-500 font-semibold text-lg">{price}</div>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItemCard;
