import React from "react";
import profilePic from "../../images/brenda_headshot.jpg";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="about-clip-path-top"></div>
      <section id="about-section" className="about-outer-container">
        <div className="profile-pic-container">
          <img alt="brenda headshot" src={profilePic} className="profile-pic" />
        </div>
        <div className="about-info-container">
          <p className="bio-text">
            Discover a refined approach to beauty and wellness at Southwest
            Electrolysis & Spa, where advanced skincare technology meets decades
            of expertise. Our services include electrolysis, microneedling,
            microdermabrasion, dermaplaning, facials, and lifts—each designed to
            help you look and feel your best. With more than 30 years of
            experience in esthetics and medical skincare, owner and operator
            Brenda Nemeroff brings unparalleled knowledge and a genuine passion
            for helping clients achieve lasting results. Every treatment is
            performed using state-of-the-art equipment and premium products,
            including Environ, to ensure the highest standard of care.
          </p>
          <p className="bio-text">
            Schedule your appointment today and enjoy a complimentary skincare
            and/or electrolysis consultation.
          </p>
          <a
            href="tel:2603853199"
            aria-label="phone number"
            style={{ textDecorationColor: "#FFF" }}
          >
            <p className="about-text">260.385.3199</p>
          </a>
          <a
            rel="noopener noreferrer"
            aria-label="send email"
            href="mailto: swelectrolysis@gmail.com "
            target="_blank"
          >
            <p className="about-text email-text">SWelectrolysis@gmail.com </p>
          </a>
        </div>
      </section>
    </div>
  );
};
