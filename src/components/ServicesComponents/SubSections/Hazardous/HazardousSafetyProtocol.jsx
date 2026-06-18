import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const HazardousSafetyProtocol = () => {
  const [active, setActive] = useState(1);

  const steps = [
    {
      icon: "🔬",
      title: "Classify",
      text: "UN number assignment, hazard class & packing group determination per applicable DG regulations.",
    },
    {
      icon: "📋",
      title: "Document",
      text: "Dangerous Goods Declaration, MSDS, shipper's certification - prepared accurately.",
    },
    {
      icon: "📦",
      title: "Package",
      text: "UN-certified packaging selection, marking, labelling, and inner packaging requirements.",
    },
    {
      icon: "🚢",
      title: "Coordinate",
      text: "Carrier approval, booking confirmation, segregation rules, and stowage planning.",
    },
    {
      icon: "✅",
      title: "Deliver",
      text: "Final delivery coordinated end-to-end with certified handlers and full documentation at every handoff point.",
    },
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
    alert: {
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      background: "#FFFBEB",
      border: "1px solid #FCD34D",
      color: "#C2410C",
      borderRadius: "18px",
      padding: "22px 24px",
      fontSize: "14.5px",
      lineHeight: 1.55,
      fontWeight: 600,
      marginBottom: "58px",
    },
    title: {
      fontSize: "26px",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 42px",
      letterSpacing: "-0.3px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "14px",
    },
    card: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "26px 22px",
      minHeight: "218px",
      boxShadow: "0 10px 24px rgba(8,17,38,0.055)",
      transition: "all 0.28s ease",
      cursor: "pointer",
    },
    activeCard: {
      background: "#2e3192",
      borderColor: "#2e3192",
      boxShadow: "0 22px 46px rgba(46,49,146,0.28)",
      transform: "translateY(-6px)",
    },
    icon: {
      fontSize: "28px",
      marginBottom: "20px",
      display: "block",
    },
    number: {
      fontSize: "13px",
      fontWeight: 600,
      color: "#C7D0DD",
      marginBottom: "10px",
    },
    activeNumber: {
      color: "rgba(255,255,255,0.82)",
    },
    cardTitle: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 12px",
    },
    activeTitle: {
      color: "#ffffff",
    },
    text: {
      fontSize: "13.5px",
      lineHeight: 1.65,
      color: "#98A2B3",
      margin: 0,
      fontWeight: 400,
    },
    activeText: {
      color: "rgba(255,255,255,0.86)",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 1150px) {
          .haz-protocol-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        @media (max-width: 992px) {
          .haz-protocol-section { padding: 72px 6% 86px !important; }
        }

        @media (max-width: 700px) {
          .haz-protocol-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 480px) {
          .haz-protocol-section { padding: 58px 6% 72px !important; }
          .haz-protocol-grid { grid-template-columns: 1fr !important; }
          .haz-alert { padding: 18px !important; font-size: 13.5px !important; }
        }
      `}</style>

      <section className="haz-protocol-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.div
            className="haz-alert"
            style={styles.alert}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
            <span>
              All hazardous cargo is coordinated through our certified partner
              network. IMDG (sea) and IATA-DGR (air) compliance is managed by
              accredited third-party specialists — we act as your single point of
              contact.
            </span>
          </motion.div>

          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Five-step safety protocol
          </motion.h2>

          <div className="haz-protocol-grid" style={styles.grid}>
            {steps.map((step, index) => {
              const isActive = active === index;

              return (
                <motion.div
                  key={step.title}
                  style={{
                    ...styles.card,
                    ...(isActive ? styles.activeCard : {}),
                  }}
                  onMouseEnter={() => setActive(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <span style={styles.icon}>{step.icon}</span>

                  <div style={{ ...styles.number, ...(isActive ? styles.activeNumber : {}) }}>
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 style={{ ...styles.cardTitle, ...(isActive ? styles.activeTitle : {}) }}>
                    {step.title}
                  </h3>

                  <p style={{ ...styles.text, ...(isActive ? styles.activeText : {}) }}>
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HazardousSafetyProtocol;