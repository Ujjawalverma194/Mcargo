import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, FileText } from "lucide-react";

const IncotermsHero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    hero: {
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      background: "#ffffff",
    },
    heroVisual: {
      minHeight: "560px",
      position: "relative",
      overflow: "hidden",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.78), rgba(8,17,38,0.42), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1600&q=85&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 30%, rgba(18,168,232,0.16), transparent 34%)",
      zIndex: 1,
      pointerEvents: "none",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "34px 9% 120px",
      position: "relative",
      zIndex: 2,
    },
    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(8,17,38,0.42)",
      color: "rgba(255,255,255,0.86)",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "92px",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.14)",
    },
    crumbLink: {
      color: "rgba(255,255,255,0.78)",
      textDecoration: "none",
      transition: "all 0.25s ease",
      display: "inline-flex",
      alignItems: "center",
    },
    activeCrumb: {
      color: "#ffffff",
      fontWeight: 600,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      padding: "9px 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.16)",
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.55px",
      textTransform: "uppercase",
      marginBottom: "20px",
      backdropFilter: "blur(10px)",
    },
    title: {
      fontSize: "clamp(38px, 4.5vw, 56px)",
      lineHeight: "1.1",
      fontWeight: 600,
      color: "#ffffff",
      letterSpacing: "-1.2px",
      margin: "0 0 18px",
      maxWidth: "850px",
      textShadow: "0 12px 32px rgba(0,0,0,0.28)",
    },
    subtitle: {
      color: "rgba(255,255,255,0.9)",
      fontSize: "18px",
      lineHeight: "1.65",
      fontWeight: 500,
      margin: 0,
      maxWidth: "760px",
    },
    infoSection: {
      background: "#ffffff",
      padding: "54px 9% 58px",
      borderBottom: "1px solid #E7EDF5",
    },
    infoInner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    infoContent: {
      maxWidth: "850px",
    },
    infoTitle: {
      fontSize: "28px",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 16px",
      letterSpacing: "-0.4px",
    },
    infoText: {
      fontSize: "15.5px",
      lineHeight: 1.7,
      color: "#475467",
      margin: "0 0 14px",
      fontWeight: 400,
    },
  };

  const linkHoverIn = (e) => {
    e.currentTarget.style.color = "#12A8E8";
    e.currentTarget.style.transform = "translateY(-1px)";
  };

  const linkHoverOut = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.78)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .inc-hero-container {
            padding: 30px 6% 110px !important;
          }

          .inc-breadcrumb {
            margin-bottom: 70px !important;
          }

          .inc-info-section {
            padding: 48px 6% 52px !important;
          }
        }

        @media (max-width: 576px) {
          .inc-hero-visual {
            min-height: 540px !important;
          }

          .inc-hero-container {
            padding: 24px 6% 90px !important;
          }

          .inc-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 54px !important;
            flex-wrap: wrap;
          }

          .inc-title {
            font-size: 34px !important;
          }

          .inc-subtitle {
            font-size: 15px !important;
          }

          .inc-info-title {
            font-size: 24px !important;
          }
        }
      `}</style>

      <section style={styles.hero}>
        <div className="inc-hero-visual" style={styles.heroVisual}>
          <div style={styles.overlay} />

          <div className="inc-hero-container" style={styles.container}>
            <motion.div
              className="inc-breadcrumb"
              style={styles.breadcrumb}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <Home size={14} />
              <Link
                to="/"
                style={styles.crumbLink}
                onMouseEnter={linkHoverIn}
                onMouseLeave={linkHoverOut}
              >
                Home
              </Link>
              <span style={{ opacity: 0.45 }}>/</span>
              <Link
                to="/resources"
                style={styles.crumbLink}
                onMouseEnter={linkHoverIn}
                onMouseLeave={linkHoverOut}
              >
                Resources
              </Link>
              <span style={{ opacity: 0.45 }}>/</span>
              <span style={styles.activeCrumb}>Incoterms</span>
            </motion.div>

            <motion.div
              style={styles.badge}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <FileText size={15} />
              Trade Terms Guide
            </motion.div>

            <motion.h1
              className="inc-title"
              style={styles.title}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              Incoterms 2020
            </motion.h1>

            <motion.p
              className="inc-subtitle"
              style={styles.subtitle}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
            >
              FOB, CIF, DDP, DAP — international commercial terms for India
              import-export contracts. Tap any term to understand responsibilities,
              cost split, and risk transfer.
            </motion.p>
          </div>
        </div>

        <div className="inc-info-section" style={styles.infoSection}>
          <motion.div
            style={styles.infoInner}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div style={styles.infoContent}>
              <h2 className="inc-info-title" style={styles.infoTitle}>
                What are Incoterms?
              </h2>

              <p style={styles.infoText}>
                Incoterms are international trade rules published by the
                International Chamber of Commerce. They define the responsibilities
                of sellers and buyers in the delivery of goods under sales contracts.
              </p>

              <p style={styles.infoText}>
                They clearly communicate the tasks, costs, and risks associated
                with transportation and delivery of goods, helping avoid
                misunderstandings and disputes in international trade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IncotermsHero;