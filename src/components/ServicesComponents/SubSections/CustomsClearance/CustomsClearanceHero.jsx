import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const CustomsClearanceHero = () => {
  const stats = [
    { number: "IEC", label: "Registration & ICEGATE" },
    { number: "FSSAI", label: "Food & Agri Clearance" },
    { number: "SVB", label: "Related-Party Imports" },
    { number: "RoDTEP", label: "Duty Drawback Claims" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const statAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const styles = {
    hero: {
      minHeight: "560px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.66), rgba(8,17,38,0.28)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 22% 35%, rgba(18,168,232,0.12), transparent 32%)",
      zIndex: 1,
      pointerEvents: "none",
    },

    container: {
      width: "100%",
      maxWidth: "1450px",
      // margin: "0 auto",
      padding: "34px 9% 125px",
      position: "relative",
      zIndex: 2,
      marginBottom: "105px",
    },

    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(15,23,42,0.42)",
      color: "rgba(255,255,255,0.85)",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "120px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.12)",
    },

    crumbLink: {
      color: "rgba(255,255,255,0.78)",
      textDecoration: "none",
      transition: "all 0.25s ease",
      position: "relative",
    },

    activeCrumb: {
      color: "#ffffff",
      fontWeight: "800",
    },

    title: {
      fontSize: "clamp(34px, 4vw, 48px)",
      lineHeight: "1.12",
      fontWeight: "800",
      color: "#ffffff",
      letterSpacing: "-1.1px",
      margin: "0 0 16px",
      maxWidth: "720px",
      textShadow: "0 10px 28px rgba(0,0,0,0.22)",
    },

    subtitle: {
      color: "#ffffff",
      fontSize: "15.5px",
      fontWeight: "800",
      letterSpacing: "0.45px",
      textTransform: "uppercase",
      margin: 0,
      maxWidth: "880px",
      lineHeight: "1.5",
    },

    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.42)",
      backdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(255,255,255,0.16)",
      zIndex: 3,
    },

    statsInner: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      padding: "0 9%",
    },

    stat: {
      padding: "22px 30px",
      color: "#ffffff",
      borderRight: "1px solid rgba(255,255,255,0.14)",
    },

    statNumber: {
      fontSize: "23px",
      fontWeight: "850",
      lineHeight: "1",
      marginBottom: "6px",
    },

    statLabel: {
      fontSize: "12.5px",
      color: "rgba(255,255,255,0.72)",
      fontWeight: "500",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .cc-hero-container {
           padding: 32px 6% 135px !important;
          }

          .cc-hero-breadcrumb {
             margin-bottom: 78px !important;
          }

          .cc-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 6% !important;
          }

          .cc-stat:nth-child(2) {
            border-right: none !important;
          }
        }

        @media (max-width: 576px) {
          .cc-hero {
            min-height: 540px !important;
          }

          .cc-hero-container {
 padding: 24px 6% 155px !important;
          }

          .cc-hero-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 12px !important;
            gap: 6px !important;
           margin-bottom: 62px !important;
            max-width: 100%;
            flex-wrap: wrap;
          }

          .cc-hero-title {
            font-size: 32px !important;
            letter-spacing: -0.8px !important;
          }

          .cc-hero-subtitle {
            font-size: 13.5px !important;
            line-height: 1.6 !important;
          }

          .cc-stat {
            padding: 17px 14px !important;
          }

          .cc-stat-number {
            font-size: 19px !important;
          }

          .cc-stat-label {
            font-size: 11.5px !important;
          }
        }
      `}</style>

      <section className="cc-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="cc-hero-container" style={styles.container}>
          <motion.div
            className="cc-hero-breadcrumb"
            style={styles.breadcrumb}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Home size={14} />
            <Link
              to="/"
              style={styles.crumbLink}
              onMouseEnter={(e) => {
                e.target.style.color = "#12A8E8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "rgba(255,255,255,0.78)";
              }}
            >
              Home
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <Link
              to="/services"
              style={styles.crumbLink}
              onMouseEnter={(e) => {
                e.target.style.color = "#12A8E8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "rgba(255,255,255,0.78)";
              }}
            >
              Services
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.activeCrumb}>
              Customs Clearance & Trade Advisory
            </span>
          </motion.div>

          <motion.h1
            className="cc-hero-title"
            style={styles.title}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Customs Clearance &<br />
            Trade Advisory
          </motion.h1>

          <motion.p
            className="cc-hero-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            IEC setup, FSSAI licensing, SVB handling, HS classification
          </motion.p>
        </div>

        <motion.div
          style={styles.statsBar}
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="cc-stats-inner"
            style={styles.statsInner}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12, delayChildren: 0.55 }}
          >
            {stats.map((item, index) => (
              <motion.div
                className="cc-stat"
                variants={statAnim}
                key={index}
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="cc-stat-number" style={styles.statNumber}>
                  {item.number}
                </div>
                <div className="cc-stat-label" style={styles.statLabel}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default CustomsClearanceHero;
