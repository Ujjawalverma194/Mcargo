/* Hero.jsx */
import React, { useState } from "react";
import {
  ShieldCheck,
  Ship,
  FileCheck,
  Globe2,
  MessageCircle,
  ArrowRight,
  Box,
  Plane,
  Anchor,
  Truck,
  MapPin,
  FileText,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=917506340281&text=Hi%21+I+need+help+with+India+trade+compliance+and+regulatory+advisory.&type=phone_number&app_absent=0";

  const styles = {
    hero: {
      minHeight: "calc(100vh - 78px)",
      background:
        "radial-gradient(circle at 85% 20%, rgba(40,72,190,0.16), transparent 28%), radial-gradient(circle at 10% 80%, rgba(18,151,223,0.12), transparent 26%), linear-gradient(120deg, #ffffff 0%, #f7faff 42%, #eef4ff 100%)",
      fontFamily: "Inter, sans-serif",
      padding: "72px 9% 0",
      overflow: "hidden",
      position: "relative",
    },
    gridOverlay: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(40,72,190,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(40,72,190,0.045) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 82%)",
      animation: "gridMove 18s linear infinite",
      pointerEvents: "none",
    },
    scene3d: {
      position: "absolute",
      right: "4%",
      top: "70px",
      width: "440px",
      height: "440px",
      perspective: "900px",
      opacity: 0.42,
      zIndex: 1,
      pointerEvents: "none",
    },
    globe3d: {
      position: "absolute",
      inset: "64px",
      borderRadius: "50%",
      border: "1px solid rgba(40,72,190,0.22)",
      background:
        "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95), rgba(40,72,190,0.10) 45%, rgba(18,151,223,0.16))",
      boxShadow:
        "inset -18px -20px 35px rgba(40,72,190,0.12), 0 20px 60px rgba(40,72,190,0.14)",
      animation: "rotateGlobe 18s linear infinite",
    },
    orbit1: {
      position: "absolute",
      inset: "50px",
      borderRadius: "50%",
      border: "1px solid rgba(40,72,190,0.18)",
      animation: "orbitSpin 14s linear infinite",
    },
    orbit2: {
      position: "absolute",
      inset: "92px",
      borderRadius: "50%",
      border: "1px solid rgba(18,151,223,0.20)",
      animation: "orbitSpinReverse 20s linear infinite",
    },
    orbitDot: {
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#2e3192",
      top: "50%",
      left: "-5px",
      boxShadow: "0 0 18px rgba(40,72,190,0.55)",
    },
    floatingBox: {
      position: "absolute",
      width: "58px",
      height: "58px",
      borderRadius: "17px",
      background: "rgba(255,255,255,0.82)",
      border: "1px solid #dde7fb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2e3192",
      boxShadow: "0 18px 35px rgba(15,23,42,0.10)",
      zIndex: 1,
      pointerEvents: "none",
      backdropFilter: "blur(8px)",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "70px",
      alignItems: "center",
      position: "relative",
      zIndex: 3,
    },
    left: {
      animation: "fadeSlideLeft 0.85s ease forwards",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 18px",
      borderRadius: "999px",
      border: "1px solid #C8D6F8",
      background: "rgba(238,244,255,0.9)",
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "600",
      marginBottom: "34px",
      boxShadow: "0 8px 18px rgba(40,72,190,0.08)",
      animation: "badgeGlow 2.8s ease-in-out infinite",
    },
    dot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#2e3192",
      boxShadow: "0 0 0 5px rgba(40,72,190,0.12)",
    },
    title: {
      fontSize: "58px",
      lineHeight: "1.06",
      fontWeight: "700",
      color: "#0F172A",
      letterSpacing: "-2px",
      margin: "0 0 24px",
    },
    blue: {
      color: "#2e3192",
      position: "relative",
      display: "inline-block",
    },
    desc: {
      fontSize: "17px",
      lineHeight: "1.8",
      color: "#667085",
      maxWidth: "650px",
      fontWeight: "400",
      marginBottom: "30px",
    },
    actions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "30px",
    },
    primaryBtn: {
      background: "#2e3192",
      color: "#ffffff",
      border: "none",
      borderRadius: "14px",
      padding: "15px 28px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "9px",
      boxShadow: "0 12px 28px rgba(40,72,190,0.24)",
      transition: "all 0.25s ease",
    },
    secondaryBtn: {
      background: "#ffffff",
      color: "#2e3192",
      border: "1px solid #d9e3fb",
      borderRadius: "14px",
      padding: "15px 26px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },
    routePanel: {
      maxWidth: "560px",
      background: "rgba(255,255,255,0.92)",
      border: "1px solid #e4ebf7",
      borderRadius: "22px",
      padding: "18px",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "16px",
      boxShadow: "0 14px 34px rgba(15,23,42,0.08)",
      backdropFilter: "blur(10px)",
      transition: "all 0.25s ease",
    },
    routePoint: {
      display: "flex",
      alignItems: "center",
      gap: "11px",
    },
    pointIcon: {
      width: "42px",
      height: "42px",
      borderRadius: "13px",
      background: "#EEF4FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    pointLabel: {
      fontSize: "12px",
      color: "#98A2B3",
      marginBottom: "3px",
    },
    pointText: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#101828",
      whiteSpace: "nowrap",
    },
    routeMiddle: {
      height: "2px",
      width: "70px",
      background: "linear-gradient(90deg, #2e3192, #12A8E8)",
      borderRadius: "999px",
      position: "relative",
      overflow: "hidden",
    },
    movingDot: {
      position: "absolute",
      top: "-4px",
      left: 0,
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#2e3192",
      animation: "routeNavbarMove 2.8s linear infinite",
      boxShadow: "0 0 12px rgba(40,72,190,0.45)",
    },
    right: {
      position: "relative",
      animation: "fadeSlideRight 0.95s ease forwards",
    },
    imageBox: {
      height: "458px",
      borderRadius: "28px",
      overflow: "hidden",
      position: "relative",
      boxShadow: "0 26px 65px rgba(15,23,42,0.15)",
      transition: "all 0.35s ease",
      border: "1px solid rgba(255,255,255,0.9)",
    },
    heroImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.75s ease",
    },
    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.27) 100%)",
    },
    routeLine: {
      position: "absolute",
      left: "35px",
      right: "35px",
      bottom: "32px",
      height: "2px",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0.25), #ffffff, rgba(255,255,255,0.25))",
      zIndex: 3,
      overflow: "hidden",
    },
    routeDot: {
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#ffffff",
      left: 0,
      top: "-4px",
      animation: "routeMove 4.5s linear infinite",
      boxShadow: "0 0 16px rgba(255,255,255,0.9)",
    },
    floatingCard: {
      position: "absolute",
      left: "-24px",
      bottom: "-28px",
      background: "#ffffff",
      borderRadius: "18px",
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      minWidth: "250px",
      boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
      border: "1px solid #edf1f7",
      animation: "cardFloat 4s ease-in-out infinite",
    },
    cardIcon: {
      width: "50px",
      height: "50px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    cardNumber: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#0F172A",
      marginBottom: "4px",
    },
    cardText: {
      fontSize: "13px",
      color: "#98A2B3",
    },
    miniStats: {
      position: "absolute",
      right: "-20px",
      top: "35px",
      background: "#ffffff",
      borderRadius: "18px",
      padding: "18px 22px",
      border: "1px solid #edf1f7",
      boxShadow: "0 16px 35px rgba(15,23,42,0.10)",
      animation: "cardFloat 4.8s ease-in-out infinite reverse",
    },
    miniNumber: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#2e3192",
      marginBottom: "4px",
    },
    miniText: {
      fontSize: "13px",
      color: "#667085",
    },
    deliveryChip: {
      position: "absolute",
      right: "26px",
      bottom: "72px",
      zIndex: 4,
      background: "rgba(255,255,255,0.92)",
      border: "1px solid rgba(255,255,255,0.8)",
      borderRadius: "999px",
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "600",
      backdropFilter: "blur(10px)",
      animation: "chipFloat 3.5s ease-in-out infinite",
    },
    features: {
      maxWidth: "1450px",
      margin: "96px auto 0",
      paddingTop: "28px",
      borderTop: "1px solid #E8EEF8",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "38px",
      position: "relative",
      zIndex: 3,
      animation: "fadeUp 1.1s ease forwards",
    },
    feature: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "12px",
      borderRadius: "18px",
      transition: "all 0.25s ease",
    },
    featureIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.25s ease",
    },
    featureTitle: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#111827",
      marginBottom: "4px",
    },
    featureText: {
      fontSize: "13px",
      color: "#98A2B3",
      whiteSpace: "nowrap",
    },

    whatsappWrap: {
      position: "fixed",
      right: "32px",
      bottom: "32px",
      zIndex: 999,
    },
    whatsappTooltip: {
      position: "absolute",
      right: "0",
      bottom: "84px",
      background: "#ffffff",
      color: "#101828",
      padding: "13px 18px",
      borderRadius: "14px",
      boxShadow: "0 12px 28px rgba(15,23,42,0.13)",
      fontSize: "15px",
      fontWeight: 700,
      opacity: 0,
      transform: "translateY(8px)",
      pointerEvents: "none",
      transition: "all 0.25s ease",
      whiteSpace: "nowrap",
    },
    tooltipDot: {
      display: "inline-block",
      width: "8px",
      height: "8px",
      background: "#22c55e",
      borderRadius: "50%",
      marginRight: "8px",
    },
    chatBox: {
      position: "absolute",
      right: "0",
      bottom: "92px",
      width: "360px",
      background: "#ffffff",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(15,23,42,0.2)",
      border: "1px solid rgba(15,23,42,0.08)",
      transformOrigin: "bottom right",
      animation: "chatPop 0.25s ease forwards",
    },
    chatHeader: {
      background: "linear-gradient(135deg, #22c55e, #0f9f7a)",
      padding: "22px 24px",
      color: "#ffffff",
      position: "relative",
    },
    chatTitle: {
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "5px",
    },
    chatSub: {
      fontSize: "13px",
      fontWeight: 400,
      opacity: 0.95,
    },
    chatClose: {
      position: "absolute",
      right: "22px",
      top: "24px",
      cursor: "pointer",
      color: "#ffffff",
    },
    chatBody: {
      padding: "24px",
      background: "#ffffff",
    },
    supportCard: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "18px",
      borderRadius: "16px",
      background: "#ffffff",
      cursor: "pointer",
      transition: "all 0.25s ease",
      textDecoration: "none",
      color: "#101828",
    },
    supportIcon: {
      width: "54px",
      height: "54px",
      borderRadius: "15px",
      background: "#dcfce7",
      color: "#22c55e",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    supportText: {
      fontSize: "16px",
      fontWeight: 700,
    },
    chatFooter: {
      background: "#f8fafc",
      padding: "14px 24px",
      textAlign: "center",
      color: "#667085",
      fontSize: "12px",
    },
    whatsapp: {
      width: "72px",
      height: "72px",
      borderRadius: "50%",
      background: chatOpen ? "#0f8f7a" : "#25D366",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      boxShadow: "0 15px 30px rgba(37,211,102,0.35)",
      cursor: "pointer",
      transition: "all 0.25s ease",
      animation: chatOpen ? "none" : "whatsappPulse 2.6s ease-in-out infinite",
    },
  };

  const featureItems = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Compliance First",
      text: "IEC · FSSAI · SVB · HS classification",
    },
    {
      icon: <Ship size={20} />,
      title: "Full-Scope Freight",
      text: "FCL · LCL · Air · Project · ISO Tank",
    },
    {
      icon: <FileCheck size={20} />,
      title: "Customs Clearance",
      text: "First-check to final duty - handled",
    },
    {
      icon: <Globe2 size={20} />,
      title: "Agent Network",
      text: "730+ cities · 190+ countries",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeSlideLeft {
            from { opacity: 0; transform: translateX(-35px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes fadeSlideRight {
            from { opacity: 0; transform: translateX(35px); }
            to { opacity: 1; transform: translateX(0); }
          }

          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 72px 72px; }
          }

          @keyframes rotateGlobe {
            from { transform: rotateY(0deg) rotateX(8deg); }
            to { transform: rotateY(360deg) rotateX(8deg); }
          }

          @keyframes orbitSpin {
            from { transform: rotateX(68deg) rotateZ(0deg); }
            to { transform: rotateX(68deg) rotateZ(360deg); }
          }

          @keyframes orbitSpinReverse {
            from { transform: rotateX(72deg) rotateZ(360deg); }
            to { transform: rotateX(72deg) rotateZ(0deg); }
          }

          @keyframes float3d {
            0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-18px) rotateX(8deg) rotateY(-10deg); }
          }

          @keyframes cardFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          @keyframes chipFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          @keyframes routeMove {
            from { left: 0%; }
            to { left: 100%; }
          }

          @keyframes routeNavbarMove {
            from { left: 0%; }
            to { left: 100%; }
          }

          @keyframes badgeGlow {
            0%, 100% { box-shadow: 0 8px 18px rgba(40,72,190,0.08); }
            50% { box-shadow: 0 10px 26px rgba(40,72,190,0.16); }
          }

          @keyframes whatsappPulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 15px 30px rgba(37,211,102,0.35);
            }
            50% {
              transform: scale(1.06);
              box-shadow: 0 18px 38px rgba(37,211,102,0.45);
            }
          }

          @keyframes chatPop {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(12px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .hero-whatsapp-wrap:hover .hero-whatsapp-tooltip {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }

          .hero-support-card:hover {
            background: #f8fafc !important;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .hero-mobile-section {
              min-height: auto !important;
              padding: 64px 24px 70px !important;
            }

            .hero-mobile-container {
              grid-template-columns: 1fr !important;
              gap: 42px !important;
            }

            .hero-mobile-scene,
            .hero-mobile-box {
              display: none !important;
            }

            .hero-mobile-badge {
              margin-bottom: 30px !important;
              font-size: 12px !important;
              padding: 8px 15px !important;
            }

            .hero-mobile-title {
              font-size: 42px !important;
              line-height: 1.12 !important;
              letter-spacing: -1.2px !important;
              margin-bottom: 22px !important;
            }

            .hero-mobile-desc {
              font-size: 17px !important;
              line-height: 1.75 !important;
              max-width: 100% !important;
              margin-bottom: 26px !important;
            }

            .hero-mobile-actions {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 14px !important;
            }

            .hero-mobile-actions button {
              width: 100% !important;
              justify-content: center !important;
            }

            .hero-mobile-route {
              display: none !important;
            }

            .hero-mobile-image {
              height: 360px !important;
              border-radius: 24px !important;
            }

            .hero-mobile-stats {
              position: static !important;
              margin-top: 18px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }

            .hero-mobile-card {
              position: static !important;
              margin-top: 18px !important;
              width: 100% !important;
              min-width: auto !important;
              box-sizing: border-box !important;
            }

            .hero-mobile-features {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 16px !important;
              margin-top: 58px !important;
              padding-top: 24px !important;
            }

            .hero-mobile-feature {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 12px !important;
              background: rgba(255,255,255,0.65) !important;
              border: 1px solid #eef2f8 !important;
            }

            .hero-mobile-feature-text {
              white-space: normal !important;
              line-height: 1.45 !important;
            }

            .hero-whatsapp-wrap {
              right: 18px !important;
              bottom: 18px !important;
            }

            .hero-whatsapp {
              width: 58px !important;
              height: 58px !important;
            }

            .hero-whatsapp svg {
              width: 28px !important;
              height: 28px !important;
            }

            .hero-chat-box {
              width: 315px !important;
              right: 0 !important;
              bottom: 76px !important;
            }
          }

          @media (max-width: 420px) {
            .hero-mobile-title {
              font-size: 38px !important;
            }

            .hero-mobile-features {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            .hero-mobile-feature {
              padding: 12px !important;
            }

            .hero-chat-box {
              width: calc(100vw - 36px) !important;
            }
          }
        `}
      </style>

      <section style={styles.hero} className="hero-mobile-section">
        <div style={styles.gridOverlay}></div>

        <div style={styles.scene3d} className="hero-mobile-scene">
          <div style={styles.orbit1}>
            <span style={styles.orbitDot}></span>
          </div>
          <div style={styles.orbit2}>
            <span style={styles.orbitDot}></span>
          </div>
          <div style={styles.globe3d}></div>
        </div>

        <div
          className="hero-mobile-box"
          style={{
            ...styles.floatingBox,
            right: "35%",
            top: "112px",
            animation: "float3d 5s ease-in-out infinite",
          }}
        >
          <Box size={24} />
        </div>

        <div
          className="hero-mobile-box"
          style={{
            ...styles.floatingBox,
            right: "5%",
            top: "308px",
            width: "62px",
            height: "62px",
            color: "#1297df",
            animation: "float3d 6s ease-in-out infinite reverse",
          }}
        >
          <Plane size={25} />
        </div>

        <div
          className="hero-mobile-box"
          style={{
            ...styles.floatingBox,
            right: "24%",
            bottom: "150px",
            width: "54px",
            height: "54px",
            animation: "float3d 5.5s ease-in-out infinite",
          }}
        >
          <Anchor size={23} />
        </div>

        <div style={styles.container} className="hero-mobile-container">
          <div style={styles.left}>
            <div style={styles.badge} className="hero-mobile-badge">
              <span style={styles.dot}></span>
              12 YEARS · INDIA TRADE SPECIALISTS
            </div>

            <h1 style={styles.title} className="hero-mobile-title">
              Empowering your
              <br />
              <span style={styles.blue}>Global Trade</span>
            </h1>

            <p style={styles.desc} className="hero-mobile-desc">
              From HS classification and SVB filings to bonded warehousing and
              last-mile delivery - we handle every step of India's import &
              export chain so you don't have to.
            </p>

            <div style={styles.actions} className="hero-mobile-actions">
              <button style={styles.primaryBtn}>
                Free Advisory <ArrowRight size={17} />
              </button>

              <Link to="/services">
                <button style={styles.secondaryBtn}>Explore Services</button>
              </Link>
            </div>

            <div style={styles.routePanel} className="hero-mobile-route">
              <div style={styles.routePoint}>
                <div style={styles.pointIcon}>
                  <Ship size={19} />
                </div>
                <div>
                  <div style={styles.pointLabel}>Origin</div>
                  <div style={styles.pointText}>Port / Factory</div>
                </div>
              </div>

              <div style={styles.routeMiddle}>
                <span style={styles.movingDot}></span>
              </div>

              <div style={styles.routePoint}>
                <div style={styles.pointIcon}>
                  <Truck size={19} />
                </div>
                <div>
                  <div style={styles.pointLabel}>Destination</div>
                  <div style={styles.pointText}>Warehouse / Door</div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.right}>
            <div style={styles.imageBox} className="hero-mobile-image">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80"
                alt="Logistics warehouse"
                style={styles.heroImage}
              />

              <div style={styles.imageOverlay}></div>

              <div style={styles.deliveryChip}>
                <MapPin size={15} />
                Live shipment visibility
              </div>

              <div style={styles.routeLine}>
                <span style={styles.routeDot}></span>
              </div>
            </div>

            <div style={styles.miniStats} className="hero-mobile-stats">
              <div style={styles.miniNumber}>30,000+</div>
              <div style={styles.miniText}>Shipments executed</div>
            </div>

            <div style={styles.floatingCard} className="hero-mobile-card">
              <div style={styles.cardIcon}>
                <Globe2 size={22} />
              </div>
              <div>
                <div style={styles.cardNumber}>2,700+</div>
                <div style={styles.cardText}>Garment shipments handled</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.features} className="hero-mobile-features">
          {featureItems.map((item, index) => (
            <div key={index} style={styles.feature} className="hero-mobile-feature">
              <div className="feature-icon" style={styles.featureIcon}>
                {item.icon}
              </div>

              <div>
                <div style={styles.featureTitle}>{item.title}</div>
                <div style={styles.featureText} className="hero-mobile-feature-text">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.whatsappWrap} className="hero-whatsapp-wrap">
          {!chatOpen && (
            <div style={styles.whatsappTooltip} className="hero-whatsapp-tooltip">
              <span style={styles.tooltipDot}></span>
              IL Help
            </div>
          )}

          {chatOpen && (
            <div style={styles.chatBox} className="hero-chat-box">
              <div style={styles.chatHeader}>
                <div style={styles.chatTitle}>Chat with us</div>
                <div style={styles.chatSub}>Choose a department</div>

                <X
                  size={20}
                  style={styles.chatClose}
                  onClick={() => setChatOpen(false)}
                />
              </div>

              <div style={styles.chatBody}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.supportCard}
                  className="hero-support-card"
                >
                  <div style={styles.supportIcon}>
                    <FileText size={25} />
                  </div>

                  <div style={styles.supportText}>Customer Support</div>
                </a>
              </div>

              <div style={styles.chatFooter}>Response time: &lt; 2 hours</div>
            </div>
          )}

          <div
            style={styles.whatsapp}
            className="hero-whatsapp"
            onClick={() => setChatOpen((prev) => !prev)}
          >
            {chatOpen ? <X size={34} /> : <MessageCircle size={34} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;