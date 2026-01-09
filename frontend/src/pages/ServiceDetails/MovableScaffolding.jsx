import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import s3 from "../../assets/s3.jpg";

const MovableScaffolding = () => {
  return (
    <>
      <section className="bg-[#0A1C63] py-16 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide uppercase">
          Movable Scaffolding
        </h1>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 py-12">
        <img
          src={s3}
          alt="Movable Scaffolding"
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-lg"
        />
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Movable scaffolding, also known as mobile or rolling scaffolding, is a
          temporary structure with wheels or casters at its base. This design
          allows it to be easily moved and repositioned on a worksite without
          being dismantled.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          It’s ideal for tasks requiring frequent location changes, such as
          painting, maintenance, or installing drywall. The wheels are equipped
          with locking mechanisms or brakes to ensure stability and safety when
          in use.
        </p>
      </section>
    </>
  );
};

export default MovableScaffolding;
