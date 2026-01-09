import "../index.css";
import React from "react";
import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about from "../assets/about.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import c6 from "../assets/c6.jpg";
import { useNavigate } from "react-router-dom";
const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";

const Home = () => {
   const navigate = useNavigate();
  // Banner slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [banner1, banner2];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Services slider state (slides one image at a time)
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);

  const services = [
    { image: s1, title: "Wheel Scaffolding" },
    { image: s2, title: "Lift Scaffolding" },
    { image: s3, title: "Movable Scaffolding" },
    { image: p1, title: "Wheel Scaffolding" }, // 4th service (use s4 if you have it)
  ];

  const nextService = () => {
    setCurrentServiceSlide((prev) => {
      const next = prev + 1;
      // Reset to 0 when reaching the end for seamless loop
      return next >= services.length ? 0 : next;
    });
  };

  const prevService = () => {
    setCurrentServiceSlide((prev) => {
      const prev_slide = prev - 1;
      // Go to last when at beginning for seamless loop
      return prev_slide < 0 ? services.length - 1 : prev_slide;
    });
  };

  // Testimonial Slider State - Updated to cycle through *one* testimonial at a time.
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      // Text matched to image for Rithish
      text: '"Lorem ipsum" is a nonsensical block of placeholder text used in graphic design and publishing to show a layout\'s design, typography, and visual appearance without being distracted by meaningful content',
      name: "Rithesh",
      position: "Managing Director",
    },
    {
      // Text matched to image for XXXX
      text: '"Lorem ipsum" is a nonsensical block of placeholder text used in graphic design and publishing to show a layout\'s design, typography, and visual appearance without being distracted by meaningful content',
      name: "XXXX",
      position: "Manager",
    },
    {
      text: '"Lorem ipsum" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since',
      name: "Pragadheesh",
      position: "Co-Founder",
    },
    // Add more testimonials here if needed
  ];

  // Function to advance by 1 testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Function to go back by 1 testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Determine which testimonial is before the current one (for the two-card look)
  const prevTestimonialIndex =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  // all your banner, service, testimonial state + JSX goes here exactly as before
  // just copy from your current App.jsx content
  return (
    <>
    <div className="w-full">
      {/* HERO SECTION WITH BANNER SLIDER */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        {/* Banner Images */}
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div
          className={`${WRAPPER_CLASSES} relative z-10 h-full flex flex-col items-center justify-center text-center text-white`}
        >
          <h1 className="text-5xl font-bold mb-4">
            Good Building are Reflective of the
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            SHARP MINDS BEHIND THE DRAWING BOARD
          </p>
          <button   onClick={() => navigate("/contact")} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 cursor-pointer">
            CONTACT US <FaArrowRight />
          </button>
        </div>

        {/* Previous Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all shadow-lg"
        >
          <FaChevronLeft size={28} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-4 rounded-full transition-all shadow-lg"
        >
          <FaChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-orange-500 w-8"
                  : "bg-white bg-opacity-50 w-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className={WRAPPER_CLASSES}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Left Side - 2 Stacked Images */}
            <div className="space-y-6">
              <img
                src={about1}
                alt="Building 1"
                className="w-full h-56 object-cover shadow-lg border-10 border-white"
              />
              <img
                src={about2}
                alt="Building 2"
                className="w-full h-56 object-cover shadow-lg border-10 border-white"
              />
            </div>

            {/* Middle - Large Person Image */}
            <div>
              <img
                src={about}
                alt="About Us"
                className="w-full h-full o object-cover shadow-lg border-10 border-white"
              />
            </div>

            {/* Right Side - Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                BUILDING CONFIDENCE, ONE TASK AT A TIME
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Selvalakshmi And Co - Service Provider Of Scaffolding Rental
                Services, MS Staircase Scaffolding Rental Services, Scaffolding
                Systems Rental Services, Wheel or Movable Scaffolding Rental
                Service for all type of building construction and renovation
                works Since 2007 in Tamil Nadu, Kerala, Puducherry, Karnataka
                and Andhrapradesh.
              </p>
              <button   onClick={() => navigate("/about")} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 cursor-pointer">
                Read More<FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORK SECTION */}
      <section className="py-20 bg-orange-500 text-white">
        <div className={WRAPPER_CLASSES}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm mb-2 opacity-90">
                A team of skilled professionals with integrity in the
                scaffolding
              </p>
              <h2 className="text-4xl font-bold mb-6">
                Building the Framework of a New Bridege.
              </h2>
            </div>
            <div className="relative">
              <img
                src={s2}
                alt="Construction"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-orange-500 w-16 h-16 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - SLIDE ONE IMAGE AT A TIME */}
      <section id="services" className="py-20 bg-gray-50">
        <div className={WRAPPER_CLASSES}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Services
          </h2>

          {/* Services Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentServiceSlide * (100 / 3)}%)`,
                }}
              >
                {/* Duplicate services for infinite loop */}
                {[...services, ...services].map((service, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6 bg-white">
                        <p className="text-sm text-orange-500 mb-2">
                          Selvalakshmiandco
                        </p>
                        <h3 className="text-xl font-semibold text-blue-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevService}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-2 border-orange-500 text-orange-500 p-3 rounded-md hover:bg-orange-500 hover:text-white transition-all shadow-md z-10"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextService}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-2 border-orange-500 text-orange-500 p-3 rounded-md hover:bg-orange-500 hover:text-white transition-all shadow-md z-10"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentServiceSlide % services.length
                      ? "w-12 bg-orange-500"
                      : "w-12 bg-orange-200"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST PROJECT SECTION */}
      <section id="project" className="py-20 bg-blue-900 text-white">
        <div className={WRAPPER_CLASSES}>
          <h2 className="text-4xl font-bold text-center mb-12">
            Latest Project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src={p1}
              alt="Project 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={p2}
              alt="Project 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={p3}
              alt="Project 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={p4}
              alt="Project 4"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={p5}
              alt="Project 5"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={p6}
              alt="Project 6"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="pt-20 pb-10 bg-gray-50">
        <div className={WRAPPER_CLASSES}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1: The "previous" one, or the last one if looping */}
            <div className="relative bg-white p-8 border border-gray-200 rounded-lg shadow-md transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4 font-serif leading-none">
                “
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonials[prevTestimonialIndex].text}
              </p>
              <div>
                <p className="font-semibold text-gray-800 text-base">
                  {testimonials[prevTestimonialIndex].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[prevTestimonialIndex].position}
                </p>
              </div>
              {/* Left Arrow (Prev Testimonial) */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
              >
                <FaArrowRight className="rotate-180" />
              </button>
            </div>
            {/* Testimonial 2: The "current" one */}
            <div className="relative bg-white p-8 border border-gray-200 rounded-lg shadow-md transition-all duration-300">
              <div className="text-4xl text-blue-500 mb-4 font-serif leading-none">
                “
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {testimonials[currentTestimonial].text}
              </p>
              <div>
                <p className="font-semibold text-gray-800 text-base">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
              {/* Right Arrow (Next Testimonial) */}
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- UPDATED SUCCESSFUL CLIENTS SECTION --- */}
      <section className="py-16 bg-gray-40">
        <div className={WRAPPER_CLASSES}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Successful Clients
          </h2>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {/* Client Logos - Using imported images c1-c6 */}
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c1}
                alt="Client Logo 1"
                className="w-full h-full object-contain filter transition-all duration-300"
              />
            </div>
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c2}
                alt="Client Logo 2"
                className="w-full h-full object-contain filter transition-all duration-300"
              />
            </div>
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c3}
                alt="Client Logo 3"
                className="w-full h-full object-contain filter  transition-all duration-300"
              />
            </div>
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c4}
                alt="Client Logo 4"
                className="w-full h-full object-contain filter  transition-all duration-300"
              />
            </div>
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c5}
                alt="Client Logo 5"
                className="w-full h-full object-contain filter  transition-all duration-300"
              />
            </div>
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={c6}
                alt="Client Logo 6"
                className="w-full h-full object-contain filter  transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>     
    </div>

    </>
  );
};

export default Home;