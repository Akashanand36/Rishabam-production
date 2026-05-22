import React from "react";
function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="underline"></div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon-circle">🎬</div>
            <h3>Film Production</h3>
            <p>
              We manage end-to-end production for films and TV,
              supporting creators and studios with high-quality results.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">📷</div>
            <h3>Commercials & Advertisements</h3>
            <p>
              We create high-impact commercials for TV, web,
              and social media—helping brands launch, grow,
              and connect through compelling content.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">✂️</div>
            <h3>Post Production</h3>
            <p>
              From precise editing and color grading to sound design and VFX,
              our post-production team polishes your footage into a masterpiece.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-circle">📱</div>
            <h3>Digital & Social Media Content</h3>
            <p>
              Strategic worldwide distribution across theaters,
              streaming platforms, and festivals.
            </p>
          </div>
            <div className="service-card">
            <div className="icon-circle">🎤</div>
            <h3>Music Videos</h3>
            <p>
              We turn music into powerful visuals, partnering with artists and producers to create dynamic videos that capture your track’s energy
            </p>
          </div>
          <div className="service-card">
            <div className="icon-circle">🖥️</div>
            <h3>Corporate Films & Branding Videos</h3>
            <p>
             We produce corporate videos that showcase your brand with clarity and impact—ideal for pitches, training, internal communication, and storytelling.
            </p>
          </div>
          <div className="service-card">
            <div className="icon-circle">🎭</div>
            <h3>Event Coverage & Live Production</h3>
            <p>
              We deliver high-quality event coverage—capturing conferences, launches, performances, and weddings with clarity and style.
            </p>
          </div>
            <div className="service-card">
            <div className="icon-circle">🛠️</div>
            <h3>Event Coverage & Live Production</h3>
            <p>
              We deliver high-quality event coverage—capturing conferences, launches, performances, and weddings with clarity and style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;