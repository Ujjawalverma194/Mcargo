import React, { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  TrendingUp,
  Globe2,
  ArrowRight,
} from "lucide-react";

const AboutServiceModel = () => {
  const [hovered, setHovered] = useState(null);

  const serviceLevels = [
    {
      level: "Level 1",
      title: "Trade Advisory & Compliance",
      text: "IEC registration, FSSAI licensing, SVB handling, HS classification, export scheme optimization and duty planning.",
      icon: <ShieldCheck size={27} />,
      color: "linear-gradient(135deg, #2e3192, #0b0d4a)",
    },
    {
      level: "Level 2",
      title: "Freight & Execution",
      text: "Ocean / Air Freight, FCL/LCL, air cargo, inland transportation and customs clearance across India.",
      icon: <FileCheck size={27} />,
      color: "linear-gradient(135deg, #06B6D4, #16C784)",
    },
    {
      level: "Level 3",
      title: "Digital Enablement",
      text: "Real-time rate discovery, instant quotes, container booking, shipment tracking visibility and documentation support.",
      icon: <TrendingUp size={27} />,
      color: "linear-gradient(135deg, #22C55E, #16A34A)",
    },
    {
      level: "Level 4",
      title: "Industry Specialization",
      text: "Food & agri imports, heavy equipment, electronics, steel and commodity-specific compliance expertise.",
      icon: <Globe2 size={27} />,
      color: "linear-gradient(135deg, #2e3192, #393c7e)",
    },
  ];

  const styles = {
  section: {
  padding: "105px 9% 115px",
  background:
    "linear-gradient(180deg, #F6F9FD 0%, #F2F7FC 100%)",
  fontFamily: "Inter, sans-serif",
  position: "relative",
  overflow: "hidden",
  borderTop: "1px solid #E4ECF7",
  borderBottom: "1px solid #E4ECF7",
},

    // softGlow: {
    //   position: "absolute",
    //   width: "520px",
    //   height: "520px",
    //   borderRadius: "50%",
    //   background: "rgba(40,72,190,0.07)",
    //   right: "-180px",
    //   top: "40px",
    //   filter: "blur(10px)",
    //   pointerEvents: "none",
    // },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    },

    header: {
      maxWidth: "820px",
      marginBottom: "64px",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1px",
      marginBottom: "22px",
      background: "#EEF4FF",
      border: "1px solid #dbe6ff",
      padding: "8px 15px",
      borderRadius: "999px",
    },

    badgeDot: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: "#2e3192",
      boxShadow: "0 0 0 5px rgba(40,72,190,0.12)",
    },

    title: {
      fontSize: "46px",
      lineHeight: "1.14",
      fontWeight: "700",
      color: "#101828",
      letterSpacing: "-1.3px",
      margin: "0 0 22px",
    },

    blue: {
      color: "#2e3192",
    },

    cyan: {
      color: "#2e3192",
    },

    desc: {
      fontSize: "19px",
      lineHeight: "1.65",
      color: "#475467",
      maxWidth: "820px",
      margin: 0,
      fontWeight: "400",
    },

    cards: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "28px",
    },

    card: {
      minHeight: "210px",
      background: "rgba(255,255,255,0.94)",
      border: "1px solid #e5ebf5",
      borderRadius: "26px",
      padding: "30px 34px",
      boxShadow: "0 10px 26px rgba(15,23,42,0.055)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      gap: "22px",
      alignItems: "flex-start",
    },

    cardLine: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: "4px",
      background: "#2e3192",
      opacity: 0,
      transition: "opacity 0.25s ease",
    },

    iconBox: {
      width: "64px",
      height: "64px",
      borderRadius: "17px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: "0 14px 28px rgba(40,72,190,0.18)",
      transition: "all 0.3s ease",
    },

    level: {
      fontSize: "13px",
      color: "#8A94A6",
      fontWeight: "600",
      marginBottom: "8px",
    },

    cardTitle: {
      fontSize: "22px",
      lineHeight: "1.25",
      fontWeight: "700",
      color: "#101828",
      marginBottom: "18px",
      transition: "color 0.25s ease",
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#475467",
      margin: 0,
    },

    bottomCTA: {
      marginTop: "48px",
      background:
        "linear-gradient(135deg, rgba(40,72,190,0.08), rgba(18,168,232,0.08))",
      border: "1px solid #dfe8fb",
      borderRadius: "22px",
      padding: "20px 26px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "760px",
    },

    ctaText: {
      fontSize: "15px",
      color: "#344054",
      fontWeight: "600",
    },

    ctaBtn: {
      border: "none",
      background: "#2e3192",
      color: "#ffffff",
      borderRadius: "13px",
      padding: "13px 20px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 12px 24px rgba(40,72,190,0.22)",
    },
  };

  return (
    <>

      <style>{`
        @media (max-width: 768px) {
          .about-service-section { padding: 84px 24px 88px !important; }
          .about-service-header { margin-bottom: 48px !important; }
          .about-service-badge { margin-bottom: 22px !important; }
          .about-service-title { font-size: 38px !important; line-height: 1.18 !important; letter-spacing: -1px !important; }
          .about-service-desc { font-size: 21px !important; line-height: 1.45 !important; max-width: 100% !important; }
          .about-service-cards { grid-template-columns: 1fr !important; gap: 28px !important; }
          .about-service-card { min-height: auto !important; padding: 34px 36px !important; flex-direction: column !important; gap: 22px !important; border-radius: 24px !important; }
          .about-service-icon { width: 60px !important; height: 60px !important; }
          .about-service-card-title { font-size: 23px !important; }
          .about-service-text { font-size: 17px !important; line-height: 1.62 !important; }
          .about-service-bottom { flex-direction: column !important; align-items: stretch !important; gap: 18px !important; padding: 22px !important; }
          .about-service-btn { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 420px) {
          .about-service-title { font-size: 36px !important; }
          .about-service-desc { font-size: 20px !important; }
          .about-service-card { padding: 32px 36px !important; }
        }
      `}</style>
      <section style={styles.section} className="about-service-section">
      {/* <div style={styles.softGlow}></div> */}

      <div style={styles.container}>
        <div style={styles.header} className="about-service-header">
          <div style={styles.badge} className="about-service-badge">
            <span style={styles.badgeDot}></span>
            BRAND ARCHITECTURE
          </div>

          <h2 style={styles.title} className="about-service-title">
            Our 4-Level{" "}
            <span style={styles.blue}>Service</span>{" "}
            <span style={styles.cyan}>Model</span>
          </h2>

          <p style={styles.desc} className="about-service-desc">
            Not cheapest freight. Not pure digital platform. Not only compliance
            consultant. MCargo is a hybrid logistics model combining advisory,
            freight execution, digital tools and industry specialization.
          </p>
        </div>

        <div style={styles.cards} className="about-service-cards">
          {serviceLevels.map((item, index) => {
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                className="about-service-card"
                style={{
                  ...styles.card,
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  border: isHovered
                    ? "1px solid #b8c6ef"
                    : "1px solid #e5ebf5",
                  boxShadow: isHovered
                    ? "0 22px 48px rgba(40,72,190,0.13)"
                    : "0 10px 26px rgba(15,23,42,0.055)",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    ...styles.cardLine,
                    opacity: isHovered ? 1 : 0,
                    background: item.color,
                  }}
                ></div>

                <div
                  className="about-service-icon"
                  style={{
                    ...styles.iconBox,
                    background: item.color,
                    transform: isHovered
                      ? "scale(1.06) rotate(-3deg)"
                      : "scale(1) rotate(0deg)",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <div style={styles.level}>{item.level}</div>

                  <div
                    className="about-service-card-title"
                    style={{
                      ...styles.cardTitle,
                      color: isHovered ? "#2e3192" : "#101828",
                    }}
                  >
                    {item.title}
                  </div>

                  <p style={styles.text} className="about-service-text">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={styles.bottomCTA} className="about-service-bottom">
          <div style={styles.ctaText}>
            Need compliance-led freight planning for your next shipment?
          </div>

          <button
            className="about-service-btn"
            style={styles.ctaBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Talk to Expert <ArrowRight size={16} />
          </button>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutServiceModel;