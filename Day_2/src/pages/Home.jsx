import React from "react";

const steps = [
  {
    emoji: "🔍",
    title: "Search Nearby Food Stops",
    description: "Enter your bus route or stop to see food options.",
  },
  {
    emoji: "🍔",
    title: "Pick Your Meal",
    description: "Filter by arrival time, snacks, meals, or hygiene rating.",
  },
  {
    emoji: "💳",
    title: "Pre-Pay & Reserve",
    description: "Pay in advance to avoid long queues. Fast and secure.",
  },
  {
    emoji: "📦",
    title: "Pickup at Stop Counter",
    description: "A dedicated BusBite counter is ready for you at the next stop.",
  },
  {
    emoji: "😋",
    title: "Enjoy the Ride",
    description: "Unwrap. Eat. Chill. Your food, your journey.",
  },
];

const features = [
  {
    emoji: "🗺️",
    title: "Map-Based Browsing",
    description: "Discover meals near your route using a real-time interactive map.",
  },
  {
    emoji: "⏱️",
    title: "Time-Based Filtering",
    description: "Get food options based on your arrival timings and schedule.",
  },
  {
    emoji: "🧭",
    title: "Stop-Based Search",
    description: "Search food at upcoming stops without any hassle.",
  },
  {
    emoji: "💸",
    title: "Refund Guarantee",
    description: "Spoiled food? Missed pickup? Get your money back automatically.",
  },
  {
    emoji: "🔐",
    title: "Secure Code Pickup",
    description: "Collect your food only after confirming with your secure pickup code.",
  },
];

const Roadmap = () => {
  return (
    <>
    <div className="w-full min-h-screen overflow-y-scroll bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="flex flex-col items-center justify-center space-y-28">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`opacity-0 animate-fadeInUp animation-delay-[${index * 300}ms] w-full max-w-md p-8 bg-white/10 text-white border border-white/20 rounded-3xl backdrop-blur-md shadow-2xl hover:scale-[1.03] transition-all duration-500`}
          >
            <div className="text-5xl mb-4 text-center">{step.emoji}</div>
            <h3 className="text-2xl font-bold text-yellow-300 text-center mb-2">{step.title}</h3>
            <p className="text-center text-gray-200 text-lg leading-relaxed">{step.description}</p>
          </div>
        ))}

        <h2 className="text-white text-4xl font-bold pt-10 pb-6">✨ Features That Delight</h2>

        {features.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className={`opacity-0 animate-fadeInUp animation-delay-[${index * 300}ms] w-full max-w-md p-8 bg-white/10 text-white border border-white/20 rounded-3xl backdrop-blur-md shadow-2xl hover:scale-[1.03] transition-all duration-500`}
          >
            <div className="text-5xl mb-4 text-center">{feature.emoji}</div>
            <h3 className="text-2xl font-bold text-teal-300 text-center mb-2">{feature.title}</h3>
            <p className="text-center text-gray-200 text-lg leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Roadmap;
