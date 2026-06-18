import React from "react";
import { motion } from "framer-motion";

const TransportProcess = () => {
  const steps = [
    { icon: "🏭", label: "Supplier" },
    { icon: "🚚", label: "In Transit" },
    { icon: "⚓", label: "Origin Port" },
    { icon: "🚢", label: "Ocean / Air", tag: "Carrier Leg" },
    { icon: "🏗️", label: "Dest. Port" },
    { icon: "🚛", label: "In Transit" },
    { icon: "📦", label: "Buyer" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      padding: "92px 9% 100px",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      lineHeight: 1.2,
      fontWeight: 800,
      color: "#081126",
      letterSpacing: "-0.5px",
      margin: "0 0 10px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#667085",
      margin: "0 0 70px",
      lineHeight: 1.6,
    },
    flowWrap: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      alignItems: "start",
      gap: "22px",
    },
    line: {
      position: "absolute",
      top: "33px",
      left: "7%",
      right: "7%",
      height: "3px",
      background: "linear-gradient(90deg, rgba(46,49,146,0.2), rgba(18,168,232,0.85), rgba(46,49,146,0.2))",
      zIndex: 1,
    },
    step: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "14px",
    },
    iconBox: {
      width: "68px",
      height: "68px",
      borderRadius: "18px",
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      boxShadow: "0 12px 30px rgba(8,17,38,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "26px",
      transition: "all 0.25s ease",
      position: "relative",
    },
    highlightedIconBox: {
      borderColor: "#FDB022",
      boxShadow: "0 14px 34px rgba(253,176,34,0.22)",
      background: "#FFFAEB",
    },
    tag: {
      position: "absolute",
      top: "-32px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#FEF0C7",
      color: "#B54708",
      padding: "5px 10px",
      borderRadius: "999px",
      fontSize: "11px",
      fontWeight: 800,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      border: "1px solid #FEDF89",
    },
    label: {
      fontSize: "13px",
      fontWeight: 700,
      color: "#081126",
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 18px 42px rgba(46,49,146,0.14)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.24)";
  };

  const hoverOut = (e, isHighlighted) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = isHighlighted
      ? "0 14px 34px rgba(253,176,34,0.22)"
      : "0 12px 30px rgba(8,17,38,0.08)";
    e.currentTarget.style.borderColor = isHighlighted ? "#FDB022" : "#E7EDF5";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .mt-flow-wrap {
            grid-template-columns: repeat(4, 1fr) !important;
            row-gap: 46px !important;
          }

          .mt-flow-line {
            display: none !important;
          }
        }

        @media (max-width: 576px) {
          .mt-flow-section {
            padding: 70px 6% 80px !important;
          }

          .mt-flow-wrap {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <section className="mt-flow-section" style={styles.section}>
        <motion.div style={styles.inner} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <h2 style={styles.title}>First to Last Mile - Fully Owned</h2>
          <p style={styles.subtitle}>We handle the critical stages most forwarders ignore</p>

          <div className="mt-flow-wrap" style={styles.flowWrap}>
            <div className="mt-flow-line" style={styles.line} />

            {steps.map((step, index) => {
              const isHighlighted = Boolean(step.tag);

              return (
                <motion.div key={index} style={styles.step} variants={fadeUp}>
                  <div
                    style={{
                      ...styles.iconBox,
                      ...(isHighlighted ? styles.highlightedIconBox : {}),
                    }}
                    onMouseEnter={hoverIn}
                    onMouseLeave={(e) => hoverOut(e, isHighlighted)}
                  >
                    {step.tag && <span style={styles.tag}>{step.tag}</span>}
                    {step.icon}
                  </div>
                  <span style={styles.label}>{step.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TransportProcess;