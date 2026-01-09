import React from 'react';
import { Home, Image, Info, Settings, Images, Mail } from 'lucide-react';

const Sidebar = ({ sidebarOpen, activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home },
    { id: 'banner', name: 'Banner', icon: Image },
    { id: 'about', name: 'About', icon: Info },
    { id: 'services', name: 'Services', icon: Settings },
    { id: 'gallery', name: 'Gallery', icon: Images },
    { id: 'contact', name: 'Contact Info', icon: Mail },
  ];

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-[#001f54] text-white transition-all duration-300 flex flex-col overflow-hidden`}>
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-[#001f54] font-bold text-lg">S</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Selvalakshmi</h1>
            <p className="text-xs text-blue-300">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                activePage === item.id ? 'bg-blue-700 shadow-lg' : 'hover:bg-blue-800/50'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-blue-800">
        <div className="bg-blue-800/50 rounded-lg p-3">
          <p className="text-xs text-blue-200 mb-1">Need Help?</p>
          <p className="text-sm font-medium">Contact Support</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;