import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-700 text-white p-3 flex gap-4">
      {/* Replace with navbar.html content */}
      <a href="/" className="hover:underline">Home</a>
      <a href="/about" className="hover:underline">About</a>
    </nav>
  );
};

export default Navbar;
