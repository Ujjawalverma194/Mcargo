import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ChevronDown } from "lucide-react";

const ContactFormSection = () => {
  const [activeTab, setActiveTab] = useState("business");

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "86px 9% 96px",
      borderTop: "1px solid #E7EDF5",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "360px 1fr",
      gap: "54px",
      alignItems: "start",
    },
    leftTitle: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 28px",
      letterSpacing: "-0.3px",
    },
    infoList: {
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      marginBottom: "34px",
    },
    infoItem: {
      display: "grid",
      gridTemplateColumns: "52px 1fr",
      gap: "16px",
      alignItems: "start",
    },
    iconBox: {
      width: "52px",
      height: "52px",
      borderRadius: "14px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    infoTitle: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 5px",
    },
    infoText: {
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "#475467",
      margin: 0,
      fontWeight: 400,
    },
    whyCard: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "24px",
      boxShadow: "0 12px 30px rgba(8,17,38,0.06)",
    },
    whyTitle: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 18px",
    },
    whyRow: {
      display: "flex",
      justifyContent: "space-between",
      gap: "16px",
      fontSize: "14px",
      color: "#475467",
      marginBottom: "14px",
      fontWeight: 400,
    },
    whyValue: {
      color: "#2e3192",
      fontWeight: 600,
    },
    formCard: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "20px",
      boxShadow: "0 16px 40px rgba(8,17,38,0.07)",
      overflow: "hidden",
    },
    tabs: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderBottom: "1px solid #E7EDF5",
    },
    tab: {
      border: "none",
      background: "#ffffff",
      padding: "20px 18px",
      cursor: "pointer",
      fontSize: "14.5px",
      fontWeight: 600,
      color: "#475467",
      position: "relative",
      fontFamily: "Inter, sans-serif",
    },
    activeTab: {
      color: "#081126",
    },
    activeLine: {
      position: "absolute",
      left: "16px",
      right: "16px",
      bottom: "-1px",
      height: "2px",
      background: "#2e3192",
    },
    form: {
      padding: "36px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "22px 24px",
    },
    field: {
      display: "flex",
      flexDirection: "column",
      gap: "9px",
    },
    label: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#081126",
    },
    input: {
      height: "44px",
      border: "1px solid #D9E4F5",
      borderRadius: "10px",
      padding: "0 14px",
      fontSize: "14px",
      color: "#081126",
      outline: "none",
      fontFamily: "Inter, sans-serif",
      transition: "all 0.25s ease",
    },
    textarea: {
      minHeight: "80px",
      border: "1px solid #D9E4F5",
      borderRadius: "10px",
      padding: "13px 14px",
      fontSize: "14px",
      color: "#081126",
      outline: "none",
      resize: "vertical",
      fontFamily: "Inter, sans-serif",
      transition: "all 0.25s ease",
    },
    selectWrap: {
      position: "relative",
    },
    select: {
      width: "100%",
      height: "44px",
      border: "1px solid #D9E4F5",
      borderRadius: "10px",
      padding: "0 40px 0 14px",
      fontSize: "14px",
      color: "#667085",
      outline: "none",
      appearance: "none",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
    },
    selectIcon: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#98A2B3",
      pointerEvents: "none",
    },
    button: {
      gridColumn: "1 / 2",
      marginTop: "4px",
      width: "fit-content",
      border: "none",
      borderRadius: "14px",
      background: "#2e3192",
      color: "#ffffff",
      padding: "14px 26px",
      fontSize: "14.5px",
      fontWeight: 600,
      cursor: "pointer",
      boxShadow: "0 12px 28px rgba(46,49,146,0.22)",
      transition: "all 0.25s ease",
    },
  };

  const inputFocus = (e) => {
    e.currentTarget.style.borderColor = "#2e3192";
    e.currentTarget.style.boxShadow = "0 0 0 4px rgba(46,49,146,0.08)";
  };

  const inputBlur = (e) => {
    e.currentTarget.style.borderColor = "#D9E4F5";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .contact-form-section {
            padding: 72px 6% 82px !important;
          }

          .contact-form-inner {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }

        @media (max-width: 768px) {
          .contact-main-form {
            grid-template-columns: 1fr !important;
            padding: 26px !important;
          }

          .contact-submit-btn {
            grid-column: 1 / -1 !important;
            width: 100% !important;
          }
        }

        @media (max-width: 576px) {
          .contact-form-section {
            padding: 58px 6% 72px !important;
          }

          .contact-tabs button {
            font-size: 13px !important;
            padding: 17px 10px !important;
          }
        }
      `}</style>
      <div id="contact-form">
        <section className="contact-form-section" style={styles.section}>
          <div className="contact-form-inner" style={styles.inner}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <h2 style={styles.leftTitle}>Get in Touch</h2>

              <div style={styles.infoList}>
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    text: "info@mcarlogistics.com",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    text: "303, Sunteck Crest, Opp. Leela Business Park Andheri–Kurla Road, Marol, Andheri East Mumbai, Maharashtra 400059, India",
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    text: "Mon – Fri: 10:00 AM – 6:30 PM\nSaturday: 9:00 AM – 4:00 PM",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div style={styles.infoItem} key={item.title}>
                      <div style={styles.iconBox}>
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 style={styles.infoTitle}>{item.title}</h3>
                        <p style={styles.infoText}>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={styles.whyCard}>
                <h3 style={styles.whyTitle}>Why Choose Us?</h3>

                <div style={styles.whyRow}>
                  <span>Countries Served</span>
                  <span style={styles.whyValue}>190+</span>
                </div>

                <div style={{ ...styles.whyRow, marginBottom: 0 }}>
                  <span>Trade Experience</span>
                  <span style={styles.whyValue}>12+ years</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={styles.formCard}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <div className="contact-tabs" style={styles.tabs}>
                {[
                  { id: "business", label: "Business Enquiry" },
                  { id: "career", label: "Career Application" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    style={{
                      ...styles.tab,
                      ...(activeTab === tab.id ? styles.activeTab : {}),
                    }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                    {activeTab === tab.id && <span style={styles.activeLine} />}
                  </button>
                ))}
              </div>

              <form className="contact-main-form" style={styles.form}>
                <div style={styles.field}>
                  <label style={styles.label}>
                    {activeTab === "business" ? "Business Name" : "Full Name"}
                  </label>
                  <input
                    style={styles.input}
                    placeholder={
                      activeTab === "business"
                        ? "Acme Imports Pvt. Ltd."
                        : "John Doe"
                    }
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>
                    {activeTab === "business"
                      ? "Contact Person"
                      : "Position Applied For"}
                  </label>
                  <input
                    style={styles.input}
                    placeholder={
                      activeTab === "business"
                        ? "John Doe"
                        : "Operations Executive"
                    }
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>
                    {activeTab === "business" ? "Business Email" : "Email"}
                  </label>
                  <input
                    type="email"
                    style={styles.input}
                    placeholder="trade@yourcompany.com"
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>Mobile Number</label>
                  <input
                    style={styles.input}
                    placeholder="+91 98765 43210"
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>
                    {activeTab === "business"
                      ? "Service Type"
                      : "Experience Level"}
                  </label>

                  <div style={styles.selectWrap}>
                    <select
                      style={styles.select}
                      onFocus={inputFocus}
                      onBlur={inputBlur}
                    >
                      <option>
                        {activeTab === "business"
                          ? "Select a service"
                          : "Select experience"}
                      </option>
                      <option>Freight Forwarding</option>
                      <option>Customs Clearance</option>
                      <option>Warehousing</option>
                      <option>Trade Advisory</option>
                    </select>
                    <ChevronDown size={17} style={styles.selectIcon} />
                  </div>
                </div>

                <div style={styles.field}>
                  <label style={styles.label}>
                    Message{" "}
                    <span style={{ color: "#98A2B3", fontWeight: 400 }}>
                      (optional)
                    </span>
                  </label>
                  <textarea
                    style={styles.textarea}
                    placeholder="Tell us about your requirements..."
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                <button
                  className="contact-submit-btn"
                  type="button"
                  style={styles.button}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 34px rgba(46,49,146,0.28)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 28px rgba(46,49,146,0.22)";
                  }}
                >
                  {activeTab === "business"
                    ? "Book Free Advisory"
                    : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactFormSection;
