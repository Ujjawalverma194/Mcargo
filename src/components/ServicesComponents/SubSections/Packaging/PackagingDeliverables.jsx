import React from "react";

const PackagingDeliverables = () => {
  const brand = "#2e3192";

  const deliverables = [
    "Custom wooden crating for equipment",
    "Export-quality palletization",
    "Shrink wrapping and weatherproofing",
    "Fumigation and ISPM-15 heat treatment",
    "Protective packaging materials",
    "Compliance with import regulations",
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
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "24px",
    },

    card: {
      background: "#ffffff",
      border: "1px solid #E8EEF7",
      borderRadius: "20px",
      padding: "34px 30px",
      minHeight: "132px",
      boxShadow: "0 10px 26px rgba(15,23,42,0.04)",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    },

    number: {
      width: "40px",
      height: "40px",
      borderRadius: "13px",
      background: "#EEF0FF",
      color: brand,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      fontWeight: "850",
      marginBottom: "30px",
      transition: "all 0.25s ease",
      position: "relative",
      zIndex: 2,
    },

    text: {
      fontSize: "15px",
      fontWeight: "750",
      color: "#101828",
      lineHeight: "1.45",
      position: "relative",
      zIndex: 2,
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes deliverFadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .pack-deliver-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(46,49,146,0.075), rgba(18,168,232,0.035));
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .pack-deliver-card::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #2e3192, #12A8E8);
            transform: translateX(-50%);
            transition: width 0.3s ease;
          }

          .pack-deliver-card:hover {
            transform: translateY(-6px);
            border-color: #b9c0ef !important;
            box-shadow: 0 20px 42px rgba(46,49,146,0.11) !important;
          }

          .pack-deliver-card:hover::before {
            opacity: 1;
          }

          .pack-deliver-card:hover::after {
            width: 72%;
          }

          .pack-deliver-card:hover .deliver-number {
            background: #2e3192 !important;
            color: #ffffff !important;
            transform: scale(1.06);
          }

          @media (max-width: 992px) {
            .pack-deliver-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 576px) {
            .pack-deliver-section {
              padding: 75px 6% !important;
            }

            .pack-deliver-grid {
              grid-template-columns: 1fr !important;
            }

            .pack-deliver-title {
              font-size: 24px !important;
            }

            .pack-deliver-card {
              padding: 28px 24px !important;
            }
          }
        `}
      </style>

      <section className="pack-deliver-section" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 className="pack-deliver-title" style={styles.title}>
              What we deliver
            </h2>

            <p style={styles.desc}>
              Core capabilities of our Packaging & Palletization service
            </p>
          </div>

          <div className="pack-deliver-grid" style={styles.grid}>
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="pack-deliver-card"
                style={{
                  ...styles.card,
                  animation: `deliverFadeUp 0.6s ease ${
                    index * 0.08
                  }s both`,
                }}
              >
                <div className="deliver-number" style={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div style={styles.text}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagingDeliverables;