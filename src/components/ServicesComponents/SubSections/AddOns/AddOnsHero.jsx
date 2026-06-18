import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowRight, PackagePlus, ShieldCheck, Layers } from "lucide-react";

const AddOnsHero = () => {
  const stats = [
    { number: "7+", label: "Value-Added Services" },
    { number: "190+", label: "Global Reach" },
    { number: "On-Demand", label: "Flexible Delivery" },
    { number: "Custom", label: "Shipment-Based Support" },
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
        'linear-gradient(90deg, rgba(8,17,38,0.82), rgba(8,17,38,0.44), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 30%, rgba(18,168,232,0.2), transparent 34%)",
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
      maxWidth: "830px",
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
      maxWidth: "760px",
    },
    actions: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      flexWrap: "wrap",
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

  const btnHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
  };

  const btnHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .ao-hero-container { padding: 28px 6% 158px !important; }
          .ao-breadcrumb { margin-bottom: 64px !important; }
          .ao-stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 6% !important;
          }
          .ao-stat:nth-child(2) { border-right: none !important; }
        }

        @media (max-width: 576px) {
          .ao-hero { min-height: 650px !important; }
          .ao-hero-container { padding: 22px 6% 170px !important; }
          .ao-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 50px !important;
            flex-wrap: wrap;
          }
          .ao-title { font-size: 34px !important; }
          .ao-subtitle { font-size: 15px !important; }
          .ao-actions a { width: 100%; justify-content: center; }
          .ao-stat { padding: 17px 14px !important; }
          .ao-stat-number { font-size: 19px !important; }
        }
      `}</style>

      <section className="ao-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="ao-hero-container" style={styles.container}>
          <motion.div
            className="ao-breadcrumb"
            style={styles.breadcrumb}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Home size={14} />
            <Link to="/" style={styles.crumbLink} onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut}>
              Home
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <Link to="/services" style={styles.crumbLink} onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut}>
              Services
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.activeCrumb}>Add-Ons</span>
          </motion.div>

          <div style={styles.content}>
            <motion.div style={styles.eyebrow} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <PackagePlus size={15} />
              Flexible Logistics Add-Ons
            </motion.div>

            <motion.h1
              className="ao-title"
              style={styles.title}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.2 }}
            >
              Add-On Services
            </motion.h1>

            <motion.p
              className="ao-subtitle"
              style={styles.subtitle}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.34 }}
            >
              Complete your logistics solution with value-added support for delivery,
              insurance, packaging, palletization, compliance, documentation, and cargo visibility.
            </motion.p>

            <motion.div
              className="ao-actions"
              style={styles.actions}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.46 }}
            >
              <Link to="/contact" style={styles.primaryBtn} onMouseEnter={btnHoverIn} onMouseLeave={btnHoverOut}>
                Request Add-On Support
                <ArrowRight size={16} />
              </Link>

              <Link to="/services" style={styles.secondaryBtn} onMouseEnter={btnHoverIn} onMouseLeave={btnHoverOut}>
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div style={styles.statsBar} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <div className="ao-stats-inner" style={styles.statsInner}>
            {stats.map((item, index) => (
              <motion.div
                className="ao-stat"
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{
                  ...styles.stat,
                  borderRight: index === stats.length - 1 ? "none" : styles.stat.borderRight,
                }}
              >
                <div className="ao-stat-number" style={styles.statNumber}>{item.number}</div>
                <div style={styles.statLabel}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AddOnsHero;