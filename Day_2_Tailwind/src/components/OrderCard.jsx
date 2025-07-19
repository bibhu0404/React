import React from "react";

const statusColors = {
  Preparing: "bg-yellow-200 text-yellow-800",
  "Out for Delivery": "bg-blue-200 text-blue-800",
  Delivered: "bg-green-200 text-green-800"
};

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">{order.item}</h3>
        <span className="text-red-500 font-semibold">{order.price}</span>
      </div>

      <div className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Time:</span> {order.time}
      </div>
      <div className="text-sm text-gray-600 mb-2">
        <span className="font-medium">Location:</span> {order.location}
      </div>

      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}>
        {order.status}
      </span>
    </div>
  );
};

export default OrderCard;
