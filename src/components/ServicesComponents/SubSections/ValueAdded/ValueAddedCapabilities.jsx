import React from "react";
import { motion } from "framer-motion";

const ValueAddedCapabilities = () => {
  const capabilities = [
    "Door-to-door delivery coordination",
    "Comprehensive cargo insurance coverage",
    "Real-time freight rate discovery",
    "Instant quote generation and booking",
    "Shipment tracking and visibility",
    "Digital document locker and management",
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "88px 9% 110px",
      borderTop: "1px solid #E7EDF5",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    title: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 12px",
      letterSpacing: "-0.3px",
    },
    subtitle: {
      fontSize: "15.5px",
      color: "#667085",
      margin: "0 0 52px",
      fontWeight: 400,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px",
    },
    card: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "28px 24px",
      minHeight: "132px",
      boxShadow: "0 10px 24px rgba(8,17,38,0.045)",
      transition: "all 0.28s ease",
    },
    number: {
      width: "38px",
      height: "38px",
      borderRadius: "13px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 600,
      marginBottom: "20px",
      transition: "all 0.28s ease",
    },
    cardText: {
      fontSize: "14.5px",
      color: "#081126",
      lineHeight: 1.45,
      fontWeight: 600,
      margin: 0,
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.28)";
    e.currentTarget.style.boxShadow = "0 22px 46px rgba(46,49,146,0.12)";
    const num = e.currentTarget.querySelector(".va-cap-number");
    if (num) {
      num.style.background = "#2e3192";
      num.style.color = "#ffffff";
    }
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "0 10px 24px rgba(8,17,38,0.045)";
    const num = e.currentTarget.querySelector(".va-cap-number");
    if (num) {
      num.style.background = "#EEF2FF";
      num.style.color = "#2e3192";
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .va-cap-section { padding: 72px 6% 86px !important; }
          .va-cap-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 576px) {
          .va-cap-section { padding: 58px 6% 72px !important; }
          .va-cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="va-cap-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What we deliver
          </motion.h2>

          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Core capabilities of our Value Added Services & Digital Tools service
          </motion.p>

          <div className="va-cap-grid" style={styles.grid}>
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                style={styles.card}
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="va-cap-number" style={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p style={styles.cardText}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ValueAddedCapabilities;