import React from "react";
import { motion } from "framer-motion";
import { Boxes, Check } from "lucide-react";

const ConsolidationOverview = () => {
  const capabilities = [
    "LCL consolidation with competitive group rates",
    "Buyer's consolidation programs",
    "Supplier pickup coordination",
    "Deconsolidation at destination ports",
    "Flexible scheduling and routing",
    "Cargo insurance and tracking",
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "88px 9% 102px",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "72px",
      alignItems: "start",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "#EEF2FF",
      color: "#2e3192",
      padding: "9px 14px",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.55px",
      textTransform: "uppercase",
      marginBottom: "26px",
    },
    title: {
      fontSize: "clamp(30px, 3.2vw, 40px)",
      lineHeight: 1.18,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 22px",
      letterSpacing: "-0.7px",
    },
    text: {
      fontSize: "17px",
      lineHeight: 1.72,
      color: "#475467",
      margin: 0,
      maxWidth: "610px",
      fontWeight: 400,
    },
    eyebrow: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "#98A2B3",
      margin: "0 0 20px",
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
      padding: "15px 18px",
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "15px",
      boxShadow: "0 8px 22px rgba(8,17,38,0.035)",
      transition: "all 0.25s ease",
    },
    number: {
      width: "32px",
      height: "32px",
      borderRadius: "10px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: 600,
      flexShrink: 0,
    },
    itemText: {
      flex: 1,
      color: "#081126",
      fontSize: "14.5px",
      fontWeight: 600,
      lineHeight: 1.45,
    },
    check: {
      color: "#2e3192",
      flexShrink: 0,
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.28)";
    e.currentTarget.style.boxShadow = "0 16px 34px rgba(46,49,146,0.09)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "0 8px 22px rgba(8,17,38,0.035)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .con-overview-section { padding: 72px 6% 84px !important; }
          .con-overview-inner {
            grid-template-columns: 1fr !important;
            gap: 46px !important;
          }
        }

        @media (max-width: 576px) {
          .con-overview-section { padding: 58px 6% 70px !important; }
          .con-overview-text { font-size: 15.5px !important; }
          .con-capability-item { align-items: flex-start !important; }
        }
      `}</style>

      <section className="con-overview-section" style={styles.section}>
        <div className="con-overview-inner" style={styles.inner}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div style={styles.badge}>
              <Boxes size={15} />
              About This Service
            </div>

            <h2 style={styles.title}>Cargo Consolidation</h2>

            <p className="con-overview-text" style={styles.text}>
              Maximize shipping efficiency with cargo consolidation services.
              We combine multiple smaller shipments into full container loads,
              offering significant cost savings while maintaining reliable transit
              times. Ideal for buyers consolidating purchases from multiple
              suppliers, or exporters combining smaller orders. Includes flexible
              pickup schedules, deconsolidation at destination, and cargo
              insurance options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <p style={styles.eyebrow}>Key Capabilities</p>

            <div style={styles.list}>
              {capabilities.map((item, index) => (
                <motion.div
                  className="con-capability-item"
                  key={item}
                  style={styles.item}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
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

export default ConsolidationOverview;