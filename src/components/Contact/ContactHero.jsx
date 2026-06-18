import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, PhoneCall } from "lucide-react";

const ContactHero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
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
        'linear-gradient(90deg, rgba(8,17,38,0.76), rgba(8,17,38,0.42), rgba(8,17,38,0.2)), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=85&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 18% 34%, rgba(18,168,232,0.14), transparent 34%)",
      zIndex: 1,
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
      background: "rgba(8,17,38,0.45)",
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
      maxWidth: "780px",
      textShadow: "0 12px 32px rgba(0,0,0,0.28)",
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

  const hoverIn = (e) => {
    e.currentTarget.style.color = "#12A8E8";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.color = "rgba(255,255,255,0.78)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .contact-hero-container {
            padding: 30px 6% 110px !important;
          }

          .contact-breadcrumb {
            margin-bottom: 70px !important;
          }
        }

        @media (max-width: 576px) {
          .contact-hero {
            min-height: 540px !important;
          }

          .contact-hero-container {
            padding: 24px 6% 90px !important;
          }

          .contact-breadcrumb {
            font-size: 11.5px !important;
            padding: 8px 11px !important;
            margin-bottom: 54px !important;
          }

          .contact-subtitle {
            font-size: 15px !important;
          }
        }
      `}</style>

      <section className="contact-hero" style={styles.hero}>
        <div style={styles.overlay} />

        <div className="contact-hero-container" style={styles.container}>
          <motion.div
            className="contact-breadcrumb"
            style={styles.breadcrumb}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Home size={14} />
            <Link
              to="/"
              style={styles.crumbLink}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              Home
            </Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.activeCrumb}>Contact</span>
          </motion.div>

          <motion.div
            style={styles.badge}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <PhoneCall size={15} />
            Contact MCargo
          </motion.div>

          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>

          <motion.p
            className="contact-subtitle"
            style={styles.subtitle}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            Book a free compliance consultation, submit a business enquiry, or
            apply for a career opportunity — we are here to help.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ContactHero;