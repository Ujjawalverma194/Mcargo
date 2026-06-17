import React from "react";
import {
  Ship,
  ShieldCheck,
  Warehouse,
  Truck,
  PackageCheck,
  Boxes,
  AlertTriangle,
  Package,
  Home,
  Globe2,
  ArrowRight,
} from "lucide-react";

const ServicesGrid = () => {
  const featured = [
    {
      icon: <Ship size={24} />,
      title: "Freight Forwarding",
      text: "Ocean and air freight with compliance-first approach.",
      tags: [
        "Full Container Load (FCL) and LCL consolidation",
        "Reefer containers via select carriers",
        "Air freight - standard and express",
      ],
      path: "/services/freight-forwarding",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Customs Clearance & Trade Advisory",
      text: "IEC setup, FSSAI licensing, SVB handling, HS classification.",
      tags: [
        "IEC registration & ICEGATE linking",
        "FSSAI licensing & plant quarantine",
        "SVB registration for related-party imports",
      ],
      path: "/services/customs-clearance",
    },
  ];

  const services = [
    {
      icon: <Warehouse size={22} />,
      title: "Warehousing & Cold Storage",
      text: "Temperature-controlled storage with shelf life management.",
      tags: ["Temperature-controlled cold storage facilities", "Shelf life tracking for perishable goods"],
    },
    {
      icon: <Truck size={22} />,
      title: "Multimodal Transportation",
      text: "First & Last Mile road, sea, air, rail - single point of contact.",
      tags: ["Factory/warehouse to port/ICD coordination", "Port/ICD to final destination delivery"],
    },
    {
      icon: <PackageCheck size={22} />,
      title: "Project Cargo & Heavy Equipment",
      text: "Oversized cargo, heavy lift, and specialized equipment handling.",
      tags: ["Heavy lift capabilities and OOG cargo", "Route surveys and feasibility planning"],
    },
    {
      icon: <Boxes size={22} />,
      title: "Cargo Consolidation",
      text: "LCL groupage services with cost-effective consolidation.",
      tags: ["LCL consolidation with group rates", "Buyer’s consolidation programs"],
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Hazardous Cargo & Dangerous Goods",
      text: "Hazardous cargo coordination via certified partner network.",
      tags: ["Certified DG handling partners", "IMDG and IATA-DGR compliance"],
    },
    {
      icon: <Package size={22} />,
      title: "Packaging & Palletization",
      text: "Export crating, fumigation, ISPM-15 heat treatment.",
      tags: ["Custom wooden crating", "Export-quality palletization"],
    },
    {
      icon: <Home size={22} />,
      title: "Value Added Services & Digital Tools",
      text: "Door-to-door delivery, insurance, rate discovery, tracking.",
      tags: ["Door-to-door delivery coordination", "Cargo insurance coverage"],
    },
    {
      icon: <Globe2 size={22} />,
      title: "Cross Trade",
      text: "Third-country trade with global agent network coordination.",
      tags: ["Third-country trade coordination", "Global partner network"],
    },
  ];

  const styles = {
    section: {
      padding: "105px 9% 115px",
      background: "#F7FAFD",
      fontFamily: "Inter, sans-serif",
      borderTop: "1px solid #E5ECF7",
      borderBottom: "1px solid #E5ECF7",
    },
    container: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    header: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: "40px",
      alignItems: "end",
      marginBottom: "55px",
    },
    label: {
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "4px",
      marginBottom: "22px",
    },
    title: {
      fontSize: "48px",
      lineHeight: "1.15",
      fontWeight: "800",
      color: "#081126",
      margin: 0,
      letterSpacing: "-1.4px",
    },
    gradient: {
      background: "linear-gradient(90deg,#2848BE,#12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    intro: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#667085",
      textAlign: "right",
      margin: 0,
    },
    featuredGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "28px",
      marginBottom: "28px",
    },
    featuredCard: {
      background:
        "linear-gradient(180deg, rgba(40,72,190,0.96), rgba(5,16,38,0.98))",
      borderRadius: "24px",
      padding: "44px 38px",
      minHeight: "365px",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 20px 48px rgba(15,23,42,0.14)",
      transition: "all 0.28s ease",
    },
    gridPattern: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      opacity: 0.8,
    },
    featuredIcon: {
      width: "54px",
      height: "54px",
      borderRadius: "15px",
      background: "rgba(255,255,255,0.12)",
      color: "#12D7FF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "32px",
      position: "relative",
      zIndex: 2,
    },
    featuredTitle: {
      fontSize: "29px",
      lineHeight: "1.2",
      fontWeight: "800",
      margin: "0 0 16px",
      position: "relative",
      zIndex: 2,
    },
    featuredText: {
      fontSize: "15px",
      lineHeight: "1.65",
      color: "rgba(255,255,255,0.82)",
      margin: "0 0 26px",
      position: "relative",
      zIndex: 2,
    },
    tagWrap: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      marginBottom: "28px",
      position: "relative",
      zIndex: 2,
    },
    tag: {
      fontSize: "12px",
      color: "#fff",
      background: "rgba(255,255,255,0.13)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "999px",
      padding: "7px 13px",
    },
    featureLink: {
      color: "#15D4FF",
      fontSize: "15px",
      fontWeight: "700",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      position: "relative",
      zIndex: 2,
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "22px",
    },
    card: {
      background: "#ffffff",
      border: "1px solid #E7EDF6",
      borderRadius: "20px",
      padding: "28px 24px",
      minHeight: "285px",
      boxShadow: "0 10px 26px rgba(15,23,42,0.035)",
      transition: "all 0.28s ease",
      display: "flex",
      flexDirection: "column",
    },
    iconBox: {
      width: "44px",
      height: "44px",
      borderRadius: "13px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px",
    },
    cardTitle: {
      fontSize: "17px",
      lineHeight: "1.32",
      fontWeight: "800",
      color: "#081126",
      margin: "0 0 13px",
    },
    cardText: {
      fontSize: "14px",
      lineHeight: "1.6",
      color: "#667085",
      margin: "0 0 18px",
    },
    smallTags: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      marginTop: "auto",
      marginBottom: "18px",
    },
    smallTag: {
      fontSize: "11px",
      color: "#667085",
      background: "#F0F2F5",
      borderRadius: "999px",
      padding: "5px 9px",
    },
    learn: {
      color: "#2848BE",
      fontSize: "14px",
      fontWeight: "700",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    },
  };

  return (
    <>
      <style>
        {`
          .featured-service:hover {
            transform: translateY(-6px);
            box-shadow: 0 28px 60px rgba(40,72,190,0.20) !important;
          }

          .service-card:hover {
            transform: translateY(-6px);
            border-color: #B8C6EF !important;
            box-shadow: 0 22px 48px rgba(40,72,190,0.11) !important;
          }

          .service-card:hover h3 {
            color: #2848BE !important;
          }

          @media (max-width: 1180px) {
            .services-card-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 900px) {
            .services-header {
              grid-template-columns: 1fr !important;
            }

            .services-intro {
              text-align: left !important;
            }

            .featured-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 576px) {
            .services-grid-section {
              padding: 75px 6% !important;
            }

            .services-grid-title {
              font-size: 34px !important;
            }

            .services-card-grid {
              grid-template-columns: 1fr !important;
            }

            .featured-service {
              padding: 32px 26px !important;
              min-height: auto !important;
            }
          }
        `}
      </style>

      <section className="services-grid-section" style={styles.section}>
        <div style={styles.container}>
          <div className="services-header" style={styles.header}>
            <div>
              <div style={styles.label}>CORE SERVICES</div>
              <h2 className="services-grid-title" style={styles.title}>
                End-to-End <span style={styles.gradient}>Trade Solutions</span>
              </h2>
            </div>

            <p className="services-intro" style={styles.intro}>
              Every service is preceded by a compliance brief. We don&apos;t
              move cargo until the regulatory picture is clear.
            </p>
          </div>

          <div className="featured-grid" style={styles.featuredGrid}>
            {featured.map((item) => (
              <div key={item.title} className="featured-service" style={styles.featuredCard}>
                <div style={styles.gridPattern}></div>

                <div style={styles.featuredIcon}>{item.icon}</div>

                <h3 style={styles.featuredTitle}>{item.title}</h3>

                <p style={styles.featuredText}>{item.text}</p>

                <div style={styles.tagWrap}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={item.path} style={styles.featureLink}>
                  Explore Service <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>

          <div className="services-card-grid" style={styles.cardsGrid}>
            {services.map((item) => (
              <div key={item.title} className="service-card" style={styles.card}>
                <div style={styles.iconBox}>{item.icon}</div>

                <h3 style={styles.cardTitle}>{item.title}</h3>

                <p style={styles.cardText}>{item.text}</p>

                <div style={styles.smallTags}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={styles.smallTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" style={styles.learn}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;