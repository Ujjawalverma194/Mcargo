import React from "react";
import { motion } from "framer-motion";
import { Box, FileText, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesTools = () => {
  const tools = [
    {
      title: "Container Specifications",
      description:
        "FCL/LCL container dimensions, weight limits, and cubic capacity for import-export planning.",
      icon: Box,
      path: "/resources/container-specs",
      gradient: "linear-gradient(135deg, #2e3192, #12A8E8)",
    },
    {
      title: "Incoterms",
      description:
        "FOB, CIF, DDP, DAP and other international commercial terms explained simply.",
      icon: FileText,
      path: "/resources/incoterms",
      gradient: "linear-gradient(135deg, #0E9384, #12A8E8)",
    },
    {
      title: "Useful Links",
      description:
        "Shipping line trackers, air cargo portals, customs websites, and trade portals in one place.",
      icon: LinkIcon,
      path: "/resources/useful-links",
      gradient: "linear-gradient(135deg, #12A8E8, #2e3192)",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
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
      padding: "92px 9% 110px",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    eyebrow: {
      fontSize: "13px",
      fontWeight: 600,
      color: "#2e3192",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "18px",
    },
    title: {
      fontSize: "clamp(34px, 4vw, 52px)",
      lineHeight: "1.12",
      fontWeight: 600,
      color: "#081126",
      letterSpacing: "-1px",
      margin: "0 0 18px",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2e3192, #12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      fontSize: "17px",
      lineHeight: "1.7",
      color: "#475467",
      margin: "0 0 58px",
      maxWidth: "760px",
      fontWeight: 400,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
    },
    card: {
      minHeight: "270px",
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "22px",
      padding: "34px",
      boxShadow: "0 12px 30px rgba(8,17,38,0.045)",
      transition: "all 0.28s ease",
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "inherit",
    },
    iconBox: {
      width: "58px",
      height: "58px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      marginBottom: "28px",
      boxShadow: "0 14px 26px rgba(46,49,146,0.18)",
    },
    cardTitle: {
      fontSize: "22px",
      lineHeight: "1.3",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 14px",
    },
    cardText: {
      fontSize: "15px",
      lineHeight: "1.65",
      color: "#475467",
      margin: 0,
      fontWeight: 400,
    },
    bottom: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "28px",
    },
    linkText: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#2e3192",
    },
    arrow: {
      color: "#2e3192",
      transition: "transform 0.25s ease",
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-6px)";
    e.currentTarget.style.boxShadow = "0 20px 48px rgba(46,49,146,0.12)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.22)";

    const arrow = e.currentTarget.querySelector(".resource-arrow");
    if (arrow) arrow.style.transform = "translateX(4px)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(8,17,38,0.045)";
    e.currentTarget.style.borderColor = "#E7EDF5";

    const arrow = e.currentTarget.querySelector(".resource-arrow");
    if (arrow) arrow.style.transform = "translateX(0)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .resources-tools-section {
            padding: 78px 6% 90px !important;
          }

          .resources-tools-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .resources-tools-section {
            padding: 64px 6% 74px !important;
          }

          .resources-tools-grid {
            grid-template-columns: 1fr !important;
          }

          .resources-tools-title {
            font-size: 32px !important;
          }

          .resources-tool-card {
            min-height: auto !important;
            padding: 28px !important;
          }
        }
      `}</style>

      <section className="resources-tools-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div style={styles.eyebrow}>India Trade Resources</div>

            <h2 className="resources-tools-title" style={styles.title}>
              Tools for <span style={styles.gradientText}>Smarter Shipping</span>
            </h2>

            <p style={styles.subtitle}>
              Everything you need to plan, execute, and track India
              import-export shipments.
            </p>
          </motion.div>

          <motion.div
            className="resources-tools-grid"
            style={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div key={tool.title} variants={fadeUp}>
                  <Link
                    to={tool.path}
                    className="resources-tool-card"
                    style={styles.card}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                  >
                    <div>
                      <div
                        style={{
                          ...styles.iconBox,
                          background: tool.gradient,
                        }}
                      >
                        <Icon size={25} />
                      </div>

                      <h3 style={styles.cardTitle}>{tool.title}</h3>
                      <p style={styles.cardText}>{tool.description}</p>
                    </div>

                    <div style={styles.bottom}>
                      <span style={styles.linkText}>Open resource</span>
                      <ArrowRight
                        size={18}
                        className="resource-arrow"
                        style={styles.arrow}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResourcesTools;