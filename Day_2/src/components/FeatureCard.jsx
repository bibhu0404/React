import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 animate-fade-in">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
