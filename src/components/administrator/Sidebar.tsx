import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      {/* Replace with sidebar.html content */}
      <ul className="space-y-2">
        <li><a href="/dashboard" className="block p-2 hover:bg-gray-200 rounded">Dashboard</a></li>
        <li><a href="/settings" className="block p-2 hover:bg-gray-200 rounded">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
