import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Heart, Users, Award } from "lucide-react";

const CareerWhyJoin = () => {
  const cards = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      text: "Clear career paths with India's leading trade advisory platform",
    },
    {
      icon: Heart,
      title: "Health & Benefits",
      text: "Comprehensive medical insurance and wellness programs",
    },
    {
      icon: Users,
      title: "Industry Expertise",
      text: "Work with 12+ years of India trade compliance experience",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      text: "Performance incentives and professional development support",
    },
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9% 104px",
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
      margin: "0 0 22px",
    },
    title: {
      fontSize: "clamp(34px, 4vw, 48px)",
      lineHeight: 1.15,
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
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "24px",
    },
    card: {
      minHeight: "190px",
      background: "#F8FAFC",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "32px 22px",
      textAlign: "center",
      boxShadow: "0 10px 28px rgba(8,17,38,0.035)",
      transition: "all 0.3s ease",
    },
    iconBox: {
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px",
      transition: "all 0.3s ease",
    },
    cardTitle: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 12px",
      lineHeight: 1.35,
    },
    cardText: {
      fontSize: "14.2px",
      lineHeight: 1.55,
      color: "#475467",
      margin: 0,
      fontWeight: 400,
    },
  };

  const cardHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-7px)";
    e.currentTarget.style.background = "#ffffff";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.25)";
    e.currentTarget.style.boxShadow = "0 22px 46px rgba(46,49,146,0.12)";

    const icon = e.currentTarget.querySelector(".career-why-icon");
    if (icon) {
      icon.style.background = "#2e3192";
      icon.style.color = "#ffffff";
      icon.style.transform = "scale(1.05)";
    }
  };

  const cardHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.background = "#F8FAFC";
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "0 10px 28px rgba(8,17,38,0.035)";

    const icon = e.currentTarget.querySelector(".career-why-icon");
    if (icon) {
      icon.style.background = "#EEF2FF";
      icon.style.color = "#2e3192";
      icon.style.transform = "scale(1)";
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 1100px) {
          .career-why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 992px) {
          .career-why-section {
            padding: 76px 6% 86px !important;
          }
        }

        @media (max-width: 576px) {
          .career-why-section {
            padding: 62px 6% 72px !important;
          }

          .career-why-grid {
            grid-template-columns: 1fr !important;
          }

          .career-why-title {
            margin-bottom: 42px !important;
          }
        }
      `}</style>

      <section className="career-why-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.p
            style={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Join Us
          </motion.p>

          <motion.h2
            className="career-why-title"
            style={styles.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Build Your Career in{" "}
            <span style={styles.gradientText}>India Trade Excellence</span>
          </motion.h2>

          <div className="career-why-grid" style={styles.grid}>
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  style={styles.card}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <div className="career-why-icon" style={styles.iconBox}>
                    <Icon size={23} />
                  </div>

                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerWhyJoin;