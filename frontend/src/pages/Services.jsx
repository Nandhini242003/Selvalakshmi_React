import "../index.css";
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import p1 from "../assets/p1.jpg";

const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";

const Services = () => {
  const services = [
    {
      image: s1,
      title: "Wheel Scaffolding",
      slug: "wheel-scaffolding",
      desc: "Durable and mobile scaffolding systems for all types of construction works.",
    },
    {
      image: s2,
      title: "Lift Scaffolding",
      slug: "lift-scaffolding",
      desc: "Heavy-duty scaffolding for lift shaft and high-rise projects.",
    },
    {
      image: s3,
      title: "Movable Scaffolding",
      slug: "movable-scaffolding",
      desc: "Easily movable scaffolding with wheels for flexible on-site use.",
    },
    {
      image: p1,
      title: "Steel Frame Scaffolding",
      slug: "steel-frame-scaffolding",
      desc: "Robust steel frame scaffolding for safe and efficient construction.",
    },
  ];

  return (
    <>

      <section className="bg-[#0A1C63] py-16 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Our Services
        </h1>
        <p className="mt-2 text-gray-300">
          Reliable scaffolding solutions for every construction need.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className={WRAPPER_CLASSES}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                to={`/services/${service.slug}`}
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center px-4">
                    <p className="text-white text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#0A1C63] mb-2 uppercase">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-orange-500 mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">
                    {service.desc.length > 60
                      ? service.desc.substring(0, 60) + "..."
                      : service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;
