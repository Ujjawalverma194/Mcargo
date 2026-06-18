import React from "react";
import { motion } from "framer-motion";

const ConsolidationComparison = () => {
  const withoutRows = [
    { label: "FCL #1", width: "58%", percent: "30%" },
    { label: "FCL #2", width: "68%", percent: "40%" },
    { label: "FCL #3", width: "78%", percent: "50%" },
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
    header: {
      marginBottom: "54px",
    },
    title: {
      fontSize: "28px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 12px",
      letterSpacing: "-0.4px",
    },
    subtitle: {
      fontSize: "15.5px",
      color: "#667085",
      margin: 0,
      fontWeight: 400,
    },
    comparison: {
      maxWidth: "660px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
    },
    card: {
      background: "#ffffff",
      borderRadius: "18px",
      overflow: "hidden",
      boxShadow: "0 14px 34px rgba(8,17,38,0.055)",
      transition: "all 0.3s ease",
    },
    redCard: {
      border: "1px solid rgba(255,90,90,0.32)",
      background: "#FFF6F6",
    },
    blueCard: {
      border: "1px solid rgba(46,49,146,0.25)",
      background: "#ffffff",
    },
    cardHead: {
      padding: "16px 20px",
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      borderBottom: "1px solid rgba(231,237,245,0.9)",
    },
    redHead: {
      color: "#FF5A5F",
      background: "#FFF1F1",
    },
    blueHead: {
      color: "#2e3192",
      background: "#EEF2FF",
    },
    body: {
      padding: "22px 20px 24px",
    },
    redRow: {
      height: "42px",
      borderRadius: "10px",
      border: "1px solid rgba(255,90,90,0.25)",
      background: "#FFF1F1",
      display: "grid",
      gridTemplateColumns: "50px 1fr 42px",
      alignItems: "center",
      gap: "10px",
      padding: "0 12px",
      marginBottom: "12px",
      color: "#FF5A5F",
      fontSize: "12px",
      fontWeight: 600,
    },
    barTrack: {
      height: "6px",
      borderRadius: "999px",
      background: "rgba(255,90,90,0.12)",
      overflow: "hidden",
    },
    bar: {
      height: "100%",
      borderRadius: "999px",
      background: "#FF8C92",
    },
    redNote: {
      fontSize: "12.5px",
      lineHeight: 1.5,
      color: "#FF5A5F",
      margin: "16px 0 0",
      fontWeight: 600,
    },
    lclBar: {
      height: "42px",
      borderRadius: "10px",
      border: "1px solid rgba(46,49,146,0.22)",
      background: "#F4F7FF",
      display: "grid",
      gridTemplateColumns: "46px 1fr 36px",
      alignItems: "center",
      gap: "10px",
      padding: "0 12px",
      marginBottom: "14px",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 600,
    },
    blueTrack: {
      height: "6px",
      borderRadius: "999px",
      background: "#DCE5FF",
      overflow: "hidden",
    },
    blueBar: {
      height: "100%",
      width: "100%",
      borderRadius: "999px",
      background: "#2e3192",
    },
    smallText: {
      fontSize: "12px",
      color: "#98A2B3",
      lineHeight: 1.5,
      margin: "0 0 14px",
      fontWeight: 400,
    },
    resultBox: {
      background: "#EEF2FF",
      borderRadius: "14px",
      minHeight: "78px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#2e3192",
    },
    resultTitle: {
      fontSize: "26px",
      lineHeight: 1,
      fontWeight: 600,
      marginBottom: "6px",
    },
    resultText: {
      fontSize: "12px",
      color: "#667085",
      fontWeight: 400,
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 22px 46px rgba(46,49,146,0.12)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 14px 34px rgba(8,17,38,0.055)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .con-compare-section { padding: 72px 6% 86px !important; }
        }

        @media (max-width: 700px) {
          .con-comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 576px) {
          .con-compare-section { padding: 58px 6% 72px !important; }
        }
      `}</style>

      <section className="con-compare-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.div
            style={styles.header}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={styles.title}>Pay only for what you ship</h2>
            <p style={styles.subtitle}>
              LCL consolidation makes small shipments commercially viable
            </p>
          </motion.div>

          <div className="con-comparison-grid" style={styles.comparison}>
            <motion.div
              style={{ ...styles.card, ...styles.redCard }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div style={{ ...styles.cardHead, ...styles.redHead }}>
                Without Consolidation
              </div>

              <div style={styles.body}>
                {withoutRows.map((row) => (
                  <div style={styles.redRow} key={row.label}>
                    <span>{row.label}</span>
                    <div style={styles.barTrack}>
                      <div style={{ ...styles.bar, width: row.width }} />
                    </div>
                    <span>{row.percent}</span>
                  </div>
                ))}

                <p style={styles.redNote}>
                  3× full container costs. Mostly empty space.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ ...styles.card, ...styles.blueCard }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div style={{ ...styles.cardHead, ...styles.blueHead }}>
                With IL Consolidation
              </div>

              <div style={styles.body}>
                <div style={styles.lclBar}>
                  <span>LCL</span>
                  <div style={styles.blueTrack}>
                    <div style={styles.blueBar} />
                  </div>
                  <span>Full</span>
                </div>

                <p style={styles.smallText}>
                  Cargo from 3 shippers combined into one container.
                </p>

                <div style={styles.resultBox}>
                  <div style={styles.resultTitle}>LCL</div>
                  <div style={styles.resultText}>cost-optimised rates</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsolidationComparison;