import React from "react";

const FreightJourney = () => {
  const steps = [
    {
      icon: "🏭",
      title: "Origin",
      text: "Factory or warehouse",
    },
    {
      icon: "🚚",
      title: "Port Pickup",
      text: "Container secured",
    },
    {
      icon: "🚢",
      title: "Ocean / Air",
      text: "FCL · LCL · Express",
    },
    {
      icon: "📋",
      title: "Clearance",
      text: "Compliance handled",
    },
    {
      icon: "📦",
      title: "Delivery",
      text: "Last mile executed",
    },
  ];

  const styles = {
    section: {
      padding: "110px 9%",
      background: "#F7FAFD",
      fontFamily: "Inter, sans-serif",
      borderTop: "1px solid #E5ECF7",
      borderBottom: "1px solid #E5ECF7",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      textAlign: "center",
    },

    title: {
      fontSize: "25px",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 12px",
      animation: "fadeUp 0.65s ease forwards",
    },

    desc: {
      fontSize: "16px",
      color: "#667085",
      margin: "0 0 62px",
      animation: "fadeUp 0.75s ease forwards",
    },

    journey: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "48px",
      alignItems: "center",
      position: "relative",
    },

    stepWrap: {
      position: "relative",
    },

    connector: {
      position: "absolute",
      top: "50%",
      right: "-36px",
      width: "28px",
      height: "1px",
      background: "#D9E2EF",
      transform: "translateY(-50%)",
    },

    card: {
      background: "#ffffff",
      border: "1px solid #E5ECF7",
      borderRadius: "20px",
      minHeight: "150px",
      padding: "28px 18px",
      boxShadow: "0 10px 26px rgba(15,23,42,0.04)",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    },

    icon: {
      fontSize: "30px",
      marginBottom: "18px",
      transition: "all 0.3s ease",
    },

    cardTitle: {
      fontSize: "15px",
      fontWeight: "800",
      color: "#081126",
      marginBottom: "8px",
      transition: "color 0.25s ease",
    },

    cardText: {
      fontSize: "13px",
      color: "#98A2B3",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes lineGrow {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 28px;
              opacity: 1;
            }
          }

          .journey-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(40,72,190,0.08), rgba(18,168,232,0.05));
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .journey-card::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #2e3192, #323468);
            transform: translateX(-50%);
            transition: width 0.3s ease;
          }

          .journey-card:hover {
            transform: translateY(-7px);
            border-color: #B8C6EF !important;
            box-shadow: 0 20px 42px rgba(40,72,190,0.11) !important;
          }

          .journey-card:hover::before {
            opacity: 1;
          }

          .journey-card:hover::after {
            width: 72%;
          }

          .journey-card:hover .journey-icon {
            transform: translateY(-4px) scale(1.12);
          }

          .journey-card:hover .journey-card-title {
            color: #2e3192 !important;
          }

          .journey-connector {
            animation: lineGrow 0.7s ease forwards;
          }

          @media (max-width: 1100px) {
            .journey-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              gap: 28px !important;
            }

            .journey-connector {
              display: none !important;
            }
          }

          @media (max-width: 700px) {
            .journey-section {
              padding: 75px 6% !important;
            }

            .journey-grid {
              grid-template-columns: 1fr !important;
            }

            .journey-title {
              font-size: 22px !important;
            }
          }
        `}
      </style>

      <section className="journey-section" style={styles.section}>
        <div style={styles.container}>
          <h2 className="journey-title" style={styles.title}>
            Every leg. One partner.
          </h2>

          <p style={styles.desc}>We manage the full door-to-door journey</p>

          <div className="journey-grid" style={styles.journey}>
            {steps.map((item, index) => (
              <div
                key={index}
                style={{
                  ...styles.stepWrap,
                  animation: `fadeUp 0.65s ease ${index * 0.1}s both`,
                }}
              >
                <div className="journey-card" style={styles.card}>
                  <div className="journey-icon" style={styles.icon}>
                    {item.icon}
                  </div>

                  <div className="journey-card-title" style={styles.cardTitle}>
                    {item.title}
                  </div>

                  <div style={styles.cardText}>{item.text}</div>
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className="journey-connector"
                    style={{
                      ...styles.connector,
                      animationDelay: `${index * 0.12}s`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FreightJourney;