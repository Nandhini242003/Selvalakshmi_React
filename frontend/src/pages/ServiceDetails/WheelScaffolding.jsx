    import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import s1 from "../../assets/s1.jpg";

const WheelScaffolding = () => {
  return (
    <>
      <section className="bg-[#0A1C63] py-16 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Wheel Scaffolding
        </h1>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 py-12">
        <img
          src={s1}
          alt="Wheel Scaffolding"
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Wheel scaffolding, also known as mobile or rolling scaffolding, refers
          to a type of temporary structure equipped with caster wheels at its
          base. These wheels allow the scaffold to be easily moved around a
          worksite without being disassembled or reassembled.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          This system enhances worksite efficiency by reducing downtime between
          tasks. Commonly used in interior construction, maintenance, and
          painting, wheel scaffolding provides both flexibility and safety. The
          wheels are equipped with locking mechanisms that ensure stability when
          the scaffold is stationary.
        </p>
      </section>
    </>
  );
};

export default WheelScaffolding;
