import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Globe2 } from "lucide-react";

const ContactAdvisoryServices = () => {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Trade Compliance Advisory",
      text: "IEC setup, FSSAI licensing, SVB handling, HS classification",
    },
    {
      icon: FileCheck,
      title: "Shipment Rate Discovery",
      text: "Instant freight quotes, container booking, route optimization",
    },
    {
      icon: Globe2,
      title: "Industry-Specific Solutions",
      text: "Food & agri, heavy equipment, electronics, steel imports",
    },
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9% 100px",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    eyebrow: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#2e3192",
      margin: "0 0 22px",
    },
    title: {
      fontSize: "clamp(34px, 4vw, 48px)",
      lineHeight: 1.12,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 58px",
      letterSpacing: "-1px",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2e3192, #12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
    },
    card: {
      minHeight: "210px",
      background: "#F8FAFC",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "34px 30px",
      textAlign: "center",
      boxShadow: "0 10px 28px rgba(8,17,38,0.045)",
      transition: "all 0.3s ease",
    },
    iconBox: {
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 24px",
      transition: "all 0.3s ease",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 13px",
      lineHeight: 1.35,
    },
    cardText: {
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "#475467",
      margin: 0,
      fontWeight: 400,
    },
  };

  const cardHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-7px)";
    e.currentTarget.style.background = "#ffffff";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.25)";
    e.currentTarget.style.boxShadow = "0 22px 46px rgba(46,49,146,0.12)";

    const icon = e.currentTarget.querySelector(".advisory-icon");
    if (icon) {
      icon.style.background = "#2e3192";
      icon.style.color = "#ffffff";
      icon.style.transform = "scale(1.05)";
    }
  };

  const cardHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.background = "#F8FAFC";
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "0 10px 28px rgba(8,17,38,0.045)";

    const icon = e.currentTarget.querySelector(".advisory-icon");
    if (icon) {
      icon.style.background = "#EEF2FF";
      icon.style.color = "#2e3192";
      icon.style.transform = "scale(1)";
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .advisory-section {
            padding: 76px 6% 86px !important;
          }

          .advisory-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 576px) {
          .advisory-section {
            padding: 62px 6% 72px !important;
          }

          .advisory-title {
            margin-bottom: 38px !important;
          }
        }
      `}</style>

      <section className="advisory-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.p
            style={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What We Can Help With
          </motion.p>

          <motion.h2
            className="advisory-title"
            style={styles.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Compliance-First{" "}
            <span style={styles.gradientText}>Advisory Services</span>
          </motion.h2>

          <div className="advisory-grid" style={styles.grid}>
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  style={styles.card}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div className="advisory-icon" style={styles.iconBox}>
                    <Icon size={23} />
                  </div>

                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAdvisoryServices;