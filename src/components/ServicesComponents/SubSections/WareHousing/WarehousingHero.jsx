import React from "react";
import { motion } from "framer-motion";
import { Home, ArrowRight, ShieldCheck, Warehouse, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";

const WarehousingHero = () => {
  const stats = [
    { number: "60–70%", label: "Shelf Life Compliance" },
    { number: "−18°C", label: "Cold Storage Capacity" },
    { number: "Bonded", label: "Partner Warehouse Available" },
    { number: "CCTV", label: "Security Monitoring" },
  ];

  const chips = [
    { icon: Snowflake, text: "Ambient · Chilled · Frozen" },
    { icon: ShieldCheck, text: "CCTV-monitored facilities" },
    { icon: Warehouse, text: "Bonded storage support" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    hero: {
      minHeight: "620px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.82), rgba(8,17,38,0.45), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 30%, rgba(18,168,232,0.2), transparent 32%), linear-gradient(180deg, rgba(8,17,38,0.05), rgba(8,17,38,0.28))",
      zIndex: 1,
      pointerEvents: "none",
    },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "32px 9% 150px",
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
      marginBottom: "86px",
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
      fontWeight: 800,
    },

    content: {
      maxWidth: "790px",
    },

    eyebrow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      padding: "9px 14px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.16)",
      color: "#ffffff",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.55px",
      textTransform: "uppercase",
      marginBottom: "20px",
      backdropFilter: "blur(10px)",
    },

    title: {
      fontSize: "clamp(38px, 4.6vw, 58px)",
      lineHeight: "1.08",
      fontWeight: 800,
      color: "#ffffff",
      letterSpacing: "-1.4px",
      margin: "0 0 18px",
      textShadow: "0 12px 32px rgba(0,0,0,0.3)",
    },

    subtitle: {
      color: "rgba(255,255,255,0.9)",
      fontSize: "18px",
      lineHeight: "1.65",
      fontWeight: 500,
      margin: "0 0 30px",
      maxWidth: "720px",
    },

    actions: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      flexWrap: "wrap",
      marginBottom: "30px",
    },

    primaryBtn: {
      minHeight: "50px",
      padding: "0 22px",
      borderRadius: "14px",
      background: "#2e3192",
      color: "#ffffff",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "14px",
      fontWeight: 800,
      boxShadow: "0 16px 34px rgba(46,49,146,0.32)",
      transition: "all 0.25s ease",
    },

    secondaryBtn: {
      minHeight: "50px",
      padding: "0 22px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.12)",
      color: "#ffffff",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "14px",
      fontWeight: 800,
      border: "1px solid rgba(255,255,255,0.18)",
      backdropFilter: "blur(10px)",
      transition: "all 0.25s ease",
    },

    chips: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexWrap: "wrap",
    },

    chip: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 13px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.14)",
      color: "rgba(255,255,255,0.88)",
      fontSize: "13px",
      fontWeight: 700,
      backdropFilter: "blur(10px)",
    },

    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.5)",
      backdropFilter: "blur(16px)",
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
      padding: "23px 30px",
      color: "#ffffff",
      borderRight: "1px solid rgba(255,255,255,0.14)",
    },

    statNumber: {
      fontSize: "24px",
      fontWeight: 850,
      lineHeight: 1,
      marginBottom: "7px",
    },

    statLabel: {
      fontSize: "12.5px",
      color: "rgba(255,255,255,0.72)",
      fontWeight: 500,
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

  const buttonHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const buttonHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .wh-hero-container {
            padding: 28px 6% 158px !important;
          }

          .wh-breadcrumb {
            margin-bottom: 64px !important;
          }

          .wh-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 6% !important;
          }

          .wh-stat:nth-child(2) {
            border-right: none !important;
          }
        }

        @media (max-width: 576px) {
          .wh-hero {
            min-height: 650px !important;
          }

          .wh-hero-container {
            padding: 22px 6% 170px !important;
          }

          .wh-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 50px !important;
            max-width: 100%;
            flex-wrap: wrap;
          }

          .wh-hero-title {
            font-size: 34px !important;
            letter-spacing: -0.9px !important;
          }

          .wh-hero-subtitle {
            font-size: 15px !important;
            line-height: 1.65 !important;
          }

          .wh-hero-actions {
            align-items: stretch !important;
          }

          .wh-hero-actions a {
            width: 100%;
            justify-content: center;
          }

          .wh-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .wh-stat {
            padding: 17px 14px !important;
          }

          .wh-stat-number {
            font-size: 19px !important;
          }

          .wh-stat-label {
            font-size: 11.5px !important;
          }
        }
      `}</style>

      <section className="wh-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="wh-hero-container" style={styles.container}>
          <motion.div
            className="wh-breadcrumb"
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
              to="/services"
              style={styles.crumbLink}
              onMouseEnter={linkHoverIn}
              onMouseLeave={linkHoverOut}
            >
              Services
            </Link>

            <span style={{ opacity: 0.45 }}>/</span>

            <span style={styles.activeCrumb}>Warehousing & Cold Storage</span>
          </motion.div>

          <div style={styles.content}>
            <motion.div
              style={styles.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <Warehouse size={15} />
              Temperature-Controlled Warehousing
            </motion.div>

            <motion.h1
              className="wh-hero-title"
              style={styles.title}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.78,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Warehousing & Cold
              <br />
              Storage
            </motion.h1>

            <motion.p
              className="wh-hero-subtitle"
              style={styles.subtitle}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Temperature-controlled storage, shelf-life tracking, bonded
              warehousing support, and CCTV-monitored facilities for compliant
              cargo handling.
            </motion.p>

            <motion.div
              className="wh-hero-actions"
              style={styles.actions}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.46 }}
            >
              <Link
                to="/contact"
                style={styles.primaryBtn}
                onMouseEnter={buttonHoverIn}
                onMouseLeave={buttonHoverOut}
              >
                Request Storage Advisory
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                style={styles.secondaryBtn}
                onMouseEnter={buttonHoverIn}
                onMouseLeave={buttonHoverOut}
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              style={styles.chips}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.56 }}
            >
              {chips.map((item, index) => {
                const Icon = item.icon;

                return (
                  <span style={styles.chip} key={index}>
                    <Icon size={15} color="#12A8E8" />
                    {item.text}
                  </span>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          style={styles.statsBar}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.72,
            delay: 0.62,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="wh-stats-inner"
            style={styles.statsInner}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.7 }}
          >
            {stats.map((item, index) => (
              <motion.div
                className="wh-stat"
                variants={fadeUp}
                key={index}
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="wh-stat-number" style={styles.statNumber}>
                  {item.number}
                </div>
                <div className="wh-stat-label" style={styles.statLabel}>
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

export default WarehousingHero;