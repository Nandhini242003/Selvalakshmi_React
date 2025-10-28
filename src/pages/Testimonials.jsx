import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";
const Testimonials = () => {
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
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
export default Testimonials
