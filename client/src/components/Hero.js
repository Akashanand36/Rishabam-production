import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
      <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1>Welcome Rishabam Production</h1>
        <h3>Crafting Stories. Creating Cinema.</h3>
        <a href="#movies" className="hero-btn">Explore Movies</a>
      </div>
    </section>
  );
}

export default Hero;