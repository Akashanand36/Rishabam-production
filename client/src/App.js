import React from "react";
import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import About from "./components/About";
import Movies from "./components/Movies";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Movies />
      <Services />
      <Contact />
      <Footer />

    <a
  href="https://wa.me/919444146300"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
      
    </div>
  );
}

export default App;