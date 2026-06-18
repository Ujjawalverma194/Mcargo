import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ContactMapSection = () => {
  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "84px 9% 88px",
      borderTop: "1px solid #E7EDF5",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    eyebrow: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#2e3192",
      margin: "0 0 12px",
    },
    title: {
      fontSize: "28px",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 8px",
      letterSpacing: "-0.4px",
    },
    address: {
      fontSize: "14.5px",
      lineHeight: 1.6,
      color: "#475467",
      margin: "0 0 18px",
      fontWeight: 400,
    },
    mapCard: {
      width: "100%",
      borderRadius: "18px",
      overflow: "hidden",
      border: "1px solid #E7EDF5",
      background: "#ffffff",
      boxShadow: "0 14px 34px rgba(8,17,38,0.07)",
    },
    iframe: {
      width: "100%",
      height: "380px",
      border: "none",
      display: "block",
    },
    mapLink: {
      marginTop: "14px",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: "#2e3192",
      fontSize: "14px",
      fontWeight: 600,
      textDecoration: "none",
      transition: "all 0.25s ease",
      float: "right",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .contact-map-section {
            padding: 72px 6% 80px !important;
          }
        }

        @media (max-width: 576px) {
          .contact-map-section {
            padding: 58px 6% 70px !important;
          }

          .contact-map-frame {
            height: 320px !important;
          }

          .contact-map-link {
            float: none !important;
          }
        }
      `}</style>

      <section className="contact-map-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.p
            style={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Office
          </motion.p>

          <motion.h2
            style={styles.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>

          <motion.p
            style={styles.address}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            303, Sunteck Crest, Opp. Leela Business Park, Andheri–Kurla Road,
            Marol, Andheri East, Mumbai 400059
          </motion.p>

          <motion.div
            style={styles.mapCard}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              className="contact-map-frame"
              title="MCargo Office Location"
              style={styles.iframe}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=303%20Sunteck%20Crest%20Opp.%20Leela%20Business%20Park%20Andheri%20Kurla%20Road%20Marol%20Andheri%20East%20Mumbai%20400059&output=embed"
            />
          </motion.div>

          <a
            className="contact-map-link"
            style={styles.mapLink}
            href="https://www.google.com/maps/search/?api=1&query=303%20Sunteck%20Crest%20Opp.%20Leela%20Business%20Park%20Andheri%20Kurla%20Road%20Marol%20Andheri%20East%20Mumbai%20400059"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#12A8E8";
              e.currentTarget.style.transform = "translateX(2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#2e3192";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <MapPin size={16} />
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  );
};

export default ContactMapSection;