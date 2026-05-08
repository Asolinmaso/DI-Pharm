import "./ServicePage.css";
import { useEffect, useRef, useState } from "react";
import heroBanner from "../assets/service_banner.png";
import syringe from "../assets/icons/service_injection.png";
import tablet from "../assets/icons/service_tablet.png";
import lab from "../assets/icons/service_lab.png";
import research from "../assets/icons/service_research.png";
import globe from "../assets/icons/service_globe.png";
import dipharma from "../assets/brands/dipharma.png";
import ContactSection from "../components/ContactSection";
import g7 from "../assets/brands/g7.png";
import diwhole from "../assets/brands/di_whole.png";
import mj7 from "../assets/brands/mj7.png";
import indocontent from "../assets/brands/indocontent.png";
import { useNavigate } from "react-router-dom";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const CountUp = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let interval;
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const frameRate = 50; // ms
      const totalFrames = duration / frameRate;
      let frame = 0;

      interval = setInterval(() => {
        frame++;
        if (frame <= totalFrames) {
          // Show random numbers during the animation
          setDisplayValue(Math.floor(Math.random() * (end * 1.5)));
        } else {
          setDisplayValue(end);
          clearInterval(interval);
        }
      }, frameRate);
    } else {
      setDisplayValue(0);
    }

    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      <span>{displayValue}</span>
      {suffix}
    </span>
  );
};

// const COUNTRY_RULES = {
//   "+91": { name: "India", min: 10, max: 10 },
//   "+60": { name: "Malaysia", min: 9, max: 10 },
//   "+1": { name: "USA", min: 10, max: 10 },
// };

const ServicePage = () => {
  // const [formData, setFormData] = useState({
  //   countryCode: "+91",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // });
  // const [errors, setErrors] = useState({});
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const communityRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [activeMobileCard, setActiveMobileCard] = useState(null);

  useEffect(() => {
    // Check if we are on mobile
    const isMobile = window.innerWidth <= 767;
    if (!isMobile) return;

    // After 25 seconds, highlight the 2nd card (index 1)
    const timer = setTimeout(() => {
      setActiveMobileCard(1);
    }, 25000); // 25 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    // If it's the active card on mobile, scroll to contact
    if (window.innerWidth <= 767 && activeMobileCard === index) {
      const contactSection = document.getElementById("community");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   // Allow ONLY numbers for phone field
  //   if (name === "phone") {
  //     // Remove non-numeric characters
  //     const numericValue = value.replace(/[^0-9]/g, "");

  //     setFormData({
  //       ...formData,
  //       phone: numericValue,
  //     });

  //     setErrors((prev) => ({ ...prev, phone: "" }));
  //     return;
  //   }

  //   // Default behavior for other fields
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });

  //   setErrors((prev) => ({ ...prev, [name]: "" }));
  // };

  // const validate = () => {
  //   const newErrors = {};
  //   if (!formData.firstName.trim())
  //     newErrors.firstName = "First name is required";
  //   if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!formData.email.trim()) newErrors.email = "Email is required";
  //   else if (!emailRegex.test(formData.email.trim()))
  //     newErrors.email = "Enter a valid email";
  //   const phoneDigits = formData.phone.replace(/\D/g, "");
  //   const rules = COUNTRY_RULES[formData.countryCode];

  //   if (!phoneDigits) {
  //     newErrors.phone = "Phone number is required";
  //   } else if (
  //     phoneDigits.length < rules.min ||
  //     phoneDigits.length > rules.max
  //   ) {
  //     newErrors.phone = `Enter a valid ${rules.name} number (${rules.min}-${rules.max} digits)`;
  //   }

  //   if (!formData.subject.trim()) newErrors.subject = "Subject is required";
  //   if (!formData.message.trim()) newErrors.message = "Message is required";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const isValid = validate();
  //   if (!isValid) return;
  //   console.log("Form submitted:", formData);

  //   try {
  //     const response = await fetch("http://localhost:5000/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       setFormData({
  //         firstName: "",
  //         lastName: "",
  //         email: "",
  //         phone: "",
  //         subject: "",
  //         message: "",
  //       });
  //     } else {
  //       alert("Failed to send message");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Server error");
  //   }
  // };

  //for hero section animation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  //for service cards animation
  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      {
        threshold: 0.25,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  //for community section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (communityRef.current) observer.observe(communityRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // replay on scroll
          }
        });
      },
      { threshold: 0.3 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero" ref={heroRef}>
        <img
          src={heroBanner}
          className="service-hero-image"
          alt="DI Services"
        />
        <div className="service-hero-gradient" />

        <div className="service-hero-content">
          <p className="service-hero-kicker">Our Services</p>
          <h1 className="service-hero-title">
            DI Polyclinic offers <br className="mobile" /> comprehensive{" "}
            <br className="desktop" />
            medical services
          </h1>
          <p className="service-hero-subtitle">
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is dedicated to delivering reliable, high-quality healthcare services with a focus on accessibility, patient care, and continuous medical excellence.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="service-cards-section" ref={cardsRef}>
        <div
          className={`service-card card-1 ${activeMobileCard === 0 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(0)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={syringe}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Dr.will</h3>
            <p className="service-card-text">
              Professional doctor consultation services ensure timely diagnosis and effective treatment. Our experienced medical team provides personalized care, helping patients maintain better health and well-being with trusted support.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-2 ${activeMobileCard === 1 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(1)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={tablet}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Di Wholesale</h3>
            <p className="service-card-text">
              Reliable wholesale distribution services offering quality pharmaceutical products at competitive pricing. We ensure consistent supply, efficient delivery, and trusted sourcing to support businesses with seamless operations.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-3 ${activeMobileCard === 2 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(2)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img src={lab} alt="Service Icon" className="service-card-icon" />
            </div>
            <h3 className="service-card-title">Di Diagnostics</h3>
            <p className="service-card-text">
              Accurate and reliable diagnostic services with advanced technology, expert analysis, and fast reports for better healthcare decisions and complete patient care.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-4 ${activeMobileCard === 3 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(3)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={research}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Di Research</h3>
            <p className="service-card-text">
              Innovative research solutions focused on healthcare advancements and data-driven insights. We support development initiatives, ensuring quality analysis and meaningful outcomes for continuous improvement and growth.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-5 ${activeMobileCard === 4 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(4)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={globe}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Indocontinental 7</h3>
            <p className="service-card-text">
              Global healthcare solutions delivering high-quality products across regions. We focus on innovation, reliability, and excellence to meet international standards and support evolving healthcare needs.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-6 ${activeMobileCard === 5 ? "active-mobile" : ""}`}
          onClick={() => handleCardClick(5)}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              {/* Using lab icon as placeholder for hospital building if specific icon not found */}
              <img
                src={lab}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Di Polyclinics & Hospitals</h3>
            <p className="service-card-text">
              Advanced hospitals and polyclinics offering expert doctors, modern diagnostics, emergency care, and personalized treatments for complete healthcare support under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Stats & Community Section */}
      <section className="service-community-section" ref={communityRef} id="community">
        <div className="service-community-text">
          <p className="service-community-kicker">Our Community</p>
          <h2 className="service-community-title">
            Join a Growing
            <br />
            Community of Business
            <br />
            &amp; Logistics
          </h2>
          <h2 className="service-community-title-only-mobile">
            Join a Growing Community of Business &amp; Logistics
          </h2>
          <p className="service-community-description">
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is committed to building a strong network by providing accessible healthcare solutions and supporting growth across business and logistics.
          </p>
          <button className="service-community-btn" onClick={() => navigate("/contact")}>
            Join Us
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="30"
                height="30"
                rx="15"
                stroke="#161952"
              />
              <path
                d="M8 15.5H22M22 15.5L16.75 22M22 15.5L16.75 9"
                stroke="#161952"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="service-community-stats">
          <div className="service-stat-card">
            <p className="service-stat-number">
              <CountUp end={1000} suffix="+" />
            </p>
            <p className="service-stat-label">Products</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">
              <CountUp end={20} suffix="+" />
            </p>
            <p className="service-stat-label">Dosage Form</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">
              <CountUp end={30} suffix="+" />
            </p>
            <p className="service-stat-label">Therapeutic Areas</p>
          </div>
          <div className="service-stat-card">
            <p className="service-stat-number">
              <CountUp end={3} />
            </p>
            <p className="service-stat-label"> DI Polyclinics</p>
          </div>
        </div>
      </section>

      {/* Brands Strip */}
      <div className="service-brands-marquee">
        <div className="service-brands-track">
          {[...Array(4)].map((_, i) => (
            <section key={i} className="service-brands-section">
              <span className="service-brand-pill">
                <img src={dipharma} alt="Di Pharma" />
                Di Pharma
              </span>
              <span className="service-brand-pill">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z" fill="white" /></svg>
                Dr.will
              </span>
              <span className="service-brand-pill">
                <svg width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.9922 13.619C34.9922 17.9679 35.0158 22.3158 34.9809 26.6647C34.9658 28.5194 34.7341 30.3531 34.1367 32.1183C33.4904 34.0284 32.5247 35.7334 31.3018 37.2735C29.8857 39.0578 28.2502 40.5768 26.3819 41.8113C24.425 43.1041 22.3306 44.0471 20.1203 44.7116C19.8612 44.79 19.604 44.8764 19.3459 44.9569C19.0943 45.0343 18.9775 44.9428 18.9784 44.6513C18.9794 44.2723 18.9455 43.8923 18.9455 43.5133C18.9483 40.99 18.9568 38.4657 18.9596 35.9425C18.9596 35.6409 18.9492 35.3373 18.9153 35.0377C18.8626 34.5622 19.0755 34.2938 19.4712 34.148C20.5782 33.7399 21.6249 33.199 22.6067 32.5174C24.5664 31.1573 25.9089 29.3146 26.543 26.8858C26.9104 25.4774 26.9867 24.0489 27.0631 22.5993C27.1874 20.261 27.0932 17.9257 27.1375 15.5894C27.1469 15.0928 27.1347 15.0878 26.7135 15.316C24.2554 16.648 21.7983 17.981 19.3421 19.315C18.9587 19.5231 18.921 19.505 18.921 19.0305C18.9181 16.9626 18.8503 14.8917 18.9408 12.8279C19.0227 10.9581 19.7548 9.36367 21.1275 8.12415C22.9053 6.51669 24.9639 5.4149 27.0178 4.29602C28.904 3.26861 30.7789 2.21708 32.6595 1.17862C33.2916 0.829786 33.9257 0.486983 34.5598 0.142169C34.979 -0.0850254 34.9932 -0.0759778 34.9941 0.436719V13.619H34.9922ZM7.88835 19.514C7.88835 20.8209 7.84407 22.1308 7.89777 23.4357C8.00423 26.0414 8.62605 28.4822 10.2277 30.526C10.9739 31.479 11.8793 32.2611 12.9025 32.8703C13.8004 33.4051 14.7359 33.8555 15.7016 34.2304C15.9447 34.3249 16.0512 34.4757 16.0512 34.7693C16.0549 38.0525 16.0644 41.3358 16.0898 44.6191C16.0926 44.9991 15.9089 45.0483 15.6724 44.9659C14.2922 44.4854 12.8771 44.1235 11.5552 43.4459C10.288 42.7965 9.0406 42.125 7.87516 41.2805C6.18965 40.0591 4.73025 38.5884 3.4395 36.9075C2.16948 35.2538 1.22167 33.4172 0.597021 31.3955C0.353004 30.6064 0.151383 29.7861 0.112754 28.9507C-0.0945193 24.5194 0.0524563 20.084 0.0270181 15.6507C-0.00124648 10.5881 0.0213656 5.52448 0.0223078 0.461851C0.0223078 0.105309 0.178391 0.0101418 0.490557 0.176349C2.29572 1.14444 4.09053 2.13264 5.86743 3.15904C7.34755 4.01353 8.8663 4.79162 10.3577 5.624C11.8021 6.42923 13.1644 7.36817 14.3355 8.59261C15.2579 9.55668 15.744 10.7459 15.9268 12.098C16.1642 13.8593 16.1407 15.6306 16.0785 17.3979C16.0568 17.9991 16.0144 18.6012 16.0116 19.2054C16.0116 19.4165 15.9532 19.4869 15.76 19.3824C15.4237 19.2014 15.077 19.0416 14.7453 18.8526C13.4942 18.1378 12.2194 17.4693 10.9588 16.7746C10.0572 16.278 9.14141 15.8106 8.25485 15.2868C7.93357 15.0978 7.88175 15.135 7.88364 15.502C7.89306 16.84 7.88741 18.177 7.88741 19.5151L7.88835 19.514Z" fill="white" /></svg>
                Di Research
              </span>
              <span className="service-brand-pill">
                <img src={indocontent} alt="Indo Continental" style={{ height: "60px" }} />
                Indo Continental
              </span>
            </section>
          ))}
        </div>
      </div>

      {/* Contact & Form Section */}
      <div className="service-contact-component">
        <ContactSection />
      </div>

      {/* Footer Highlight */}
      <section className="quote-section">
        {/* Left Quote */}
        <svg
          className="quote-mark quote-mark-left"
          width="253"
          height="187"
          viewBox="0 0 253 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M253 187H139.816V84.8179L199.497 0H235.756L200.256 80.1429H253V187ZM113.184 187H0V84.8179L59.6814 0H95.9403L60.4404 80.1429H113.184V187Z" />
        </svg>

        {/* Right Quote */}
        <svg
          className="quote-mark quote-mark-right"
          width="274"
          height="202"
          viewBox="0 0 274 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H122.579V110.379L57.9438 202H18.6753L57.1218 115.429H0V0ZM151.421 0H274V110.379L209.365 202H170.096L208.543 115.429H151.421V0Z"
            fill="#05060fff"
          />
        </svg>

        {/* Content */}
        <div className="quote-content">
          <p className="quote-text">
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare
            organization committed to delivering comprehensive and accessible
            medical
          </p>

          <h4 className="quote-author">Dr. Jefry Wilson</h4>
          <span className="quote-role">Managing Director</span>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
