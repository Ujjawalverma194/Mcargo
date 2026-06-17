import React from "react";
import { ClipboardCheck, Globe2, ShieldCheck } from "lucide-react";

const ServicesProcess = () => {
  const steps = [
    {
      no: "01",
      title: "Advisory First",
      text: "IEC setup, FSSAI licensing, HS classification, SVB handling — compliance mapped before any booking.",
      icon: <ClipboardCheck size={24} />,
      color: "#2e3192",
    },
    {
      no: "02",
      title: "Freight Execution",
      text: "FCL / LCL / Air / Multimodal — port pair optimised, carrier-selected, documentation complete.",
      icon: <Globe2 size={24} />,
      color: "#08739B",
    },
    {
      no: "03",
      title: "Compliance Cleared",
      text: "Duty drawback, EPCG, RoDTEP, SVB closeout — your cargo clears without surprises.",
      icon: <ShieldCheck size={24} />,
      color: "#16813E",
    },
  ];

  const styles = {
    section: {
      padding: "105px 9%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    label: {
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "4px",
      marginBottom: "22px",
    },
    title: {
      fontSize: "50px",
      lineHeight: "1.15",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 62px",
      letterSpacing: "-1.5px",
    },
    blue: {
      color: "#2e3192",
    },
    cyan: {
      color: "#159FE3",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
      position: "relative",
    },
    card: {
      position: "relative",
      background: "#ffffff",
      border: "1px solid #E8EEF7",
      borderRadius: "24px",
      padding: "34px 34px 38px",
      minHeight: "245px",
      boxShadow: "0 12px 30px rgba(15,23,42,0.04)",
      transition: "all 0.28s ease",
      overflow: "hidden",
    },
    iconBox: {
      width: "58px",
      height: "58px",
      borderRadius: "15px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "30px",
      boxShadow: "0 14px 28px rgba(40,72,190,0.18)",
    },
    number: {
      position: "absolute",
      top: "34px",
      right: "34px",
      fontSize: "56px",
      fontWeight: "800",
      color: "#F3F6FB",
      lineHeight: 1,
    },
    cardTitle: {
      fontSize: "22px",
      fontWeight: "800",
      color: "#071225",
      margin: "0 0 16px",
    },
    text: {
      fontSize: "15.5px",
      lineHeight: "1.7",
      color: "#667085",
      margin: 0,
    },
  };

  return (
    <>
      <style>
        {`
          .process-card:hover {
            transform: translateY(-6px);
            border-color: #B8C6EF !important;
            box-shadow: 0 22px 50px rgba(40,72,190,0.11) !important;
          }

          @media (max-width: 992px) {
            .process-grid {
              grid-template-columns: 1fr !important;
            }

            .process-title {
              font-size: 42px !important;
            }
          }

          @media (max-width: 576px) {
            .process-section {
              padding: 75px 6% !important;
            }

            .process-title {
              font-size: 34px !important;
            }

            .process-card {
              padding: 28px !important;
            }
          }
        `}
      </style>

      <section className="process-section" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.label}>HOW WE WORK</div>

          <h2 className="process-title" style={styles.title}>
            Three Steps. <span style={styles.blue}>Zero</span>
            <br />
            <span style={styles.cyan}>Surprises.</span>
          </h2>

          <div className="process-grid" style={styles.grid}>
            {steps.map((item) => (
              <div key={item.no} className="process-card" style={styles.card}>
                <div style={{ ...styles.iconBox, background: item.color }}>
                  {item.icon}
                </div>

                <div style={styles.number}>{item.no}</div>

                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesProcess;