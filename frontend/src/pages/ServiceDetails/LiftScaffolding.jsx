import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import s2 from "../../assets/s2.jpg";

const LiftScaffolding = () => {
  return (
    <>
      <section className="bg-[#0A1C63] py-16 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Lift Scaffolding
        </h1>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 py-12">
        <img
          src={s2}
          alt="Lift Scaffolding"
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In construction, “lift scaffolding” generally refers to either a
          scaffold hoist or an attached-type lifting scaffold. A scaffold hoist
          is a temporary, motorized device that attaches to a scaffolding
          structure to lift materials and tools to different levels, reducing
          manual labor and increasing efficiency.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          An attached-type lifting scaffold is a self-climbing system used on
          high-rise buildings that can be raised or lowered as construction
          progresses. This system provides excellent safety and speed for modern
          high-rise construction.
        </p>
      </section>
    </>
  );
};

export default LiftScaffolding;
