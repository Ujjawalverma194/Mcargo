import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, AlertCircle, Info, Truck } from "lucide-react";

const IncotermsGuide = () => {
  const terms = [
    {
      code: "EXW",
      title: "Ex Works",
      mode: "Any Mode",
      seller: ["Goods ready at premises", "Basic invoice/documents"],
      buyer: ["Pickup", "Export clearance", "Main carriage", "Import clearance"],
      summary:
        "Seller makes goods available at their premises. Buyer carries almost all cost, risk, and transport responsibility.",
    },
    {
      code: "FCA",
      title: "Free Carrier",
      mode: "Any Mode",
      seller: ["Export clearance", "Delivery to named carrier", "Origin handover"],
      buyer: ["Main carriage", "Import clearance", "Final delivery"],
      summary:
        "Seller delivers goods to the carrier nominated by the buyer at the agreed location.",
    },
    {
      code: "CPT",
      title: "Carriage Paid To",
      mode: "Any Mode",
      seller: ["Export clearance", "Main carriage cost", "Delivery to carrier"],
      buyer: ["Import clearance", "Insurance decision", "Destination handling"],
      summary:
        "Seller pays carriage to destination, but risk transfers once goods are handed to the first carrier.",
    },
    {
      code: "CIP",
      title: "Carriage and Insurance Paid To",
      mode: "Any Mode",
      seller: ["Export clearance", "Main carriage", "Cargo insurance"],
      buyer: ["Import clearance", "Destination handling", "Final delivery"],
      summary:
        "Seller pays freight and insurance up to destination, with risk transferring at carrier handover.",
    },
    {
      code: "DAP",
      title: "Delivered at Place",
      mode: "Any Mode",
      seller: ["Export clearance", "Main carriage", "Delivery to named place"],
      buyer: ["Import clearance", "Duties and taxes", "Unloading"],
      summary:
        "Seller delivers goods to the agreed destination ready for unloading. Buyer handles import duties.",
    },
    {
      code: "DPU",
      title: "Delivered at Place Unloaded",
      mode: "Any Mode",
      seller: ["Export clearance", "Main carriage", "Unloading at destination"],
      buyer: ["Import clearance", "Duties and taxes"],
      summary:
        "Seller delivers and unloads goods at the named destination. Buyer manages import formalities.",
    },
    {
      code: "DDP",
      title: "Delivered Duty Paid",
      mode: "Any Mode",
      seller: ["Export clearance", "Import clearance", "Duties and taxes", "Full delivery"],
      buyer: ["Receive goods at destination"],
      summary:
        "Seller carries maximum responsibility, including duties, taxes, and delivery to buyer location.",
    },
    {
      code: "FAS",
      title: "Free Alongside Ship",
      mode: "Sea / Inland",
      seller: ["Export clearance", "Delivery alongside vessel"],
      buyer: ["Loading on vessel", "Ocean freight", "Insurance", "Import clearance"],
      summary:
        "Seller places goods alongside the vessel at the named port. Buyer handles loading and sea freight.",
    },
    {
      code: "FOB",
      title: "Free On Board",
      mode: "Sea / Inland",
      seller: ["Export clearance", "Port handling", "Loaded on board"],
      buyer: ["Ocean freight", "Insurance", "Import clearance", "Final delivery"],
      summary:
        "Seller delivers goods on board the vessel. Risk transfers once goods are loaded on ship.",
    },
    {
      code: "CFR",
      title: "Cost and Freight",
      mode: "Sea / Inland",
      seller: ["Export clearance", "Ocean freight cost", "Loaded on board"],
      buyer: ["Insurance", "Import clearance", "Destination delivery"],
      summary:
        "Seller pays ocean freight to destination port, but risk transfers after loading on the vessel.",
    },
    {
      code: "CIF",
      title: "Cost, Insurance and Freight",
      mode: "Sea / Inland",
      seller: ["Export clearance", "Ocean freight", "Minimum cargo insurance"],
      buyer: ["Import clearance", "Destination delivery", "Extra insurance if needed"],
      summary:
        "Seller pays cost, insurance, and freight to destination port. Risk transfers once loaded on board.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "76px 9% 96px",
      overflow: "hidden",
      borderTop: "1px solid #E7EDF5",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      marginBottom: "28px",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    headerIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      background: "#2e3192",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      boxShadow: "0 14px 30px rgba(46,49,146,0.18)",
    },
    sectionTitle: {
      fontSize: "28px",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 5px",
      letterSpacing: "-0.4px",
    },
    sectionSubtitle: {
      fontSize: "15px",
      lineHeight: 1.55,
      color: "#667085",
      margin: 0,
      fontWeight: 400,
    },
    termsPill: {
      padding: "7px 14px",
      borderRadius: "999px",
      background: "#EEF2FF",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    helper: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      color: "#98A2B3",
      marginBottom: "24px",
      fontWeight: 400,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "22px",
    },
    card: {
      minHeight: "310px",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #D9E4F5",
      borderRadius: "22px",
      background: "#ffffff",
      boxShadow: "0 10px 28px rgba(8,17,38,0.035)",
      transition: "all 0.35s ease",
    },
    topMeta: {
      position: "absolute",
      top: "18px",
      left: "22px",
      right: "22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 4,
    },
    number: {
      fontSize: "13px",
      color: "#B8C2D3",
      fontWeight: 600,
    },
    mode: {
      padding: "7px 13px",
      borderRadius: "999px",
      background: "#EEF2FF",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.7px",
    },
    center: {
      minHeight: "310px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
      padding: "58px 24px 34px",
    },
    code: {
      fontSize: "clamp(78px, 8vw, 118px)",
      lineHeight: 0.92,
      fontWeight: 600,
      color: "rgba(46,49,146,0.11)",
      letterSpacing: "-3px",
      marginBottom: "14px",
      transition: "all 0.35s ease",
    },
    title: {
      fontSize: "16px",
      lineHeight: 1.35,
      fontWeight: 600,
      color: "#081126",
      margin: 0,
      transition: "all 0.35s ease",
    },
    panel: {
      position: "absolute",
      inset: 0,
      padding: "34px 30px",
      background:
        "linear-gradient(135deg, rgba(46,49,146,0.98), rgba(18,168,232,0.96))",
      color: "#ffffff",
      transform: "translateY(100%)",
      transition: "transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)",
      zIndex: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    panelTop: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      marginBottom: "14px",
    },
    panelTitle: {
      fontSize: "20px",
      fontWeight: 600,
      margin: 0,
      lineHeight: 1.3,
    },
    panelBadge: {
      padding: "7px 12px",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.14)",
      border: "1px solid rgba(255,255,255,0.18)",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    },
    panelText: {
      fontSize: "14px",
      lineHeight: 1.6,
      margin: "0 0 20px",
      color: "rgba(255,255,255,0.88)",
      fontWeight: 400,
      maxWidth: "620px",
    },
    split: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "18px",
    },
    splitBox: {
      padding: "14px",
      borderRadius: "14px",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.14)",
    },
    splitTitle: {
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.8px",
      margin: "0 0 10px",
      color: "rgba(255,255,255,0.75)",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "7px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "7px",
      fontSize: "12.8px",
      lineHeight: 1.4,
      color: "#ffffff",
      fontWeight: 400,
    },
    check: {
      flexShrink: 0,
      marginTop: "1px",
      color: "#ffffff",
    },
    note: {
      marginTop: "34px",
      padding: "22px 24px",
      borderRadius: "18px",
      background: "#ffffff",
      border: "1px solid #C7D7FE",
      boxShadow: "0 14px 34px rgba(8,17,38,0.045)",
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
    },
    noteIcon: {
      width: "36px",
      height: "36px",
      borderRadius: "12px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    noteTitle: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 6px",
    },
    noteText: {
      fontSize: "14.5px",
      lineHeight: 1.65,
      color: "#475467",
      margin: 0,
      fontWeight: 400,
    },
  };

  return (
    <>
      <style>{`
        .inc-card:hover {
          transform: translateY(-7px);
          border-color: rgba(46,49,146,0.42) !important;
          box-shadow: 0 22px 54px rgba(46,49,146,0.14) !important;
        }

        .inc-card:hover .inc-hover-panel {
          transform: translateY(0) !important;
        }

        .inc-card:hover .inc-code {
          color: rgba(46,49,146,0.05) !important;
          transform: scale(0.96);
        }

        .inc-card:hover .inc-title {
          color: #2e3192 !important;
        }

        .inc-card:hover .inc-mode {
          background: rgba(255,255,255,0.16) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.18);
        }

        .inc-card:hover .inc-number {
          color: rgba(255,255,255,0.7) !important;
        }

        .inc-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(18,168,232,0.1), transparent 42%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .inc-card:hover::before {
          opacity: 1;
        }

        @media (max-width: 992px) {
          .inc-section {
            padding: 68px 6% 82px !important;
          }

          .inc-grid {
            gap: 18px !important;
          }

          .inc-section-header {
            align-items: flex-start !important;
            flex-direction: column !important;
          }
        }

        @media (max-width: 768px) {
          .inc-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 576px) {
          .inc-section {
            padding: 58px 6% 72px !important;
          }

          .inc-card,
          .inc-center {
            min-height: 360px !important;
          }

          .inc-hover-panel {
            padding: 24px 20px !important;
          }

          .inc-split {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .inc-code {
            font-size: 72px !important;
          }

          .inc-note {
            flex-direction: column !important;
          }

          .inc-section-title {
            font-size: 24px !important;
          }
        }
      `}</style>

      <section className="inc-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.div
            className="inc-section-header"
            style={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <div style={styles.headerLeft}>
              <div style={styles.headerIcon}>
                <Truck size={22} />
              </div>

              <div>
                <h2 className="inc-section-title" style={styles.sectionTitle}>
                  Multimodal Incoterms
                </h2>
                <p style={styles.sectionSubtitle}>
                  Applicable to any mode of transport, including air, road, rail, or sea
                </p>
              </div>
            </div>

            <span style={styles.termsPill}>{terms.length} terms</span>
          </motion.div>

          <motion.div
            style={styles.helper}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Info size={15} />
            Tap or hover a card to see full responsibilities
          </motion.div>

          <motion.div
            className="inc-grid"
            style={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {terms.map((term, index) => (
              <motion.div
                key={term.code}
                className="inc-card"
                variants={fadeUp}
                style={styles.card}
              >
                <div style={styles.topMeta}>
                  <span className="inc-number" style={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="inc-mode" style={styles.mode}>
                    {term.mode}
                  </span>
                </div>

                <div className="inc-center" style={styles.center}>
                  <div className="inc-code" style={styles.code}>
                    {term.code}
                  </div>

                  <h3 className="inc-title" style={styles.title}>
                    {term.title}
                  </h3>
                </div>

                <div className="inc-hover-panel" style={styles.panel}>
                  <div style={styles.panelTop}>
                    <h4 style={styles.panelTitle}>
                      {term.code} — {term.title}
                    </h4>

                    <span style={styles.panelBadge}>{term.mode}</span>
                  </div>

                  <p style={styles.panelText}>{term.summary}</p>

                  <div className="inc-split" style={styles.split}>
                    <div style={styles.splitBox}>
                      <p style={styles.splitTitle}>Seller Handles</p>
                      <div style={styles.list}>
                        {term.seller.slice(0, 4).map((item) => (
                          <span style={styles.listItem} key={item}>
                            <Check size={13} style={styles.check} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={styles.splitBox}>
                      <p style={styles.splitTitle}>Buyer Handles</p>
                      <div style={styles.list}>
                        {term.buyer.slice(0, 4).map((item) => (
                          <span style={styles.listItem} key={item}>
                            <ArrowRight size={13} style={styles.check} />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="inc-note"
            style={styles.note}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div style={styles.noteIcon}>
              <AlertCircle size={18} />
            </div>

            <div>
              <h3 style={styles.noteTitle}>Important Note</h3>
              <p style={styles.noteText}>
                Incoterms define cost, responsibility, and risk transfer between
                buyer and seller, but they do not replace the sales contract,
                customs regulations, insurance terms, or country-specific trade
                compliance requirements. Always validate the selected Incoterm
                with your shipment route, commodity, buyer-seller agreement, and
                applicable import-export documentation before cargo movement.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default IncotermsGuide;