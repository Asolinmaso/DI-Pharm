import { useEffect, useRef, useState } from "react";
import "./FAQSection.css";
import { FiChevronDown } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqLeftRef = useRef(null);
  const faqRightRef = useRef(null);

  const faqs = [
    {
      question: "What is DI Pharma Innovation?",
      answer:
        "Diverse Innovation Pharmaceuticals Pvt. Ltd. is a growing healthcare organization committed to delivering comprehensive and accessible medical services to the community.",
    },
    {
      question: "How does DI Pharma work?",
      answer:
        "DI Pharma operates as a comprehensive healthcare organization focused on delivering accessible, reliable, and patient-centered medical services. Through our integrated approach in diagnostics, research, pharmaceutical solutions, and wholesale healthcare support, we bridge the gap between healthcare providers and patients while ensuring quality care, efficient service, and trusted medical solutions for all.",
    },
    {
      question: "What are the services?",
      answer:
        "DI Pharma offers a wide range of healthcare services including pharmaceutical solutions, diagnostics, medical consultations, research support, wholesale supply, and comprehensive health management programs. We are committed to providing reliable medical support services tailored to meet the diverse healthcare needs of our community.",
    },
    {
      question: "How can I access your services?",
      answer:
        "You can easily access our services by contacting us directly, visiting our facility, or filling out the contact form on our website. Our team will review your requirements and get in touch with you shortly to guide you through the process and provide the right assistance based on your needs.",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // remove so animation replays on scroll
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (faqLeftRef.current) observer.observe(faqLeftRef.current);
    if (faqRightRef.current) observer.observe(faqRightRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-left" ref={faqLeftRef}>
            <p className="faq-subtitle">Want to know more?</p>
            <h2 className="faq-title">Frequently asked questions</h2>
            <p className="faq-description">
              Have questions? Find clear and helpful answers about our services and healthcare solutions here.
            </p>
          </div>

          <div className="faq-right" ref={faqRightRef}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`faq-icon ${openIndex === index ? "open" : ""}`}
                  >
                    <svg
                      width="63"
                      height="63"
                      viewBox="0 0 63 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="63" height="63" rx="31.5" fill="#151952" />
                      <path
                        d="M41.9568 25L44 26.9334L32.8647 37.4643C32.6863 37.6341 32.4741 37.7688 32.2404 37.8607C32.0067 37.9527 31.756 38 31.5029 38C31.2498 38 30.9991 37.9527 30.7654 37.8607C30.5317 37.7688 30.3195 37.6341 30.1411 37.4643L19 26.9334L21.0432 25.0018L31.5 34.8858L41.9568 25Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
