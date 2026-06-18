import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight, BookOpen } from "lucide-react";

const ResourcesHero = () => {
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
      minHeight: "560px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.76), rgba(8,17,38,0.42), rgba(8,17,38,0.2)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 30%, rgba(18,168,232,0.18), transparent 34%)",
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
      margin: "0 0 30px",
      maxWidth: "720px",
    },
    button: {
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
      fontWeight: 600,
      boxShadow: "0 16px 34px rgba(46,49,146,0.32)",
      transition: "all 0.25s ease",
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
          .resources-hero-container {
            padding: 30px 6% 110px !important;
          }

          .resources-breadcrumb {
            margin-bottom: 70px !important;
          }
        }

        @media (max-width: 576px) {
          .resources-hero {
            min-height: 560px !important;
          }

          .resources-hero-container {
            padding: 24px 6% 90px !important;
          }

          .resources-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 54px !important;
            flex-wrap: wrap;
          }

          .resources-title {
            font-size: 34px !important;
          }

          .resources-subtitle {
            font-size: 15px !important;
          }
        }
      `}</style>

      <section className="resources-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="resources-hero-container" style={styles.container}>
          <motion.div
            className="resources-breadcrumb"
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
            <span style={styles.activeCrumb}>Resources</span>
          </motion.div>

          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <BookOpen size={15} />
            India Trade Resources
          </motion.div>

          <motion.h1
            className="resources-title"
            style={styles.title}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Trade Tools & Resources
          </motion.h1>

          <motion.p
            className="resources-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            Practical calculators, converters, and reference guides for India
            import-export planning, documentation, and compliant international trade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
          >
            <Link
              to="/resources"
              style={styles.button}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Resources
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResourcesHero;