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

const WorkProcess = () => {
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
      color: "#2848BE",
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
      color: "#2848BE",
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
      background: "#2848BE",
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
      color: "#2848BE",
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
        'linear-gradient(135deg, rgba(40,72,190,0.92), rgba(18,168,232,0.72)), url("https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&auto=format&fit=crop&q=80")',
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
      <section style={styles.section}>
        <div style={styles.header}>
          <div style={styles.label}>HOW WE WORK</div>

          <h2 style={styles.title}>
            Built around <span style={styles.blue}>your</span>{" "}
            <span style={styles.cyan}>cargo</span>
          </h2>

          <p style={styles.subtitle}>
            Compliance before cargo moves, zero surprises after.
          </p>
        </div>

        <div style={styles.grid}>
          <div
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

            <div style={styles.cardContent}>
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
            style={{
              ...styles.card,
              ...styles.solidGreen,
              ...hoverStyle(1),
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.solidIcon}>
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
            style={{
              ...styles.card,
              ...styles.whiteCard,
              ...hoverStyle(2),
            }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.lightIcon}>
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
            style={{
              ...styles.card,
              ...styles.solidBlue,
              ...hoverStyle(3),
            }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.solidIcon}>
              <Truck size={21} />
            </div>
            <div style={styles.solidTitle}>First mile to last mile</div>
            <p style={styles.solidText}>
              Factory stuffing, GPS tracking, port handoffs - one contact.
            </p>
          </div>

          <div
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

            <div style={styles.cardContent}>
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
            style={{
              ...styles.card,
              ...styles.whiteCard,
              ...hoverStyle(5),
            }}
            onMouseEnter={() => setHovered(5)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={styles.lightIcon}>
              <Clock3 size={21} />
            </div>
            <div style={styles.whiteTitle}>One account manager</div>
            <p style={styles.whiteText}>
              No call centres - a single contact who knows your lanes & HS codes.
            </p>
          </div>

          <div
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

            <div style={styles.cardContent}>
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

            <div style={styles.statsLine}>
              Your Cargo, Our Responsibility.
            </div>

            <div style={styles.statsRow}>
              <div>
                <div style={styles.statNumber}>30K+</div>
                <div style={styles.statText}>Shipments</div>
              </div>

              <div>
                <div style={styles.statNumber}>2,700+</div>
                <div style={styles.statText}>Garment</div>
              </div>

              <div>
                <div style={styles.statNumber}>1,000+</div>
                <div style={styles.statText}>Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;