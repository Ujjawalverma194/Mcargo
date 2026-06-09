import React from "react";
import {
  ArrowRight,
  Building2,
  MapPin,
  Plane,
  Ship,
  Truck,
  Mail,
  CheckCircle2,
  PackageCheck,
  Globe2,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import successtoryImage1 from "../../assets/successtoyimage1.png"
import "swiper/css";
import "swiper/css/pagination";

const SuccessStories = () => {
  const stories = [
    {
      tag: "Aviation & Project Cargo",
      company: "Leading Malaysian Airline",
      location: "Port Klang, Malaysia",
      title: "2 Hi-Lift Vehicles — Nhava Sheva to Port Klang, Malaysia",
      text: "Oversized cargo moved with flat rack planning, customs coordination, route checks and secure lashing.",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      icon: <Ship size={18} />,
    },
    {
      tag: "Aviation Ground Equipment",
      company: "Nandan GSE",
      location: "Malé, Maldives",
      title: "2 High-Lift Catering Trucks — JNPT to Velana Airport",
      text: "High-value airport equipment exported with documentation, port handling and destination coordination.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      icon: <Truck size={18} />,
    },
    {
      tag: "Air Freight Logistics",
      company: "Healthcare Importer",
      location: "Delhi, India",
      title: "Temperature-Sensitive Medical Equipment Delivered Safely",
      text: "Urgent medical shipment handled with customs planning, cargo visibility and time-critical delivery.",
      img: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
      icon: <Plane size={18} />,
    },
    {
      tag: "Factory to Port",
      company: "Industrial Exporter",
      location: "Nhava Sheva, India",
      title: "End-to-End Export Movement With Zero Documentation Delays",
      text: "Factory stuffing, paperwork, clearance and port handoff managed under one operating plan.",
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      icon: <PackageCheck size={18} />,
    },
  ];

  const styles = {
    section: {
      padding: "96px 9% 110px",
      background:
        "radial-gradient(circle at 50% 18%, rgba(40,72,190,0.06), transparent 25%), linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },

    header: {
      textAlign: "center",
      maxWidth: "820px",
      margin: "0 auto 66px",
    },

    label: {
      color: "#16A34A",
      fontSize: "13px",
      fontWeight: "600",
      letterSpacing: "2px",
      marginBottom: "18px",
    },

    title: {
      fontSize: "46px",
      lineHeight: "1.15",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 18px",
      letterSpacing: "-1px",
    },

    blue: {
      color: "#2848BE",
    },

    green: {
      color: "#0EA57A",
    },

    subtitle: {
      fontSize: "18px",
      lineHeight: "1.7",
      color: "#667085",
      maxWidth: "760px",
      margin: "0 auto",
    },

    card: {
      background: "rgba(255,255,255,0.96)",
      border: "1px solid #e4ebf7",
      borderRadius: "28px",
      overflow: "hidden",
      boxShadow: "0 16px 38px rgba(15,23,42,0.07)",
      transition: "all 0.32s ease",
      cursor: "pointer",
      height: "535px",
      display: "flex",
      flexDirection: "column",
      backdropFilter: "blur(10px)",
    },

    imageBox: {
      height: "235px",
      minHeight: "235px",
      position: "relative",
      overflow: "hidden",
      background: "#eef2f7",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.7s ease",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(15,23,42,0.02) 0%, rgba(15,23,42,0.34) 100%)",
    },

    tag: {
      position: "absolute",
      left: "22px",
      top: "18px",
      background: "rgba(255,255,255,0.94)",
      color: "#2848BE",
      padding: "8px 14px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      zIndex: 3,
      boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
    },

    floatingIcon: {
      position: "absolute",
      right: "22px",
      bottom: "18px",
      width: "46px",
      height: "46px",
      borderRadius: "14px",
      background: "#2848BE",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      boxShadow: "0 12px 24px rgba(40,72,190,0.28)",
    },

    body: {
      padding: "24px 28px 26px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },

    meta: {
      display: "flex",
      gap: "18px",
      color: "#667085",
      fontSize: "14px",
      marginBottom: "16px",
      flexWrap: "wrap",
      minHeight: "24px",
    },

    metaItem: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
    },

    cardTitle: {
      fontSize: "20px",
      lineHeight: "1.34",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 10px",
      transition: "color 0.25s ease",
      minHeight: "48px",
    },

    text: {
      fontSize: "14.5px",
      lineHeight: "1.6",
      color: "#475467",
      margin: "0 0 14px",
      minHeight: "52px",
    },

    bottomLinkArea: {
      marginTop: "8px",
    },

    divider: {
      height: "1px",
      background: "#e8edf5",
      marginBottom: "18px",
    },

    link: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      color: "#1846B8",
      fontSize: "15px",
      fontWeight: "700",
      textDecoration: "none",
      transition: "all 0.25s ease",
    },

    impactPanel: {
      maxWidth: "1450px",
      margin: "85px auto 0",
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "28px",
      alignItems: "stretch",
    },

    impactLeft: {
      background:
        "linear-gradient(135deg, #2848BE 0%, #1297df 62%, #0EA57A 100%)",
      borderRadius: "30px",
      padding: "42px",
      color: "#ffffff",
      minHeight: "390px",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 24px 58px rgba(40,72,190,0.22)",
    },

    impactBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(255,255,255,0.16)",
      padding: "9px 15px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      marginBottom: "34px",
    },

    impactTitle: {
      fontSize: "36px",
      lineHeight: "1.18",
      fontWeight: "750",
      margin: "0 0 18px",
      letterSpacing: "-0.8px",
    },

    impactText: {
      fontSize: "16px",
      lineHeight: "1.7",
      color: "rgba(255,255,255,0.84)",
      maxWidth: "520px",
      marginBottom: "34px",
    },

    metrics: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "18px",
    },

    metric: {
      background: "rgba(255,255,255,0.13)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "20px",
      padding: "20px",
      backdropFilter: "blur(10px)",
    },

    metricNo: {
      fontSize: "28px",
      fontWeight: "800",
      marginBottom: "5px",
    },

    metricText: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.78)",
    },

    contactCard: {
      background: "#ffffff",
      border: "1px solid #e4ebf7",
      borderRadius: "30px",
      overflow: "hidden",
      boxShadow: "0 24px 58px rgba(15,23,42,0.09)",
      display: "grid",
      gridTemplateColumns: "1fr 0.9fr",
    },

    contactContent: {
      padding: "46px",
    },

    smallBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "#EAFBF2",
      color: "#16A34A",
      padding: "9px 15px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      marginBottom: "28px",
    },

    contactTitle: {
      fontSize: "31px",
      lineHeight: "1.18",
      fontWeight: "750",
      color: "#101828",
      margin: "0 0 16px",
      letterSpacing: "-0.6px",
    },

    contactText: {
      fontSize: "15px",
      lineHeight: "1.7",
      color: "#667085",
      margin: "0 0 28px",
    },

    advisoryBtn: {
      border: "none",
      background: "#2848BE",
      color: "#ffffff",
      borderRadius: "15px",
      padding: "15px 24px",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 14px 30px rgba(40,72,190,0.24)",
      transition: "all 0.25s ease",
      marginBottom: "28px",
    },

    email: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#101828",
      fontSize: "15px",
      fontWeight: "600",
    },

    contactImageBox: {
      position: "relative",
      minHeight: "390px",
      overflow: "hidden",
    },

    contactImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.8s ease",
    },

    contactOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.25))",
    },
  };

  return (
    <>
      <style>
        {`
          .success-swiper {
            max-width: 1450px;
            padding: 0 6px 64px;
          }

          .success-swiper .swiper-wrapper {
            align-items: stretch;
          }

          .success-swiper .swiper-slide {
            height: auto;
          }

          .success-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #d8dce4;
            opacity: 1;
          }

          .success-swiper .swiper-pagination-bullet-active {
            width: 34px;
            border-radius: 999px;
            background: #2848BE;
          }

          .story-card:hover {
            transform: translateY(-6px);
            border-color: #b8c6ef !important;
            box-shadow: 0 22px 48px rgba(40,72,190,0.14) !important;
          }

          .story-card:hover img {
            transform: scale(1.05);
          }

          .story-card:hover h3 {
            color: #2848BE !important;
          }

          .story-card:hover a {
            transform: translateX(4px);
          }

          .contact-card:hover img {
            transform: scale(1.05);
          }

          .advisory-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 36px rgba(40,72,190,0.32) !important;
          }
        `}
      </style>

      <section style={styles.section}>
        <div style={styles.header}>
          <div style={styles.label}>SUCCESS STORIES</div>

          <h2 style={styles.title}>
            Real Results, <span style={styles.blue}>Real</span>{" "}
            <span style={styles.green}>Impact</span>
          </h2>

          <p style={styles.subtitle}>
            From project cargo to precision customs clearance — see how MCargo
            delivers measurable results across industries.
          </p>
        </div>

        <Swiper
          className="success-swiper"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          speed={750}
          spaceBetween={34}
          slidesPerView={2}
          loop={true}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="story-card" style={styles.card}>
                <div style={styles.imageBox}>
                  <img src={story.img} alt={story.title} style={styles.image} />
                  <div style={styles.imageOverlay}></div>
                  <div style={styles.tag}>{story.tag}</div>
                  <div style={styles.floatingIcon}>{story.icon}</div>
                </div>

                <div style={styles.body}>
                  <div style={styles.meta}>
                    <span style={styles.metaItem}>
                      <Building2 size={15} />
                      {story.company}
                    </span>

                    <span style={styles.metaItem}>
                      <MapPin size={15} color="#22C55E" />
                      {story.location}
                    </span>
                  </div>

                  <h3 style={styles.cardTitle}>{story.title}</h3>

                  <p style={styles.text}>{story.text}</p>

                  <div style={styles.bottomLinkArea}>
                    <div style={styles.divider}></div>

                    <a href="#" style={styles.link}>
                      View Case Study <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={styles.impactPanel}>
          <div style={styles.impactLeft}>
            <div style={styles.impactBadge}>
              <Globe2 size={16} />
              MCARGO OPERATIONS
            </div>

            <h3 style={styles.impactTitle}>
              One logistics desk for customs, freight and final delivery.
            </h3>

            <p style={styles.impactText}>
              Our process brings documentation, port coordination, cargo
              planning and shipment visibility into one connected workflow.
            </p>

            <div style={styles.metrics}>
              <div style={styles.metric}>
                <div style={styles.metricNo}>30K+</div>
                <div style={styles.metricText}>Shipments planned</div>
              </div>

              <div style={styles.metric}>
                <div style={styles.metricNo}>190+</div>
                <div style={styles.metricText}>Countries covered</div>
              </div>

              <div style={styles.metric}>
                <div style={styles.metricNo}>24/7</div>
                <div style={styles.metricText}>Cargo visibility</div>
              </div>
            </div>
          </div>

          <div className="contact-card" style={styles.contactCard}>
            <div style={styles.contactContent}>
              <div style={styles.smallBadge}>
                <CheckCircle2 size={16} />
                Start with confidence
              </div>

              <h3 style={styles.contactTitle}>
                Plan your next shipment with an expert.
              </h3>

              <p style={styles.contactText}>
                Talk to our trade team for customs clearance, freight movement,
                import/export documentation and India market compliance.
              </p>

              <button className="advisory-btn" style={styles.advisoryBtn}>
                Book Free Advisory <ArrowRight size={17} />
              </button>

              <div style={styles.email}>
                <Mail size={19} color="#22C55E" />
                info@mcargo.com
              </div>
            </div>

            <div style={styles.contactImageBox}>
              <img
                src={successtoryImage1}
                style={styles.contactImage}
              />
              <div style={styles.contactOverlay}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;