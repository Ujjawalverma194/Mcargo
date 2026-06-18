import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  const styles = {
    hero: {
      minHeight: "520px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.72) 0%, rgba(8,17,38,0.48) 48%, rgba(8,17,38,0.16) 100%), url("https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1200&q=80&fit=crop0")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },
    container: {
      maxWidth: "1450px",
      width: "100%",
      margin: "0 auto",
      padding: "90px 9%",
    },
    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(15,23,42,0.55)",
      color: "rgba(255,255,255,0.85)",
      padding: "10px 17px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "28px",
      backdropFilter: "blur(8px)",
    },
    active: {
      color: "#ffffff",
      fontWeight: "800",
    },
    crumbLink: {
      color: "rgba(255,255,255,0.78)",
      textDecoration: "none",
      transition: "all 0.25s ease",
      position: "relative",
    },
    title: {
      fontSize: "58px",
      lineHeight: "1.12",
      fontWeight: "750",
      color: "#ffffff",
      maxWidth: "680px",
      letterSpacing: "-1.5px",
      margin: "0 0 22px",
    },
    desc: {
      fontSize: "19px",
      lineHeight: "1.65",
      color: "rgba(255,255,255,0.9)",
      maxWidth: "780px",
      margin: "0 0 34px",
      fontWeight: "500",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .services-hero { min-height: 470px !important; }
          .services-hero-container { padding: 70px 6% !important; }
          .services-hero-title { font-size: 40px !important; }
          .services-hero-desc { font-size: 16px !important; }
        }

        @media (max-width: 480px) {
          .services-hero-title { font-size: 34px !important; }
          .services-hero-breadcrumb {
            font-size: 12px !important;
            padding: 9px 14px !important;
          }
        }
      `}</style>

      <section className="services-hero" style={styles.hero}>
        <div className="services-hero-container" style={styles.container}>
          <motion.div
            className="services-hero-breadcrumb"
            style={styles.breadcrumb}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Home size={15} />
            <Link
              to="/"
              style={styles.crumbLink}
              onMouseEnter={(e) => (e.target.style.color = "#12A8E8")}
              onMouseLeave={(e) =>
                (e.target.style.color = "rgba(255,255,255,0.78)")
              }
            >
              Home
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.active}>Services</span>
          </motion.div>

          <motion.h1
            className="services-hero-title"
            style={styles.title}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Compliance-Led
            <br />
            Logistics Services
          </motion.h1>

          <motion.p
            className="services-hero-desc"
            style={styles.desc}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            From IEC registration to final delivery — advisory before execution,
            always.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ServicesHero;