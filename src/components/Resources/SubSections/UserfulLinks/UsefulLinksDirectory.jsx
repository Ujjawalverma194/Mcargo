import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ship,
  Plane,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const UsefulLinksDirectory = () => {
  const [openSection, setOpenSection] = useState("shipping");

  const sections = [
    {
      id: "shipping",
      title: "Shipping Lines",
      icon: Ship,
      count: 27,
      groups: [
        {
          heading: "Universal Trackers",
          links: [
            { name: "Track & Trace – Air Cargo", url: "https://www.track-trace.com/aircargo" },
            { name: "Track & Trace – Container", url: "https://www.track-trace.com/container" },
          ],
        },
        {
          heading: "Container Tracking",
          links: [
            { name: "CMA CGM", url: "https://www.cma-cgm.com/ebusiness/tracking" },
            { name: "COSCO", url: "https://elines.coscoshipping.com" },
            { name: "EVERGREEN", url: "https://ct.shipmentlink.com" },
            { name: "HAPAG-LLOYD", url: "https://www.hapag-lloyd.com" },
            { name: "MAERSK", url: "https://www.maersk.com/tracking" },
            { name: "MSC (Mediterranean Shipping Company)", url: "https://www.msc.com/track-a-shipment" },
            { name: "OOCL (Orient Overseas Container Line)", url: "https://www.oocl.com" },
            { name: "PIL (Pacific International Lines)", url: "https://www.pilship.com" },
            { name: "RCL (Regional Container Lines)", url: "https://www.rclgroup.com" },
            { name: "WAN HAI", url: "https://www.wanhai.com" },
            { name: "ONE (Ocean Network Express)", url: "https://ecomm.one-line.com" },
            { name: "KMTC (Korea Marine Transport Company)", url: "https://www.ekmtc.com" },
            { name: "SEAPOL", url: "https://www.seapol.com" },
            { name: "Benline", url: "https://www.benlineagencies.com" },
            { name: "Arkas Line", url: "https://www.arkasline.com.tr" },
            { name: "Vedant Container Line", url: "#" },
            { name: "Muskan Container Line", url: "#" },
            { name: "Inox Shipping Line", url: "#" },
          ],
        },
        {
          heading: "Air Cargo Tracking",
          links: [
            { name: "Emirates SkyCargo", url: "https://www.skycargo.com" },
            { name: "Air India Cargo", url: "https://www.airindia.com" },
            { name: "Oman Air Cargo", url: "https://www.omanair.com" },
            { name: "Skyways Group", url: "https://www.skyways-group.com" },
          ],
        },
        {
          heading: "Package Tracking",
          links: [
            { name: "FedEx", url: "https://www.fedex.com" },
            { name: "DHL", url: "https://www.dhl.com" },
            { name: "E-Ship", url: "#" },
          ],
        },
      ],
    },
    {
      id: "customs",
      title: "Customs House",
      icon: Plane,
      count: 37,
      groups: [
        {
          heading: "Indian Customs & Trade Portals",
          links: [
            { name: "ICEGATE", url: "https://www.icegate.gov.in" },
            { name: "CBIC", url: "https://www.cbic.gov.in" },
            { name: "DGFT", url: "https://www.dgft.gov.in" },
            { name: "FSSAI", url: "https://www.fssai.gov.in" },
            { name: "Port Community System", url: "https://www.indianpcs.gov.in" },
            { name: "JNCH Customs", url: "https://jawaharcustoms.gov.in" },
            { name: "Mundra Customs", url: "#" },
            { name: "Chennai Customs", url: "#" },
            { name: "Kolkata Customs", url: "#" },
            { name: "Bangalore Customs", url: "#" },
            { name: "Delhi Air Cargo Customs", url: "#" },
            { name: "Mumbai Customs Zone", url: "#" },
          ],
        },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "74px 9% 96px",
      borderTop: "1px solid #E7EDF5",
    },
    inner: {
      maxWidth: "980px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    accordion: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "22px",
      boxShadow: "0 14px 34px rgba(8,17,38,0.055)",
      overflow: "hidden",
    },
    header: {
      width: "100%",
      border: "none",
      background: "#ffffff",
      padding: "22px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      cursor: "pointer",
      textAlign: "left",
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    iconBox: {
      width: "44px",
      height: "44px",
      borderRadius: "14px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    titleWrap: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexWrap: "wrap",
    },
    title: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#081126",
      margin: 0,
      lineHeight: 1.25,
    },
    count: {
      padding: "6px 11px",
      borderRadius: "999px",
      background: "#F2F4F7",
      color: "#98A2B3",
      fontSize: "12px",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    chevron: {
      color: "#98A2B3",
      flexShrink: 0,
    },
    body: {
      borderTop: "1px solid #EEF2F7",
      padding: "0 24px 24px",
    },
    group: {
      paddingTop: "22px",
    },
    groupTitle: {
      fontSize: "12px",
      fontWeight: 600,
      color: "#98A2B3",
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      margin: "0 0 14px",
    },
    linksGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px 12px",
    },
    link: {
      minHeight: "46px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "11px 14px",
      borderRadius: "13px",
      border: "1px solid #E7EDF5",
      background: "#ffffff",
      color: "#344054",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.35,
      transition: "all 0.25s ease",
    },
    linkIcon: {
      color: "#2e3192",
      flexShrink: 0,
    },
  };

  const linkHoverIn = (e) => {
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.28)";
    e.currentTarget.style.boxShadow = "0 10px 24px rgba(46,49,146,0.08)";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.color = "#2e3192";
  };

  const linkHoverOut = (e) => {
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.color = "#344054";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .ul-directory-section {
            padding: 64px 6% 82px !important;
          }

          .ul-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .ul-directory-section {
            padding: 54px 6% 72px !important;
          }

          .ul-accordion-header {
            padding: 20px !important;
          }

          .ul-accordion-body {
            padding: 0 20px 20px !important;
          }

          .ul-links-grid {
            grid-template-columns: 1fr !important;
          }

          .ul-link-title {
            font-size: 18px !important;
          }
        }
      `}</style>

      <section className="ul-directory-section" style={styles.section}>
        <div style={styles.inner}>
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;

            return (
              <motion.div
                key={section.id}
                style={styles.accordion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <button
                  className="ul-accordion-header"
                  style={styles.header}
                  type="button"
                  onClick={() => setOpenSection(isOpen ? "" : section.id)}
                >
                  <div style={styles.headerLeft}>
                    <div style={styles.iconBox}>
                      <Icon size={21} />
                    </div>

                    <div style={styles.titleWrap}>
                      <h2 className="ul-link-title" style={styles.title}>
                        {section.title}
                      </h2>
                      <span style={styles.count}>{section.count} links</span>
                    </div>
                  </div>

                  {isOpen ? (
                    <ChevronUp size={20} style={styles.chevron} />
                  ) : (
                    <ChevronDown size={20} style={styles.chevron} />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="ul-accordion-body"
                      style={styles.body}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {section.groups.map((group) => (
                        <div style={styles.group} key={group.heading}>
                          <h3 style={styles.groupTitle}>{group.heading}</h3>

                          <div className="ul-links-grid" style={styles.linksGrid}>
                            {group.links.map((link) => (
                              <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.link}
                                onMouseEnter={linkHoverIn}
                                onMouseLeave={linkHoverOut}
                              >
                                <ExternalLink size={15} style={styles.linkIcon} />
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default UsefulLinksDirectory;