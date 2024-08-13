import React from 'react';
import { Home, Palette, Copy, Download, Clock, Settings } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home' },
    { icon: <Palette size={20} />, label: 'Palettes' },
    { icon: <Copy size={20} />, label: 'Copy' },
    { icon: <Download size={20} />, label: 'Export' },
    { icon: <Clock size={20} />, label: 'History' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="bg-white w-16 min-h-screen flex flex-col items-center py-8 shadow-md">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="mb-8 text-gray-500 hover:text-gray-800 cursor-pointer"
          title={item.label}
        >
          {item.icon}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;