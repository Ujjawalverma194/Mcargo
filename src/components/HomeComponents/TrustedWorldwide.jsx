import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  ShieldCheck,
  PackageCheck,
  ArrowRight,
} from "lucide-react";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const TrustedWorldwide = () => {
  const [paused, setPaused] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5];

  const slides = [
    { number: "1,000+", text: "Medical Equipment Shipments", icon: <ShieldCheck size={25} /> },
    { number: "2,700+", text: "Garment Shipments Handled", icon: <PackageCheck size={25} /> },
    { number: "30,000+", text: "Shipments Executed", icon: <Globe2 size={25} /> },
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const styles = {
    section: {
      background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #ffffff 100%)",
      padding: "105px 0 95px",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif",
      position: "relative",
      borderTop: "1px solid #eef2f8",
      borderBottom: "1px solid #eef2f8",
    },

    header: {
      textAlign: "center",
      marginBottom: "58px",
      position: "relative",
      zIndex: 2,
    },

    label: {
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1.2px",
      marginBottom: "16px",
    },

    heading: {
      fontSize: "42px",
      lineHeight: "1.18",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 14px",
      letterSpacing: "-1.2px",
    },

    headingBlue: {
      color: "#2848BE",
    },

    subtitle: {
      fontSize: "16px",
      color: "#667085",
      lineHeight: "1.7",
      maxWidth: "620px",
      margin: "0 auto",
    },

    sliderWrapper: {
      position: "relative",
      zIndex: 2,
      marginBottom: "82px",
    },

    fadeLeft: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "180px",
      height: "100%",
      background: "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
      zIndex: 3,
      pointerEvents: "none",
    },

    fadeRight: {
      position: "absolute",
      right: 0,
      top: 0,
      width: "180px",
      height: "100%",
      background: "linear-gradient(270deg, #ffffff 0%, rgba(255,255,255,0) 100%)",
      zIndex: 3,
      pointerEvents: "none",
    },

    slider: {
      width: "100%",
      overflow: "hidden",
      padding: "10px 0",
    },

    track: {
      display: "flex",
      gap: "28px",
      width: "max-content",
      animation: paused ? "none" : "trustedScroll 38s linear infinite",
    },

    logoCard: {
      width: "205px",
      height: "116px",
      background: "#ffffff",
      border: "1px solid #e8edf5",
      borderRadius: "22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
      transition: "all 0.25s ease",
      cursor: "pointer",
    },

    logoImg: {
      maxWidth: "105px",
      maxHeight: "68px",
      objectFit: "contain",
      filter: "grayscale(12%)",
      transition: "all 0.25s ease",
    },

    insightArea: {
      width: "90%",
      maxWidth: "1320px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 390px 1fr",
      alignItems: "center",
      gap: "30px",
      position: "relative",
      zIndex: 2,
    },

    sideCard: {
      background: "#ffffff",
      border: "1px solid #e8edf5",
      borderRadius: "24px",
      padding: "28px",
      boxShadow: "0 12px 28px rgba(15,23,42,0.055)",
      minHeight: "150px",
    },

    sideIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "18px",
    },

    sideTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#101828",
      marginBottom: "8px",
    },

    sideText: {
      fontSize: "14px",
      color: "#667085",
      lineHeight: "1.65",
      margin: 0,
    },

    statsCard: {
      width: "360px",
      minHeight: "190px",
      background: "linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
      border: "1px solid #dfe8fb",
      borderRadius: "28px",
      padding: "34px",
      boxSizing: "border-box",
      boxShadow: "0 22px 55px rgba(40,72,190,0.12)",
      position: "relative",
      overflow: "hidden",
      animation: "statPop 0.45s ease",
    },

    statsTop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },

    statsIcon: {
      width: "52px",
      height: "52px",
      borderRadius: "16px",
      background: "#2848BE",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 26px rgba(40,72,190,0.22)",
    },

    slideTag: {
      fontSize: "12px",
      fontWeight: "700",
      color: "#2848BE",
      background: "#EEF4FF",
      padding: "7px 12px",
      borderRadius: "999px",
    },

    statNumber: {
      fontSize: "62px",
      lineHeight: "1",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 12px",
      letterSpacing: "-2px",
    },

    statText: {
      fontSize: "16px",
      color: "#667085",
      margin: 0,
    },

    arrowRow: {
      display: "flex",
      justifyContent: "center",
      gap: "14px",
      marginTop: "26px",
    },

    arrowBtn: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "1px solid #e2e8f4",
      background: "#ffffff",
      color: "#475467",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 16px rgba(15,23,42,0.08)",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    dots: {
      marginTop: "28px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    },

    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#d8dce4",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    activeDot: {
      width: "34px",
      height: "8px",
      borderRadius: "999px",
      background: "#2848BE",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    bottomCta: {
      margin: "66px auto 0",
      width: "fit-content",
      background: "#ffffff",
      border: "1px solid #e4ebf7",
      borderRadius: "999px",
      padding: "10px 10px 10px 24px",
      display: "flex",
      alignItems: "center",
      gap: "18px",
      boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
      color: "#101828",
      fontSize: "15px",
      fontWeight: "600",
      position: "relative",
      zIndex: 2,
    },

    ctaBtn: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "#2848BE",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes trustedScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes statPop {
            from { opacity: 0; transform: scale(0.96) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @media (max-width: 768px) {
            .trusted-section {
              padding: 88px 0 78px !important;
            }

            .trusted-header {
              margin-bottom: 52px !important;
              padding: 0 24px !important;
            }

            .trusted-heading {
              display: none !important;
            }

            .trusted-subtitle {
              display: none !important;
            }

            .trusted-slider-wrapper {
              margin-bottom: 68px !important;
            }

            .trusted-fade-left,
            .trusted-fade-right {
              width: 80px !important;
            }

            .trusted-logo-card {
              width: 155px !important;
              height: 96px !important;
              border-radius: 20px !important;
              opacity: 0.55 !important;
            }

            .trusted-logo-img {
              max-width: 92px !important;
              max-height: 58px !important;
            }

            .trusted-track {
              gap: 22px !important;
            }

            .trusted-insight-area {
              width: calc(100% - 48px) !important;
              grid-template-columns: 1fr !important;
              gap: 18px !important;
            }

            .trusted-side-card {
              display: none !important;
            }

            .trusted-stats-card {
              width: 100% !important;
              min-height: 250px !important;
              padding: 28px 24px !important;
              border-radius: 24px !important;
              background: linear-gradient(135deg, #2848BE 0%, #12A8E8 100%) !important;
              color: #ffffff !important;
            }

            .trusted-stats-icon {
              background: rgba(255,255,255,0.18) !important;
            }

            .trusted-slide-tag {
              background: rgba(255,255,255,0.18) !important;
              color: #ffffff !important;
            }

            .trusted-stat-number {
              font-size: 46px !important;
              color: #ffffff !important;
            }

            .trusted-stat-text {
              color: rgba(255,255,255,0.9) !important;
              font-size: 15px !important;
              line-height: 1.45 !important;
            }

            .trusted-arrow-row {
              position: absolute !important;
              left: -18px !important;
              right: -18px !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
              justify-content: space-between !important;
              margin-top: 0 !important;
              pointer-events: none !important;
            }

            .trusted-arrow-btn {
              pointer-events: auto !important;
              width: 48px !important;
              height: 48px !important;
            }

            .trusted-dots {
              margin-top: 34px !important;
            }

            .trusted-bottom-cta {
              width: calc(100% - 48px) !important;
              box-sizing: border-box !important;
              justify-content: space-between !important;
              margin-top: 70px !important;
              font-size: 14px !important;
            }
          }

          @media (max-width: 420px) {
            .trusted-section {
              padding: 82px 0 72px !important;
            }

            .trusted-stats-card {
              min-height: 222px !important;
            }

            .trusted-stat-number {
              font-size: 42px !important;
            }
          }
        `}
      </style>

      <section style={styles.section} className="trusted-section">
        <div style={styles.header} className="trusted-header">
          <div style={styles.label}>TRUSTED WORLDWIDE</div>

          <h2 style={styles.heading} className="trusted-heading">
            Trusted by brands moving cargo
            <br />
            <span style={styles.headingBlue}>across global trade lanes</span>
          </h2>

          <p style={styles.subtitle} className="trusted-subtitle">
            Reliable logistics support for importers, exporters, manufacturers
            and fast-growing businesses.
          </p>
        </div>

        <div style={styles.sliderWrapper} className="trusted-slider-wrapper">
          <div style={styles.fadeLeft} className="trusted-fade-left"></div>
          <div style={styles.fadeRight} className="trusted-fade-right"></div>

          <div
            style={styles.slider}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setHoveredLogo(null);
            }}
          >
            <div style={styles.track} className="trusted-track">
              {logos.map((logo, index) => {
                const isLogoHovered = hoveredLogo === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredLogo(index)}
                    onMouseLeave={() => setHoveredLogo(null)}
                    className="trusted-logo-card"
                    style={{
                      ...styles.logoCard,
                      border: isLogoHovered
                        ? "1.5px solid #b8c6ef"
                        : "1px solid #e8edf5",
                      boxShadow: isLogoHovered
                        ? "0 14px 30px rgba(40,72,190,0.12)"
                        : "0 8px 20px rgba(15,23,42,0.04)",
                      transform: isLogoHovered ? "translateY(-4px)" : "translateY(0)",
                    }}
                  >
                    <img
                      src={logo}
                      alt=""
                      className="trusted-logo-img"
                      style={{
                        ...styles.logoImg,
                        filter: isLogoHovered ? "grayscale(0%)" : "grayscale(12%)",
                        transform: isLogoHovered ? "scale(1.04)" : "scale(1)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div style={styles.insightArea} className="trusted-insight-area">
          <div style={styles.sideCard} className="trusted-side-card">
            <div style={styles.sideIcon}>
              <Globe2 size={22} />
            </div>
            <div style={styles.sideTitle}>Global coordination</div>
            <p style={styles.sideText}>
              Strong agent support across ports, airports and delivery networks.
            </p>
          </div>

          <div>
            <div key={activeSlide} style={styles.statsCard} className="trusted-stats-card">
              <div style={styles.statsTop}>
                <div style={styles.statsIcon} className="trusted-stats-icon">{slides[activeSlide].icon}</div>
                <div style={styles.slideTag} className="trusted-slide-tag">0{activeSlide + 1} / 03</div>
              </div>

              <h2 style={styles.statNumber} className="trusted-stat-number">{slides[activeSlide].number}</h2>
              <p style={styles.statText} className="trusted-stat-text">{slides[activeSlide].text}</p>
            </div>

            <div style={styles.arrowRow} className="trusted-arrow-row">
              <button onClick={prevSlide} style={styles.arrowBtn} className="trusted-arrow-btn">
                <ChevronLeft size={21} />
              </button>

              <button onClick={nextSlide} style={styles.arrowBtn} className="trusted-arrow-btn">
                <ChevronRight size={21} />
              </button>
            </div>

            <div style={styles.dots} className="trusted-dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  style={activeSlide === index ? styles.activeDot : styles.dot}
                ></span>
              ))}
            </div>
          </div>

          <div style={styles.sideCard} className="trusted-side-card">
            <div style={styles.sideIcon}>
              <PackageCheck size={22} />
            </div>
            <div style={styles.sideTitle}>Handled with care</div>
            <p style={styles.sideText}>
              From documentation to delivery, cargo visibility stays clear.
            </p>
          </div>
        </div>

        <div style={styles.bottomCta} className="trusted-bottom-cta">
          Looking for reliable logistics support?
          <div style={styles.ctaBtn}>
            <ArrowRight size={18} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedWorldwide;