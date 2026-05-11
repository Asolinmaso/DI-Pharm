import React, { useEffect, useRef, useState } from "react";
import styles from "./Partners.module.css";
import dipharma from "../assets/brands/dipharma.png";
import g7 from "../assets/brands/g7.png";
import diwhole from "../assets/brands/di_whole.png";
import mj7 from "../assets/brands/mj7.png";
import indocontent from "../assets/brands/indocontent.png";
const Partners = () => {
  // SVG viewBox (same as globe image ratio)
  const viewBoxWidth = 800;
  const viewBoxHeight = 533;
  const globeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (globeRef.current) {
      observer.observe(globeRef.current);
    }

    return () => {
      if (globeRef.current) {
        observer.unobserve(globeRef.current);
      }
    };
  }, []);

  const pins = [
    { id: 1, x: 200, y: 320, delay: "0.2s", label: "Americas" },
    { id: 2, x: 380, y: 200, delay: "0.5s", label: "Europe" },
    { id: 3, x: 440, y: 360, delay: "0.8s", label: "Africa" },
    { id: 4, x: 600, y: 240, delay: "1.1s", label: "Asia" },
    { id: 5, x: 700, y: 400, delay: "1.4s", label: "Oceania" },
    { id: 6, x: 100, y: 420, delay: "1.8s", label: "atlantic" },
    { id: 7, x: 310, y: 110, delay: "2.1s", label: "North Region" },
    { id: 8, x: 520, y: 130, delay: "2.4s", label: "North-East Region" },
    { id: 9, x: 160, y: 150, delay: "2.7s", label: "North-West Region" },
    { id: 10, x: 450, y: 80, delay: "3s", label: "Polar Region" },
    { id: 11, x: 750, y: 220, delay: "3.3s", label: "Far East" },
    { id: 12, x: 780, y: 350, delay: "3.6s", label: "East Pacific" },
    { id: 13, x: 680, y: 150, delay: "3.9s", label: "North Asia" },
  ];

  return (
    <section className={styles.partners} id="partners">
      <div className={styles.header}>
        <h2>Our Partners</h2>
        <div className={styles.brandsWrapper}>
          <section className={styles.brands_section}>
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={index}>
                <span className={styles.brand_pills}>
                  <img src={dipharma} alt="DI Polyclinics & Hospitals" className={styles.brand_image} />
                  DI Polyclinics & Hospitals
                </span>
                <span className={styles.brand_pills}>
                  <img src={dipharma} alt="DI Research" className={styles.brand_image} />
                  DI Research
                </span>
                <span className={styles.brand_pills}>
                  <img src={dipharma} alt="DI Diagnostics" className={styles.brand_image} />
                  DI Diagnostics
                </span>
                <span className={styles.brand_pills}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z" fill="white" /></svg>
                  Dr. Will
                </span>
                <span className={styles.brand_pills}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z" fill="white" /></svg>
                  DI Wholesale
                </span>
              </React.Fragment>
            ))}
          </section>
        </div>
      </div>

      <div
        ref={globeRef}
        className={`${styles.globeContainer} ${inView ? "in-view" : ""}`}
      >
        {/* ===== PIN ANIMATIONS ===== */}
        <style>{`
          @keyframes pinPop {
  0% {
    opacity: 0;
    transform: scale(0) translateY(24px);
  }
  60% {
    opacity: 1;
    transform: scale(1.15) translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Gentle floating after pop */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

@keyframes pulseRing {
  0% { transform: scale(0.6); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* RESET STATE */
.pin-container {
  opacity: 0;
  animation: none;
  transform-box: fill-box;
  transform-origin: bottom center;
}

/* ACTIVE STATE */
.in-view .pin-container {
  animation:
    pinPop 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards,
    float 3s ease-in-out infinite;
  animation-delay: var(--delay);
}

/* Pulse */
.pulse-circle {
  opacity: 0;
  animation: none;
}

.in-view .pulse-circle {
  opacity: 1;
  animation: pulseRing 2s infinite ease-out;
  animation-delay: var(--delay);
}

@media (min-width: 1024px) {
  .desktop-hide {
    display: none;
  }
}

        `}</style>

        {/* ===== SVG OVERLAY ===== */}
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        >
          <defs>
            {/* Smaller glow */}
            <filter
              id="pin-glow"
              x="-120%"
              y="-120%"
              width="340%"
              height="340%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
                result="innerGlow"
              />

              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="6"
                result="halo"
              />

              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="14"
                result="bloom"
              />

              <feComponentTransfer in="halo" result="haloBright">
                <feFuncA type="linear" slope="2" />
              </feComponentTransfer>

              <feComponentTransfer in="bloom" result="bloomSoft">
                <feFuncA type="linear" slope="0.55" />
              </feComponentTransfer>

              <feMerge>
                <feMergeNode in="bloomSoft" />
                <feMergeNode in="haloBright" />
                <feMergeNode in="innerGlow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 🔻 Reduced pin shape */}
            <path
              id="pinIcon"
              d="M0 0
                 C-8 -12 -14 -18 -14 -26
                 C-14 -34 -8 -40 0 -40
                 C8 -40 14 -34 14 -26
                 C14 -18 8 -12 0 0 Z"
            />
          </defs>

          {pins.map((pin) => (
            <g 
              key={pin.id} 
              transform={`translate(${pin.x}, ${pin.y})`}
              className={pin.id > 5 ? "desktop-hide" : ""}
            >
              <g className="pin-container" style={{ "--delay": pin.delay }}>
                {/* Pulse ring (smaller) */}
                <circle
                  cx="0"
                  cy="0"
                  r="5"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1.5"
                  className="pulse-circle"
                  style={{ "--delay": pin.delay }}
                />

                {/* Pin body */}
                <use href="#pinIcon" fill="white" filter="url(#pin-glow)" />

                {/* Pin head dot */}
                <circle cx="0" cy="-26" r="4.5" fill="#1a237e" />
              </g>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
};

export default Partners;
