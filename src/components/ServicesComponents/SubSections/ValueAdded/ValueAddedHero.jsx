import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, MonitorCog } from "lucide-react";

const ValueAddedHero = () => {
  const stats = [
    { number: "Real-time", label: "Rate Discovery" },
    { number: "D2D", label: "Door-To-Door Delivery" },
    { number: "Digital", label: "Document Locker" },
    { number: "SMI", label: "Freight Platform" },
  ];

  const styles = {
    hero: {
      minHeight: "620px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.74), rgba(8,17,38,0.3)), url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },
    container: {
      width: "100%",
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "34px 9% 145px",
      position: "relative",
      zIndex: 2,
    },
    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(8,17,38,0.48)",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "145px",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.14)",
      color: "rgba(255,255,255,0.86)",
    },
    link: {
      color: "rgba(255,255,255,0.78)",
      textDecoration: "none",
      transition: "all 0.25s ease",
    },
    active: {
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
      fontSize: "clamp(38px, 4.7vw, 58px)",
      lineHeight: 1.1,
      fontWeight: 600,
      color: "#ffffff",
      letterSpacing: "-1.2px",
      margin: "0 0 18px",
      maxWidth: "880px",
      textShadow: "0 12px 32px rgba(0,0,0,0.28)",
    },
    subtitle: {
      color: "#ffffff",
      fontSize: "18px",
      fontWeight: 600,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      margin: 0,
    },
    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.45)",
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
      padding: "24px 34px",
      color: "#ffffff",
      borderRight: "1px solid rgba(255,255,255,0.14)",
    },
    statNumber: {
      fontSize: "25px",
      fontWeight: 600,
      marginBottom: "7px",
      lineHeight: 1,
    },
    statLabel: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.72)",
      fontWeight: 400,
    },
  };

  const hoverIn = (e) => (e.currentTarget.style.color = "#12A8E8");
  const hoverOut = (e) =>
    (e.currentTarget.style.color = "rgba(255,255,255,0.78)");

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .va-hero-container { padding: 30px 6% 150px !important; }
          .va-breadcrumb { margin-bottom: 105px !important; }
          .va-stats-inner { grid-template-columns: repeat(2, 1fr) !important; padding: 0 6% !important; }
          .va-stat:nth-child(2) { border-right: none !important; }
        }

        @media (max-width: 576px) {
          .va-hero { min-height: 560px !important; }
          .va-hero-container { padding: 24px 6% 160px !important; }
          .va-breadcrumb { font-size: 11.5px !important; padding: 8px 11px !important; margin-bottom: 72px !important; flex-wrap: wrap; }
          .va-subtitle { font-size: 14px !important; line-height: 1.55 !important; }
          .va-stat { padding: 18px 16px !important; }
          .va-stat-number { font-size: 20px !important; }
        }
      `}</style>

      <section className="va-hero" style={styles.hero}>
        <div className="va-hero-container" style={styles.container}>
          <motion.div
            className="va-breadcrumb"
            style={styles.breadcrumb}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Home size={14} />
            <Link
              to="/"
              style={styles.link}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Home
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <Link
              to="/services"
              style={styles.link}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Services
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.active}>Value Added Services & Digital Tools</span>
          </motion.div>

          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <MonitorCog size={15} />
            Digital Logistics Enablement
          </motion.div>

          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Value Added Services &<br /> Digital Tools
          </motion.h1>

          <motion.p
            className="va-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
          >
            Door-to-door delivery, insurance, rate discovery, tracking
          </motion.p>
        </div>

        <motion.div
          style={styles.statsBar}
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <div className="va-stats-inner" style={styles.statsInner}>
            {stats.map((item, index) => (
              <motion.div
                className="va-stat"
                key={item.label}
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1 ? "none" : styles.stat.borderRight,
                }}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62 + index * 0.08 }}
              >
                <div className="va-stat-number" style={styles.statNumber}>
                  {item.number}
                </div>
                <div style={styles.statLabel}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ValueAddedHero;