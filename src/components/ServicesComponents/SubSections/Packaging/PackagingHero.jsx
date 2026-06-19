import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PackagingHero = () => {
  const stats = [
    { number: "ISPM-15", label: "Fumigation Certified" },
    { number: "Custom", label: "Wooden Crating" },
    { number: "Anti-static", label: "& UV Resistant Films" },
    { number: "On-site", label: "Packaging Operations" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerStats = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.55,
      },
    },
  };

  const statAnim = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const styles = {
    hero: {
      minHeight: "620px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.68), rgba(8,17,38,0.16)), url("https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },

    container: {
      maxWidth: "1450px",
      width: "100%",
      margin: "0 auto",
      padding: "76px 9% 145px",
      position: "relative",
      zIndex: 2,
    },

    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(15,23,42,0.48)",
      padding: "10px 16px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "140px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255,255,255,0.14)",
    },

    crumbLink: {
      color: "rgba(255,255,255,0.82)",
      textDecoration: "none",
      transition: "all 0.25s ease",
    },

    active: {
      color: "#ffffff",
      fontWeight: "600",
    },

    title: {
      fontSize: "52px",
      lineHeight: "1.08",
      fontWeight: "600",
      color: "#ffffff",
      letterSpacing: "-1.2px",
      margin: "0 0 18px",
      maxWidth: "650px",
    },

    subtitle: {
      color: "#ffffff",
      fontSize: "17px",
      fontWeight: "600",
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      margin: 0,
      maxWidth: "850px",
    },

    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.42)",
      backdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(255,255,255,0.18)",
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
      padding: "26px 34px",
      color: "#ffffff",
      borderRight: "1px solid rgba(255,255,255,0.14)",
    },

    statNumber: {
      fontSize: "25px",
      fontWeight: "600",
      marginBottom: "7px",
    },

    statLabel: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.72)",
      fontWeight: "500",
    },
  };

  return (
    <>
      <style>
        {`
          .pack-crumb-link:hover {
            color: #12A8E8 !important;
            transform: translateY(-1px);
          }

          @media (max-width: 992px) {
            .pack-hero-title {
              font-size: 44px !important;
            }

            .pack-hero-breadcrumb {
              margin-bottom: 110px !important;
            }

            .pack-stats-inner {
              grid-template-columns: repeat(2, 1fr) !important;
              padding: 0 6% !important;
            }

            .pack-stat:nth-child(2) {
              border-right: none !important;
            }
          }

          @media (max-width: 576px) {
            .pack-hero {
              min-height: 560px !important;
            }

            .pack-hero-container {
              padding: 64px 6% 160px !important;
            }

            .pack-hero-title {
              font-size: 34px !important;
            }

            .pack-hero-subtitle {
              font-size: 14px !important;
              line-height: 1.6 !important;
            }

            .pack-hero-breadcrumb {
              font-size: 12px !important;
              margin-bottom: 84px !important;
              padding: 9px 13px !important;
              gap: 8px !important;
            }

            .pack-stat {
              padding: 18px 16px !important;
            }

            .pack-stat-number {
              font-size: 19px !important;
            }
          }
        `}
      </style>

      <section className="pack-hero" style={styles.hero}>
        <div className="pack-hero-container" style={styles.container}>
          <motion.div
            className="pack-hero-breadcrumb"
            style={styles.breadcrumb}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Home size={15} color="#ffffff" />

            <Link className="pack-crumb-link" to="/" style={styles.crumbLink}>
              Home
            </Link>

            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>

            <Link
              className="pack-crumb-link"
              to="/services"
              style={styles.crumbLink}
            >
              Services
            </Link>

            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>

            <span style={styles.active}>Packaging & Palletization</span>
          </motion.div>

          <motion.h1
            className="pack-hero-title"
            style={styles.title}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Packaging & Palletization
          </motion.h1>

          <motion.p
            className="pack-hero-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Export crating, fumigation, ISPM-15 heat treatment
          </motion.p>
        </div>

        <motion.div
          style={styles.statsBar}
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="pack-stats-inner"
            style={styles.statsInner}
            variants={staggerStats}
            initial="hidden"
            animate="visible"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="pack-stat"
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
                variants={statAnim}
              >
                <div className="pack-stat-number" style={styles.statNumber}>
                  {item.number}
                </div>
                <div style={styles.statLabel}>{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default PackagingHero;