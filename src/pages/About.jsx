import Header from "../Components/Header";
import Footer from "../Components/Footer";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about from "../assets/about.jpg";
const WRAPPER_CLASSES = "max-w-[1140px] mx-auto px-6";
const About = () => {    
  return (
       <>
      <Header />
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
                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                   Read More
                 </button>
               </div>
             </div>
           </div>
         </section>
     <Footer />
    </>
  );
};
export default About;
