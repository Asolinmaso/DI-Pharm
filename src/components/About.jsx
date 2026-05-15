import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import doc from "../assets/about/doctor.jpg";
import bulding from "../assets/about/build.svg";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Empowering Healthcare Through Innovation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DI Pharma Innovation is a forward-thinking pharmaceutical and
            healthcare solutions provider committed to improving access to
            quality medical products. With a strong focus on reliability,
            innovation, and customer satisfaction.
          </motion.p>
          <motion.div
            className={styles.arrowButton}
            onClick={() => navigate("/about")}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.div>
        </div>

        <div className={styles.imageGrid}>
          {/* Large Card: Polyclins */}
          <motion.div
            className={`${styles.imageCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={doc} alt="Polyclins" className={styles.cardImage} />
            <a
              href="https://polyclinicsandhospitals.dipharmainnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badge}
            >
              Polyclins
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 20.25L20.25 6.75"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.75 6.75H20.25V20.25"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Small Card: Diagnostics */}
          <motion.div
            className={`${styles.imageCard} ${styles.cardSmall} ${styles.topRight}`}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={bulding} alt="Diagnostics" className={styles.cardImage} />
            <div className={styles.badge}>
              Diagnostics
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 20.25L20.25 6.75"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.75 6.75H20.25V20.25"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Bottom Badge Only: Research */}
          <motion.div
            className={`${styles.imageCard} ${styles.bottomRight}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://research.dipharmainnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badge}
            >
              Research
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 20.25L20.25 6.75"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.75 6.75H20.25V20.25"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
