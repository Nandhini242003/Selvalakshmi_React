import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Import your project images (same as used in Home.jsx)
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Project = () => {
  const projects = [
    { id: 1, image: p1, title: "Modern Office Space" },
    { id: 2, image: p2, title: "Residential Interior" },
    { id: 3, image: p3, title: "Restaurant Design" },
    { id: 4, image: p4, title: "Corporate Workspace" },
    { id: 5, image: p5, title: "Luxury Apartment" },
    { id: 6, image: p6, title: "Retail Showroom" },
  ];

  return (
    <>

      {/* Banner Section */}
      <div className="bg-[#0A1C63] py-16 text-center">
  <h1 className="text-4xl font-bold text-white tracking-wide">
    OUR PROJECTS
  </h1>
  <p className="text-gray-200 mt-2">
    Take a look at our latest interior and design works.
  </p>
</div>


      {/* Gallery Section */}
      <section className="max-w-[1140px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Project;
