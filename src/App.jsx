import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/wheel-scaffolding" element={<WheelScaffolding />} />
        <Route path="/services/movable-scaffolding" element={<MovableScaffolding />} />
        <Route path="/services/lift-scaffolding" element={<LiftScaffolding />} />
        <Route path="/services/steel-frame-scaffolding" element={<SteelFrameScaffolding />} />
      </Routes>
    </Router>
  );
}

export default App;
