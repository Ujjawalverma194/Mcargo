import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PackagingHero = () => {
  const stats = [
    { number: "ISPM-15", label: "Fumigation Certified" },
    { number: "Custom", label: "Wooden Crating" },
    { number: "Anti-static", label: "& UV Resistant Films" },
    { number: "On-site", label: "Packaging Operations" },
  ];

  const styles = {
    hero: {
      minHeight: "620px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      backgroundImage:
        'linear-gradient(90deg, rgba(8,17,38,0.68), rgba(8,17,38,0.16)), url("https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1400&q=80&fit=crop")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
    },

    container: {
      maxWidth: "1450px",
      width: "100%",
      margin: "0 auto",
      padding: "95px 9% 145px",
      position: "relative",
      zIndex: 2,
    },

    breadcrumb: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "rgba(15,23,42,0.48)",
      padding: "11px 18px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "175px",
      backdropFilter: "blur(10px)",
    },

    crumbLink: {
      color: "rgba(255,255,255,0.82)",
      textDecoration: "none",
      transition: "all 0.25s ease",
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
      maxWidth: "650px",
    },

    subtitle: {
      color: "#ffffff",
      fontSize: "18px",
      fontWeight: "800",
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      margin: 0,
      maxWidth: "850px",
    },

    statsBar: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(8,17,38,0.42)",
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
      color: "#ffffff",
      borderRight: "1px solid rgba(255,255,255,0.14)",
    },

    statNumber: {
      fontSize: "25px",
      fontWeight: "850",
      marginBottom: "7px",
    },

    statLabel: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.72)",
    },
  };

  return (
    <>
      <style>
        {`
          .pack-crumb-link:hover {
            color: #12A8E8 !important;
            transform: translateY(-1px);
          }

          @media (max-width: 992px) {
            .pack-hero-title {
              font-size: 46px !important;
            }

            .pack-hero-breadcrumb {
              margin-bottom: 120px !important;
            }

            .pack-stats-inner {
              grid-template-columns: repeat(2, 1fr) !important;
              padding: 0 6% !important;
            }
          }

          @media (max-width: 576px) {
            .pack-hero {
              min-height: 560px !important;
            }

            .pack-hero-container {
              padding: 70px 6% 160px !important;
            }

            .pack-hero-title {
              font-size: 36px !important;
            }

            .pack-hero-subtitle {
              font-size: 15px !important;
              line-height: 1.6 !important;
            }

            .pack-hero-breadcrumb {
              font-size: 12px !important;
              margin-bottom: 90px !important;
            }

            .pack-stat {
              padding: 18px 16px !important;
            }

            .pack-stat-number {
              font-size: 20px !important;
            }
          }
        `}
      </style>

      <section className="pack-hero" style={styles.hero}>
        <div className="pack-hero-container" style={styles.container}>
          <div className="pack-hero-breadcrumb" style={styles.breadcrumb}>
            <Home size={15} color="#ffffff" />

            <Link className="pack-crumb-link" to="/" style={styles.crumbLink}>
              Home
            </Link>

            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>

            <Link
              className="pack-crumb-link"
              to="/services"
              style={styles.crumbLink}
            >
              Services
            </Link>

            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>

            <span style={styles.active}>Packaging & Palletization</span>
          </div>

          <h1 className="pack-hero-title" style={styles.title}>
            Packaging & Palletization
          </h1>

          <p className="pack-hero-subtitle" style={styles.subtitle}>
            Export crating, fumigation, ISPM-15 heat treatment
          </p>
        </div>

        <div style={styles.statsBar}>
          <div className="pack-stats-inner" style={styles.statsInner}>
            {stats.map((item, index) => (
              <div
                key={index}
                className="pack-stat"
                style={{
                  ...styles.stat,
                  borderRight:
                    index === stats.length - 1
                      ? "none"
                      : "1px solid rgba(255,255,255,0.14)",
                }}
              >
                <div className="pack-stat-number" style={styles.statNumber}>
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

export default PackagingHero;