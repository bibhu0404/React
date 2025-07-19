import React from "react";
import MenuItemCard from "../components/MenuItemCard";

const dummyMenu = [
  {
    id: 1,
    name: "Cheesy Burger",
    desc: "Loaded with cheese and love.",
    price: "₹149",
    emoji: "🍔"
  },
  {
    id: 2,
    name: "Hot Masala Chai",
    desc: "Perfect sip during a highway halt.",
    price: "₹39",
    emoji: "🍵"
  },
  {
    id: 3,
    name: "Paneer Roll",
    desc: "Spicy, soft, and travel-friendly.",
    price: "₹89",
    emoji: "🌯"
  },
  {
    id: 4,
    name: "Veg Biryani",
    desc: "Aromatic rice dish, full of flavor.",
    price: "₹129",
    emoji: "🍚"
  },
  {
    id: 5,
    name: "Momo Mania",
    desc: "Steamed dumplings packed with joy.",
    price: "₹99",
    emoji: "🥟"
  },
  {
    id: 6,
    name: "Cold Coffee",
    desc: "Chilled boost on a hot journey.",
    price: "₹69",
    emoji: "🥤"
  }
];

const Menu = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Banner */}
      <section className="bg-red-500 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-2">Explore Our Menu</h1>
        <p className="text-lg">Delicious meals, beverages, and snacks—made for travelers like you!</p>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyMenu.map(item => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              desc={item.desc}
              price={item.price}
              emoji={item.emoji}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
