import React from "react";
import { Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import Image1 from "../../../../assets/FreightForwarding/Image1.png"
const FreightForwardingHero = () => {
  const stats = [
    { number: "FCL & LCL", label: "Container Types" },
    { number: "190+", label: "Destination Ports" },
    { number: "Pre-ship", label: "Advisory Check" },
    { number: "Pre-ship", label: "Compliance Check" },
  ];

  const styles = {
    hero: {
      minHeight: "620px",
      width: "100%",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.62), rgba(8,17,38,0.18)), url("https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=1400&q=80&fit=crop")',
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
      background: "rgba(15,23,42,0.45)",
      color: "rgba(255,255,255,0.85)",
      padding: "11px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "190px",
      backdropFilter: "blur(10px)",
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
      textShadow: "0 10px 30px rgba(0,0,0,0.25)",
    },

    subtitle: {
      color: "#ffffff",
      fontSize: "19px",
      fontWeight: "800",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      margin: 0,
      maxWidth: "850px",
    },

    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.38)",
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
      fontWeight: "500",
    },
    home: {
  color: "#9a9da5",
  textDecoration: "none",
},

link: {
  color: "#9a9da5",
  textDecoration: "none",
},
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 992px) {
            .ff-hero-title {
              font-size: 46px !important;
            }

            .ff-hero-breadcrumb {
              margin-bottom: 120px !important;
            }

            .ff-stats-inner {
              grid-template-columns: repeat(2, 1fr) !important;
              padding: 0 6% !important;
            }
          }

          @media (max-width: 576px) {
            .ff-hero {
              min-height: 560px !important;
            }

            .ff-hero-container {
              padding: 70px 6% 160px !important;
            }

            .ff-hero-title {
              font-size: 36px !important;
            }

            .ff-hero-subtitle {
              font-size: 15px !important;
              line-height: 1.6 !important;
            }

            .ff-hero-breadcrumb {
              font-size: 12px !important;
              margin-bottom: 90px !important;
            }

            .ff-stats-inner {
              grid-template-columns: 1fr 1fr !important;
            }

            .ff-stat {
              padding: 18px 16px !important;
            }

            .ff-stat-number {
              font-size: 20px !important;
            }
          }
        `}
      </style>

      <section className="ff-hero" style={styles.hero}>
        <div className="ff-hero-container" style={styles.container}>
<div className="ff-hero-breadcrumb" style={styles.breadcrumb}>
  <Home size={15} />

  <Link to="/" style={styles.home}>
    Home
  </Link>

  <span style={{ opacity: 0.45 }}>/</span>

  <Link to="/services" style={styles.link}>
    Services
  </Link>

  <span style={{ opacity: 0.45 }}>/</span>

  <span style={styles.active}>Freight Forwarding</span>
</div>

          <h1 className="ff-hero-title" style={styles.title}>
            Freight Forwarding
          </h1>

          <p className="ff-hero-subtitle" style={styles.subtitle}>
            Ocean and air freight with compliance-first approach
          </p>
        </div>

        <div style={styles.statsBar}>
          <div className="ff-stats-inner" style={styles.statsInner}>
            {stats.map((item, index) => (
              <div
                key={index}
                className="ff-stat"
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="ff-stat-number" style={styles.statNumber}>
                  {item.number}
                </div>
                <div style={styles.statLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FreightForwardingHero;