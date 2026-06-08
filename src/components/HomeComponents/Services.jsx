import React, { useState } from "react";
import {
  Ship,
  FileCheck,
  ShieldCheck,
  Truck,
  Globe2,
  PackageCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import freightImg from "../../assets/freight.jpg";
import customsImg from "../../assets/customs.jpg";
import advisoryImg from "../../assets/advisory.jpg";
import transportImg from "../../assets/transport.jpg";
import warehouseImg from "../../assets/warehouse.jpg";
import packingImg from "../../assets/packing.jpg";

const Services = () => {
  const [hovered, setHovered] = useState(null);
  const [addonHover, setAddonHover] = useState(false);
  const [consultHover, setConsultHover] = useState(false);

  const services = [
    {
      title: "Ocean / Air Freight",
      text: "FCL, LCL, reefer containers, and project cargo across global trade lanes",
      img: freightImg,
      icon: <Ship size={26} />,
      color: "linear-gradient(135deg, #06b6d4, #14c8a8)",
    },
    {
      title: "Customs Clearance",
      text: "Import/export clearance, duty optimization, EPCG, Advance...",
      img: customsImg,
      icon: <FileCheck size={26} />,
      color: "linear-gradient(135deg, #2848BE, #12A8E8)",
    },
    {
      title: "Trade Advisory &...",
      text: "IEC registration, FSSAI licensing, SVB handling, HS classification - de-risk your...",
      img: advisoryImg,
      icon: <ShieldCheck size={26} />,
      color: "linear-gradient(135deg, #2848BE, #12A8E8)",
    },
    {
      title: "Inland Transportation",
      text: "Factory-to-port coordination, container securing, and multimodal solutions acros...",
      img: transportImg,
      icon: <Truck size={26} />,
      color: "linear-gradient(135deg, #12A8E8, #2848BE)",
    },
    {
      title: "Industry Specialization",
      text: "Food & agri imports, heavy equipment, electronics, steel - commodity-specific...",
      img: warehouseImg,
      icon: <Globe2 size={26} />,
      color: "linear-gradient(135deg, #22c55e, #4ade80)",
    },
    {
      title: "Packing & Palletization",
      text: "Export-grade packaging, lashing, and custom stuffing plans ensuring zero carg...",
      img: packingImg,
      icon: <PackageCheck size={26} />,
      color: "linear-gradient(135deg, #00898d, #00c4a7)",
    },
  ];

  const styles = {
    section: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f7faff 48%, #ffffff 100%)",
      padding: "105px 9% 115px",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
      position: "relative",
      borderTop: "1px solid #eef2f8",
    },

    gridBg: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(40,72,190,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(40,72,190,0.035) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 75%)",
      animation: "gridMove 22s linear infinite",
      pointerEvents: "none",
    },

    top: {
      maxWidth: "1450px",
      margin: "0 auto 55px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      position: "relative",
      zIndex: 2,
      animation: "fadeUp 0.7s ease forwards",
    },

    label: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1px",
      marginBottom: "22px",
      background: "#EEF4FF",
      padding: "8px 15px",
      borderRadius: "999px",
      border: "1px solid #dbe6ff",
    },

    heading: {
      fontSize: "48px",
      lineHeight: "1.15",
      fontWeight: "700",
      color: "#101828",
      letterSpacing: "-1.5px",
      margin: 0,
    },

    blue: {
      color: "#2848BE",
    },

    desc: {
      marginTop: "24px",
      fontSize: "18px",
      lineHeight: "1.65",
      color: "#667085",
      maxWidth: "720px",
    },

    topBtn: {
      background: "#2848BE",
      color: "#ffffff",
      border: "none",
      borderRadius: "15px",
      padding: "16px 30px",
      fontSize: "15px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      cursor: "pointer",
      boxShadow: "0 14px 30px rgba(40,72,190,0.24)",
      transition: "all 0.25s ease",
      textDecoration: "none",
    },

    statsStrip: {
      maxWidth: "1450px",
      margin: "0 auto 42px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
      position: "relative",
      zIndex: 2,
      animation: "fadeUp 0.85s ease forwards",
    },

    statBox: {
      background: "rgba(255,255,255,0.86)",
      border: "1px solid #e8edf7",
      borderRadius: "18px",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      boxShadow: "0 10px 24px rgba(15,23,42,0.045)",
      backdropFilter: "blur(8px)",
    },

    statIcon: {
      width: "42px",
      height: "42px",
      borderRadius: "12px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },

    statTitle: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#101828",
      marginBottom: "3px",
    },

    statText: {
      fontSize: "13px",
      color: "#667085",
    },

    grid: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
      position: "relative",
      zIndex: 2,
    },

    card: {
      background: "#ffffff",
      borderRadius: "24px",
      overflow: "hidden",
      minHeight: "466px",
      border: "1px solid #e8edf5",
      boxShadow: "0 8px 22px rgba(15,23,42,0.045)",
      transition: "all 0.28s ease",
      cursor: "pointer",
      position: "relative",
      animation: "fadeUp 0.9s ease forwards",
    },

    imageBox: {
      height: "250px",
      position: "relative",
      overflow: "hidden",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.65s ease",
    },

    fade: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0) 20%, rgba(255,255,255,0.98) 90%)",
      zIndex: 1,
    },

    iconBox: {
      position: "absolute",
      right: "24px",
      top: "24px",
      width: "60px",
      height: "60px",
      borderRadius: "17px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      zIndex: 2,
      boxShadow: "0 14px 28px rgba(15,23,42,0.18)",
      transition: "all 0.28s ease",
    },

    content: {
      padding: "0 38px 36px",
      marginTop: "-13px",
      position: "relative",
      zIndex: 3,
    },

    title: {
      fontSize: "23px",
      lineHeight: "1.25",
      fontWeight: "700",
      marginBottom: "16px",
      transition: "color 0.25s ease",
    },

    text: {
      fontSize: "15px",
      lineHeight: "1.6",
      color: "#667085",
      marginBottom: "26px",
    },

    link: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "15px",
      fontWeight: "700",
      textDecoration: "none",
      transition: "all 0.25s ease",
    },

    addon: {
      width: "650px",
      minHeight: "72px",
      margin: "62px auto 0",
      background:
        "linear-gradient(90deg, #ffffff 0%, #f7faff 100%)",
      borderRadius: "20px",
      border: "1px solid #e2eaf7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      boxShadow: "0 12px 28px rgba(15,23,42,0.06)",
      color: "#1846b8",
      fontWeight: "700",
      fontSize: "16px",
      cursor: "pointer",
      transition: "all 0.25s ease",
      position: "relative",
      zIndex: 2,
    },

    addonSmall: {
      color: "#8a94a6",
      fontSize: "13px",
      fontWeight: "500",
    },

    consult: {
      margin: "48px auto 0",
      width: "410px",
      height: "64px",
      borderRadius: "999px",
      border: "1px solid #e2eaf7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      color: "#101828",
      fontSize: "15px",
      fontWeight: "600",
      background: "#ffffff",
      boxShadow: "0 10px 24px rgba(15,23,42,0.055)",
      transition: "all 0.25s ease",
      cursor: "pointer",
      position: "relative",
      zIndex: 2,
    },

    circleArrow: {
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      boxShadow: "0 8px 18px rgba(40,72,190,0.22)",
      transition: "all 0.25s ease",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(26px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 80px 80px; }
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.gridBg}></div>

        <div style={styles.top}>
          <div>
            <div style={styles.label}>
              <Sparkles size={15} />
              OUR SERVICES
            </div>

            <h2 style={styles.heading}>
              From Documentation to
              <br />
              <span style={styles.blue}>Delivery</span>
            </h2>

            <p style={styles.desc}>
              Advisory-led logistics - combining compliance expertise, freight
              execution, and digital tools to de-risk your international trade.
            </p>
          </div>

          <button
            style={styles.topBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 18px 38px rgba(40,72,190,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 14px 30px rgba(40,72,190,0.24)";
            }}
          >
            View All Services
            <ArrowRight size={19} />
          </button>
        </div>

        <div style={styles.statsStrip}>
          <div style={styles.statBox}>
            <div style={styles.statIcon}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={styles.statTitle}>Compliance Ready</div>
              <div style={styles.statText}>Docs, duty & licensing handled</div>
            </div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statIcon}>
              <Globe2 size={20} />
            </div>
            <div>
              <div style={styles.statTitle}>Global Trade Support</div>
              <div style={styles.statText}>190+ countries network coverage</div>
            </div>
          </div>

          <div style={styles.statBox}>
            <div style={styles.statIcon}>
              <Truck size={20} />
            </div>
            <div>
              <div style={styles.statTitle}>End-to-End Delivery</div>
              <div style={styles.statText}>Port, warehouse & last-mile flow</div>
            </div>
          </div>
        </div>

        <div style={styles.grid}>
          {services.map((service, index) => {
            const isHovered = hovered === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...styles.card,
                  border: isHovered
                    ? "1.5px solid #b8c6ef"
                    : "1px solid #e8edf5",
                  boxShadow: isHovered
                    ? "0 18px 42px rgba(40,72,190,0.14)"
                    : "0 8px 22px rgba(15,23,42,0.045)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                <div style={styles.imageBox}>
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{
                      ...styles.image,
                      transform: isHovered ? "scale(1.045)" : "scale(1)",
                    }}
                  />

                  <div style={styles.fade}></div>

                  <div
                    style={{
                      ...styles.iconBox,
                      background: service.color,
                      transform: isHovered
                        ? "scale(1.06) rotate(-3deg)"
                        : "scale(1) rotate(0deg)",
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                <div style={styles.content}>
                  <h3
                    style={{
                      ...styles.title,
                      color: isHovered ? "#2848BE" : "#020617",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p style={styles.text}>{service.text}</p>

                  <a
                    href="#"
                    style={{
                      ...styles.link,
                      color: isHovered ? "#2848BE" : "#1846b8",
                      transform: isHovered ? "translateX(3px)" : "translateX(0)",
                    }}
                  >
                    Learn more
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div
          onMouseEnter={() => setAddonHover(true)}
          onMouseLeave={() => setAddonHover(false)}
          style={{
            ...styles.addon,
            border: addonHover
              ? "1.5px solid #2848BE"
              : "1px solid #e2eaf7",
            boxShadow: addonHover
              ? "0 16px 34px rgba(40,72,190,0.14)"
              : "0 12px 28px rgba(15,23,42,0.06)",
            transform: addonHover ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          Explore Addon Services
          <span style={styles.addonSmall}>
            ECTN, Cargo Insurance, Fumigation & more
          </span>
          <ArrowRight size={18} />
        </div>

        <div
          onMouseEnter={() => setConsultHover(true)}
          onMouseLeave={() => setConsultHover(false)}
          style={{
            ...styles.consult,
            border: consultHover
              ? "1.5px solid #2848BE"
              : "1px solid #e2eaf7",
            transform: consultHover ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <div
            style={{
              ...styles.circleArrow,
              transform: consultHover ? "rotate(-25deg)" : "rotate(0deg)",
            }}
          >
            <ArrowRight size={19} />
          </div>
          Need Compliance Consultation?
        </div>
      </section>
    </>
  );
};

export default Services;