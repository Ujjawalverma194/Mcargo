import React, { useEffect, useState } from "react";
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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import successtoryImage1 from "../../assets/successtoyimage1.png";

import "swiper/css";
import "swiper/css/pagination";

const SuccessStories = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(null);

  const stories = [
    {
      tag: "Aviation & Project Cargo",
      company: "Leading Malaysian Airline",
      from: "Nhava Sheva (JNPT), India",
      to: "Port Klang, Malaysia",
      location: "Port Klang, Malaysia",
      title: "2 Hi-Lift Vehicles — Nhava Sheva to Port Klang, Malaysia",
      text: "Oversized cargo moved with flat rack planning, customs coordination, route checks and secure lashing.",
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      secondImg:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      icon: <Ship size={18} />,
      challenge:
        "Transport two over-dimensional Hi-Lift vehicles requiring flat rack containers, precise lashing, and coordinated customs clearance across two countries within a tight operational window.",
      approach:
        "Loaded both Hi-Lift vehicles onto 2 × 40' Flat Rack containers with precision securing. Coordinated factory pickup, export documentation, cargo insurance from factory to port, expedited customs clearance, and vessel loading with on-board confirmation issued to exporter upon successful loading.",
      metrics: [
        { value: "2 × Hi-Lift Vehicles", label: "Equipment" },
        { value: "2 × 40' Flat Rack", label: "Container Type" },
        { value: "Factory to Port", label: "Cargo Insurance" },
        { value: "Expedited", label: "Customs Clearance" },
      ],
      outcomes: [
        "Both vehicles shipped on schedule",
        "Zero cargo damage",
        "Full documentation compliance for India–Malaysia trade lane",
        "On-board confirmation delivered to exporter",
      ],
      chips: ["OOG / Project Cargo", "Flat Rack Loading", "India–Malaysia Trade Lane"],
    },
    {
      tag: "Aviation Ground Equipment",
      company: "Nandan GSE",
      from: "JNPT, India",
      to: "Malé, Maldives",
      location: "Malé, Maldives",
      title: "2 High-Lift Catering Trucks — JNPT to Velana Airport",
      text: "High-value airport equipment exported with documentation, port handling and destination coordination.",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      secondImg:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
      icon: <Truck size={18} />,
      challenge:
        "Export 2 BharatBenz 1917 high-lift aircraft catering trucks from JNPT to Malé, Maldives. Each truck exceeded standard container dimensions with a full-size hydraulic scissor-lift platform, requiring flat rack loading with precision securing for ocean transit.",
      approach:
        "Each truck was driven onto a flat rack and positioned using wooden dunnage blocks at all wheel contact points. Heavy-duty ratchet straps secured both axles in cross-pattern lashing at multiple tie-down points. Wheel chocking with timber blocks eliminated rolling risk during transit. Managed factory pickup, terminal movement at JNPT, export customs clearance, and final loading coordination.",
      metrics: [
        { value: "2 Trucks", label: "Equipment" },
        { value: "Flat Rack — 42P3", label: "Container Type" },
        { value: "Under 7 Days", label: "Factory to Vessel" },
        { value: "Zero Damage", label: "Cargo Condition" },
      ],
      outcomes: [
        "Factory to vessel in under 7 days",
        "Zero cargo damage",
        "Both trucks operational at Velana International Airport, Malé",
        "Delivered to Maldives Inflight Catering",
      ],
      chips: ["OOG / Project Cargo", "Flat Rack — 42P3", "India–Maldives Trade Lane"],
    },
    {
      tag: "Air Freight Logistics",
      company: "Healthcare Importer",
      from: "Singapore",
      to: "Delhi, India",
      location: "Delhi, India",
      title: "Temperature-Sensitive Medical Equipment Delivered Safely",
      text: "Urgent medical shipment handled with customs planning, cargo visibility and time-critical delivery.",
      img: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
      secondImg:
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
      icon: <Plane size={18} />,
      challenge:
        "Move time-critical medical equipment with controlled handling, accurate documentation, and priority clearance to avoid temperature exposure and delivery delays.",
      approach:
        "Coordinated air freight booking, pre-checked documentation, managed customs readiness, monitored arrival milestones, and arranged final delivery with priority handoff to consignee.",
      metrics: [
        { value: "Priority Air", label: "Freight Mode" },
        { value: "Pre-check", label: "Documentation" },
        { value: "Door Delivery", label: "Final Mile" },
        { value: "Tracked", label: "Visibility" },
      ],
      outcomes: [
        "Shipment delivered within required timeline",
        "No documentation hold",
        "Priority airport clearance completed",
        "Consignee handoff completed safely",
      ],
      chips: ["Air Freight", "Medical Equipment", "Priority Clearance"],
    },
    {
      tag: "Factory to Port",
      company: "Industrial Exporter",
      from: "Factory",
      to: "Nhava Sheva, India",
      location: "Nhava Sheva, India",
      title: "End-to-End Export Movement With Zero Documentation Delays",
      text: "Factory stuffing, paperwork, clearance and port handoff managed under one operating plan.",
      img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=80",
      secondImg:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      icon: <PackageCheck size={18} />,
      challenge:
        "Coordinate export cargo from factory to port with complete paperwork, container planning, and handoff without documentation-related delay.",
      approach:
        "Prepared export documents, coordinated factory pickup, managed carrier communication, checked shipment readiness, and completed port-side documentation before cut-off.",
      metrics: [
        { value: "Factory Pickup", label: "Origin Handling" },
        { value: "Export Docs", label: "Compliance" },
        { value: "Port Handoff", label: "Execution" },
        { value: "No Delay", label: "Outcome" },
      ],
      outcomes: [
        "Cargo reached port before cut-off",
        "No documentation query",
        "Smooth export clearance",
        "Customer received milestone updates",
      ],
      chips: ["Factory to Port", "Export Documentation", "Container Movement"],
    },
  ];

  const activeCase =
    activeCaseIndex !== null ? stories[activeCaseIndex] : null;

  useEffect(() => {
    document.body.style.overflow = activeCase ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCase]);

  const openCaseStudy = (index) => {
    setActiveCaseIndex(index);
  };

  const closeCaseStudy = () => {
    setActiveCaseIndex(null);
  };

  const nextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % stories.length);
  };

  const prevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const styles = {
    section: {
      padding: "96px 9% 110px",
      background:
        "radial-gradient(circle at 50% 18%, rgba(46,49,146,0.06), transparent 25%), linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%)",
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
      color: "#2e3192",
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
      color: "#2e3192",
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
      background: "#2e3192",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      boxShadow: "0 12px 24px rgba(46,49,146,0.28)",
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
      color: "#2e3192",
      fontSize: "15px",
      fontWeight: "700",
      textDecoration: "none",
      transition: "all 0.25s ease",
      background: "transparent",
      border: "none",
      padding: 0,
      cursor: "pointer",
      fontFamily: "Inter, sans-serif",
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
        "linear-gradient(135deg, #2e3192 0%, #3A4AB0 45%, #4F7BFF 75%, #12A8E8 100%)",
      borderRadius: "30px",
      padding: "42px",
      color: "#ffffff",
      minHeight: "390px",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 24px 58px rgba(46,49,146,0.22)",
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
      background: "#2e3192",
      color: "#ffffff",
      borderRadius: "15px",
      padding: "15px 24px",
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 14px 30px rgba(46,49,146,0.24)",
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

    modalOverlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(8,17,38,0.62)",
      backdropFilter: "blur(3px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px",
    },

    modal: {
      width: "100%",
      maxWidth: "1180px",
      maxHeight: "88vh",
      background: "#ffffff",
      borderRadius: "22px",
      overflow: "hidden",
      boxShadow: "0 34px 95px rgba(0,0,0,0.28)",
      border: "1px solid rgba(231,237,245,0.9)",
    },

    modalHeader: {
      padding: "18px 26px 16px",
      borderBottom: "1px solid #E7EDF5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "20px",
      background: "#ffffff",
    },

    modalTag: {
      display: "inline-flex",
      background: "#EEF4FF",
      color: "#2e3192",
      borderRadius: "999px",
      padding: "6px 12px",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "8px",
    },

    modalTitle: {
      margin: "0 0 6px",
      color: "#081126",
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: 1.25,
      letterSpacing: "-0.2px",
    },

    modalMeta: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap",
      margin: 0,
      color: "#667085",
      fontSize: "13.5px",
      fontWeight: "500",
    },

    modalActions: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexShrink: 0,
    },

    roundBtn: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid #D9E2EF",
      background: "#ffffff",
      color: "#667085",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s ease",
    },

    counter: {
      color: "#98A2B3",
      fontSize: "14px",
      fontWeight: "600",
      minWidth: "34px",
      textAlign: "center",
    },

    closeBtn: {
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      border: "1px solid #D9E2EF",
      background: "#ffffff",
      color: "#081126",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s ease",
    },

    modalBody: {
      padding: "26px",
      overflowY: "auto",
      maxHeight: "calc(88vh - 86px)",
    },

    modalImages: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px",
      marginBottom: "32px",
    },

    modalImageBox: {
      height: "220px",
      borderRadius: "14px",
      background: "#F8FAFC",
      border: "1px solid #E7EDF5",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    modalImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },

    sectionLabel: {
      color: "#12A8E8",
      fontSize: "12px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      margin: "26px 0 12px",
    },

    challengeText: {
      borderLeft: "4px solid #2e3192",
      paddingLeft: "20px",
      fontSize: "21px",
      lineHeight: 1.55,
      color: "#081126",
      fontWeight: "600",
      margin: 0,
      maxWidth: "1040px",
    },

    modalPara: {
      fontSize: "16px",
      lineHeight: 1.75,
      color: "#475467",
      margin: 0,
      maxWidth: "1080px",
    },

    kpiGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "12px",
      marginTop: "26px",
    },

    kpi: {
      background: "#F3F6FF",
      border: "1px solid #CAD7F5",
      borderRadius: "14px",
      padding: "17px 16px",
      textAlign: "center",
      color: "#2e3192",
      fontSize: "21px",
      fontWeight: "700",
      lineHeight: 1.15,
      boxShadow: "0 8px 18px rgba(46,49,146,0.06)",
    },

    kpiLabel: {
      display: "block",
      marginTop: "7px",
      color: "#667085",
      fontSize: "12px",
      fontWeight: "500",
    },

    outcomeList: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginTop: "4px",
    },

    outcomeItem: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#081126",
      fontSize: "16px",
      lineHeight: 1.5,
    },

    chipWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginTop: "22px",
    },

    chip: {
      background: "#F2F4F7",
      border: "1px solid #E4E7EC",
      borderRadius: "999px",
      color: "#475467",
      padding: "7px 13px",
      fontSize: "13px",
      fontWeight: "500",
    },

    modalDivider: {
      height: "1px",
      background: "#E7EDF5",
      margin: "24px 0",
    },

    quote: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "#667085",
      fontStyle: "italic",
      margin: "0 0 28px",
    },

    modalCta: {
      marginTop: "20px",
      padding: "30px",
      borderRadius: "16px",
      textAlign: "center",
      color: "#ffffff",
      background: "linear-gradient(135deg,#2e3192 0%,#2366C9 48%,#12A8E8 100%)",
    },

    modalCtaTitle: {
      fontSize: "22px",
      fontWeight: "700",
      margin: "0 0 10px",
    },

    modalCtaText: {
      fontSize: "14.5px",
      lineHeight: 1.6,
      maxWidth: "520px",
      margin: "0 auto 22px",
      color: "rgba(255,255,255,0.9)",
    },

    modalCtaButton: {
      border: "none",
      background: "#ffffff",
      color: "#081126",
      borderRadius: "999px",
      padding: "14px 30px",
      minWidth: "310px",
      fontSize: "15px",
      fontWeight: "700",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "14px",
      boxShadow: "0 14px 30px rgba(8,17,38,0.14)",
    },

    modalCtaIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "#ffffff",
      color: "#2e3192",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 20px rgba(8,17,38,0.12)",
      marginRight: "16px",
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
            background: #2e3192;
          }

          .story-card:hover {
            transform: translateY(-6px);
            border-color: #b8c6ef !important;
            box-shadow: 0 22px 48px rgba(46,49,146,0.14) !important;
          }

          .story-card:hover img {
            transform: scale(1.05);
          }

          .story-card:hover h3 {
            color: #2e3192 !important;
          }

          .story-card:hover button {
            transform: translateX(4px);
          }

          .contact-card:hover img {
            transform: scale(1.05);
          }

          .advisory-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 18px 36px rgba(46,49,146,0.32) !important;
          }

          .case-modal-btn:hover,
          .case-modal-close:hover {
            border-color: #2e3192 !important;
            color: #2e3192 !important;
            transform: translateY(-1px);
          }

          .case-modal-body::-webkit-scrollbar {
            width: 8px;
          }

          .case-modal-body::-webkit-scrollbar-track {
            background: #F1F5F9;
          }

          .case-modal-body::-webkit-scrollbar-thumb {
            background: #CBD5E1;
            border-radius: 999px;
          }

          .case-modal-cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 34px rgba(8,17,38,0.2) !important;
          }

          @media (max-width: 1024px) {
            .success-impact-panel {
              grid-template-columns: 1fr !important;
            }

            .success-contact-card {
              grid-template-columns: 1fr !important;
            }

            .case-modal-kpis {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (max-width: 768px) {
            .success-section {
              padding: 82px 24px 90px !important;
            }

            .success-header {
              margin-bottom: 48px !important;
            }

            .success-title {
              font-size: 38px !important;
            }

            .success-subtitle {
              font-size: 17px !important;
            }

            .success-swiper {
              padding: 0 0 64px !important;
              overflow: visible !important;
            }

            .success-card {
              height: auto !important;
              min-height: 520px !important;
              border-radius: 24px !important;
            }

            .success-image-box {
              height: 225px !important;
              min-height: 225px !important;
            }

            .success-card-body {
              padding: 24px 26px 28px !important;
            }

            .success-card-title {
              font-size: 20px !important;
              min-height: auto !important;
            }

            .success-card-text {
              min-height: auto !important;
            }

            .success-impact-panel {
              gap: 26px !important;
              margin-top: 64px !important;
            }

            .success-impact-left {
              padding: 30px 26px !important;
              min-height: auto !important;
              border-radius: 26px !important;
            }

            .success-impact-title {
              font-size: 30px !important;
            }

            .success-metrics {
              grid-template-columns: 1fr !important;
              gap: 14px !important;
            }

            .success-contact-content {
              padding: 32px 26px !important;
            }

            .success-contact-title {
              font-size: 28px !important;
            }

            .success-advisory-btn {
              width: 100% !important;
              justify-content: center !important;
            }

            .success-contact-image-box {
              min-height: 260px !important;
            }

            .case-modal-overlay {
              padding: 14px !important;
            }

            .case-modal {
              max-height: 92vh !important;
              border-radius: 18px !important;
            }

            .case-modal-header {
              flex-direction: column !important;
              padding: 18px !important;
            }

            .case-modal-actions {
              width: 100% !important;
              justify-content: space-between !important;
            }

            .case-modal-body {
              padding: 18px !important;
              max-height: calc(92vh - 150px) !important;
            }

            .case-modal-images {
              grid-template-columns: 1fr !important;
            }

            .case-modal-image-box {
              height: 210px !important;
            }

            .case-modal-title {
              font-size: 19px !important;
            }

            .case-modal-challenge {
              font-size: 17px !important;
            }

            .case-modal-kpis {
              grid-template-columns: 1fr !important;
            }

            .case-modal-cta {
              padding: 26px 18px !important;
            }

            .case-modal-cta-btn {
              min-width: 100% !important;
            }
          }

          @media (max-width: 420px) {
            .success-section {
              padding: 74px 24px 82px !important;
            }

            .success-title {
              font-size: 36px !important;
            }

            .success-card {
              min-height: auto !important;
            }

            .success-image-box {
              height: 215px !important;
              min-height: 215px !important;
            }

            .success-meta {
              gap: 10px !important;
              font-size: 13px !important;
            }

            .success-impact-title {
              font-size: 28px !important;
            }

            .success-contact-title {
              font-size: 26px !important;
            }
          }
        `}
      </style>

      <section style={styles.section} className="success-section">
        <div style={styles.header} className="success-header">
          <div style={styles.label}>SUCCESS STORIES</div>

          <h2 style={styles.title} className="success-title">
            Real Results, <span style={styles.blue}>Real</span>{" "}
            <span style={styles.green}>Impact</span>
          </h2>

          <p style={styles.subtitle} className="success-subtitle">
            From project cargo to precision customs clearance — see how MCargo
            delivers measurable results across industries.
          </p>
        </div>

        <Swiper
          id="case-studies"
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
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 34,
            },
          }}
          loop={true}
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="story-card success-card" style={styles.card}>
                <div style={styles.imageBox} className="success-image-box">
                  <img src={story.img} alt={story.title} style={styles.image} />
                  <div style={styles.imageOverlay}></div>
                  <div style={styles.tag}>{story.tag}</div>
                  <div style={styles.floatingIcon}>{story.icon}</div>
                </div>

                <div style={styles.body} className="success-card-body">
                  <div style={styles.meta} className="success-meta">
                    <span style={styles.metaItem}>
                      <Building2 size={15} />
                      {story.company}
                    </span>

                    <span style={styles.metaItem}>
                      <MapPin size={15} color="#22C55E" />
                      {story.location}
                    </span>
                  </div>

                  <h3 style={styles.cardTitle} className="success-card-title">
                    {story.title}
                  </h3>

                  <p style={styles.text} className="success-card-text">
                    {story.text}
                  </p>

                  <div style={styles.bottomLinkArea}>
                    <div style={styles.divider}></div>

                    <button
                      type="button"
                      style={styles.link}
                      onClick={() => openCaseStudy(index)}
                    >
                      View Case Study <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={styles.impactPanel} className="success-impact-panel">
          <div style={styles.impactLeft} className="success-impact-left">
            <div style={styles.impactBadge}>
              <Globe2 size={16} />
              MCARGO OPERATIONS
            </div>

            <h3 style={styles.impactTitle} className="success-impact-title">
              One logistics desk for customs, freight and final delivery.
            </h3>

            <p style={styles.impactText}>
              Our process brings documentation, port coordination, cargo
              planning and shipment visibility into one connected workflow.
            </p>

            <div style={styles.metrics} className="success-metrics">
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

          <div className="contact-card success-contact-card" style={styles.contactCard}>
            <div style={styles.contactContent} className="success-contact-content">
              <div style={styles.smallBadge}>
                <CheckCircle2 size={16} />
                Start with confidence
              </div>

              <h3 style={styles.contactTitle} className="success-contact-title">
                Plan your next shipment with an expert.
              </h3>

              <p style={styles.contactText}>
                Talk to our trade team for customs clearance, freight movement,
                import/export documentation and India market compliance.
              </p>

              <button
                className="advisory-btn success-advisory-btn"
                style={styles.advisoryBtn}
              >
                Book Free Advisory <ArrowRight size={17} />
              </button>

              <div style={styles.email}>
                <Mail size={19} color="#22C55E" />
                info@mcargo.com
              </div>
            </div>

            <div style={styles.contactImageBox} className="success-contact-image-box">
              <img
                src={successtoryImage1}
                alt="Success story"
                style={styles.contactImage}
              />
              <div style={styles.contactOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {activeCase && (
        <div className="case-modal-overlay" style={styles.modalOverlay}>
          <div className="case-modal" style={styles.modal}>
            <div className="case-modal-header" style={styles.modalHeader}>
              <div>
                <div style={styles.modalTag}>{activeCase.tag}</div>

                <h3 className="case-modal-title" style={styles.modalTitle}>
                  {activeCase.title}
                </h3>

                <p style={styles.modalMeta}>
                  <strong>{activeCase.company}</strong>
                  <MapPin size={14} color="#12A8E8" />
                  <span>{activeCase.from}</span>
                  <span>→</span>
                  <span>{activeCase.to}</span>
                </p>
              </div>

              <div className="case-modal-actions" style={styles.modalActions}>
                <button
                  type="button"
                  className="case-modal-btn"
                  style={styles.roundBtn}
                  onClick={prevCase}
                >
                  <ChevronLeft size={18} />
                </button>

                <span style={styles.counter}>
                  {activeCaseIndex + 1}/{stories.length}
                </span>

                <button
                  type="button"
                  className="case-modal-btn"
                  style={styles.roundBtn}
                  onClick={nextCase}
                >
                  <ChevronRight size={18} />
                </button>

                <button
                  type="button"
                  className="case-modal-close"
                  style={styles.closeBtn}
                  onClick={closeCaseStudy}
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            <div className="case-modal-body" style={styles.modalBody}>
              <div className="case-modal-images" style={styles.modalImages}>
                <div className="case-modal-image-box" style={styles.modalImageBox}>
                  <img
                    src={activeCase.img}
                    alt={activeCase.title}
                    style={styles.modalImage}
                  />
                </div>

                <div className="case-modal-image-box" style={styles.modalImageBox}>
                  <img
                    src={activeCase.secondImg}
                    alt={activeCase.title}
                    style={styles.modalImage}
                  />
                </div>
              </div>

              <div style={styles.sectionLabel}>The Challenge</div>

              <p className="case-modal-challenge" style={styles.challengeText}>
                {activeCase.challenge}
              </p>

              <div style={styles.sectionLabel}>Our Approach</div>

              <p style={styles.modalPara}>{activeCase.approach}</p>

              <div className="case-modal-kpis" style={styles.kpiGrid}>
                {activeCase.metrics.map((item, index) => (
                  <div key={index} style={styles.kpi}>
                    {item.value}
                    <span style={styles.kpiLabel}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={styles.sectionLabel}>The Outcome</div>

              <div style={styles.outcomeList}>
                {activeCase.outcomes.map((item, index) => (
                  <div key={index} style={styles.outcomeItem}>
                    <CheckCircle2 size={19} color="#22C55E" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={styles.chipWrap}>
                {activeCase.chips.map((chip) => (
                  <span key={chip} style={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <div style={styles.modalDivider}></div>

              <p style={styles.quote}>
                Every delivery carries more than cargo — it carries trust,
                timelines, and the growth of the businesses we serve.
              </p>

              <div className="case-modal-cta" style={styles.modalCta}>
                <h4 style={styles.modalCtaTitle}>
                  Ready to Transform Your Logistics?
                </h4>

                <p style={styles.modalCtaText}>
                  Let us deliver similar results for your business. Get in touch
                  for a customised solution.
                </p>

                <button
                  type="button"
                  className="case-modal-cta-btn"
                  style={styles.modalCtaButton}
                >
                  <span style={styles.modalCtaIcon}>
                    <ArrowRight size={20} />
                  </span>
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessStories;