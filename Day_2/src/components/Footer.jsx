import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} BusBite – Bite Smarter, Travel Farther.
      </p>
    </footer>
  );
};

export default Footer;
