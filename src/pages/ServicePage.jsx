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
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  // Handle automatic card flipping for mobile view
  useEffect(() => {
    let intervalId = null;

    const startInterval = () => {
      if (window.innerWidth <= 767) {
        if (!intervalId) {
          intervalId = setInterval(() => {
            setActiveCard((prev) => (prev === null || prev >= 5 ? 0 : prev + 1));
          }, 30000);
        }
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        setActiveCard(null);
      }
    };

    startInterval();
    window.addEventListener("resize", startInterval);

    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("resize", startInterval);
    };
  }, []);



  const handleCardClick = (url) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      navigate(url);
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
          className={`service-card card-1 ${activeCard === 0 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("https://doctorwil.com/")}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={syringe}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">Dr. Will</h3>
            <p className="service-card-text">
              Professional doctor consultation services ensure timely diagnosis and effective treatment. Our experienced medical team provides personalized care, helping patients maintain better health and well-being with trusted support.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-2 ${activeCard === 1 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("/404")}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={tablet}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">DI Wholesale</h3>
            <p className="service-card-text">
              Reliable wholesale distribution services offering quality pharmaceutical products at competitive pricing. We ensure consistent supply, efficient delivery, and trusted sourcing to support businesses with seamless operations.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-3 ${activeCard === 2 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("https://diagnostics.dipharmainnovation.com/")}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img src={lab} alt="Service Icon" className="service-card-icon" />
            </div>
            <h3 className="service-card-title">DI Diagnostics</h3>
            <p className="service-card-text">
              Accurate and reliable diagnostic services with advanced technology, expert analysis, and fast reports for better healthcare decisions and complete patient care.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-4 ${activeCard === 3 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("https://research.dipharmainnovation.com/")}
        >
          <div className="service-card-inner">
            <div className="service-card-icon-wrapper">
              <img
                src={research}
                alt="Service Icon"
                className="service-card-icon"
              />
            </div>
            <h3 className="service-card-title">DI Research</h3>
            <p className="service-card-text">
              Innovative research solutions focused on healthcare advancements and data-driven insights. We support development initiatives, ensuring quality analysis and meaningful outcomes for continuous improvement and growth.
            </p>
          </div>
        </div>
        <div
          className={`service-card card-5 ${activeCard === 4 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("https://indocontinental7.com/")}
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
          className={`service-card card-6 ${activeCard === 5 ? "auto-active" : ""}`}
          onClick={() => handleCardClick("https://polyclinicsandhospitals.dipharmainnovation.com/")}
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
            <h3 className="service-card-title">DI Polyclinics & Hospitals</h3>
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
                <img src={dipharma} alt="DI Polyclinics & Hospitals" />
                DI Polyclinics & Hospitals
              </span>
              <span className="service-brand-pill">
                <img src={dipharma} alt="DI Research" />
                DI Research
              </span>
              <span className="service-brand-pill">
                <img src={dipharma} alt="DI Diagnostics" />
                DI Diagnostics
              </span>
              <span className="service-brand-pill">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z" fill="white" /></svg>
                Dr. Will
              </span>
              <span className="service-brand-pill">
                <img src={diwhole} alt="DI WHOLESALE" />
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
