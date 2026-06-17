import React, { useState } from "react";
import { Eye, Target, Quote, ShieldCheck, TrendingUp } from "lucide-react";

const AboutValuesLeadership = () => {
  const [hovered, setHovered] = useState(null);

  const styles = {
    section: {
      padding: "105px 9% 115px",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
    },

    visionGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
      marginBottom: "105px",
    },

    valueCard: {
      background: "#F8FAFC",
      border: "1px solid #E8EEF7",
      borderRadius: "26px",
      padding: "38px 40px",
      minHeight: "270px",
      transition: "all 0.28s ease",
      boxShadow: "0 10px 26px rgba(15,23,42,0.035)",
    },

    iconBox: {
      width: "52px",
      height: "52px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "30px",
    },

    visionIcon: {
      background: "#EEF4FF",
      color: "#2e3192",
    },

    missionIcon: {
      background: "#EAFBF2",
      color: "#16A34A",
    },

    cardTitle: {
      fontSize: "25px",
      fontWeight: "750",
      color: "#101828",
      margin: "0 0 20px",
      letterSpacing: "-0.3px",
    },

    cardText: {
      fontSize: "16px",
      lineHeight: "1.75",
      color: "#475467",
      margin: 0,
    },

    leadershipHeader: {
      marginBottom: "58px",
    },

    label: {
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1.2px",
      marginBottom: "20px",
    },

    leadershipTitle: {
      fontSize: "46px",
      lineHeight: "1.15",
      fontWeight: "700",
      color: "#101828",
      margin: 0,
      letterSpacing: "-1.2px",
    },

    blue: {
      color: "#2e3192",
    },

    cyan: {
      color: "#2e3192",
    },

    directorGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px",
    },

    directorCard: {
      position: "relative",
      background: "#F8FAFC",
      border: "1px solid #E8EEF7",
      borderRadius: "26px",
      padding: "38px 40px",
      minHeight: "315px",
      overflow: "hidden",
      transition: "all 0.28s ease",
      boxShadow: "0 10px 26px rgba(15,23,42,0.035)",
    },

    quoteIcon: {
      position: "absolute",
      right: "34px",
      top: "28px",
      color: "#E2E8F0",
    },

    quoteIconGreen: {
      color: "#DDF8E8",
    },

    directorName: {
      fontSize: "24px",
      fontWeight: "750",
      color: "#101828",
      margin: "0 0 24px",
      letterSpacing: "-0.3px",
    },

    quoteText: {
      fontSize: "16px",
      lineHeight: "1.75",
      color: "#475467",
      fontStyle: "italic",
      margin: "0 0 24px",
      maxWidth: "680px",
    },

    directorText: {
      fontSize: "16px",
      lineHeight: "1.75",
      color: "#475467",
      margin: 0,
    },

    badgeRow: {
      display: "flex",
      gap: "10px",
      marginTop: "26px",
      flexWrap: "wrap",
    },

    miniBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      background: "#ffffff",
      border: "1px solid #E3EAF6",
      borderRadius: "999px",
      padding: "8px 13px",
      color: "#344054",
      fontSize: "13px",
      fontWeight: "600",
    },
  };

  const cardHover = (index) => ({
    transform: hovered === index ? "translateY(-6px)" : "translateY(0)",
    border:
      hovered === index ? "1px solid #B8C6EF" : "1px solid #E8EEF7",
    boxShadow:
      hovered === index
        ? "0 22px 48px rgba(40,72,190,0.12)"
        : "0 10px 26px rgba(15,23,42,0.035)",
  });

  return (

    <>
      <style>{`
        @media (max-width: 768px) {
          .about-values-section { padding: 84px 24px 88px !important; }
          .about-values-grid, .about-director-grid { grid-template-columns: 1fr !important; gap: 34px !important; }
          .about-values-grid { margin-bottom: 86px !important; }
          .about-value-card, .about-director-card { padding: 34px 36px !important; min-height: auto !important; border-radius: 24px !important; }
          .about-value-icon { width: 52px !important; height: 52px !important; margin-bottom: 30px !important; }
          .about-card-title { font-size: 27px !important; }
          .about-card-text, .about-quote-text, .about-director-text { font-size: 17px !important; line-height: 1.64 !important; }
          .about-leadership-header { margin-bottom: 48px !important; }
          .about-leadership-title { font-size: 38px !important; line-height: 1.18 !important; }
          .about-director-name { font-size: 26px !important; line-height: 1.35 !important; padding-right: 50px !important; }
          .about-quote-icon { right: 28px !important; top: 28px !important; width: 56px !important; height: 56px !important; }
        }
        @media (max-width: 420px) {
          .about-values-section { padding: 80px 24px 84px !important; }
          .about-leadership-title { font-size: 36px !important; }
          .about-value-card, .about-director-card { padding: 34px 36px !important; }
        }
      `}</style>
      <section style={styles.section} className="about-values-section">
      <div style={styles.container}>
        <div style={styles.visionGrid} className="about-values-grid">
          <div
            className="about-value-card"
            style={{ ...styles.valueCard, ...cardHover(0) }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ ...styles.iconBox, ...styles.visionIcon }} className="about-value-icon">
              <Eye size={23} />
            </div>

            <h3 style={styles.cardTitle} className="about-card-title">Our Vision</h3>

            <p style={styles.cardText} className="about-card-text">
              To be India&apos;s most trusted trade execution partner — where
              compliance is built in before cargo moves, not fixed after it is
              held. MCargo exists to make India&apos;s customs, DGFT, and
              freight landscape navigable for businesses of every size.
            </p>
          </div>

          <div
            className="about-value-card"
            style={{ ...styles.valueCard, ...cardHover(1) }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={{ ...styles.iconBox, ...styles.missionIcon }} className="about-value-icon">
              <Target size={23} />
            </div>

            <h3 style={styles.cardTitle} className="about-card-title">Our Mission</h3>

            <p style={styles.cardText} className="about-card-text">
              To handle every IEC registration, HS classification, SVB filing,
              FSSAI license, and freight booking with the same rigour we would
              apply to our own cargo — so our clients never face preventable
              demurrage, rejected shipment, or compliance penalties.
            </p>
          </div>
        </div>

        <div style={styles.leadershipHeader} className="about-leadership-header">
          <div style={styles.label}>LEADERSHIP</div>

          <h2 style={styles.leadershipTitle} className="about-leadership-title">
            Message from <span style={styles.blue}>Our</span>{" "}
            <span style={styles.cyan}>Directors</span>
          </h2>
        </div>

        <div style={styles.directorGrid} className="about-director-grid">
          <div
            className="about-director-card"
            style={{ ...styles.directorCard, ...cardHover(2) }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <Quote size={72} style={styles.quoteIcon} className="about-quote-icon" />

            <h3 style={styles.directorName} className="about-director-name">Aditya Devendra Deorukhkar</h3>

            <p style={styles.quoteText} className="about-quote-text">
              “In India&apos;s complex trade landscape, regulatory compliance
              isn&apos;t an afterthought — it&apos;s the foundation. We help
              businesses avoid detention, penalties, and customs disputes by
              addressing compliance before cargo moves.”
            </p>

            <p style={styles.directorText} className="about-director-text">
              Our approach combines DGFT schemes, HS classification,
              product-specific certifications and end-to-end freight execution
              into one reliable trade workflow.
            </p>

            <div style={styles.badgeRow}>
              <span style={styles.miniBadge}>
                <ShieldCheck size={14} /> Compliance First
              </span>
              <span style={styles.miniBadge}>
                <TrendingUp size={14} /> Trade Strategy
              </span>
            </div>
          </div>

          <div
            className="about-director-card"
            style={{ ...styles.directorCard, ...cardHover(3) }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <Quote
              size={72}
              style={{ ...styles.quoteIcon, ...styles.quoteIconGreen }} className="about-quote-icon"
            />

            <h3 style={styles.directorName} className="about-director-name">Deaon Deorukhkar</h3>

            <p style={styles.quoteText} className="about-quote-text">
              “Every shipment delay, every penalty, every port storage charge
              comes from a compliance gap. MCargo&apos;s mission is to remove
              those gaps through proactive advisory and digital transparency.”
            </p>

            <p style={styles.directorText} className="about-director-text">
              From IEC registration to final delivery, we ensure businesses have
              visibility, compliance assurance, and execution excellence — all
              from a single platform.
            </p>

            <div style={styles.badgeRow}>
              <span style={styles.miniBadge}>
                <Eye size={14} /> Visibility
              </span>
              <span style={styles.miniBadge}>
                <Target size={14} /> Execution
              </span>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutValuesLeadership;