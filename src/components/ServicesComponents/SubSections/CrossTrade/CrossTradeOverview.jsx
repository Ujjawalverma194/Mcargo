import React from "react";
import { motion } from "framer-motion";
import { Check, Globe2 } from "lucide-react";

const CrossTradeOverview = () => {
  const capabilities = [
    "Third-country trade coordination",
    "Global network of credible agents",
    "Correct documentation and compliance",
    "Competitive cross-trade freight rates",
    "Complete origin-to-destination coordination",
    "Protecting customer interests at every stage",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9%",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "0.95fr 1.05fr",
      gap: "80px",
      alignItems: "start",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 14px",
      borderRadius: "999px",
      background: "#EEF4FF",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      marginBottom: "24px",
    },
    title: {
      fontSize: "clamp(30px, 3vw, 40px)",
      lineHeight: 1.15,
      fontWeight: 800,
      letterSpacing: "-0.8px",
      color: "#081126",
      margin: "0 0 22px",
    },
    paragraph: {
      fontSize: "17px",
      lineHeight: 1.75,
      color: "#475467",
      margin: 0,
      maxWidth: "650px",
    },
    smallHeading: {
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "1px",
      color: "#98A2B3",
      textTransform: "uppercase",
      margin: "4px 0 18px",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    item: {
      minHeight: "58px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "18px",
      padding: "16px 20px",
      border: "1px solid #E7EDF5",
      borderRadius: "16px",
      background: "#ffffff",
      boxShadow: "0 10px 28px rgba(8,17,38,0.035)",
      transition: "all 0.25s ease",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    number: {
      width: "34px",
      height: "34px",
      borderRadius: "12px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 800,
      flexShrink: 0,
    },
    itemText: {
      fontSize: "15px",
      fontWeight: 700,
      color: "#081126",
      lineHeight: 1.45,
    },
    check: {
      color: "#2e3192",
      flexShrink: 0,
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 18px 42px rgba(46,49,146,0.12)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.22)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 28px rgba(8,17,38,0.035)";
    e.currentTarget.style.borderColor = "#E7EDF5";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .ct-overview-section { padding: 80px 6% !important; }
          .ct-overview-inner {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }

        @media (max-width: 576px) {
          .ct-overview-section { padding: 64px 6% !important; }
          .ct-capability-item { align-items: flex-start !important; }
        }
      `}</style>

      <section className="ct-overview-section" style={styles.section}>
        <div className="ct-overview-inner" style={styles.inner}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <div style={styles.badge}>
              <Globe2 size={15} />
              About This Service
            </div>

            <h2 style={styles.title}>Cross Trade</h2>

            <p style={styles.paragraph}>
              We facilitate third-country shipments, coordinating origin-to-destination
              logistics where neither endpoint is India. Our overseas coordination
              team manages cross-trade inquiries, connecting movements, supplier
              follow-ups, documentation checks, competitive freight options, and
              reliable delivery across multiple countries.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <h3 style={styles.smallHeading}>Key Capabilities</h3>

            <div style={styles.list}>
              {capabilities.map((item, index) => (
                <motion.div
                  className="ct-capability-item"
                  key={index}
                  variants={fadeUp}
                  style={styles.item}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                >
                  <div style={styles.left}>
                    <span style={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                    <span style={styles.itemText}>{item}</span>
                  </div>
                  <Check size={18} style={styles.check} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CrossTradeOverview;