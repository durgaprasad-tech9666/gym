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

function App() {
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

export default App;