import React from "react";
import { Ship, Check } from "lucide-react";

const FreightOverview = () => {
  const capabilities = [
    "Full Container Load (FCL) and LCL consolidation",
    "Reefer containers via select carriers with temperature monitoring",
    "Air freight - standard and express",
    "Port pair optimization and route planning",
    "Expert recommendations on compliance requirements",
    "Pre-shipment compliance advisory",
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

    left: {
      animation: "fadeLeft 0.8s ease forwards",
    },

    right: {
      animation: "fadeRight 0.8s ease forwards",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 15px",
      borderRadius: "999px",
      background: "#EEF4FF",
      color: "#2e3192",
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
      background: "#EEF4FF",
      color: "#2e3192",
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
      color: "#2e3192",
      flexShrink: 0,
      position: "relative",
      zIndex: 2,
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(-35px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(35px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .freight-capability::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(40,72,190,0.08), rgba(18,168,232,0.05));
            transform: translateX(-100%);
            transition: transform 0.35s ease;
          }

          .freight-capability:hover::before {
            transform: translateX(0);
          }

          .freight-capability:hover {
            transform: translateY(-4px);
            border-color: #B8C6EF !important;
            box-shadow: 0 16px 34px rgba(40,72,190,0.10) !important;
          }

          .freight-capability:hover .cap-number {
            background: #2e3192 !important;
            color: #ffffff !important;
          }

          @media (max-width: 992px) {
            .freight-overview-container {
              grid-template-columns: 1fr !important;
              gap: 55px !important;
            }

            .freight-overview-title {
              font-size: 34px !important;
            }
          }

          @media (max-width: 576px) {
            .freight-overview-section {
              padding: 75px 6% !important;
            }

            .freight-overview-title {
              font-size: 30px !important;
            }

            .freight-overview-desc {
              font-size: 16px !important;
            }

            .freight-capability {
              padding: 16px !important;
            }
          }
        `}
      </style>

      <section className="freight-overview-section" style={styles.section}>
        <div className="freight-overview-container" style={styles.container}>
          <div style={styles.left}>
            <div style={styles.badge}>
              <Ship size={15} />
              ABOUT THIS SERVICE
            </div>

            <h2 className="freight-overview-title" style={styles.title}>
              Freight Forwarding
            </h2>

            <p className="freight-overview-desc" style={styles.desc}>
              Comprehensive freight forwarding services combining FCL/LCL Ocean
              / Air Freight, air cargo, and reefer containers with upfront
              compliance advisory. From port pair selection to container booking,
              we ensure regulatory compliance before cargo moves - avoiding
              detention, shelf life issues, and documentation mismatches.
            </p>
          </div>

          <div style={styles.right}>
            <div style={styles.rightLabel}>KEY CAPABILITIES</div>

            <div style={styles.list}>
              {capabilities.map((item, index) => (
                <div
                  key={index}
                  className="freight-capability"
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

export default FreightOverview;