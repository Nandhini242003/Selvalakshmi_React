import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Settings } from "lucide-react";

const API_URL = 'http://localhost:5000/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newService, setNewService] = useState({
    title: "",
    subtitle: "",
    image: "",
  });

  // Fetch services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/services`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newService.title) return alert("Please enter a service title");

    try {
      const response = await fetch(`${API_URL}/services`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService)
      });
      const data = await response.json();

      if (data.success) {
        setServices([...services, data.service]);
        setNewService({ title: "", subtitle: "", image: "" });
        alert('Service added successfully!');
      }
    } catch (error) {
      console.error('Error adding service:', error);
      alert('Failed to add service');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await fetch(`${API_URL}/services/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();

      if (data.success) {
        setServices(services.filter((s) => s.id !== id));
        alert('Service deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
            <Settings className="text-orange-500" /> Manage Services
          </h1>
          <p className="text-gray-600 mt-1">Add and manage scaffolding services</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          <Plus size={18} /> Add New Service
        </button>
      </div>

      {/* ADD FORM */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Add New Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Service Title"
            value={newService.title}
            onChange={(e) => setNewService({ ...newService, title: e.target.value })}
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={newService.subtitle}
            onChange={(e) => setNewService({ ...newService, subtitle: e.target.value })}
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Image URL (e.g., /s1.jpg)"
            value={newService.image}
            onChange={(e) => setNewService({ ...newService, image: e.target.value })}
            className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* SERVICE TABLE */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4 border-b font-semibold">Image</th>
              <th className="p-4 border-b font-semibold">Title</th>
              <th className="p-4 border-b font-semibold">Subtitle</th>
              <th className="p-4 border-b text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-500">
                  No services found. Add your first service above.
                </td>
              </tr>
            ) : (
              services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 border-b">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-24 h-16 object-cover rounded shadow-sm"
                    />
                  </td>
                  <td className="p-4 border-b font-medium text-gray-800">
                    {service.title}
                  </td>
                  <td className="p-4 border-b text-gray-600">{service.subtitle}</td>
                  <td className="p-4 border-b text-center">
                    <div className="flex justify-center space-x-2">
                      <button className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-700 transition-colors">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 rounded-md bg-red-100 hover:bg-red-200 text-red-700 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;