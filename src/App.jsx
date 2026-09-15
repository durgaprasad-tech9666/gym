import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Register from "./pages/Register";


function Home() {
  return (
    <div className="overflow-hidden bg-[#050505]">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Trainers />
        <Pricing />
        <Testimonial />
        <CTA />
      </main>

      <Footer />

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}


export default App;