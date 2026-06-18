import React from "react";
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
      <style>
        {`
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
              margin-bottom: 22px !important;
            }

            .footer-about-responsive {
              font-size: 16px !important;
              line-height: 1.8 !important;
              max-width: 100% !important;
            }

            .footer-col-title-responsive {
              font-size: 16px !important;
              margin-bottom: 20px !important;
            }

            .footer-link-responsive {
              font-size: 16px !important;
              line-height: 1.55 !important;
            }

            .footer-map-responsive {
              height: 175px !important;
              border-radius: 20px !important;
            }

            .footer-divider-responsive {
              margin: 42px auto 26px !important;
            }

            .footer-bottom-responsive {
              flex-direction: column !important;
              justify-content: center !important;
              text-align: center !important;
              gap: 18px !important;
              font-size: 14px !important;
            }

            .footer-bottom-links-responsive {
              justify-content: center !important;
              flex-wrap: wrap !important;
              gap: 18px !important;
            }
          }

          @media (max-width: 420px) {
            .footer-responsive {
              padding: 62px 24px 28px !important;
            }

            .footer-main-responsive {
              grid-template-columns: 1fr 1fr !important;
              gap: 36px 30px !important;
            }

            .footer-brand-responsive,
            .footer-contact-responsive {
              grid-column: 1 / -1 !important;
            }

            .footer-logo-responsive {
              width: 185px !important;
            }

            .footer-contact-item-responsive {
              font-size: 15px !important;
            }

            .footer-map-label-responsive {
              left: 14px !important;
              bottom: 14px !important;
              font-size: 12px !important;
            }
          }
        `}
      </style>

      <footer style={styles.footer} className="footer-responsive">
        <div style={styles.bgGrid}></div>

        <div style={styles.topStrip} className="footer-top-strip-responsive">
          <div style={styles.stripLeft}>
            <div style={styles.stripIcon}>
              <ShieldCheck size={25} />
            </div>

            <div>
              <div style={styles.stripTitle}>
                Need help with import/export compliance?
              </div>
              <div style={styles.stripText}>
                Talk to MCargo specialists before your shipment moves.
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            style={styles.stripBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Free Advisory <ArrowRight size={17} />
          </Link>
        </div>

        <div style={styles.main} className="footer-main-responsive">
          <div className="footer-brand-responsive">
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
              <div style={styles.social}>
                <span style={{ fontWeight: 600, fontSize: "14px" }}>in</span>
              </div>

              <div style={styles.social}>
                <span style={{ fontWeight: 600 }}>▶</span>
              </div>
            </div>
          </div>

          <div>
            <div style={styles.colTitle} className="footer-col-title-responsive">
              Services
            </div>
            <ul style={styles.list}>
              {serviceLinks.map((item) => (
                <li key={item.name}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle} className="footer-col-title-responsive">
              Company
            </div>
            <ul style={styles.list}>
              {companyLinks.map((item) => (
                <li key={item.name}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle} className="footer-col-title-responsive">
              Resources
            </div>
            <ul style={styles.list}>
              {resourceLinks.map((item) => (
                <li key={item.name}>{renderFooterLink(item)}</li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-responsive">
            <div style={styles.colTitle} className="footer-col-title-responsive">
              Contact
            </div>

            <div style={styles.contactItem} className="footer-contact-item-responsive">
              <Mail size={18} style={styles.contactIcon} />
              info@mcargo.com
            </div>

            <div style={styles.contactItem} className="footer-contact-item-responsive">
              <Phone size={18} style={styles.contactIcon} />
              +91 98765 43210
            </div>

            <div style={styles.contactItem} className="footer-contact-item-responsive">
              <MapPin size={18} style={styles.contactIcon} />
              Mumbai, Maharashtra, India
            </div>

            <div style={styles.mapBox} className="footer-map-responsive">
              <div style={styles.mapGrid}></div>
              <div style={styles.mapPin}>
                <MapPin size={22} />
              </div>
              <div style={styles.mapLabel} className="footer-map-label-responsive">
                MCargo Operations Hub
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider} className="footer-divider-responsive"></div>

        <div style={styles.bottom} className="footer-bottom-responsive">
          <div>© 2026 MCargo. All rights reserved.</div>

          <div style={styles.bottomLinks} className="footer-bottom-links-responsive">
            <Link to="/contact" style={styles.link}>
              Terms & Conditions
            </Link>
            <Link to="/contact" style={styles.link}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;