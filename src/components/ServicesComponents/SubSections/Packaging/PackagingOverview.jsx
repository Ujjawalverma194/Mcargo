import React from "react";
import { Package, Check } from "lucide-react";

const PackagingOverview = () => {
  const brand = "#2e3192";

  const capabilities = [
    "Custom wooden crating for equipment",
    "Export-quality palletization",
    "Shrink wrapping and weatherproofing",
    "Fumigation and ISPM-15 heat treatment",
    "Protective packaging materials",
    "Compliance with import regulations",
  ];

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
      <style>
        {`
          @keyframes packFadeLeft {
            from { opacity: 0; transform: translateX(-35px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes packFadeRight {
            from { opacity: 0; transform: translateX(35px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .pack-capability::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(46,49,146,0.08), rgba(18,168,232,0.04));
            transform: translateX(-100%);
            transition: transform 0.35s ease;
          }

          .pack-capability:hover::before {
            transform: translateX(0);
          }

          .pack-capability:hover {
            transform: translateY(-4px);
            border-color: #b9c0ef !important;
            box-shadow: 0 16px 34px rgba(46,49,146,0.10) !important;
          }

          .pack-capability:hover .pack-number {
            background: #2e3192 !important;
            color: #ffffff !important;
          }

          @media (max-width: 992px) {
            .pack-overview-container {
              grid-template-columns: 1fr !important;
              gap: 55px !important;
            }

            .pack-overview-title {
              font-size: 34px !important;
            }
          }

          @media (max-width: 576px) {
            .pack-overview-section {
              padding: 75px 6% !important;
            }

            .pack-overview-title {
              font-size: 30px !important;
            }

            .pack-overview-desc {
              font-size: 16px !important;
            }

            .pack-capability {
              padding: 16px !important;
            }
          }
        `}
      </style>

      <section className="pack-overview-section" style={styles.section}>
        <div className="pack-overview-container" style={styles.container}>
          <div style={{ animation: "packFadeLeft 0.8s ease forwards" }}>
            <div style={styles.badge}>
              <Package size={15} />
              ABOUT THIS SERVICE
            </div>

            <h2 className="pack-overview-title" style={styles.title}>
              Packaging & Palletization
            </h2>

            <p className="pack-overview-desc" style={styles.desc}>
              Professional packaging services ensuring cargo protection and
              import compliance. Custom wooden crating, export-quality
              palletization, shrink-wrapping, and fumigation certification
              including ISPM-15 heat treatment for wooden packaging. Essential
              for protecting high-value cargo, meeting phytosanitary
              requirements, and avoiding detention due to packaging
              non-compliance.
            </p>
          </div>

          <div style={{ animation: "packFadeRight 0.8s ease forwards" }}>
            <div style={styles.rightLabel}>KEY CAPABILITIES</div>

            <div style={styles.list}>
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="pack-capability"
                  style={{
                    ...styles.item,
                    animation: `packFadeRight 0.65s ease ${
                      index * 0.08
                    }s both`,
                  }}
                >
                  <div style={styles.itemLeft}>
                    <div className="pack-number" style={styles.number}>
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

export default PackagingOverview;