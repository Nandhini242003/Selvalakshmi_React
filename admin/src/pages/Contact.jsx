import React, { useState, useEffect } from 'react';
import { Save, Phone, Mail, MapPin } from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

const Contact = () => {
  const [contactData, setContactData] = useState({
    email: '',
    phone1: '',
    phone2: '',
    phone3: '',
    address: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch contact data on component mount
  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/contact`);
      const data = await response.json();
      setContactData(data);
    } catch (error) {
      console.error('Error fetching contact data:', error);
      alert('Failed to load contact information');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData)
      });
      const data = await response.json();
      
      if (data.success) {
        alert('Contact information updated successfully!');
      } else {
        alert('Failed to update contact information');
      }
    } catch (error) {
      console.error('Error updating contact data:', error);
      alert('Failed to update contact information');
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">Loading contact information...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Contact Information Management</h2>
        <p className="text-gray-600">Update your contact details and social media links</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Phone size={20} className="text-[#001f54]" />
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail size={16} className="inline mr-2" />
                Email
              </label>
              <input
                type="email"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone 1</label>
              <input
                type="text"
                value={contactData.phone1}
                onChange={(e) => setContactData({ ...contactData, phone1: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone 2</label>
              <input
                type="text"
                value={contactData.phone2}
                onChange={(e) => setContactData({ ...contactData, phone2: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone 3</label>
              <input
                type="text"
                value={contactData.phone3}
                onChange={(e) => setContactData({ ...contactData, phone3: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin size={20} className="text-[#001f54]" />
            Address
          </h3>
          <textarea
            value={contactData.address}
            onChange={(e) => setContactData({ ...contactData, address: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            rows="3"
            required
          />
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Media Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
              <input
                type="text"
                value={contactData.facebook}
                onChange={(e) => setContactData({ ...contactData, facebook: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
                placeholder="https://facebook.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
              <input
                type="text"
                value={contactData.instagram}
                onChange={(e) => setContactData({ ...contactData, instagram: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
                placeholder="https://instagram.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Twitter</label>
              <input
                type="text"
                value={contactData.twitter}
                onChange={(e) => setContactData({ ...contactData, twitter: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
                placeholder="https://twitter.com/..."
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2 bg-[#001f54] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
        >
          <Save size={20} />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default Contact;