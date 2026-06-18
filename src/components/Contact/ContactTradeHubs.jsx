import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe2, ShieldCheck } from "lucide-react";

const ContactTradeHubs = () => {
  const hubs = [
    {
      icon: MapPin,
      title: "Major Ports",
      text: "Mumbai, Chennai, Mundra, JNPT, Kolkata, Vizag",
    },
    {
      icon: Globe2,
      title: "ICDs & CFSs",
      text: "Delhi, Bangalore, Hyderabad, Ahmedabad, Pune",
    },
    {
      icon: ShieldCheck,
      title: "Customs Houses",
      text: "All major Indian customs jurisdictions covered",
    },
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "94px 9% 104px",
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
      margin: "0 0 24px",
    },
    title: {
      fontSize: "clamp(34px, 4vw, 48px)",
      lineHeight: 1.12,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 64px",
      letterSpacing: "-1px",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2e3192, #12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    panel: {
      background: "#F8FAFC",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "66px 54px",
      boxShadow: "0 12px 32px rgba(8,17,38,0.055)",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "34px",
    },
    item: {
      textAlign: "center",
      padding: "10px",
      transition: "all 0.3s ease",
    },
    iconBox: {
      width: "64px",
      height: "64px",
      borderRadius: "18px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px",
      transition: "all 0.3s ease",
    },
    itemTitle: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 13px",
    },
    itemText: {
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "#667085",
      margin: 0,
      fontWeight: 400,
    },
  };

  const hoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    const icon = e.currentTarget.querySelector(".hub-icon");
    if (icon) {
      icon.style.background = "#2e3192";
      icon.style.color = "#ffffff";
      icon.style.boxShadow = "0 14px 28px rgba(46,49,146,0.18)";
    }
  };

  const hoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    const icon = e.currentTarget.querySelector(".hub-icon");
    if (icon) {
      icon.style.background = "#EEF2FF";
      icon.style.color = "#2e3192";
      icon.style.boxShadow = "none";
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .trade-hubs-section {
            padding: 76px 6% 86px !important;
          }

          .trade-hubs-panel {
            grid-template-columns: 1fr !important;
            padding: 44px 28px !important;
          }
        }

        @media (max-width: 576px) {
          .trade-hubs-section {
            padding: 64px 6% 74px !important;
          }

          .trade-hubs-title {
            margin-bottom: 42px !important;
          }
        }
      `}</style>

      <section className="trade-hubs-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.p
            style={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pan-India Coverage
          </motion.p>

          <motion.h2
            className="trade-hubs-title"
            style={styles.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Serving Major <span style={styles.gradientText}>Trade Hubs</span>
          </motion.h2>

          <motion.div
            className="trade-hubs-panel"
            style={styles.panel}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {hubs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  style={styles.item}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                >
                  <div className="hub-icon" style={styles.iconBox}>
                    <Icon size={28} />
                  </div>

                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <p style={styles.itemText}>{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactTradeHubs;