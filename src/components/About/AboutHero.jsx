import React from "react";
import {
  ArrowRight,
  Home,
  ShieldCheck,
  Ship,
  FileCheck,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
const AboutHero = () => {
  const styles = {
    hero: {
      minHeight: "calc(100vh - 78px)",
      padding: "120px 9% 95px",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      overflow: "hidden",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.84) 0%, rgba(8,17,38,0.64) 42%, rgba(8,17,38,0.34) 100%), url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    content: {
      maxWidth: "1450px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
      animation: "fadeUp 0.8s ease forwards",
    },

    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "rgba(255,255,255,0.86)",
      padding: "12px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "34px",
      backdropFilter: "blur(12px)",
    },

    slash: {
      color: "rgba(255,255,255,0.45)",
    },

    active: {
      color: "#ffffff",
      fontWeight: "800",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(40,72,190,0.22)",
      border: "1px solid rgba(255,255,255,0.18)",
      color: "#ffffff",
      padding: "9px 16px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.8px",
      marginBottom: "24px",
      backdropFilter: "blur(10px)",
    },

    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#22C55E",
      boxShadow: "0 0 0 6px rgba(34,197,94,0.16)",
    },

    title: {
      fontSize: "64px",
      lineHeight: "1.08",
      fontWeight: "750",
      color: "#ffffff",
      maxWidth: "830px",
      letterSpacing: "-2px",
      margin: "0 0 26px",
    },

    gradientText: {
      background: "linear-gradient(90deg, #ffffff, #bcd1ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    desc: {
      fontSize: "20px",
      lineHeight: "1.7",
      color: "rgba(255,255,255,0.86)",
      maxWidth: "780px",
      margin: "0 0 34px",
      fontWeight: "500",
    },

    actions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "62px",
    },

    primaryBtn: {
      background: "#2848BE",
      color: "#ffffff",
      border: "none",
      borderRadius: "15px",
      padding: "15px 26px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 14px 32px rgba(40,72,190,0.35)",
      transition: "all 0.25s ease",
    },

    secondaryBtn: {
      background: "rgba(255,255,255,0.12)",
      color: "#ffffff",
      border: "1px solid rgba(255,255,255,0.22)",
      borderRadius: "15px",
      padding: "15px 24px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      backdropFilter: "blur(10px)",
      transition: "all 0.25s ease",
    },

    statsRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "18px",
      maxWidth: "1020px",
    },

    statCard: {
      background: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "20px",
      padding: "20px",
      color: "#ffffff",
      backdropFilter: "blur(14px)",
      transition: "all 0.25s ease",
    },

    statIcon: {
      width: "42px",
      height: "42px",
      borderRadius: "13px",
      background: "rgba(255,255,255,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "14px",
    },

    statNumber: {
      fontSize: "24px",
      fontWeight: "800",
      marginBottom: "5px",
    },

    statText: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.72)",
      lineHeight: "1.45",
    },

    floatingPanel: {
      position: "absolute",
      right: "9%",
      bottom: "70px",
      width: "330px",
      background: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(255,255,255,0.7)",
      borderRadius: "24px",
      padding: "24px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
      zIndex: 3,
      animation: "floatCard 4s ease-in-out infinite",
    },

    panelTop: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px",
    },

    panelIcon: {
      width: "46px",
      height: "46px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    panelTitle: {
      fontSize: "16px",
      fontWeight: "800",
      color: "#101828",
      marginBottom: "3px",
    },

    panelText: {
      fontSize: "13px",
      color: "#667085",
    },

    progress: {
      height: "8px",
      borderRadius: "999px",
      background: "#e8eef8",
      overflow: "hidden",
      marginTop: "18px",
    },

    progressFill: {
      height: "100%",
      width: "76%",
      background: "linear-gradient(90deg, #2848BE, #0EA57A)",
      borderRadius: "999px",
    },
    home:{
       color: "#9a9da5",
       textDecoration:"none"
    }
  };

  const stats = [
    {
      icon: <ShieldCheck size={20} />,
      number: "12+ yrs",
      text: "India trade expertise",
    },
    {
      icon: <Ship size={20} />,
      number: "30K+",
      text: "Shipments executed",
    },
    {
      icon: <FileCheck size={20} />,
      number: "3.5 days",
      text: "Fast customs clearance",
    },
    {
      icon: <Globe2 size={20} />,
      number: "190+",
      text: "Countries connected",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatCard {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-9px);
            }
          }

          @media (max-width: 768px) {
            .about-hero-section {
              min-height: 605px !important;
              padding: 58px 24px 70px !important;
              background-position: center !important;
            }
            .about-hero-content { max-width: 100% !important; }
            .about-hero-breadcrumb {
              padding: 10px 16px !important;
              font-size: 14px !important;
              margin-bottom: 28px !important;
            }
            .about-hero-badge { display: none !important; }
            .about-hero-title {
              font-size: 36px !important;
              line-height: 1.12 !important;
              letter-spacing: -1px !important;
              max-width: 100% !important;
              margin-bottom: 24px !important;
            }
            .about-hero-desc {
              font-size: 18px !important;
              line-height: 1.55 !important;
              max-width: 100% !important;
              margin-bottom: 0 !important;
              font-weight: 600 !important;
            }
            .about-hero-actions,
            .about-hero-stats,
            .about-hero-floating-panel { display: none !important; }
          }

          @media (max-width: 420px) {
            .about-hero-section { padding: 56px 24px 68px !important; }
            .about-hero-title { font-size: 34px !important; }
            .about-hero-desc { font-size: 17px !important; }
          }

        `}
      </style>

      <section style={styles.hero} className="about-hero-section">
        <div style={styles.content} className="about-hero-content">
          <div style={styles.breadcrumb} className="about-hero-breadcrumb">
            <Home size={15} />
           <Link style={styles.home} to="/"> Home</Link> <span style={styles.slash}>/</span>
            <span style={styles.active}>About</span>
          </div>

          <div style={styles.badge} className="about-hero-badge">
            <span style={styles.dot}></span>
            INDIA-FOCUSED IMPORT EXPORT PLATFORM
          </div>

          <h1 style={styles.title} className="about-hero-title">
            India-Focused Trade
            <br />
            <span style={styles.gradientText}>Advisory Platform</span>
          </h1>

          <p style={styles.desc} className="about-hero-desc">
            Not just a freight forwarder. MCargo operates at the intersection of
            regulatory compliance advisory, freight execution, and digital
            freight enablement — de-risking your international trade before
            cargo moves.
          </p>

          <div style={styles.actions} className="about-hero-actions">
            <button
              style={styles.primaryBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Explore Our Services <ArrowRight size={17} />
            </button>

            <button
              style={styles.secondaryBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              }}
            >
              Download Brochure
            </button>
          </div>

          <div style={styles.statsRow} className="about-hero-stats">
            {stats.map((item, index) => (
              <div
                key={index}
                style={styles.statCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                }}
              >
                <div style={styles.statIcon}>{item.icon}</div>
                <div style={styles.statNumber}>{item.number}</div>
                <div style={styles.statText}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.floatingPanel} className="about-hero-floating-panel">
          <div style={styles.panelTop}>
            <div style={styles.panelIcon}>
              <ShieldCheck size={22} />
            </div>

            <div>
              <div style={styles.panelTitle}>Compliance-first logistics</div>
              <div style={styles.panelText}>Docs before movement</div>
            </div>
          </div>

          <div style={styles.panelText}>
            Built to reduce duty errors, clearance delays and route uncertainty.
          </div>

          <div style={styles.progress}>
            <div style={styles.progressFill}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;