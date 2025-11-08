import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Root: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          {/* Page content goes here */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
