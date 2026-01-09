import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import p1 from "../../assets/p1.jpg";

const SteelFrameScaffolding = () => {
  return (
    <>
      <section className="bg-[#0A1C63] py-16 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Steel Frame Scaffolding
        </h1>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 py-12">
        <img
          src={p1}
          alt="Steel Frame Scaffolding"
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Steel frame scaffolding is one of the most durable and versatile
          scaffolding systems, widely used for heavy-duty construction projects.
          Its steel tubes and couplers provide strong structural support,
          enabling workers to safely perform tasks at elevated heights.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Known for its excellent load-bearing capacity, this type of scaffolding
          is resistant to corrosion and designed for long-term use. It’s the
          preferred choice for multi-story and industrial projects requiring
          maximum safety and efficiency.
        </p>
      </section>
    </>
  );
};

export default SteelFrameScaffolding;
