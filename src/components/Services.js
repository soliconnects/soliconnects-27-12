import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">Soli Connects</span>!
        </p>
      </div>
      <div className="about-content">
        <section className="section" id="who-we-are">
          <h2>Who We Are</h2>
          <p>
            Soli Connects is more than just a company; we’re a vision-driven
            organization committed to delivering innovative solutions. Whether you're looking to
            collaborate, create, or grow, we aim to bridge gaps and bring people
            closer to opportunities that matter.
          </p>
        </section>
        <section className="section" id="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to foster connections that inspire positive change,
            promote collaboration, and enable success in every endeavor. We
            believe in leveraging cutting-edge technology and human-centered
            design to make every connection purposeful and impactful.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

