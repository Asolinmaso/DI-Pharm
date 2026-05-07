import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";
import IsometricNetwork from "./IsometricNetwork";
import BuildSvg from "../assets/about/home.svg?react";
import HeroSection from "./HeroSection";
import NetworkDiagram from "./ui/NetworkDiagram";

const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* Top Centered Text */}
          <div className={styles.textContainer}>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.title}
            >
              Quality Healthcare Under One Roof
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.subtitle}
            >
              From specialist consultations to home visits, we're
              <br />
              committed to your health and well-being
            </motion.p>
          </div>

          {/* <div className={styles.svgWrapper}>
            <motion.svg
              viewBox="0 0 900 600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BuildSvg />
            </motion.svg>
          </div> */}
          {/* <IsometricNetwork/> */}
          <div className="network-diagram">
            {/* <HeroSection/> */}
            <NetworkDiagram />
          </div>
          {/* Bottom Elements */}

        </div>
        <div className={styles.bottomLeft}>
          <div className={styles.social}>
            <span>Follow Us – </span>
            <a href="#">Instagram.</a> <a href="#">Linked In.</a>{" "}
            <a href="#">Facebook</a>
          </div>
          <div className={styles.exploreWrapper}>
            <button className={styles.exploreButton}>Explore More</button>
          </div>
        </div>

        <div className={styles.bottomRight}>
          <p>
            <strong>DI Polyclinic</strong> delivers trusted healthcare with a focus on patient comfort and personalized care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
