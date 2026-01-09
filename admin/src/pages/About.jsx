// ============================================
import React, { useEffect,useState } from 'react';
import { Save } from 'lucide-react';

const About = () => {
  const [aboutData, setAboutData] = useState({
    title: 'About Us',
    subtitle: 'BUILDING CONFIDENCE, ONE TASK AT A TIME',
    description: `Selvalakshmi And Co - Service Provider Of Scaffolding Rental Services, MS Staircase Scaffolding Rental Services, Scaffolding Systems Rental Services, Wheel or Movable Scaffolding Rental Service for all type of building construction and renovation works Since 2007 in Tamil Nadu, Kerala, Puducherry, Karnataka and Andhrapradesh.`,
    image1: '/about1.jpg',
    image2: '/about2.jpg',
    mainImage: '/about.jpg',
  });
  useEffect(() => {
    fetch("http://localhost:5000/api/about") // ✅ Your Node.js API
      .then((res) => res.json())
      .then((data) => {
        setAboutData(data); // set the data into your form fields
      })
      .catch((err) => console.error("Error fetching about data:", err));
  }, []);
  const [isSaving, setIsSaving] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSaving(true);

  try {
    const response = await fetch("http://localhost:5000/api/about", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aboutData)
    });

    const data = await response.json();
    if (data.success) {
      alert("About section updated successfully!");
    } else {
      alert("Failed to update about section.");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    setIsSaving(false);
  }
};


  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">About Section Management</h2>
        <p className="text-gray-600">Update your company's about section content</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={aboutData.title}
              onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={aboutData.subtitle}
              onChange={(e) => setAboutData({ ...aboutData, subtitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={aboutData.description}
            onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            rows="6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image 1 URL</label>
            <input
              type="text"
              value={aboutData.image1}
              onChange={(e) => setAboutData({ ...aboutData, image1: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image 2 URL</label>
            <input
              type="text"
              value={aboutData.image2}
              onChange={(e) => setAboutData({ ...aboutData, image2: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Image URL</label>
            <input
              type="text"
              value={aboutData.mainImage}
              onChange={(e) => setAboutData({ ...aboutData, mainImage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001f54]"
            />
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

export default About;
