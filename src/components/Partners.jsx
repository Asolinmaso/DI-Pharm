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
                  <img src={dipharma} alt="diPharma" className={styles.brand_image} />
                  Di Pharma
                </span>
                <span className={styles.brand_pills}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.5251 4.36153C31.5926 4.16723 31.6005 3.95718 31.5477 3.75838C31.4949 3.55958 31.3839 3.38111 31.2289 3.2459C29.0586 1.37365 26.3407 0.254115 23.4814 0.0546519C18.987 -0.271598 16.2026 0.932152 14.7964 1.82653C14.6562 1.91667 14.5398 2.03915 14.4568 2.18366C14.3739 2.32817 14.3269 2.49049 14.3197 2.65696C14.3125 2.82343 14.3454 2.98919 14.4157 3.14029C14.4859 3.29139 14.5914 3.42342 14.7232 3.52528L26.1776 12.4278C26.4117 12.6093 26.6858 12.7324 26.977 12.7866C27.2682 12.8408 27.5682 12.8247 27.8519 12.7396C28.1357 12.6545 28.395 12.5029 28.6083 12.2973C28.8216 12.0917 28.9827 11.8382 29.0782 11.5578L31.5251 4.36153ZM3.29137 30.7859C3.06409 30.9399 2.89083 31.1613 2.79598 31.419C2.70113 31.6766 2.68946 31.9575 2.76262 32.2222C3.19949 33.7878 4.49699 37.0447 8.18137 40.0072C11.8639 42.9697 16.2214 43.2903 18.0832 43.2453C18.3553 43.2401 18.6188 43.1492 18.8363 42.9856C19.0538 42.822 19.2141 42.594 19.2945 42.334L26.6351 19.0972C27.1657 17.419 25.2851 16.0128 23.8264 16.9934L3.29137 30.7859ZM8.65762 6.26465C8.47972 6.19482 8.28873 6.16468 8.09797 6.17634C7.90722 6.188 7.72131 6.24118 7.55325 6.33215C6.19574 7.0709 2.71575 9.3509 0.919495 14.0309C-0.464255 17.6384 0.0232452 21.6284 0.40387 23.5803C0.529495 24.2178 1.20262 24.5853 1.80637 24.349L23.8357 15.7484C25.4089 15.1353 25.4145 12.9115 23.8451 12.289L8.65762 6.26465ZM41.3351 22.9165C41.9726 23.3478 42.8426 22.9672 42.9532 22.204C43.2457 20.1884 43.497 16.6784 42.3307 14.0309C40.7745 10.5022 38.1345 8.32715 36.8801 7.44215C36.6874 7.30786 36.4552 7.24208 36.2206 7.25534C35.9861 7.26859 35.7628 7.36012 35.5864 7.51528L30.027 12.4465C29.8154 12.6345 29.6495 12.8683 29.5419 13.1301C29.4343 13.3918 29.3878 13.6747 29.4061 13.9572C29.4243 14.2396 29.5068 14.5142 29.6472 14.7599C29.7877 15.0057 29.9823 15.2161 30.2164 15.3753L41.3351 22.9165ZM25.8007 41.7359C25.7445 42.3922 26.3014 42.9359 26.9557 42.8647C29.0614 42.6397 33.3907 41.8034 36.6307 38.7059C38.8823 36.5334 40.4419 33.7442 41.1139 30.6884C41.1535 30.4984 41.1505 30.302 41.1051 30.1133C41.0598 29.9246 40.9731 29.7483 40.8514 29.5972L31.1314 17.6047C30.0776 16.3053 27.9795 16.9465 27.8332 18.6115L25.8007 41.7359Z" fill="white" /></svg>
                  Dr.will
                </span>
                <span className={styles.brand_pills}>
                  <svg width="35" height="45" viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.9922 13.619C34.9922 17.9679 35.0158 22.3158 34.9809 26.6647C34.9658 28.5194 34.7341 30.3531 34.1367 32.1183C33.4904 34.0284 32.5247 35.7334 31.3018 37.2735C29.8857 39.0578 28.2502 40.5768 26.3819 41.8113C24.425 43.1041 22.3306 44.0471 20.1203 44.7116C19.8612 44.79 19.604 44.8764 19.3459 44.9569C19.0943 45.0343 18.9775 44.9428 18.9784 44.6513C18.9794 44.2723 18.9455 43.8923 18.9455 43.5133C18.9483 40.99 18.9568 38.4657 18.9596 35.9425C18.9596 35.6409 18.9492 35.3373 18.9153 35.0377C18.8626 34.5622 19.0755 34.2938 19.4712 34.148C20.5782 33.7399 21.6249 33.199 22.6067 32.5174C24.5664 31.1573 25.9089 29.3146 26.543 26.8858C26.9104 25.4774 26.9867 24.0489 27.0631 22.5993C27.1874 20.261 27.0932 17.9257 27.1375 15.5894C27.1469 15.0928 27.1347 15.0878 26.7135 15.316C24.2554 16.648 21.7983 17.981 19.3421 19.315C18.9587 19.5231 18.921 19.505 18.921 19.0305C18.9181 16.9626 18.8503 14.8917 18.9408 12.8279C19.0227 10.9581 19.7548 9.36367 21.1275 8.12415C22.9053 6.51669 24.9639 5.4149 27.0178 4.29602C28.904 3.26861 30.7789 2.21708 32.6595 1.17862C33.2916 0.829786 33.9257 0.486983 34.5598 0.142169C34.979 -0.0850254 34.9932 -0.0759778 34.9941 0.436719V13.619H34.9922ZM7.88835 19.514C7.88835 20.8209 7.84407 22.1308 7.89777 23.4357C8.00423 26.0414 8.62605 28.4822 10.2277 30.526C10.9739 31.479 11.8793 32.2611 12.9025 32.8703C13.8004 33.4051 14.7359 33.8555 15.7016 34.2304C15.9447 34.3249 16.0512 34.4757 16.0512 34.7693C16.0549 38.0525 16.0644 41.3358 16.0898 44.6191C16.0926 44.9991 15.9089 45.0483 15.6724 44.9659C14.2922 44.4854 12.8771 44.1235 11.5552 43.4459C10.288 42.7965 9.0406 42.125 7.87516 41.2805C6.18965 40.0591 4.73025 38.5884 3.4395 36.9075C2.16948 35.2538 1.22167 33.4172 0.597021 31.3955C0.353004 30.6064 0.151383 29.7861 0.112754 28.9507C-0.0945193 24.5194 0.0524563 20.084 0.0270181 15.6507C-0.00124648 10.5881 0.0213656 5.52448 0.0223078 0.461851C0.0223078 0.105309 0.178391 0.0101418 0.490557 0.176349C2.29572 1.14444 4.09053 2.13264 5.86743 3.15904C7.34755 4.01353 8.8663 4.79162 10.3577 5.624C11.8021 6.42923 13.1644 7.36817 14.3355 8.59261C15.2579 9.55668 15.744 10.7459 15.9268 12.098C16.1642 13.8593 16.1407 15.6306 16.0785 17.3979C16.0568 17.9991 16.0144 18.6012 16.0116 19.2054C16.0116 19.4165 15.9532 19.4869 15.76 19.3824C15.4237 19.2014 15.077 19.0416 14.7453 18.8526C13.4942 18.1378 12.2194 17.4693 10.9588 16.7746C10.0572 16.278 9.14141 15.8106 8.25485 15.2868C7.93357 15.0978 7.88175 15.135 7.88364 15.502C7.89306 16.84 7.88741 18.177 7.88741 19.5151L7.88835 19.514Z" fill="white" /></svg>
                  Di Research
                </span>
                <span className={styles.brand_pills}>
                  <img src={indocontent} alt="Indo Continental" className={styles.brandImage} />
                  Indo Continental
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
            <g key={pin.id} transform={`translate(${pin.x}, ${pin.y})`}>
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
