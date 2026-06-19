import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import logo from "../../assets/logo.png";
import brochurePdf from "../../assets/brochure.pdf";

const Footer = () => {
  const serviceLinks = [
    { name: "Freight Forwarding", path: "/services/freight-forwarding" },
    { name: "Customs Clearance", path: "/services/customs-clearance" },
    { name: "Warehousing & Cold Storage", path: "/services/warehousing" },
    { name: "Multimodal Transportation", path: "/services/Transport" },
    { name: "Project Cargo", path: "/services/project-cargo" },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Brochure", pdf: brochurePdf },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const resourceLinks = [
    { name: "Resources", path: "/resources" },
    { name: "Container Specs", path: "/resources/container-specs" },
    { name: "Incoterms", path: "/resources/incoterms" },
    { name: "Useful Links", path: "/resources/useful-links" },
    { name: "Case Studies", path: "/#case-studies" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const styles = {
    footer: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #f3f7ff 100%)",
      fontFamily: "Inter, sans-serif",
      padding: "90px 9% 30px",
      borderTop: "1px solid #e8edf5",
      position: "relative",
      overflow: "hidden",
    },
    bgGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(46,49,146,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(46,49,146,0.035) 1px, transparent 1px)",
      backgroundSize: "78px 78px",
      pointerEvents: "none",
    },
    topStrip: {
      maxWidth: "1450px",
      margin: "0 auto 58px",
      background:
        "linear-gradient(135deg, #2e3192 0%, #2e3192 55%, #12A8E8 100%)",
      borderRadius: "28px",
      padding: "28px 34px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 20px 46px rgba(46,49,146,0.22)",
      position: "relative",
      zIndex: 2,
    },
    stripLeft: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
    },
    stripIcon: {
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    stripTitle: {
      fontSize: "22px",
      fontWeight: 600,
      marginBottom: "5px",
    },
    stripText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.82)",
    },
    stripBtn: {
      background: "#ffffff",
      color: "#2e3192",
      border: "none",
      borderRadius: "14px",
      padding: "14px 22px",
      fontSize: "14px",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: "9px",
      cursor: "pointer",
      transition: "all 0.25s ease",
      whiteSpace: "nowrap",
      textDecoration: "none",
    },
    main: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.45fr 0.85fr 0.85fr 1fr 1.35fr",
      gap: "46px",
      position: "relative",
      zIndex: 2,
    },
    logo: {
      width: "190px",
      height: "62px",
      objectFit: "contain",
      marginBottom: "22px",
    },
    aboutText: {
      fontSize: "15px",
      lineHeight: "1.8",
      color: "#667085",
      maxWidth: "330px",
      marginBottom: "24px",
    },
    socialRow: {
      display: "flex",
      gap: "12px",
    },
    social: {
      width: "42px",
      height: "42px",
      borderRadius: "13px",
      background: "#ffffff",
      border: "1px solid #e2e8f4",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 8px 18px rgba(15,23,42,0.045)",
    },
    colTitle: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#101828",
      marginBottom: "22px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    link: {
      color: "#667085",
      fontSize: "15px",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.22s ease",
      display: "inline-block",
      fontWeight: 400,
    },
    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "13px",
      color: "#667085",
      fontSize: "14.5px",
      lineHeight: "1.6",
      marginBottom: "16px",
    },
    contactIcon: {
      color: "#2e3192",
      marginTop: "2px",
      flexShrink: 0,
    },
    mapBox: {
      height: "165px",
      borderRadius: "22px",
      overflow: "hidden",
      border: "1px solid #e4ebf7",
      background:
        "linear-gradient(135deg, #eef4ff 0%, #ffffff 50%, #eaf8ff 100%)",
      position: "relative",
      boxShadow: "0 12px 26px rgba(15,23,42,0.055)",
    },
    mapGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(46,49,146,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(46,49,146,0.12) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      opacity: 0.45,
    },
    mapPin: {
      position: "absolute",
      left: "50%",
      top: "42%",
      transform: "translate(-50%, -50%)",
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "#2e3192",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 24px rgba(46,49,146,0.28)",
    },
    mapLabel: {
      position: "absolute",
      left: "22px",
      bottom: "18px",
      background: "#ffffff",
      color: "#101828",
      fontSize: "13px",
      fontWeight: 600,
      padding: "8px 13px",
      borderRadius: "999px",
      boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
    },
    divider: {
      maxWidth: "1450px",
      height: "1px",
      background: "#e4ebf4",
      margin: "58px auto 26px",
      position: "relative",
      zIndex: 2,
    },
    bottom: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#667085",
      fontSize: "14px",
      position: "relative",
      zIndex: 2,
    },
    bottomLinks: {
      display: "flex",
      gap: "22px",
    },
  };

  const hoverLink = (e, enter) => {
    e.currentTarget.style.color = enter ? "#2e3192" : "#667085";
    e.currentTarget.style.transform = enter
      ? "translateX(4px)"
      : "translateX(0)";
  };

  const renderFooterLink = (item) => {
    if (item.pdf) {
      return (
        <a
          href={item.pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          className="footer-link-responsive"
          onMouseEnter={(e) => hoverLink(e, true)}
          onMouseLeave={(e) => hoverLink(e, false)}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        style={styles.link}
        className="footer-link-responsive"
        onMouseEnter={(e) => hoverLink(e, true)}
        onMouseLeave={(e) => hoverLink(e, false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <style>{`
        @media (max-width: 1024px) {
          .footer-main-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 38px !important;
          }

          .footer-brand-responsive,
          .footer-contact-responsive {
            grid-column: span 2 !important;
          }

          .footer-top-strip-responsive {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 22px !important;
          }
        }

        @media (max-width: 768px) {
          .footer-responsive {
            padding: 70px 24px 30px !important;
          }

          .footer-top-strip-responsive {
            display: none !important;
          }

          .footer-main-responsive {
            grid-template-columns: 1fr 1fr !important;
            gap: 38px 34px !important;
          }

          .footer-brand-responsive,
          .footer-contact-responsive {
            grid-column: 1 / -1 !important;
          }

          .footer-logo-responsive {
            width: 190px !important;
            height: 72px !important;
          }

          .footer-about-responsive {
            font-size: 16px !important;
            max-width: 100% !important;
          }

          .footer-bottom-responsive {
            flex-direction: column !important;
            text-align: center !important;
            gap: 18px !important;
          }

          .footer-bottom-links-responsive {
            justify-content: center !important;
            flex-wrap: wrap !important;
          }
        }
      `}</style>

      <motion.footer
        style={styles.footer}
        className="footer-responsive"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
      >
        <div style={styles.bgGrid}></div>

        <motion.div
          style={styles.topStrip}
          className="footer-top-strip-responsive"
          variants={fadeUp}
        >
          <div style={styles.stripLeft}>
            <motion.div
              style={styles.stripIcon}
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{ duration: 0.25 }}
            >
              <ShieldCheck size={25} />
            </motion.div>

            <div>
              <div style={styles.stripTitle}>
                Need help with import/export compliance?
              </div>
              <div style={styles.stripText}>
                Talk to MCargo specialists before your shipment moves.
              </div>
            </div>
          </div>

          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }}>
            <Link to="/contact" style={styles.stripBtn}>
              Get Free Advisory <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.main}
          className="footer-main-responsive"
          variants={stagger}
        >
          <motion.div className="footer-brand-responsive" variants={fadeUp}>
            <Link to="/">
              <img
                src={logo}
                alt="MCargo"
                style={styles.logo}
                className="footer-logo-responsive"
              />
            </Link>

            <p style={styles.aboutText} className="footer-about-responsive">
              India-focused import-export compliance and freight advisory
              platform with integrated execution. Your cargo, our
              responsibility.
            </p>

            <div style={styles.socialRow}>
              <motion.div style={styles.social} whileHover={{ y: -4 }}>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>in</span>
              </motion.div>

              <motion.div style={styles.social} whileHover={{ y: -4 }}>
                <span style={{ fontWeight: 600 }}>▶</span>
              </motion.div>
            </div>
          </motion.div>

          {[serviceLinks, companyLinks, resourceLinks].map((group, index) => (
            <motion.div key={index} variants={fadeUp}>
              <div style={styles.colTitle}>
                {index === 0 ? "Services" : index === 1 ? "Company" : "Resources"}
              </div>
              <ul style={styles.list}>
                {group.map((item) => (
                  <li key={item.name}>{renderFooterLink(item)}</li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div className="footer-contact-responsive" variants={fadeUp}>
            <div style={styles.colTitle}>Contact</div>

            <div style={styles.contactItem}>
              <Mail size={18} style={styles.contactIcon} />
              info@mcargo.com
            </div>

            <div style={styles.contactItem}>
              <Phone size={18} style={styles.contactIcon} />
              +91 98765 43210
            </div>

            <div style={styles.contactItem}>
              <MapPin size={18} style={styles.contactIcon} />
              Mumbai, Maharashtra, India
            </div>

            <motion.div
              style={styles.mapBox}
              className="footer-map-responsive"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div style={styles.mapGrid}></div>
              <div style={styles.mapPin}>
                <MapPin size={22} />
              </div>
              <div style={styles.mapLabel}>MCargo Operations Hub</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div style={styles.divider} variants={fadeUp}></motion.div>

        <motion.div
          style={styles.bottom}
          className="footer-bottom-responsive"
          variants={fadeUp}
        >
          <div>© 2026 MCargo. All rights reserved.</div>

          <div
            style={styles.bottomLinks}
            className="footer-bottom-links-responsive"
          >
            <Link to="/contact" style={styles.link}>
              Terms & Conditions
            </Link>
            <Link to="/contact" style={styles.link}>
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;