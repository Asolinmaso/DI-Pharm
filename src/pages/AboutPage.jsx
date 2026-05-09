import "./AboutPage.css";
import aboutTeam1 from "../assets/about/about_team1.jpg";
import aboutLabTubes from "../assets/about/about_lab_tubes.jpg";
import aboutPills from "../assets/about/about_pills.jpg";
import aboutScientist from "../assets/about/about_scientist.jpg";
import aboutShip from "../assets/about/about_ship.jpg";
import aboutTeamCloseup from "../assets/about/scientist.jpg";
import magaeshImage from "../assets/about/managing_director.jpeg";
import seniorManager1 from "../assets/about/director.jpeg";
import seniorManager2 from "../assets/about/general_Manager.jpeg";
import { useEffect, useRef, useState } from "react";
import FlightTimeline from "../components/FlightTimeline";


const AboutPage = () => {
  const sectionRef = useRef(null);
  const commitmentRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const founderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-visible");
        } else {
          entry.target.classList.remove("about-visible");
        }
      },
      {
        threshold: 0.3, // triggers when 30% visible
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);




  //for commitment section animation
  useEffect(() => {
    if (!commitmentRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("commitment-visible");
        } else {
          entry.target.classList.remove("commitment-visible");
        }
      },
      {
        threshold: 0.3,
      },
    );
    observer.observe(commitmentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (founderRef.current) observer.observe(founderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* ABOUT Dipharmainnovation Section */}
      <section className="about-hero-section" ref={sectionRef}>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <p className="about-kicker">ABOUT</p>
            <h1 className="about-title">DI Pharma Innovation</h1>
            <p className="about-description">
              DI Pharma Innovation is a forward-thinking pharmaceutical and
              healthcare solutions provider committed to improving access to
              quality medical products. With a strong focus on reliability,
              innovation, and customer satisfaction.
            </p>
          </div>
          <div className="about-image-collage">
            <div className="collage-item collage-top-left">
              <img src={aboutTeam1} alt="Medical Professionals" />
            </div>
            <div className="collage-item collage-middle-left">
              <img src={aboutLabTubes} alt="Laboratory Equipment" />
            </div>
            <div className="collage-item collage-top-right">
              <img src={aboutPills} alt="Pharmaceutical Pills" />
            </div>
            <div className="collage-item collage-bottom-right">
              <img src={aboutTeamCloseup} alt="Medical Team" />
            </div>
            <div className="collage-item collage-bottom-left">
              <img src={aboutShip} alt="Cargo Ship" />
            </div>
            <div className="collage-item collage-middle-right">
              <img src={aboutScientist} alt="Scientist with Microscope" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Our Vision Section */}
      <section className="mission-vision-section">
        {/* BACKGROUND ROAD */}
        <FlightTimeline />

        {/* FOREGROUND CONTENT */}
        <div className="mission-vision-container">
          <div className="mission-content" ref={missionRef}>
            <h2>Our Mission</h2>
            <p>
              To enhance the <strong className="mission-highlight">healthcare</strong> ecosystem by providing{" "}
              <strong className="mission-highlight">
                safe, high-quality, and affordable medical products
              </strong>{" "}
              that support better patient outcomes and{" "}
              <strong className="mission-highlight">empower healthcare</strong> providers
              in their day-to-day operations.
            </p>
          </div>

          <div className="vision-content" ref={visionRef}>
            <h2>Our Vision</h2>
            <p>
              To become one of{" "}
              <strong className="mission-highlight">India’s</strong> most{" "}
              <strong className="mission-highlight">trusted</strong> names in{" "}
              <strong className="mission-highlight">
                pharmaceuticals and healthcare supplies
              </strong>{" "}
              by driving innovation, strengthening partnerships, and
              continuously{" "}
              <strong className="mission-highlight">elevating</strong> product
              standards.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="founder-section" ref={founderRef}>
        <div className="founder-container">
          <div className="founder-content">
            <h2 className="founder-title">Meet Our Founder</h2>
            <p className="founder-description">
              Driven by a passion for accessible and quality healthcare, our
              founder envisioned a trusted medical ecosystem that combines
              advanced diagnostics, expert care, and patient-centered services
              under one roof. With a commitment to innovation, compassion, and
              excellence, the foundation was built to ensure every patient
              receives accurate diagnosis, personalized treatment, and reliable
              healthcare support for a healthier future.
            </p>
          </div>
          <div className="founder-image-wrapper">
            <img
              src={magaeshImage}
              alt="Dr. Dheeran Jefry Wilson"
              className="founder-image"
            />
            <div className="founder-badge">
              <h3 className="founder-name">Dr. Jefry Wilson</h3>
              <p className="founder-role">Founder and Director</p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Commitment Section */}
      <section className="commitment-section" ref={commitmentRef}>
        <div className="commitment-content">
          <h2 className="commitment-title">Our Commitment</h2>
          <p className="commitment-text">
            At <strong>DI Pharma Innovation,</strong> we believe{" "}
            <strong>healthcare is more than a business </strong> - it's a{" "}
            <strong> responsibility</strong>. Our commitment to{" "}
            <strong>excellence</strong> drives us to provide products that
            contribute to a <strong>healthier, safer,</strong> and more{" "}
            <strong>efficient medical environment.</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
