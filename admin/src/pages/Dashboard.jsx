
// ============================================
// FILE 4: admin/src/pages/Dashboard.jsx
// ============================================
import React from 'react';
import { Image, Info, Settings, Images, Mail, TrendingUp, Users, Eye } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Banners', value: '8', icon: Image, color: 'bg-blue-500', change: '+12%' },
    { label: 'Services', value: '12', icon: Settings, color: 'bg-purple-500', change: '+5%' },
    { label: 'Gallery Items', value: '45', icon: Images, color: 'bg-orange-500', change: '+18%' },
    { label: 'Page Views', value: '1.2K', icon: Eye, color: 'bg-green-500', change: '+23%' },
  ];

  const recentActivity = [
    { action: 'Updated banner image', time: '2 hours ago', user: 'Admin', type: 'update' },
    { action: 'Added new service "Lift Scaffolding"', time: '5 hours ago', user: 'Admin', type: 'create' },
    { action: 'Modified contact information', time: '1 day ago', user: 'Admin', type: 'update' },
    { action: 'Uploaded 5 new gallery photos', time: '2 days ago', user: 'Admin', type: 'upload' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-[#001f54] to-blue-700 rounded-xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h1>
        <p className="text-blue-100">Here's what's happening with your Selvalakshmi website today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className="text-green-600 text-sm font-medium flex items-center gap-1">
                  <TrendingUp size={14} />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'create' ? 'bg-green-500' : 
                  activity.type === 'update' ? 'bg-blue-500' : 'bg-purple-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time} • by {activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Add Banner', 'New Service', 'Upload Image', 'Update About', 'Edit Contact', 'View Stats'].map((action, index) => (
              <button
                key={index}
                className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#001f54] hover:bg-blue-50 transition text-sm font-medium text-gray-600 hover:text-[#001f54]"
              >
                + {action}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Website Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Website Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm font-medium text-gray-800">Status</p>
            <p className="text-xs text-green-600 font-semibold">Online</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-1">99.9%</p>
            <p className="text-sm text-gray-600">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-1">1.8s</p>
            <p className="text-sm text-gray-600">Load Time</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800 mb-1">v2.5</p>
            <p className="text-sm text-gray-600">Version</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;