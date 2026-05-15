import React, { useState } from "react";
import styles from "./StayConnected.module.css";
const StayConected = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // ✅ Success
    setError("");
    console.log("Subscribed email:", email);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_CONTACT_URL, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: email,
          subject: "Newsletter Subscription",
          message: "User subscribed to newsletter",
        }),
      });

      if (response.ok) {
        setEmail("");
        alert("Subscription successful!");
      } else {
        setError("Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Stay Connected For more Insights and Updates</h2>
          <p>
            Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare
            organization committed to delivering comprehensive
          </p>

          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.input}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
            <button className={styles.button} onClick={handleSubscribe}>Subscribe</button>
          </div>
          {error && <h5 className={styles.error}>{error}</h5>}
        </div>
      </div>
    </div>
  );
};

export default StayConected;
