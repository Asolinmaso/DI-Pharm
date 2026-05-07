import { useEffect, useRef, useState } from "react";
import "./CareerPage.css";
import heroBanner from "../assets/career_banner.png";
import personOne from "../assets/career_person1.png";
import personTwo from "../assets/career_person2.png";
import Swal from "sweetalert2";

const openRoles = [
  {
    title: "Research Assistant – Pharmaceutical Formulations",
    role_focus: "Assisting in formulation development, sample testing, documentation.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Pharmacist",
    role_focus: "Dispensing medicines, managing inventory, and guiding patients.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Staff Nurse",
    role_focus: "Providing patient care, assisting doctors, and monitoring recovery.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Physician Assistant",
    role_focus: "Supporting doctors in diagnosis, procedures, and patient care.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Surgical Nurse",
    role_focus: "Assisting in surgeries and ensuring patient safety during procedures.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Lab Technician",
    role_focus: "Conducting tests, handling lab equipment, and maintaining reports.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Office Staff",
    role_focus: "Handling administrative tasks and supporting daily operations.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Front Office Receptionist",
    role_focus: "Managing front desk operations, calls, and appointments.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Accountant",
    role_focus: "Managing billing, financial records, and daily transactions.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Store Assistant",
    role_focus: "Managing stock, organizing supplies, and maintaining inventory.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Managers",
    role_focus: "Overseeing operations, managing teams, and ensuring smooth workflow.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Field Officers",
    role_focus: "Handling on-ground coordination and external operations.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Duty Doctors & Consultants",
    role_focus: "Providing consultation, diagnosis, and treatment.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Pharmacy Manager",
    role_focus: "Supervising operations and managing pharmacy staff.",
    type: "Full-time",
    location: "Chennai"
  },
  {
    title: "Delivery Assistant",
    role_focus: "Handling deliveries and supporting logistics operations.",
    type: "Full-time",
    location: "Chennai"
  },
];

const CareerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    countryCode: "+91",
  });
  const [fileName, setFileName] = useState("No file chosen");
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // default laptop

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const validatePhoneByCountry = (countryCode, phone) => {
    const cleanPhone = phone.replace(/\D/g, "");

    switch (countryCode) {
      case "+91": // India
        return /^[6-9]\d{9}$/.test(cleanPhone);

      case "+1": // USA / Canada
        return /^\d{10}$/.test(cleanPhone);

      case "+60": // Malaysia
        return /^\d{9,10}$/.test(cleanPhone);

      default:
        return cleanPhone.length >= 8 && cleanPhone.length <= 15;
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhoneByCountry(formData.countryCode, formData.phone)) {
      if (formData.countryCode === "+91") {
        newErrors.phone = "Enter a valid 10-digit Indian mobile number";
      } else if (formData.countryCode === "+1") {
        newErrors.phone = "Enter a valid 10-digit US phone number";
      } else if (formData.countryCode === "+60") {
        newErrors.phone = "Enter a valid Malaysian phone number";
      } else {
        newErrors.phone = "Enter a valid phone number";
      }
    }

    // Role validation
    if (!formData.role.trim()) {
      newErrors.role = "Job position is required";
    } else if (formData.role.trim().length < 6) {
      newErrors.role = "Job position must be at least 6 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // File validation
    if (!selectedFile) {
      newErrors.upload = "Resume upload is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
        "image/jpeg",
        "image/jpg",
        "image/png",
      ];
      const allowedExtensions = [
        ".pdf",
        ".docx",
        ".doc",
        ".jpg",
        ".jpeg",
        ".png",
      ];
      const fileExtension = selectedFile.name
        .substring(selectedFile.name.lastIndexOf("."))
        .toLowerCase();

      if (
        !allowedTypes.includes(selectedFile.type) &&
        !allowedExtensions.includes(fileExtension)
      ) {
        newErrors.upload = "File must be PDF, DOCX, JPG, or PNG";
      } else if (selectedFile.size > 5 * 1024 * 1024) {
        newErrors.upload = "File size must be less than 5MB";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      // Clear upload error when file is selected
      if (errors.upload) {
        setErrors({ ...errors, upload: "" });
      }
    } else {
      setSelectedFile(null);
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      countryCode: formData.countryCode,
      role: formData.role,
      message: formData.message,
      fileName: selectedFile.name,
      fileType: selectedFile.type,
      fileBase64: await fileToBase64(selectedFile),
    };

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SHEET_CAREER_URL, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      // 🎉 Success popup
      Swal.fire({
        icon: "success",
        title: "Application Submitted!",
        text: "Thank you for applying. Our team will contact you within 24 hours.",
        confirmButtonColor: "#222065",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
        countryCode: "+91",
      });
      setSelectedFile(null);
      setFileName("No file chosen");
      setErrors({});
    } catch (error) {
      // ❌ Error popup
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroRef = useRef(null);
  const positionsRef = useRef(null);
  const portraitRef = useRef(null);
  const contactportraitRef = useRef(null);
  const formRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Force scroll to top on mount with a tiny delay to override any browser/other effect behaviors
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const sectionTitle = document.querySelector(".section-title");
    if (sectionTitle) {
      const yOffset = -120; // Standard offset for the navbar
      const y =
        sectionTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      { threshold: 0.4 },
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // remove so it replays when scrolling back
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.35 },
    );

    if (positionsRef.current) observer.observe(positionsRef.current);
    if (portraitRef.current) observer.observe(portraitRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // remove to replay on scroll
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.35 },
    );

    if (contactportraitRef.current)
      observer.observe(contactportraitRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(5); // mobile
      } else {
        setItemsPerPage(6); // laptop (2 rows × 3 cards)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(openRoles.length / itemsPerPage);

    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedRoles = openRoles.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(openRoles.length / itemsPerPage);

  return (
    <div className="career-page">
      <section className="career-hero">
        <img src={heroBanner} className="career-hero-image" alt="" />

        <div className="career-hero-gradient"></div>

        <div className="career-hero-content">
          <h2 className="hero-subtitle">GROW WITH A</h2>

          <h1 className="hero-title">
            <span className="purpose-box">PURPOSE</span>
          </h1>
        </div>
      </section>
      <div className="hero-info" ref={heroRef}>
        <p className="hero-sub">Join Us in Shaping the Future of Healthcare</p>
        <p className="hero-description">
          At Dipharmainnovation, we are committed to improving lives through high-quality pharmaceuticals, medical essentials, and healthcare solutions. Our team is growing, and we’re looking for passionate individuals who want to make an impact in the healthcare industry.
        </p>
      </div>

      <section className="positions-section">
        <div className="positions-content" ref={positionsRef}>
          <div className="positions-left">
            <h2 className="section-title">Open Positions</h2>

            <div className="positions-list-container">
              <ul className="role-list">
                {selectedRoles.map((role, idx) => {
                  const realIndex = startIndex + idx;
                  const isActive = activeIndex === realIndex || (activeIndex === null && idx === 0);

                  return (
                    <li
                      key={realIndex}
                      className={`role-item ${isActive ? "active" : ""}`}
                      onClick={() => {
                        setActiveIndex(realIndex);
                        setFormData((prev) => ({
                          ...prev,
                          role: role.title,
                        }));
                        document
                          .getElementById("career-contact")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      <div className="role-details">
                        <p className="role-name">{role.title}</p>
                        <p className="role-focus">Role Focus: {role.role_focus}</p>
                        <p className="role-meta">
                          {role.type} | {role.location}
                        </p>
                      </div>

                      <div className="role-action">
                        <div className="arrow-circle">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage((prev) => prev - 1);
                  }}
                >
                  Prev
                </button>

                <span>
                  {currentPage} / {totalPages}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage((prev) => prev + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="hero-portrait framed" ref={portraitRef}>
            <div className="portrait-clip-bg"></div>
            <img src={personOne} alt="Career Opportunities" />
          </div>
        </div>
      </section>

      <section className="career-contact-block" id="career-contact">
        <div className="contact-card">
          <div className="contact-portrait" ref={contactportraitRef}>
            <div className="portrait-clip-bg-contact"></div>
            <img src={personTwo} alt="Work with us" />
          </div>
          <div className="contact-form-wrapper" ref={formRef}>
            <div className="contact-form-header">
              <h2 className="contact-kicker">
                Our Team Will Respond to You Within 24 Hours
              </h2>
            </div>
            <form className="career-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group-career">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={errors.name ? "input-error-career" : ""}
                  />
                  {errors.name && (
                    <span className="error-message-career">{errors.name}</span>
                  )}
                </div>
                <div className="form-group-career">
                  <div
                    className={`phone-input-wrapper-career ${errors.phone ? "input-error-career" : ""}`}
                  >
                    <div className="select-wrapper-career">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="country-code-select-career"
                      >
                        <option value="+91"> +91</option>
                        <option value="+1"> +1</option>
                        <option value="+44"> +44</option>
                        <option value="+61"> +61</option>
                        <option value="+60"> +60</option>
                        <option value="+65"> +65</option>
                        <option value="+971"> +971</option>
                        <option value="+1"> +1</option>
                        <option value="+49"> +49</option>
                        <option value="+33"> +33</option>
                        <option value="+81"> +81</option>
                        <option value="+86"> +86</option>
                        <option value="+7"> +7</option>
                        <option value="+39"> +39</option>
                        <option value="+34"> +34</option>
                        <option value="+55"> +55</option>
                        <option value="+27"> +27</option>
                        <option value="+82"> +82</option>
                        <option value="+92"> +92</option>
                        <option value="+880"> +880</option>
                        <option value="+94"> +94</option>
                        <option value="+977"> +977</option>
                        <option value="+66"> +66</option>
                        <option value="+62"> +62</option>
                        <option value="+84"> +84</option>
                        <option value="+63"> +63</option>
                        <option value="+41"> +41</option>
                        <option value="+31"> +31</option>
                        <option value="+46"> +46</option>
                        <option value="+47"> +47</option>
                        <option value="+45"> +45</option>
                        <option value="+353"> +353</option>
                        <option value="+64"> +64</option>
                        <option value="+90"> +9 Turks</option>
                        <option value="+966"> +966</option>
                        <option value="+965"> +965</option>
                        <option value="+974"> +974</option>
                        <option value="+9Om"> +968</option>
                        <option value="+973"> +973</option>
                        <option value="+20"> +20</option>
                      </select>
                      <span className="select-arrow-career">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      inputMode="numeric"
                      maxLength={10}
                    />
                  </div>
                  {errors.phone && (
                    <span className="error-message-career">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group-career">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={errors.email ? "input-error-career" : ""}
                  />
                  {errors.email && (
                    <span className="error-message-career">{errors.email}</span>
                  )}
                </div>
                <div className="form-group-career">
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Job Position"
                    className={errors.role ? "input-error-career" : ""}
                  />
                  {errors.role && (
                    <span className="error-message-career">{errors.role}</span>
                  )}
                </div>
              </div>

              <div className="form-group-career">
                <textarea
                  name="message"
                  rows="1"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className={errors.message ? "input-error-career" : ""}
                />
                {errors.message && (
                  <span className="error-message-career">{errors.message}</span>
                )}
              </div>

              <div className="form-actions-row">
                <div className="upload-section-career">
                  <div className={`upload-box-career ${errors.upload ? "upload-error-career" : ""}`}>
                    <label className="upload-label-career">
                      <input
                        type="file"
                        name="upload"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        style={{ display: 'none' }}
                      />
                      <span className="upload-btn-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 16V4M12 4L8 8M12 4L16 8M4 20H20" stroke="#161952" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Upload File
                      </span>
                    </label>
                    <span className="file-name-display-career">{fileName}</span>
                  </div>
                  <div className="upload-info-career">
                    <p>Drag & drop your file here (PDF, DOCX, JPG, PNG)</p>
                    <p>Max size: 5MB</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="career-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;