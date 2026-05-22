import React, { useState } from "react";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    await fetch("https://formsubmit.co/rishabamproductions@gmail.com", {
      method: "POST",
      body: data,
    });

    form.reset();
    setShowPopup(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="underline"></div>

        <div className="contact-grid">

          {/* LEFT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="project" placeholder="Project Type" />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit">Send Message</button>
          </form>

          {/* RIGHT SIDE - MAP */}
          <div className="contact-map">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5024735222796!2d80.249964974548!3d13.067309812773749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666d1ccee57f%3A0x2113fa0e6314b216!2sHariram%20building%2C%2037%2C%20College%20Rd%2C%20Chinmaya%20Nagar%20Stage%201%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600006!5e0!3m2!1sen!2sin!4v1771674482632!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>Thank You!</h3>
            <p>We will contact you soon.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;