import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import WheelScaffolding from "./pages/ServiceDetails/WheelScaffolding";
import MovableScaffolding from "./pages/ServiceDetails/MovableScaffolding";
import LiftScaffolding from "./pages/ServiceDetails/LiftScaffolding";
import SteelFrameScaffolding from "./pages/ServiceDetails/SteelFrameScaffolding";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header stays on top */}
        <Header />

        {/* Main content fills remaining height */}
        <main className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/project" element={<Project />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            {/* Service Details */}
            <Route path="/services/wheel-scaffolding" element={<WheelScaffolding />} />
            <Route path="/services/movable-scaffolding" element={<MovableScaffolding />} />
            <Route path="/services/lift-scaffolding" element={<LiftScaffolding />} />
            <Route path="/services/steel-frame-scaffolding" element={<SteelFrameScaffolding />} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </Router>
  );
}


export default App;
