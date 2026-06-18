import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  Clock,
  ChevronDown,
  Send,
  Mail,
  CheckCircle,
} from "lucide-react";

const CareerOpenings = () => {
  const [openJob, setOpenJob] = useState(null);

  const jobs = [
    {
      title: "Sales Executive",
      department: "Sales & Business Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      description:
        "Support business development for freight forwarding, customs clearance, and trade advisory services.",
      points: [
        "Identify and qualify new import-export business opportunities",
        "Coordinate with operations for quotes and shipment feasibility",
        "Maintain client relationships and CRM updates",
      ],
    },
    {
      title: "Sales Manager",
      department: "Sales & Business Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      description:
        "Lead client acquisition and account growth across logistics, customs, and compliance-led services.",
      points: [
        "Build pipeline across exporters, importers, and manufacturers",
        "Manage pricing coordination and client presentations",
        "Drive monthly revenue targets and strategic accounts",
      ],
    },
    {
      title: "Senior Sales Manager",
      department: "Sales & Business Development",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      description:
        "Own enterprise customer development for complex logistics and India trade compliance requirements.",
      points: [
        "Develop large accounts and industry-specific trade solutions",
        "Mentor junior sales team members",
        "Work closely with leadership on growth strategy",
      ],
    },
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9% 106px",
      borderTop: "1px solid #E7EDF5",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    eyebrow: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "1px",
      textTransform: "uppercase",
      color: "#2e3192",
      margin: "0 0 24px",
    },
    title: {
      fontSize: "clamp(34px, 4vw, 48px)",
      lineHeight: 1.12,
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 64px",
      letterSpacing: "-1px",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2e3192, #12A8E8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    jobsWrap: {
      maxWidth: "860px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    jobCard: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "16px",
      boxShadow: "0 10px 28px rgba(8,17,38,0.045)",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    jobHeader: {
      width: "100%",
      border: "none",
      background: "transparent",
      padding: "22px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "18px",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "Inter, sans-serif",
    },
    jobTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#081126",
      margin: "0 0 10px",
    },
    meta: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "16px",
      color: "#667085",
      fontSize: "14px",
      fontWeight: 400,
    },
    metaItem: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
    chevron: {
      color: "#98A2B3",
      flexShrink: 0,
      transition: "all 0.3s ease",
    },
    details: {
      padding: "0 24px 24px",
      borderTop: "1px solid #EEF2F7",
    },
    description: {
      fontSize: "14.5px",
      lineHeight: 1.65,
      color: "#475467",
      margin: "18px 0",
      fontWeight: 400,
    },
    list: {
      display: "grid",
      gap: "10px",
      marginBottom: "22px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "9px",
      fontSize: "14px",
      color: "#344054",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    applyBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "#2e3192",
      color: "#ffffff",
      border: "none",
      borderRadius: "12px",
      padding: "12px 18px",
      fontSize: "14px",
      fontWeight: 600,
      textDecoration: "none",
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(46,49,146,0.22)",
      transition: "all 0.25s ease",
    },
    cta: {
      maxWidth: "860px",
      margin: "44px auto 0",
      background: "#2e3192",
      color: "#ffffff",
      borderRadius: "18px",
      padding: "34px 42px",
      textAlign: "center",
      boxShadow: "0 18px 42px rgba(46,49,146,0.22)",
    },
    ctaTitle: {
      fontSize: "22px",
      fontWeight: 600,
      margin: "0 0 12px",
      color: "#ffffff",
    },
    ctaText: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.88)",
      margin: "0 auto 24px",
      maxWidth: "760px",
      fontWeight: 400,
    },
    ctaActions: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "18px",
      flexWrap: "wrap",
    },
    ctaBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      padding: "13px 24px",
      borderRadius: "14px",
      background: "#ffffff",
      color: "#2e3192",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      transition: "all 0.25s ease",
    },
    email: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
    },
  };

  const cardHoverIn = (e) => {
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.25)";
    e.currentTarget.style.boxShadow = "0 18px 42px rgba(46,49,146,0.1)";
  };

  const cardHoverOut = (e) => {
    e.currentTarget.style.borderColor = "#E7EDF5";
    e.currentTarget.style.boxShadow = "0 10px 28px rgba(8,17,38,0.045)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .career-openings-section {
            padding: 76px 6% 86px !important;
          }
        }

        @media (max-width: 576px) {
          .career-openings-section {
            padding: 62px 6% 72px !important;
          }

          .career-openings-title {
            margin-bottom: 42px !important;
          }

          .career-job-header {
            padding: 20px !important;
          }

          .career-job-details {
            padding: 0 20px 22px !important;
          }

          .career-cta {
            padding: 30px 22px !important;
          }
        }
      `}</style>

      <section className="career-openings-section" style={styles.section}>
        <div style={styles.inner}>
          <motion.p
            style={styles.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.p>

          <motion.h2
            className="career-openings-title"
            style={styles.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Current <span style={styles.gradientText}>Openings</span>
          </motion.h2>

          <div style={styles.jobsWrap}>
            {jobs.map((job, index) => {
              const isOpen = openJob === index;

              return (
                <motion.div
                  key={job.title}
                  style={styles.jobCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <button
                    className="career-job-header"
                    style={styles.jobHeader}
                    onClick={() => setOpenJob(isOpen ? null : index)}
                  >
                    <div>
                      <h3 style={styles.jobTitle}>{job.title}</h3>

                      <div style={styles.meta}>
                        <span style={styles.metaItem}>
                          <BriefcaseBusiness size={15} />
                          {job.department}
                        </span>

                        <span style={styles.metaItem}>
                          <MapPin size={15} />
                          {job.location}
                        </span>

                        <span style={styles.metaItem}>
                          <Clock size={15} />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      style={{
                        ...styles.chevron,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? "#2e3192" : "#98A2B3",
                      }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="career-job-details"
                        style={styles.details}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p style={styles.description}>{job.description}</p>

                        <div style={styles.list}>
                          {job.points.map((point) => (
                            <span style={styles.listItem} key={point}>
                              <CheckCircle
                                size={16}
                                color="#12A8E8"
                                style={{ marginTop: "2px", flexShrink: 0 }}
                              />
                              {point}
                            </span>
                          ))}
                        </div>

                        <a
                          href="mailto:info@infinitylogistics.biz"
                          style={styles.applyBtn}
                        >
                          Apply Now <Send size={15} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="career-cta"
            style={styles.cta}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h3 style={styles.ctaTitle}>Don&apos;t See a Fit?</h3>

            <p style={styles.ctaText}>
              Send a general application — we&apos;re always open to professionals
              with experience in shipping, freight forwarding, and India trade
              compliance.
            </p>

            <div style={styles.ctaActions}>
              <a
                href="mailto:info@infinitylogistics.biz"
                style={styles.ctaBtn}
              >
                <Send size={16} />
                Submit General Application
              </a>

              <a
                href="mailto:info@infinitylogistics.biz"
                style={styles.email}
              >
                <Mail size={16} />
                info@infinitylogistics.biz
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareerOpenings;