import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const CustomsClearanceHero = () => {
  const stats = [
    { number: "IEC", label: "Registration & ICEGATE" },
    { number: "FSSAI", label: "Food & Agri Clearance" },
    { number: "SVB", label: "Related-Party Imports" },
    { number: "RoDTEP", label: "Duty Drawback Claims" },
  ];

  const styles = {
    hero: {
      minHeight: "620px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.72), rgba(8,17,38,0.28)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },
    container: {
      width: "100%",
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "95px 9% 145px",
      position: "relative",
      zIndex: 2,
    },
    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(15,23,42,0.48)",
      color: "rgba(255,255,255,0.85)",
      padding: "11px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "175px",
      backdropFilter: "blur(10px)",
    },
    crumbLink: {
      color: "rgba(255,255,255,0.82)",
      textDecoration: "none",
    },
    active: {
      color: "#ffffff",
      fontWeight: "800",
    },
    title: {
      fontSize: "58px",
      lineHeight: "1.08",
      fontWeight: "800",
      color: "#ffffff",
      letterSpacing: "-1.5px",
      margin: "0 0 18px",
      maxWidth: "760px",
    },
    subtitle: {
      color: "#ffffff",
      fontSize: "19px",
      fontWeight: "800",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      margin: 0,
    },
    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.42)",
      backdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(255,255,255,0.18)",
      zIndex: 3,
    },
    statsInner: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      padding: "0 9%",
    },
    stat: {
      padding: "26px 34px",
      borderRight: "1px solid rgba(255,255,255,0.14)",
      color: "#ffffff",
    },
    statNumber: {
      fontSize: "26px",
      fontWeight: "850",
      lineHeight: "1",
      marginBottom: "7px",
    },
    statLabel: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.72)",
    },
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .cc-hero-title { font-size: 46px !important; }
          .cc-hero-breadcrumb { margin-bottom: 120px !important; }
          .cc-stats-inner { grid-template-columns: repeat(2, 1fr) !important; padding: 0 6% !important; }
        }
        @media (max-width: 576px) {
          .cc-hero { min-height: 560px !important; }
          .cc-hero-container { padding: 70px 6% 160px !important; }
          .cc-hero-title { font-size: 36px !important; }
          .cc-hero-subtitle { font-size: 15px !important; line-height: 1.6 !important; }
          .cc-hero-breadcrumb { font-size: 12px !important; margin-bottom: 90px !important; }
          .cc-stat { padding: 18px 16px !important; }
          .cc-stat-number { font-size: 20px !important; }
        }
      `}</style>

      <section className="cc-hero" style={styles.hero}>
        <div className="cc-hero-container" style={styles.container}>
          <div className="cc-hero-breadcrumb" style={styles.breadcrumb}>
            <Home size={15} />
            <Link to="/" style={styles.crumbLink}>Home</Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <Link to="/services" style={styles.crumbLink}>Services</Link>
            <span style={{ opacity: 0.45 }}>/</span>
            <span style={styles.active}>Customs Clearance & Trade Advisory</span>
          </div>

          <h1 className="cc-hero-title" style={styles.title}>
            Customs Clearance &<br />Trade Advisory
          </h1>

          <p className="cc-hero-subtitle" style={styles.subtitle}>
            IEC setup, FSSAI licensing, SVB handling, HS classification
          </p>
        </div>

        <div style={styles.statsBar}>
          <div className="cc-stats-inner" style={styles.statsInner}>
            {stats.map((item, index) => (
              <div
                key={index}
                className="cc-stat"
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="cc-stat-number" style={styles.statNumber}>{item.number}</div>
                <div style={styles.statLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomsClearanceHero;