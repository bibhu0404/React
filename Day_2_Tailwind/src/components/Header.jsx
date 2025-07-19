import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left: Logo & Name */}
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-bold text-red-600 tracking-wide">🍔</div>
        <h1 className="text-xl font-semibold text-gray-800">BusBite</h1>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <a href="#" className="hover:text-red-500">Home</a>
        <a href="#" className="hover:text-red-500">Menu</a>
        <a href="#" className="hover:text-red-500">Orders</a>
      </nav>

      {/* Right: Profile section (Initials or Emoji Avatar) */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold">
          👤
        </div>
      </div>
    </header>
  );
};

export default Header;
