import React from "react";
import { ShieldCheck, Check } from "lucide-react";

const CustomsClearanceOverview = () => {
  const capabilities = [
    "IEC registration & ICEGATE linking",
    "FSSAI licensing & plant quarantine",
    "SVB registration for related-party imports",
    "HS classification & duty calculation",
    "EPCG, Advance Authorization, DFIA support",
    "RoDTEP, RoSCTL, and duty drawback guidance",
  ];

  const brand = "#2e3192";

  const styles = {
    section: {
      padding: "105px 9%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "0.9fr 1fr",
      gap: "80px",
      alignItems: "start",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 15px",
      borderRadius: "999px",
      background: "#EEF0FF",
      color: brand,
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "0.5px",
      marginBottom: "28px",
    },
    title: {
      fontSize: "40px",
      lineHeight: "1.18",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 25px",
      letterSpacing: "-1px",
    },
    desc: {
      fontSize: "17px",
      lineHeight: "1.78",
      color: "#475467",
      margin: 0,
      maxWidth: "650px",
    },
    rightLabel: {
      color: "#98A2B3",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "2px",
      marginBottom: "20px",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "13px",
    },
    item: {
      background: "#ffffff",
      border: "1px solid #E8EEF7",
      borderRadius: "16px",
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      boxShadow: "0 8px 20px rgba(15,23,42,0.025)",
      transition: "all 0.28s ease",
      position: "relative",
      overflow: "hidden",
    },
    itemLeft: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      position: "relative",
      zIndex: 2,
    },
    number: {
      width: "32px",
      height: "32px",
      borderRadius: "10px",
      background: "#EEF0FF",
      color: brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: "800",
      flexShrink: 0,
      transition: "all 0.25s ease",
    },
    itemText: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#101828",
      lineHeight: "1.45",
    },
    check: {
      color: brand,
      flexShrink: 0,
      position: "relative",
      zIndex: 2,
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-35px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(35px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .cc-capability::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(46,49,146,0.08), rgba(18,168,232,0.04));
          transform: translateX(-100%);
          transition: transform 0.35s ease;
        }
        .cc-capability:hover::before { transform: translateX(0); }
        .cc-capability:hover {
          transform: translateY(-4px);
          border-color: #b9c0ef !important;
          box-shadow: 0 16px 34px rgba(46,49,146,0.10) !important;
        }
        .cc-capability:hover .cap-number {
          background: #2e3192 !important;
          color: #ffffff !important;
        }
        @media (max-width: 992px) {
          .cc-overview-container { grid-template-columns: 1fr !important; gap: 55px !important; }
          .cc-overview-title { font-size: 34px !important; }
        }
        @media (max-width: 576px) {
          .cc-overview-section { padding: 75px 6% !important; }
          .cc-overview-title { font-size: 30px !important; }
          .cc-overview-desc { font-size: 16px !important; }
          .cc-capability { padding: 16px !important; }
        }
      `}</style>

      <section className="cc-overview-section" style={styles.section}>
        <div className="cc-overview-container" style={styles.container}>
          <div style={{ animation: "fadeLeft 0.8s ease forwards" }}>
            <div style={styles.badge}>
              <ShieldCheck size={15} />
              ABOUT THIS SERVICE
            </div>

            <h2 className="cc-overview-title" style={styles.title}>
              Customs Clearance & Trade Advisory
            </h2>

            <p className="cc-overview-desc" style={styles.desc}>
              India&apos;s trade regulatory landscape requires expert navigation.
              We provide end-to-end trade advisory starting with IEC registration,
              ICEGATE linking, AD code setup, and product-specific compliance
              such as FSSAI, Plant Quarantine, BIS/ISI certification. Our customs
              clearance services include import/export documentation, duty
              optimization, EPCG, Advance Authorization, DFIA, RoDTEP support,
              and SVB handling for related-party transactions.
            </p>
          </div>

          <div style={{ animation: "fadeRight 0.8s ease forwards" }}>
            <div style={styles.rightLabel}>KEY CAPABILITIES</div>

            <div style={styles.list}>
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="cc-capability"
                  style={{
                    ...styles.item,
                    animation: `fadeRight 0.65s ease ${index * 0.08}s both`,
                  }}
                >
                  <div style={styles.itemLeft}>
                    <div className="cap-number" style={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div style={styles.itemText}>{item}</div>
                  </div>
                  <Check size={18} style={styles.check} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomsClearanceOverview;