import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Ship,
  ShieldCheck,
} from "lucide-react";

import logo from "../../assets/logo.png";

const Footer = () => {
  const styles = {
    footer: {
      background:
        "linear-gradient(180deg, #ffffff 0%, #f8fbff 55%, #f3f7ff 100%)",
      fontFamily: "Inter, sans-serif",
      padding: "90px 9% 30px",
      borderTop: "1px solid #e8edf5",
      position: "relative",
      overflow: "hidden",
    },

    bgGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(40,72,190,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(40,72,190,0.035) 1px, transparent 1px)",
      backgroundSize: "78px 78px",
      pointerEvents: "none",
    },

    topStrip: {
      maxWidth: "1450px",
      margin: "0 auto 58px",
      background:
        "linear-gradient(135deg, #2848BE 0%, #1297df 65%, #0EA57A 100%)",
      borderRadius: "28px",
      padding: "28px 34px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 20px 46px rgba(40,72,190,0.22)",
      position: "relative",
      zIndex: 2,
    },

    stripLeft: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
    },

    stripIcon: {
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      background: "rgba(255,255,255,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    stripTitle: {
      fontSize: "22px",
      fontWeight: "800",
      marginBottom: "5px",
    },

    stripText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.82)",
    },

    stripBtn: {
      background: "#ffffff",
      color: "#2848BE",
      border: "none",
      borderRadius: "14px",
      padding: "14px 22px",
      fontSize: "14px",
      fontWeight: "800",
      display: "flex",
      alignItems: "center",
      gap: "9px",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    main: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.45fr 0.85fr 0.85fr 1fr 1.35fr",
      gap: "46px",
      position: "relative",
      zIndex: 2,
    },

    logo: {
      width: "190px",
      height: "62px",
      objectFit: "contain",
      marginBottom: "22px",
    },

    aboutText: {
      fontSize: "15px",
      lineHeight: "1.8",
      color: "#667085",
      maxWidth: "330px",
      marginBottom: "24px",
    },

    socialRow: {
      display: "flex",
      gap: "12px",
    },

    social: {
      width: "42px",
      height: "42px",
      borderRadius: "13px",
      background: "#ffffff",
      border: "1px solid #e2e8f4",
      color: "#2848BE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.25s ease",
      boxShadow: "0 8px 18px rgba(15,23,42,0.045)",
    },

    colTitle: {
      fontSize: "15px",
      fontWeight: "800",
      color: "#101828",
      marginBottom: "22px",
    },

    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },

    link: {
      color: "#667085",
      fontSize: "15px",
      textDecoration: "none",
      cursor: "pointer",
      transition: "all 0.22s ease",
    },

    contactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "13px",
      color: "#667085",
      fontSize: "14.5px",
      lineHeight: "1.6",
      marginBottom: "16px",
    },

    contactIcon: {
      color: "#2848BE",
      marginTop: "2px",
      flexShrink: 0,
    },

    mapBox: {
      height: "165px",
      borderRadius: "22px",
      overflow: "hidden",
      border: "1px solid #e4ebf7",
      background:
        "linear-gradient(135deg, #eef4ff 0%, #ffffff 50%, #eafbf2 100%)",
      position: "relative",
      boxShadow: "0 12px 26px rgba(15,23,42,0.055)",
    },

    mapGrid: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(40,72,190,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(40,72,190,0.12) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      opacity: 0.45,
    },

    mapPin: {
      position: "absolute",
      left: "50%",
      top: "42%",
      transform: "translate(-50%, -50%)",
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      background: "#2848BE",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 12px 24px rgba(40,72,190,0.28)",
    },

    mapLabel: {
      position: "absolute",
      left: "22px",
      bottom: "18px",
      background: "#ffffff",
      color: "#101828",
      fontSize: "13px",
      fontWeight: "700",
      padding: "8px 13px",
      borderRadius: "999px",
      boxShadow: "0 8px 18px rgba(15,23,42,0.08)",
    },

    divider: {
      maxWidth: "1450px",
      height: "1px",
      background: "#e4ebf4",
      margin: "58px auto 26px",
      position: "relative",
      zIndex: 2,
    },

    bottom: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#667085",
      fontSize: "14px",
      position: "relative",
      zIndex: 2,
    },

    bottomLinks: {
      display: "flex",
      gap: "22px",
    },
  };

  const hoverLink = (e, enter) => {
    e.currentTarget.style.color = enter ? "#2848BE" : "#667085";
    e.currentTarget.style.transform = enter ? "translateX(4px)" : "translateX(0)";
  };

  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.bgGrid}></div>

        <div style={styles.topStrip}>
          <div style={styles.stripLeft}>
            <div style={styles.stripIcon}>
              <ShieldCheck size={25} />
            </div>

            <div>
              <div style={styles.stripTitle}>
                Need help with import/export compliance?
              </div>
              <div style={styles.stripText}>
                Talk to MCargo specialists before your shipment moves.
              </div>
            </div>
          </div>

          <button
            style={styles.stripBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Free Advisory <ArrowRight size={17} />
          </button>
        </div>

        <div style={styles.main}>
          <div>
            <img src={logo} alt="MCargo" style={styles.logo} />

            <p style={styles.aboutText}>
              India-focused import-export compliance and freight advisory
              platform with integrated execution. Your cargo, our
              responsibility.
            </p>

            <div style={styles.socialRow}>
              <div
                style={styles.social}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2848BE";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#2848BE";
                }}
              >
<span style={{ fontWeight: 800, fontSize: "14px" }}>in</span>
              </div>

              <div
                style={styles.social}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2848BE";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#2848BE";
                }}
              >
                <span style={{ fontWeight: 800 }}>▶</span>
              </div>
            </div>
          </div>

          <div>
            <div style={styles.colTitle}>Services</div>
            <ul style={styles.list}>
              {[
                "Trade Advisory",
                "Freight Forwarding",
                "Customs Clearance",
                "Warehousing & Cold Storage",
                "Multimodal Transportation",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={styles.link}
                    onMouseEnter={(e) => hoverLink(e, true)}
                    onMouseLeave={(e) => hoverLink(e, false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>Company</div>
            <ul style={styles.list}>
              {["About Us", "Brochure", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={styles.link}
                    onMouseEnter={(e) => hoverLink(e, true)}
                    onMouseLeave={(e) => hoverLink(e, false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>Resources</div>
            <ul style={styles.list}>
              {["Container Specs", "Incoterms", "Case Studies", "HS Code Guide"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={styles.link}
                      onMouseEnter={(e) => hoverLink(e, true)}
                      onMouseLeave={(e) => hoverLink(e, false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>Contact</div>

            <div style={styles.contactItem}>
              <Mail size={18} style={styles.contactIcon} />
              info@mcargo.com
            </div>

            <div style={styles.contactItem}>
              <Phone size={18} style={styles.contactIcon} />
              +91 98765 43210
            </div>

            <div style={styles.contactItem}>
              <MapPin size={18} style={styles.contactIcon} />
              Mumbai, Maharashtra, India
            </div>

            <div style={styles.mapBox}>
              <div style={styles.mapGrid}></div>

              <div style={styles.mapPin}>
                <MapPin size={22} />
              </div>

              <div style={styles.mapLabel}>
                MCargo Operations Hub
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom}>
          <div>© 2026 MCargo. All rights reserved.</div>

          <div style={styles.bottomLinks}>
            <a href="#" style={styles.link}>
              Terms & Conditions
            </a>
            <a href="#" style={styles.link}>
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;