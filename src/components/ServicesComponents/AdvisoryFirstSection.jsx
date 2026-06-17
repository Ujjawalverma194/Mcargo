import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const AdvisoryFirstSection = () => {
  const stats = [
    {
      number: "15+",
      title: "Licence Types Handled",
      text: "ADVISORY & COMPLIANCE",
    },
    {
      number: "190+",
      title: "Countries Covered",
      text: "GLOBAL PARTNER NETWORK",
    },
    {
      number: "30K+",
      title: "Shipments Executed",
      text: "SINCE INCEPTION",
      active: true,
    },
    {
      number: "100%",
      title: "Compliance-First",
      text: "BEFORE CARGO MOVES",
    },
  ];

  const risks = [
    "Incorrect HS codes create duty disputes at port",
    "Missing FSSAI licence delays perishable shipments",
    "SVB queries hold cargo for months if unresolved",
    "BIS non-compliance can result in cargo rejection",
    "Pre-assessment reduces clearance delays",
  ];

  const styles = {
    statsSection: {
      padding: "95px 9%",
      background: "#081225",
      fontFamily: "Inter, sans-serif",
      color: "#ffffff",
      position: "relative",
      overflow: "hidden",
    },

    statsContainer: {
      maxWidth: "1450px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    },

    label: {
      color: "#12BDF2",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "3px",
      marginBottom: "22px",
    },

    title: {
      fontSize: "42px",
      lineHeight: "1.15",
      fontWeight: "800",
      margin: "0 0 58px",
      letterSpacing: "-1px",
    },

    cyan: {
      color: "#12BDF2",
    },

    statGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "22px",
      overflow: "hidden",
      textAlign: "left",
      background: "rgba(255,255,255,0.015)",
    },

    statBox: {
      padding: "46px 38px",
      borderRight: "1px solid rgba(255,255,255,0.08)",
      transition: "all 0.25s ease",
    },

    activeStat: {
      background: "rgba(40,72,190,0.26)",
    },

    statNo: {
      fontSize: "44px",
      fontWeight: "850",
      lineHeight: "1",
      marginBottom: "15px",
      letterSpacing: "-1px",
    },

    plus: {
      color: "#12BDF2",
      fontSize: "26px",
      marginLeft: "4px",
    },

    statTitle: {
      fontSize: "16px",
      fontWeight: "800",
      marginBottom: "10px",
    },

    statText: {
      color: "rgba(255,255,255,0.45)",
      fontSize: "12px",
      letterSpacing: "0.8px",
      fontWeight: "600",
      marginBottom: "28px",
    },

    smallLine: {
      width: "50px",
      height: "2px",
      background: "#12BDF2",
    },

    advisorySection: {
      padding: "105px 9%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
    },

    advisoryContainer: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "75px",
      alignItems: "center",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 17px",
      background: "#ECFDF3",
      border: "1px solid #BDEFD2",
      color: "#16A34A",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "26px",
    },

    heading: {
      fontSize: "44px",
      lineHeight: "1.15",
      fontWeight: "800",
      color: "#081126",
      letterSpacing: "-1px",
      margin: "0 0 24px",
    },

    blueText: {
      background: "linear-gradient(90deg,#2848BE,#12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    desc: {
      fontSize: "16px",
      lineHeight: "1.8",
      color: "#667085",
      maxWidth: "650px",
      margin: "0 0 30px",
    },

    btn: {
      background: "#2848BE",
      color: "#ffffff",
      border: "none",
      borderRadius: "14px",
      padding: "15px 24px",
      fontSize: "14px",
      fontWeight: "800",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      boxShadow: "0 14px 30px rgba(40,72,190,0.22)",
      transition: "all 0.25s ease",
    },

    riskCard: {
      background: "#071225",
      color: "#ffffff",
      borderRadius: "24px",
      padding: "42px",
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 18px 42px rgba(15,23,42,0.12)",
    },

    riskContent: {
      position: "relative",
      zIndex: 2,
    },

    riskLabel: {
      color: "#12BDF2",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "2.5px",
      marginBottom: "14px",
    },

    riskTitle: {
      fontSize: "18px",
      lineHeight: "1.5",
      fontWeight: "800",
      margin: "0 0 30px",
    },

    riskList: {
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },

    riskItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "13px",
      color: "rgba(255,255,255,0.82)",
      fontSize: "14px",
      lineHeight: "1.55",
    },

    riskFooter: {
      borderTop: "1px solid rgba(255,255,255,0.1)",
      marginTop: "30px",
      paddingTop: "22px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "rgba(255,255,255,0.55)",
      fontSize: "13px",
    },
    
  };

  return (
    <>
      <style>
        {`
          .stat-bg-grid::before,
          .risk-bg-grid::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none;
          }

          .stat-box:hover {
            background: rgba(40,72,190,0.18);
          }

          .advisory-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 36px rgba(40,72,190,0.28);
          }

          @media (max-width: 1024px) {
            .stat-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            .advisory-grid {
              grid-template-columns: 1fr !important;
              gap: 50px !important;
            }

            .section-title {
              font-size: 36px !important;
            }

            .advisory-heading {
              font-size: 38px !important;
            }
          }

          @media (max-width: 600px) {
            .stats-section,
            .advisory-section {
              padding: 75px 6% !important;
            }

            .stat-grid {
              grid-template-columns: 1fr !important;
            }

            .stat-box {
              padding: 34px 28px !important;
              border-right: none !important;
              border-bottom: 1px solid rgba(255,255,255,0.08);
            }

            .section-title {
              font-size: 30px !important;
              margin-bottom: 42px !important;
            }

            .stat-no {
              font-size: 38px !important;
            }

            .advisory-heading {
              font-size: 32px !important;
            }

            .risk-card {
              padding: 30px 24px !important;
            }

            .advisory-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>

      <section className="stats-section stat-bg-grid" style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div style={styles.label}>BY THE NUMBERS</div>

          <h2 className="section-title" style={styles.title}>
            Scale That Inspires <span style={styles.cyan}>Confidence.</span>
          </h2>

          <div className="stat-grid" style={styles.statGrid}>
            {stats.map((item, index) => (
              <div
                key={index}
                className="stat-box"
                style={{
                  ...styles.statBox,
                  ...(item.active ? styles.activeStat : {}),
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="stat-no" style={styles.statNo}>
                  {item.number.replace("+", "").replace("%", "")}
                  {item.number.includes("+") && (
                    <span style={styles.plus}>+</span>
                  )}
                  {item.number.includes("%") && (
                    <span style={styles.plus}>%</span>
                  )}
                </div>

                <div style={styles.statTitle}>{item.title}</div>
                <div style={styles.statText}>{item.text}</div>
                <div style={styles.smallLine}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advisory-section" style={styles.advisorySection}>
        <div className="advisory-grid" style={styles.advisoryContainer}>
          <div>
            <div style={styles.badge}>
              <Zap size={14} />
              WHY ADVISORY FIRST?
            </div>

            <h2 className="advisory-heading" style={styles.heading}>
              Most Delays Happen
              <br />
              <span style={styles.blueText}>Before Cargo Moves.</span>
            </h2>

            <p style={styles.desc}>
              India&apos;s regulatory environment is one of the most complex in
              Asia-Pacific. Incorrect classification, missing licences, and SVB
              disputes create weeks of port detention. MCargo resolves this
              before booking — not after.
            </p>

            <button className="advisory-btn" style={styles.btn}>
              Book a Free Advisory <ArrowRight size={16} />
            </button>
          </div>

          <div className="risk-card risk-bg-grid" style={styles.riskCard}>
            <div style={styles.riskContent}>
              <div style={styles.riskLabel}>COMMON PRE-SHIPMENT RISKS</div>

              <h3 style={styles.riskTitle}>
                We identify & resolve before port.
              </h3>

              <div style={styles.riskList}>
                {risks.map((risk, index) => (
                  <div key={index} style={styles.riskItem}>
                    <CheckCircle2 size={17} color="#22C55E" />
                    <span>{risk}</span>
                  </div>
                ))}
              </div>

              <div style={styles.riskFooter}>
                <ShieldCheck size={18} color="#22C55E" />
                Compliance review completed before every freight booking
              </div>
            </div>
          </div>
        </div>
        
      </section>
      {/* <hr style={styles.hr} /> */}
    </>
  );
};

export default AdvisoryFirstSection;