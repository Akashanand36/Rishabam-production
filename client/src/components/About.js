import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <div className="underline"></div>

        <p className="about-text">
          Founded with a passion for storytelling and a commitment to quality,
          Rishabam Productions is a full-service media production company.
          Our team of seasoned creatives, directors, cinematographers,
          editors, and producers collaborates seamlessly to deliver
          compelling content across platforms.
          From indie filmmakers to global brands, we serve a diverse
          clientele with integrity, innovation, and imagination.
        </p>

        <h2 className="mission-title">Our Mission</h2>
        <div className="underline"></div>

        <p className="mission-text">
          To elevate ideas through powerful visual storytelling,
          making every project a memorable experience.
        </p>
      </div>
    </section>
  );
}

export default About;