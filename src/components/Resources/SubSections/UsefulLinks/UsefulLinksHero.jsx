import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Link as LinkIcon } from "lucide-react";

const UsefulLinksHero = () => {
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
        'linear-gradient(90deg, rgba(8,17,38,0.72), rgba(8,17,38,0.38), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1200&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 30%, rgba(18,168,232,0.14), transparent 34%)",
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
      lineHeight: 1.1,
      fontWeight: 600,
      color: "#ffffff",
      letterSpacing: "-1.2px",
      margin: "0 0 18px",
      maxWidth: "820px",
    },
    subtitle: {
      color: "rgba(255,255,255,0.92)",
      fontSize: "18px",
      lineHeight: 1.6,
      fontWeight: 500,
      margin: 0,
      maxWidth: "760px",
    },
  };

  const linkHoverIn = (e) => {
    e.currentTarget.style.color = "#12A8E8";
  };

  const linkHoverOut = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.78)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .ul-hero-container { padding: 30px 6% 110px !important; }
          .ul-breadcrumb { margin-bottom: 70px !important; }
        }

        @media (max-width: 576px) {
          .ul-hero { min-height: 540px !important; }
          .ul-hero-container { padding: 24px 6% 90px !important; }
          .ul-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 54px !important;
            flex-wrap: wrap;
          }
          .ul-title { font-size: 34px !important; }
          .ul-subtitle { font-size: 15px !important; }
        }
      `}</style>

      <section className="ul-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="ul-hero-container" style={styles.container}>
          <motion.div
            className="ul-breadcrumb"
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
            <Link to="/resources" style={styles.crumbLink} onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut}>
              Resources
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.activeCrumb}>Useful Links</span>
          </motion.div>

          <motion.div style={styles.badge} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <LinkIcon size={15} />
            Trade Resource Directory
          </motion.div>

          <motion.h1 className="ul-title" style={styles.title} initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }}>
            Useful Links
          </motion.h1>

          <motion.p className="ul-subtitle" style={styles.subtitle} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }}>
            Quick access to shipping line trackers, air cargo portals, and Indian customs commissionerate websites — all in one place.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default UsefulLinksHero;