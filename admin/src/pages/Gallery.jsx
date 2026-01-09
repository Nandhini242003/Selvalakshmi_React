// ============================================
// pages/Gallery.jsx
// ============================================
import React, { useState } from "react";
import { ImagePlus, Trash2, Images } from "lucide-react";

const Gallery = () => {
  const [gallery, setGallery] = useState([
    { id: 1, image: "/uploads/p1.jpg", caption: "Residential Project" },
    { id: 2, image: "/uploads/p2.jpg", caption: "Commercial Scaffolding" },
  ]);

  const [newImage, setNewImage] = useState({ image: "", caption: "" });

  const handleAdd = () => {
    if (!newImage.image) return alert("Please enter image URL");
    const id = gallery.length + 1;
    setGallery([...gallery, { id, ...newImage }]);
    setNewImage({ image: "", caption: "" });
  };

  const handleDelete = (id) => {
    setGallery(gallery.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
          <Images className="text-orange-500" /> Manage Gallery
        </h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          <ImagePlus size={18} /> Add Image
        </button>
      </div>

      {/* ADD FORM */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Image URL"
          value={newImage.image}
          onChange={(e) => setNewImage({ ...newImage, image: e.target.value })}
          className="border p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Caption (optional)"
          value={newImage.caption}
          onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
          className="border p-2 rounded-md"
        />
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-40 object-cover"
            />
            {item.caption && (
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.caption}
              </div>
            )}
            <button
              onClick={() => handleDelete(item.id)}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
