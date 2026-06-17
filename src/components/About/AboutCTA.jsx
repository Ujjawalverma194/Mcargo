import React from "react";
import { ArrowRight, Mail, CheckCircle2, ShieldCheck } from "lucide-react";

const AboutCTA = () => {
  const styles = {
    section: {
      padding: "115px 9% 120px",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      overflow: "hidden",
    },

    container: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderRadius: "32px",
      overflow: "hidden",
      background: "#ffffff",
      boxShadow: "0 28px 70px rgba(15,23,42,0.10)",
      border: "1px solid #E6ECF5",
    },

    left: {
      padding: "70px 68px",
      background:
        "linear-gradient(135deg, #F3F7FF 0%, #F8FBFF 55%, #EEF4FF 100%)",
      position: "relative",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "#7ADCA8",
      color: "#ffffff",
      padding: "10px 20px",
      borderRadius: "999px",
      fontSize: "14px",
      fontWeight: "700",
      marginBottom: "34px",
    },

    title: {
      fontSize: "40px",
      lineHeight: "1.2",
      fontWeight: "750",
      color: "#061226",
      letterSpacing: "-1px",
      margin: "0 0 24px",
    },

    desc: {
      fontSize: "18px",
      lineHeight: "1.75",
      color: "#344054",
      maxWidth: "560px",
      margin: "0 0 38px",
    },

    button: {
      width: "390px",
      height: "64px",
      borderRadius: "999px",
      border: "1px solid #DDE6F3",
      background: "#ffffff",
      display: "flex",
      alignItems: "center",
      gap: "34px",
      padding: "0 22px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "700",
      color: "#101828",
      boxShadow: "0 12px 28px rgba(15,23,42,0.08)",
      transition: "all 0.28s ease",
      marginBottom: "78px",
    },

    circle: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "#ffffff",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 7px 18px rgba(15,23,42,0.14)",
      transition: "all 0.28s ease",
    },

    emailRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      color: "#101828",
      fontSize: "16px",
      fontWeight: "500",
    },

    mailIcon: {
      color: "#22C55E",
    },

    right: {
      minHeight: "560px",
      position: "relative",
      overflow: "hidden",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.8s ease",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(15,23,42,0.03), rgba(15,23,42,0.28))",
    },

    floatingCard: {
      position: "absolute",
      right: "30px",
      bottom: "30px",
      background: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(255,255,255,0.65)",
      borderRadius: "22px",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      boxShadow: "0 18px 42px rgba(15,23,42,0.18)",
      backdropFilter: "blur(12px)",
    },

    floatingIcon: {
      width: "46px",
      height: "46px",
      borderRadius: "14px",
      background: "#EEF4FF",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    floatingTitle: {
      fontSize: "15px",
      fontWeight: "800",
      color: "#101828",
      marginBottom: "3px",
    },

    floatingText: {
      fontSize: "13px",
      color: "#667085",
    },
  };

  return (
    <>
      <style>
        {`
          .mcargo-cta:hover img {
            transform: scale(1.045);
          }

          .mcargo-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 18px 36px rgba(40,72,190,0.14) !important;
          }

          .mcargo-cta-btn:hover .mcargo-cta-circle {
            background: #2848BE !important;
            color: #ffffff !important;
            transform: rotate(-25deg);
          }

          @media (max-width: 768px) {
            .about-cta-section { padding: 84px 24px 88px !important; }
            .about-cta-container { grid-template-columns: 1fr !important; border-radius: 28px !important; }
            .about-cta-left { padding: 34px 36px !important; }
            .about-cta-title { font-size: 31px !important; line-height: 1.28 !important; }
            .about-cta-desc { font-size: 18px !important; line-height: 1.65 !important; max-width: 100% !important; }
            .about-cta-btn { width: 100% !important; gap: 18px !important; padding: 0 18px !important; margin-bottom: 52px !important; }
            .about-cta-email { font-size: 16px !important; word-break: break-word !important; }
            .about-cta-right { min-height: 290px !important; }
            .about-cta-floating { display: none !important; }
          }
          @media (max-width: 420px) {
            .about-cta-left { padding: 34px 34px !important; }
            .about-cta-title { font-size: 30px !important; }
          }

        `}
      </style>

      <section style={styles.section} className="about-cta-section">
        <div className="mcargo-cta about-cta-container" style={styles.container}>
          <div style={styles.left} className="about-cta-left">
            <div style={styles.badge}>
              <CheckCircle2 size={16} />
              Get Started
            </div>

            <h2 style={styles.title} className="about-cta-title">
              De-Risk Your India Trade
              <br />
              Before Cargo Moves
            </h2>

            <p style={styles.desc} className="about-cta-desc">
              Book a free compliance consultation. IEC setup, FSSAI licensing,
              HS classification, SVB handling and freight planning — MCargo
              helps you move with confidence.
            </p>

            <button className="mcargo-cta-btn about-cta-btn" style={styles.button}>
              <span className="mcargo-cta-circle" style={styles.circle}>
                <ArrowRight size={21} />
              </span>
              Book Free Advisory
            </button>

            <div style={styles.emailRow} className="about-cta-email">
              <Mail size={21} style={styles.mailIcon} />
              info@mcargo.com
            </div>
          </div>

          <div style={styles.right} className="about-cta-right">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="MCargo advisory consultation"
              style={styles.image}
            />

            <div style={styles.overlay}></div>

            <div style={styles.floatingCard} className="about-cta-floating">
              <div style={styles.floatingIcon}>
                <ShieldCheck size={22} />
              </div>

              <div>
                <div style={styles.floatingTitle}>Compliance Ready</div>
                <div style={styles.floatingText}>Before shipment moves</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCTA;