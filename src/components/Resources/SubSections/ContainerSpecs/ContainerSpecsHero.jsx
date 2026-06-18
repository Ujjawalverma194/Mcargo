import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Box } from "lucide-react";

const ContainerSpecsHero = () => {
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
        'linear-gradient(90deg, rgba(8,17,38,0.78), rgba(8,17,38,0.42), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80&fit=crop")',
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
      maxWidth: "900px",
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
          .cs-hero-container {
            padding: 30px 6% 110px !important;
          }

          .cs-breadcrumb {
            margin-bottom: 70px !important;
          }
        }

        @media (max-width: 576px) {
          .cs-hero {
            min-height: 540px !important;
          }

          .cs-hero-container {
            padding: 24px 6% 90px !important;
          }

          .cs-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 54px !important;
            flex-wrap: wrap;
          }

          .cs-title {
            font-size: 34px !important;
          }

          .cs-subtitle {
            font-size: 15px !important;
          }
        }
      `}</style>

      <section className="cs-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="cs-hero-container" style={styles.container}>
          <motion.div
            className="cs-breadcrumb"
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
            <span style={styles.activeCrumb}>Container Specs</span>
          </motion.div>

          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <Box size={15} />
            Shipping Reference
          </motion.div>

          <motion.h1
            className="cs-title"
            style={styles.title}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Container Specifications
          </motion.h1>

          <motion.p
            className="cs-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            Complete FCL/LCL container dimensions, weight limits, and cubic
            capacity for India import-export shipment planning.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ContainerSpecsHero;