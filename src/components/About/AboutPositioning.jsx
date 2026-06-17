import React from "react";

const AboutPositioning = () => {
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
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: "70px",
      alignItems: "center",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "7px 14px",
      borderRadius: "999px",
      border: "1px solid #d9e3fb",
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.8px",
      marginBottom: "24px",
      background: "#ffffff",
    },

    title: {
      fontSize: "36px",
      lineHeight: "1.22",
      fontWeight: "700",
      color: "#0F172A",
      letterSpacing: "-1px",
      margin: "0 0 28px",
    },

    blue: {
      color: "#2848BE",
    },

    cyan: {
      color: "#1297DF",
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.72",
      color: "#344054",
      margin: "0 0 22px",
      maxWidth: "720px",
    },

    statsBox: {
      background: "#F8FAFC",
      borderRadius: "24px",
      padding: "52px 46px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      rowGap: "34px",
      columnGap: "45px",
      boxShadow: "0 12px 30px rgba(15,23,42,0.035)",
      border: "1px solid #f0f3f8",
    },

    stat: {
      textAlign: "center",
    },

    number: {
      fontSize: "32px",
      lineHeight: "1",
      fontWeight: "700",
      color: "#2848BE",
      marginBottom: "10px",
    },

    label: {
      fontSize: "14px",
      color: "#475467",
      lineHeight: "1.45",
    },
  };

  const stats = [
    { number: "12+", label: "Years of Trade Advisory" },
    { number: "190+", label: "Countries Connected" },
    { number: "30K+", label: "Shipments Since Inception" },
    { number: "730+", label: "Cities Reached" },
  ];

  return (
    <>

      <style>{`
        @media (max-width: 768px) {
          .about-positioning-section { padding: 84px 24px 88px !important; }
          .about-positioning-container { grid-template-columns: 1fr !important; gap: 44px !important; }
          .about-positioning-badge { font-size: 13px !important; margin-bottom: 22px !important; }
          .about-positioning-title { font-size: 32px !important; line-height: 1.22 !important; letter-spacing: -0.8px !important; }
          .about-positioning-text { font-size: 17px !important; line-height: 1.62 !important; max-width: 100% !important; }
          .about-positioning-stats { padding: 34px 24px !important; grid-template-columns: repeat(2, 1fr) !important; column-gap: 28px !important; row-gap: 34px !important; }
          .about-positioning-number { font-size: 30px !important; }
          .about-positioning-label { font-size: 15px !important; }
        }
        @media (max-width: 420px) {
          .about-positioning-section { padding: 78px 24px 84px !important; }
          .about-positioning-title { font-size: 30px !important; }
          .about-positioning-stats { padding: 32px 20px !important; }
        }
      `}</style>
      <section style={styles.section} className="about-positioning-section">
      <div style={styles.container} className="about-positioning-container">
        <div>
          <div style={styles.badge} className="about-positioning-badge">STRATEGIC POSITIONING</div>

          <h2 style={styles.title} className="about-positioning-title">
            Your Cargo,{" "}
            <span style={styles.blue}>Our Responsibility</span>
            <span style={styles.cyan}>.</span>
          </h2>

          <p style={styles.text} className="about-positioning-text">
            MCargo is not just a freight forwarder. We are an India-focused
            trade advisory and logistics platform operating at the intersection
            of regulatory compliance advisory, freight execution, and digital
            freight enablement.
          </p>

          <p style={styles.text} className="about-positioning-text">
            With 12+ years of experience navigating India&apos;s complex trade
            landscape, we help businesses avoid shipment detention, incorrect HS
            classification, shelf-life non-compliance, and customs valuation
            disputes that lead to penalties and port storage charges.
          </p>

          <p style={styles.text} className="about-positioning-text">
            Our hybrid model combines compliance-heavy trade advisory with
            digital freight tools and full execution capability — de-risking your
            imports and exports before cargo moves.
          </p>
        </div>

        <div style={styles.statsBox} className="about-positioning-stats">
          {stats.map((item) => (
            <div key={item.label} style={styles.stat}>
              <div style={styles.number} className="about-positioning-number">{item.number}</div>
              <div style={styles.label} className="about-positioning-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutPositioning;