import React from 'react';

const Base: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Replace with base.html layout */}
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Voting Portal
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2025 Voting System
      </footer>
    </div>
  );
};

export default Base;
