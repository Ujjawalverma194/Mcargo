import React from "react";
import { motion } from "framer-motion";

const WarehousingDeliver = () => {
  const deliverables = [
    "Temperature-controlled cold storage facilities",
    "Shelf life tracking for perishable goods",
    "Inventory management systems",
    "Bonded warehouse facilities",
    "SEZ Solutions",
    "Palletisation & Fumigation",
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
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9% 105px",
    },
    header: {
      maxWidth: "1450px",
      margin: "0 auto 42px",
    },
    title: {
      fontSize: "26px",
      lineHeight: 1.25,
      fontWeight: 800,
      color: "#081126",
      letterSpacing: "-0.4px",
      margin: "0 0 10px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#667085",
      lineHeight: 1.6,
      margin: 0,
    },
    grid: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px",
    },
    card: {
      minHeight: "132px",
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "26px",
      boxShadow: "0 12px 30px rgba(8,17,38,0.045)",
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
      fontWeight: 800,
    },
    cardTitle: {
      fontSize: "15px",
      lineHeight: 1.5,
      fontWeight: 800,
      color: "#081126",
      margin: "22px 0 0",
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 18px 42px rgba(46,49,146,0.12)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.22)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(8,17,38,0.045)";
    e.currentTarget.style.borderColor = "#E7EDF5";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .wh-deliver-section {
            padding: 80px 6% 90px !important;
          }

          .wh-deliver-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .wh-deliver-section {
            padding: 64px 6% 74px !important;
          }

          .wh-deliver-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section className="wh-deliver-section" style={styles.section}>
        <motion.div
          style={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 style={styles.title}>What we deliver</h2>
          <p style={styles.subtitle}>
            Core capabilities of our Warehousing & Cold Storage service
          </p>
        </motion.div>

        <motion.div
          className="wh-deliver-grid"
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              style={styles.card}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <span style={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={styles.cardTitle}>{item}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default WarehousingDeliver;