import React from "react";
import { Check } from "lucide-react";

const CustomsClearanceChecklist = () => {
  const brand = "#2e3192";

  const items = [
    { tag: "IEC", text: "Import Export Code registration" },
    { tag: "ICEGATE", text: "Customs portal linking & AD code" },
    { tag: "FSSAI", text: "Food Safety licensing for imports" },
    { tag: "HS Code", text: "Tariff classification & duty calc" },
    { tag: "SVB", text: "Special Valuation Branch handling" },
    { tag: "RoDTEP", text: "Duty drawback & scheme guidance" },
    { tag: "BIS / PQ", text: "Product certification & quarantine" },
    { tag: "EPCG", text: "Export promotion scheme setup" },
  ];

  const styles = {
    section: {
      padding: "105px 9% 115px",
      background: "#F7FAFD",
      borderTop: "1px solid #E5ECF7",
      borderBottom: "1px solid #E5ECF7",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    header: {
      marginBottom: "52px",
    },
    title: {
      fontSize: "28px",
      lineHeight: "1.2",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 12px",
      letterSpacing: "-0.4px",
    },
    desc: {
      fontSize: "16px",
      color: "#667085",
      margin: 0,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "14px",
    },
    item: {
      background: "#ffffff",
      border: "1px solid #E8EEF7",
      borderRadius: "16px",
      padding: "19px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "18px",
      boxShadow: "0 8px 20px rgba(15,23,42,0.035)",
      transition: "all 0.28s ease",
      position: "relative",
      overflow: "hidden",
    },
    left: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      position: "relative",
      zIndex: 2,
    },
    tag: {
      background: "#EEF0FF",
      color: brand,
      borderRadius: "999px",
      padding: "7px 12px",
      fontSize: "12px",
      fontWeight: "850",
      whiteSpace: "nowrap",
      transition: "all 0.25s ease",
    },
    text: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#101828",
      lineHeight: "1.4",
    },
    check: {
      color: "#D2DAE8",
      position: "relative",
      zIndex: 2,
      transition: "all 0.25s ease",
      flexShrink: 0,
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cc-check-item::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(46,49,146,0.07), rgba(18,168,232,0.035));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s ease;
        }
        .cc-check-item:hover::before { transform: scaleX(1); }
        .cc-check-item:hover {
          transform: translateY(-4px);
          border-color: #b9c0ef !important;
          box-shadow: 0 16px 34px rgba(46,49,146,0.10) !important;
        }
        .cc-check-item:hover .cc-tag {
          background: #2e3192 !important;
          color: #ffffff !important;
        }
        .cc-check-item:hover .cc-check {
          color: #2e3192 !important;
          transform: scale(1.12);
        }
        @media (max-width: 900px) {
          .cc-check-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 576px) {
          .cc-check-section { padding: 75px 6% !important; }
          .cc-check-title { font-size: 24px !important; }
          .cc-check-item { padding: 17px 16px !important; }
          .cc-check-left { align-items: flex-start !important; }
        }
      `}</style>

      <section className="cc-check-section" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 className="cc-check-title" style={styles.title}>
              Everything cleared. Nothing missed.
            </h2>
            <p style={styles.desc}>
              India&apos;s trade compliance landscape handled end-to-end.
            </p>
          </div>

          <div className="cc-check-grid" style={styles.grid}>
            {items.map((item, index) => (
              <div
                key={index}
                className="cc-check-item"
                style={{
                  ...styles.item,
                  animation: `fadeUp 0.55s ease ${index * 0.07}s both`,
                }}
              >
                <div className="cc-check-left" style={styles.left}>
                  <span className="cc-tag" style={styles.tag}>{item.tag}</span>
                  <span style={styles.text}>{item.text}</span>
                </div>
                <Check className="cc-check" size={17} style={styles.check} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomsClearanceChecklist;