import React, { useState } from "react";
import {
  ShieldCheck,
  Users,
  Award,
  Play,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const AboutDifferentiatorsVideos = () => {
  const [hovered, setHovered] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const differentiators = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Advisory Before Execution",
      text: "IEC setup, FSSAI, SVB, HS classification — compliance is handled before booking cargo.",
      color: "linear-gradient(135deg,#2848BE,#12A8E8)",
    },
    {
      icon: <Users size={24} />,
      title: "Dedicated Account Management",
      text: "Single point of contact for compliance coordination, port follow-ups, and escalation handling.",
      color: "linear-gradient(135deg,#12A8E8,#18C8B8)",
    },
    {
      icon: <Award size={24} />,
      title: "Trade Expertise",
      text: "Deep knowledge of DGFT schemes, duty drawback, customs valuation, and commodity-specific rules.",
      color: "linear-gradient(135deg,#22C55E,#0EA57A)",
    },
  ];

  const videos = [
    {
      title: "Importing Into India",
      text: "Avoid delays with compliance-first import planning.",
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Free Trade Agreement Guide",
      text: "Understand trade benefits before shipment planning.",
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Key Points for Importing",
      text: "Important checks for importers before booking cargo.",
      videoId: "dQw4w9WgXcQ",
    },
    {
      title: "Key Points for Exporting",
      text: "Export documentation, compliance and execution tips.",
      videoId: "dQw4w9WgXcQ",
    },
  ];

  const getThumbnail = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const styles = {
    section: {
      padding: "110px 9% 120px",
      background:
        "linear-gradient(180deg,#F7FAFD 0%,#F2F7FC 48%,#ffffff 100%)",
      fontFamily: "Inter, sans-serif",
      borderTop: "1px solid #E5ECF7",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
    },

    label: {
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "1.3px",
      marginBottom: "18px",
    },

    title: {
      fontSize: "46px",
      lineHeight: "1.15",
      fontWeight: "700",
      color: "#101828",
      letterSpacing: "-1.2px",
      margin: "0 0 60px",
    },

    blue: {
      color: "#2848BE",
    },

    cyan: {
      color: "#12A8E8",
    },

    diffGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "26px",
      marginBottom: "115px",
    },

    diffCard: {
      background: "#ffffff",
      border: "1px solid #E4ECF7",
      borderRadius: "26px",
      padding: "38px 34px",
      minHeight: "220px",
      textAlign: "center",
      boxShadow: "0 12px 30px rgba(15,23,42,0.055)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },

    iconWrap: {
      width: "58px",
      height: "58px",
      borderRadius: "17px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 24px",
      boxShadow: "0 14px 28px rgba(40,72,190,0.18)",
      transition: "all 0.3s ease",
    },

    diffTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 14px",
    },

    diffText: {
      fontSize: "15px",
      lineHeight: "1.65",
      color: "#475467",
      margin: 0,
    },

    videoHeader: {
      maxWidth: "820px",
      marginBottom: "54px",
    },

    videoTitle: {
      fontSize: "46px",
      lineHeight: "1.15",
      fontWeight: "700",
      color: "#101828",
      margin: "0 0 20px",
      letterSpacing: "-1.2px",
    },

    videoDesc: {
      fontSize: "18px",
      lineHeight: "1.65",
      color: "#475467",
      margin: 0,
    },

    videoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "28px",
    },

    videoCard: {
      height: "320px",
      borderRadius: "26px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
      border: "1px solid #E4ECF7",
      transition: "all 0.35s ease",
      background: "#111827",
    },

    thumbnail: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.8s ease",
    },

    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
      display: "block",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(8,17,38,0.12) 0%, rgba(8,17,38,0.78) 100%)",
    },

    videoContent: {
      position: "absolute",
      left: "28px",
      right: "28px",
      bottom: "26px",
      color: "#ffffff",
      zIndex: 2,
      pointerEvents: "none",
    },

    videoBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "rgba(255,255,255,0.16)",
      border: "1px solid rgba(255,255,255,0.18)",
      padding: "8px 13px",
      borderRadius: "999px",
      fontSize: "13px",
      fontWeight: "700",
      marginBottom: "16px",
      backdropFilter: "blur(10px)",
    },

    videoHeading: {
      fontSize: "24px",
      fontWeight: "750",
      margin: "0 0 8px",
      lineHeight: "1.25",
    },

    videoText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.78)",
      margin: 0,
      lineHeight: "1.55",
    },

    playBtn: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "74px",
      height: "74px",
      borderRadius: "50%",
      background: "#FF0000",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      boxShadow: "0 18px 38px rgba(255,0,0,0.30)",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },

    cta: {
      marginTop: "55px",
      background: "#ffffff",
      border: "1px solid #DDE7F6",
      borderRadius: "22px",
      padding: "20px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 12px 30px rgba(15,23,42,0.055)",
    },

    ctaLeft: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      color: "#101828",
      fontSize: "15px",
      fontWeight: "700",
    },

    ctaIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    ctaBtn: {
      border: "none",
      background: "#2848BE",
      color: "#ffffff",
      padding: "13px 20px",
      borderRadius: "13px",
      fontSize: "14px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 12px 24px rgba(40,72,190,0.22)",
    },
  };

  return (

    <>
      <style>{`
        @media (max-width: 768px) {
          .about-diff-section { padding: 84px 24px 88px !important; }
          .about-diff-title, .about-video-title { font-size: 38px !important; line-height: 1.16 !important; margin-bottom: 52px !important; }
          .about-diff-grid { grid-template-columns: 1fr !important; gap: 28px !important; margin-bottom: 92px !important; }
          .about-diff-card { padding: 36px 34px !important; min-height: auto !important; border-radius: 24px !important; }
          .about-diff-title-card { font-size: 21px !important; }
          .about-diff-text { font-size: 16px !important; line-height: 1.62 !important; }
          .about-video-header { margin-bottom: 48px !important; }
          .about-video-desc { font-size: 22px !important; line-height: 1.52 !important; }
          .about-video-grid { grid-template-columns: 1fr !important; gap: 26px !important; }
          .about-video-card { height: 170px !important; border-radius: 18px !important; }
          .about-video-content { left: 18px !important; right: 18px !important; bottom: 18px !important; }
          .about-video-badge, .about-video-heading, .about-video-text { display: none !important; }
          .about-play-btn { width: 58px !important; height: 58px !important; }
          .about-diff-cta { flex-direction: column !important; align-items: stretch !important; gap: 18px !important; padding: 22px !important; }
          .about-diff-cta-left { align-items: flex-start !important; line-height: 1.45 !important; }
          .about-diff-cta-btn { width: 100% !important; justify-content: center !important; }
        }
        @media (max-width: 420px) {
          .about-diff-title, .about-video-title { font-size: 36px !important; }
          .about-video-desc { font-size: 21px !important; }
          .about-video-card { height: 160px !important; }
        }
      `}</style>
      <section style={styles.section} className="about-diff-section">
      <div style={styles.container}>
        <div style={styles.label}>WHAT MAKES US DIFFERENT</div>

        <h2 style={styles.title} className="about-diff-title">
          Core <span style={styles.blue}>Differentiators</span>
        </h2>

        <div style={styles.diffGrid} className="about-diff-grid">
          {differentiators.map((item, index) => {
            const isHovered = hovered === `diff-${index}`;

            return (
              <div
                key={index}
                className="about-diff-card"
                style={{
                  ...styles.diffCard,
                  transform: isHovered ? "translateY(-7px)" : "translateY(0)",
                  border: isHovered
                    ? "1px solid #B8C6EF"
                    : "1px solid #E4ECF7",
                  boxShadow: isHovered
                    ? "0 24px 52px rgba(40,72,190,0.13)"
                    : "0 12px 30px rgba(15,23,42,0.055)",
                }}
                onMouseEnter={() => setHovered(`diff-${index}`)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  style={{
                    ...styles.iconWrap,
                    background: item.color,
                    transform: isHovered
                      ? "scale(1.06) rotate(-3deg)"
                      : "scale(1)",
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={styles.diffTitle} className="about-diff-title-card">{item.title}</h3>
                <p style={styles.diffText} className="about-diff-text">{item.text}</p>
              </div>
            );
          })}
        </div>

        <div style={styles.videoHeader} className="about-video-header">
          <div style={styles.label}>WATCH & LEARN</div>

          <h2 style={styles.videoTitle} className="about-video-title">
            MCargo Logistics <span style={styles.blue}>In</span>{" "}
            <span style={styles.cyan}>Action</span>
          </h2>

          <p style={styles.videoDesc} className="about-video-desc">
            See how we handle complex trade scenarios, project cargo and
            compliance challenges — straight from the field.
          </p>
        </div>

        <div style={styles.videoGrid} className="about-video-grid">
          {videos.map((item, index) => {
            const isHovered = hovered === `video-${index}`;
            const isPlaying = activeVideo === index;

            return (
              <div
                key={index}
                className="about-video-card"
                style={{
                  ...styles.videoCard,
                  cursor: isPlaying ? "default" : "pointer",
                  transform: isHovered ? "translateY(-7px)" : "translateY(0)",
                  boxShadow: isHovered
                    ? "0 26px 58px rgba(40,72,190,0.18)"
                    : "0 16px 40px rgba(15,23,42,0.10)",
                }}
                onMouseEnter={() => setHovered(`video-${index}`)}
                onMouseLeave={() => setHovered(null)}
              >
                {isPlaying ? (
                  <iframe
                    style={styles.iframe}
                    src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={getThumbnail(item.videoId)}
                      alt={item.title}
                      style={{
                        ...styles.thumbnail,
                        transform: isHovered ? "scale(1.07)" : "scale(1)",
                      }}
                    />

                    <div style={styles.overlay}></div>

                    <button
                      className="about-play-btn"
                      style={{
                        ...styles.playBtn,
                        transform: isHovered
                          ? "translate(-50%, -50%) scale(1.08)"
                          : "translate(-50%, -50%) scale(1)",
                      }}
                      onClick={() => setActiveVideo(index)}
                    >
                      <Play size={32} fill="white" />
                    </button>

                    <div style={styles.videoContent} className="about-video-content">
                      <div style={styles.videoBadge} className="about-video-badge">
                        <Play size={15} fill="currentColor" />
                        MCargo Learning
                      </div>

                      <h3 style={styles.videoHeading} className="about-video-heading">{item.title}</h3>
                      <p style={styles.videoText} className="about-video-text">{item.text}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div style={styles.cta} className="about-diff-cta">
          <div style={styles.ctaLeft} className="about-diff-cta-left">
            <div style={styles.ctaIcon}>
              <BookOpen size={20} />
            </div>
            Want a compliance checklist before your next shipment?
          </div>

          <button
            style={styles.ctaBtn}
            className="about-diff-cta-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Advisory <ArrowRight size={16} />
          </button>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutDifferentiatorsVideos;