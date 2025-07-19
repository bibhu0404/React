import React from "react";
import OrderCard from "../components/OrderCard";

const dummyOrders = [
  {
    id: 101,
    item: "Paneer Roll 🌯",
    price: "₹89",
    status: "Preparing",
    time: "2:45 PM",
    location: "Platform 3 - Ghaziabad Station"
  },
  {
    id: 102,
    item: "Cold Coffee 🥤",
    price: "₹69",
    status: "Out for Delivery",
    time: "2:30 PM",
    location: "Sector 62 - Metro Gate 1"
  },
  {
    id: 103,
    item: "Veg Biryani 🍚",
    price: "₹129",
    status: "Delivered",
    time: "1:50 PM",
    location: "Bus Stop - Rajnagar Ext."
  }
];

const Orders = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Header banner */}
      <section className="bg-orange-400 text-white text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-2">Your Orders</h1>
        <p className="text-lg">Track and manage your delicious journey with BusBite 🍽️</p>
      </section>

      {/* Orders list */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        {dummyOrders.length > 0 ? (
          <div className="space-y-6">
            {dummyOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">No orders yet. Start munching now! 🚀</p>
        )}
      </section>
    </div>
  );
};

export default Orders;
