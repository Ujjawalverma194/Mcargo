import React, { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  Truck,
  Thermometer,
  Clock3,
  Globe2,
  Award,
  MapPin,
} from "lucide-react";

const Howwework = () => {
  const [hovered, setHovered] = useState(null);

  const styles = {
    section: {
      padding: "115px 9% 120px",
      background:
        "linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #ffffff 100%)",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },

    header: {
      textAlign: "center",
      marginBottom: "68px",
    },

    label: {
      color: "#2e3192",
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "1.2px",
      marginBottom: "18px",
    },

    title: {
      fontSize: "54px",
      lineHeight: "1.12",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 16px",
      letterSpacing: "-1.8px",
    },

    blue: {
      color: "#2e3192",
    },

    cyan: {
      color: "#139fe3",
    },

    subtitle: {
      fontSize: "17px",
      color: "#667085",
      margin: 0,
    },

    grid: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.45fr 0.7fr 0.7fr",
      gap: "18px",
    },

    card: {
      borderRadius: "24px",
      overflow: "hidden",
      position: "relative",
      minHeight: "230px",
      cursor: "pointer",
      transition: "all 0.35s ease",
      boxShadow: "0 8px 22px rgba(15,23,42,0.05)",
    },

    imageCard: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(8,17,38,0.78), rgba(8,17,38,0.12))",
      zIndex: 1,
    },

    cardContent: {
      position: "absolute",
      left: "28px",
      right: "28px",
      bottom: "26px",
      zIndex: 2,
    },

    icon: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.16)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      backdropFilter: "blur(8px)",
    },

    darkTitle: {
      fontSize: "17px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "8px",
    },

    darkText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.82)",
      lineHeight: "1.6",
    },

    solidGreen: {
      background: "#22C55E",
      color: "#ffffff",
      padding: "32px",
      boxSizing: "border-box",
    },

    solidBlue: {
      background: "#2e3192",
      color: "#ffffff",
      padding: "32px",
      boxSizing: "border-box",
    },

    whiteCard: {
      background: "#ffffff",
      border: "1px solid #e8edf5",
      padding: "32px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    lightIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "52px",
    },

    whiteTitle: {
      fontSize: "17px",
      fontWeight: "700",
      color: "#101828",
      marginBottom: "10px",
    },

    whiteText: {
      fontSize: "14px",
      color: "#667085",
      lineHeight: "1.65",
      margin: 0,
    },

    solidIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.18)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "82px",
    },

    solidTitle: {
      fontSize: "17px",
      fontWeight: "700",
      color: "#ffffff",
      marginBottom: "10px",
    },

    solidText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.88)",
      lineHeight: "1.65",
      margin: 0,
    },

    wide: {
      gridColumn: "span 2",
    },

    statsCard: {
      gridColumn: "span 2",
      minHeight: "210px",
      borderRadius: "24px",
      padding: "30px",
      boxSizing: "border-box",
      color: "#ffffff",
      position: "relative",
      overflow: "hidden",
      backgroundImage:
        'linear-gradient(135deg, rgba(46, 49, 146, 0.75), rgba(46, 49, 146, 0.75)), url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&auto=format&fit=crop&q=80")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      boxShadow: "0 16px 38px rgba(40,72,190,0.18)",
      transition: "all 0.35s ease",
      cursor: "pointer",
    },

    statsTop: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "rgba(255,255,255,0.78)",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1px",
      marginBottom: "10px",
    },

    statsLine: {
      fontSize: "15px",
      fontWeight: "700",
      fontStyle: "italic",
      marginBottom: "52px",
    },

    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
    },

    statNumber: {
      fontSize: "28px",
      fontWeight: "800",
      marginBottom: "4px",
    },

    statText: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.78)",
    },
  };

  const hoverStyle = (index) => ({
    transform: hovered === index ? "translateY(-6px)" : "translateY(0)",
    boxShadow:
      hovered === index
        ? "0 22px 48px rgba(15,23,42,0.13)"
        : "0 8px 22px rgba(15,23,42,0.05)",
  });

  return (
    <>
      
        <style>
          {`
            @media (max-width: 768px) {
              .work-process-section {
                padding: 86px 24px 80px !important;
              }

              .work-process-header {
                margin-bottom: 48px !important;
              }

              .work-process-label {
                font-size: 13px !important;
                margin-bottom: 18px !important;
              }

              .work-process-title {
                font-size: 40px !important;
                line-height: 1.18 !important;
                letter-spacing: -1px !important;
              }

              .work-process-subtitle {
                font-size: 16px !important;
                line-height: 1.65 !important;
                max-width: 280px !important;
                margin: 0 auto !important;
              }

              .work-process-grid {
                grid-template-columns: 1fr !important;
                gap: 18px !important;
              }

              .work-process-card,
              .work-process-wide,
              .work-process-stats-card {
                grid-column: auto !important;
                min-height: 240px !important;
                border-radius: 22px !important;
              }

              .work-process-white-card,
              .work-process-solid-card {
                padding: 28px !important;
              }

              .work-process-light-icon,
              .work-process-solid-icon {
                margin-bottom: 72px !important;
              }

              .work-process-card-content {
                left: 26px !important;
                right: 26px !important;
                bottom: 24px !important;
              }

              .work-process-stats-card {
                padding: 26px !important;
                min-height: 230px !important;
              }

              .work-process-stats-line {
                margin-bottom: 46px !important;
              }

              .work-process-stats-row {
                gap: 18px !important;
              }

              .work-process-stat-number {
                font-size: 24px !important;
              }
            }

            @media (max-width: 420px) {
              .work-process-section {
                padding: 80px 24px 74px !important;
              }

              .work-process-title {
                font-size: 38px !important;
              }

              .work-process-card,
              .work-process-wide,
              .work-process-stats-card {
                min-height: 226px !important;
              }
            }
          `}
        </style>

      <section style={styles.section} className="work-process-section">
        <div style={styles.header} className="work-process-header">
          <div style={styles.label} className="work-process-label">HOW WE WORK</div>

          <h2 style={styles.title} className="work-process-title">
            Built around <span style={styles.blue}>your</span>{" "}
            <span style={styles.cyan}>cargo</span>
          </h2>

          <p style={styles.subtitle} className="work-process-subtitle">
            Compliance before cargo moves, zero surprises after.
          </p>
        </div>

        <div style={styles.grid} className="work-process-grid">
          <div
            className="work-process-card work-process-wide"
            style={{
              ...styles.card,
              ...styles.imageCard,
              ...styles.wide,
              ...hoverStyle(0),
              backgroundImage:
                'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80")',
            }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.overlay}></div>

            <div style={styles.cardContent} className="work-process-card-content">
              <div style={styles.icon}>
                <ShieldCheck size={21} />
              </div>
              <div style={styles.darkTitle}>
                Compliance before cargo moves
              </div>
              <div style={styles.darkText}>
                IEC · FSSAI · HS classification · SVB - filed right the first time.
              </div>
            </div>
          </div>

          <div
            className="work-process-card work-process-solid-card"
            style={{
              ...styles.card,
              ...styles.solidGreen,
              ...hoverStyle(1),
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.solidIcon} className="work-process-solid-icon">
              <FileCheck size={21} />
            </div>
            <div style={styles.solidTitle}>
              End-to-end customs clearance
            </div>
            <p style={styles.solidText}>
              BOE filing, ICEGATE linking, duty calc & valuation queries.
            </p>
          </div>

          <div
            className="work-process-card work-process-white-card"
            style={{
              ...styles.card,
              ...styles.whiteCard,
              ...hoverStyle(2),
            }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.lightIcon} className="work-process-light-icon">
              <Thermometer size={21} />
            </div>
            <div style={styles.whiteTitle}>
              Four storage zones, one facility
            </div>
            <p style={styles.whiteText}>
              Ambient · Chilled (2–8°C) · Frozen (-18°C) · Bonded.
            </p>
          </div>

          <div
            className="work-process-card work-process-solid-card"
            style={{
              ...styles.card,
              ...styles.solidBlue,
              ...hoverStyle(3),
            }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.solidIcon} className="work-process-solid-icon">
              <Truck size={21} />
            </div>
            <div style={styles.solidTitle}>First mile to last mile</div>
            <p style={styles.solidText}>
              Factory stuffing, GPS tracking, port handoffs - one contact.
            </p>
          </div>

          <div
            className="work-process-card work-process-wide"
            style={{
              ...styles.card,
              ...styles.imageCard,
              ...styles.wide,
              ...hoverStyle(4),
              backgroundImage:
                'url("https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&auto=format&fit=crop&q=80")',
            }}
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.overlay}></div>

            <div style={styles.cardContent} className="work-process-card-content">
              <div style={styles.icon}>
                <Globe2 size={21} />
              </div>
              <div style={styles.darkTitle}>
                190+ countries, 730+ cities
              </div>
              <div style={styles.darkText}>
                Verified agent network - 1,000+ port pairs for LCL & FCL.
              </div>
            </div>
          </div>

          <div
            className="work-process-card work-process-white-card"
            style={{
              ...styles.card,
              ...styles.whiteCard,
              ...hoverStyle(5),
            }}
            onMouseEnter={() => setHovered(5)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.lightIcon} className="work-process-light-icon">
              <Clock3 size={21} />
            </div>
            <div style={styles.whiteTitle}>One account manager</div>
            <p style={styles.whiteText}>
              No call centres - a single contact who knows your lanes & HS codes.
            </p>
          </div>

          <div
            className="work-process-card work-process-wide"
            style={{
              ...styles.card,
              ...styles.imageCard,
              ...styles.wide,
              ...hoverStyle(6),
              backgroundImage:
                'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&auto=format&fit=crop&q=80")',
            }}
            onMouseEnter={() => setHovered(6)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.overlay}></div>

            <div style={styles.cardContent} className="work-process-card-content">
              <div style={styles.icon}>
                <Award size={21} />
              </div>
              <div style={styles.darkTitle}>
                OOG, heavy lift & project cargo
              </div>
              <div style={styles.darkText}>
                Route surveys, flat rack, Hi-Lift vehicles, insurance included.
              </div>
            </div>
          </div>

          <div
            className="work-process-stats-card"
            style={{
              ...styles.statsCard,
              ...hoverStyle(7),
            }}
            onMouseEnter={() => setHovered(7)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.statsTop}>
              <MapPin size={15} />
              12 YEARS OF INDIA TRADE
            </div>

            <div style={styles.statsLine} className="work-process-stats-line">
              Your Cargo, Our Responsibility.
            </div>

            <div style={styles.statsRow} className="work-process-stats-row">
              <div>
                <div style={styles.statNumber} className="work-process-stat-number">30K+</div>
                <div style={styles.statText}>Shipments</div>
              </div>

              <div>
                <div style={styles.statNumber} className="work-process-stat-number">2,700+</div>
                <div style={styles.statText}>Garment</div>
              </div>

              <div>
                <div style={styles.statNumber} className="work-process-stat-number">1,000+</div>
                <div style={styles.statText}>Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Howwework;