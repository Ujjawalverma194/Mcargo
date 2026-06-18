import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Truck,
  ShieldCheck,
  Package,
  Layers,
  FlaskConical,
  Handshake,
  BookOpen,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const AddOnServicesShowcase = () => {
  const services = [
    {
      title: "Door-to-Door Delivery",
      icon: Truck,
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&fit=crop",
      description:
        "We offer a complete door-to-door delivery service, taking cargo from the exporter’s factory or warehouse and managing the entire transportation process to the buyer’s warehouse.",
      features: [
        "Factory or warehouse pickup to buyer destination",
        "Full logistics management under one provider",
        "International agent coordination for last-mile delivery",
        "Elimination of multiple intermediary touchpoints",
        "Global reach via partner networks",
        "Lower cost and reduced damage risk",
      ],
    },
    {
      title: "Cargo Insurance",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&fit=crop",
      description:
        "We work with multiple insurance partners to secure fit-for-purpose cargo coverage against transport risks, high-value cargo exposure, and route-specific movement requirements.",
      features: [
        "Complete transport risk coverage",
        "Coverage for all cargo types and trade lanes",
        "Dedicated insurance advisory team",
        "Multiple insurance partner network",
        "Tailored policies for sensitive cargo",
        "Claims coordination support",
      ],
    },
    {
      title: "Packaging",
      icon: Package,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&fit=crop",
      description:
        "Professional packaging solutions for safer cargo handling, reduced damage risk, optimized freight cost, and shipment readiness across industrial and consumer cargo categories.",
      features: [
        "Custom packaging design and fabrication",
        "Corrosion-resistant and anti-static materials",
        "Industry-specific packaging solutions",
        "PE foam sheets and laminated composites",
        "On-site packaging supervision",
        "Standardized packaging quality",
      ],
    },
    {
      title: "Palletization",
      icon: Layers,
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&fit=crop",
      description:
        "Our palletization service ensures safe, efficient loading and unloading of export consignments with container-aligned pallet packing and clear cargo labelling.",
      features: [
        "Container-dimension-aligned pallet packing",
        "Fumigation to prevent pest damage",
        "Pallet-jack accessible clearance",
        "Internal dunnage for hazardous materials",
        "Proper labelling for customs and delivery",
        "Compliance with pallet standards",
      ],
    },
    {
      title: "Fumigation",
      icon: FlaskConical,
      image:
        "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?w=1200&q=80&fit=crop",
      description:
        "We provide empty container fumigation, wooden packaging treatment, loaded container fumigation, and certificate issuance through approved agencies.",
      features: [
        "Empty container fumigation treatment",
        "Loaded container fumigation",
        "Latest pest eradication methodology",
        "Wooden packaging ISPM-15 compliance",
        "Government-approved fumigation agencies",
        "Certificate issuance for customs",
      ],
    },
    {
      title: "Customised / Tailored Services",
      icon: Handshake,
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop",
      description:
        "No two supply chains are the same. We design bespoke logistics solutions tailored to your commodity, trade lane, regulatory requirements, and operating priorities.",
      features: [
        "Bespoke SLA and service design",
        "Commodity-specific compliance expertise",
        "Flexible scheduling and priority handling",
        "Dedicated account manager",
        "Custom multimodal routing plans",
        "Performance reviews and optimization",
      ],
    },
    {
      title: "Shipment Advisory & Compliance Expertise",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&fit=crop",
      description:
        "Our compliance experts provide shipment advisory covering HS classification, duty structure analysis, documentation review, and regulatory pre-checks before cargo moves.",
      features: [
        "HS code classification and duty analysis",
        "FSSAI, BIS, and product compliance",
        "DGFT scheme advisory",
        "Pre-shipment documentation review",
        "SVB and related-party transaction support",
        "Customs valuation dispute resolution",
      ],
    },
    {
      title: "ECTN (Electronic Cargo Tracking Note)",
      icon: FileCheck,
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80&fit=crop",
      description:
        "ECTN is a maritime waiver certificate required by certain African countries for customs clearance and pre-arrival shipment visibility.",
      features: [
        "ECTN, FERI, BESC and BIETC issuance",
        "Pre-arrival shipment documentation",
        "Compliance advisory to avoid penalties",
        "Authorized agent support",
        "Coverage for African destinations",
        "Tracking from loading to discharge",
      ],
      cta: true,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const styles = {
    section: {
      width: "100%",
      background: "#ffffff",
      fontFamily: "Inter, sans-serif",
      padding: "72px 9% 92px",
      overflow: "hidden",
    },
    intro: {
      maxWidth: "1450px",
      margin: "0 auto 58px",
      display: "grid",
      gridTemplateColumns: "0.9fr 1fr",
      gap: "60px",
      alignItems: "center",
    },
    eyebrow: {
      fontSize: "12px",
      fontWeight: 800,
      color: "#2e3192",
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      marginBottom: "12px",
    },
    introTitle: {
      fontSize: "clamp(28px, 3vw, 38px)",
      lineHeight: 1.12,
      fontWeight: 800,
      color: "#081126",
      letterSpacing: "-1px",
      margin: "0 0 14px",
    },
    gradientText: {
      background: "linear-gradient(90deg, #2e3192, #12A8E8, #22C55E)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    introText: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "#475467",
      margin: 0,
    },
    note: {
      padding: "18px 22px",
      borderRadius: "18px",
      background: "#ECFDF3",
      border: "1px solid #ABEFC6",
      color: "#067647",
      fontSize: "13.5px",
      lineHeight: 1.6,
      fontWeight: 700,
    },
    serviceStack: {
      maxWidth: "1450px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "82px",
    },
    serviceRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "70px",
      alignItems: "center",
    },
    content: {
      minWidth: 0,
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 14px",
      borderRadius: "999px",
      background: "#EEF4FF",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 800,
      letterSpacing: "0.4px",
      textTransform: "uppercase",
      marginBottom: "20px",
    },
    title: {
      fontSize: "clamp(24px, 2.4vw, 32px)",
      lineHeight: 1.18,
      fontWeight: 800,
      color: "#081126",
      letterSpacing: "-0.7px",
      margin: "0 0 16px",
    },
    description: {
      fontSize: "15.5px",
      lineHeight: 1.75,
      color: "#475467",
      margin: "0 0 28px",
    },
    featureGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px 22px",
    },
    feature: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      fontSize: "13.5px",
      lineHeight: 1.45,
      color: "#344054",
      fontWeight: 600,
    },
    checkWrap: {
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: "#D1FADF",
      color: "#079455",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: "1px",
    },
    imageWrap: {
      position: "relative",
      minHeight: "390px",
      borderRadius: "26px",
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(8,17,38,0.12)",
      border: "1px solid #E7EDF5",
    },
    image: {
      width: "100%",
      height: "100%",
      minHeight: "390px",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.45s ease",
    },
    floatingCard: {
  position: "absolute",
  right: "20px",
  bottom: "20px",
  background: "#ffffff",
  borderRadius: "18px",
  padding: "15px 18px",
  minWidth: "180px",
  boxShadow: "0 18px 45px rgba(8,17,38,0.16)",
  border: "1px solid #E7EDF5",
  zIndex: 3,
},
    floatingLabel: {
      display: "block",
      fontSize: "12px",
      color: "#667085",
      marginBottom: "4px",
    },
    floatingValue: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#081126",
    },
    ctaBtn: {
      marginTop: "26px",
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      padding: "12px 18px",
      borderRadius: "999px",
      background: "#2e3192",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "13.5px",
      fontWeight: 800,
      boxShadow: "0 14px 30px rgba(46,49,146,0.24)",
      transition: "all 0.25s ease",
    },
  };

  const imageHoverIn = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.045)";
  };

  const imageHoverOut = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
  };

  return (
    <>
      <style>{`
        @media (max-width: 992px) {
          .ao-services-section {
            padding: 72px 6% 90px !important;
          }

          .ao-intro,
          .ao-service-row {
            grid-template-columns: 1fr !important;
          }

          .ao-service-row {
            gap: 42px !important;
          }

          .ao-service-row:nth-child(even) .ao-image-col {
            order: 2;
          }

          .ao-service-row:nth-child(even) .ao-content-col {
            order: 1;
          }
        }

        @media (max-width: 576px) {
          .ao-services-section {
            padding: 58px 6% 74px !important;
          }

          .ao-service-stack {
            gap: 76px !important;
          }

          .ao-feature-grid {
            grid-template-columns: 1fr !important;
          }

          .ao-image-wrap,
          .ao-service-image {
            min-height: 280px !important;
          }

         .ao-floating-card {
  right: 14px !important;
  bottom: 14px !important;
  min-width: 150px !important;
  padding: 13px 15px !important;
}
        }
      `}</style>

      <section className="ao-services-section" style={styles.section}>
        <motion.div
          className="ao-intro"
          style={styles.intro}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <div>
            <div style={styles.eyebrow}>Our Promise</div>
            <h2 style={styles.introTitle}>
              You Name It, <span style={styles.gradientText}>MCargo Has It</span>
            </h2>
            <p style={styles.introText}>
              From niche compliance advisory to real-time logistics support, our add-on services
              complete your shipment lifecycle without forcing bundled packages.
            </p>
          </div>

          <div style={styles.note}>
            Note: These services are delivered independently based on your specific requirement
            and are fully customizable for each shipment.
          </div>
        </motion.div>

        <div className="ao-service-stack" style={styles.serviceStack}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                className="ao-service-row"
                key={service.title}
                style={styles.serviceRow}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <div
                  className="ao-content-col"
                  style={{
                    ...styles.content,
                    order: reverse ? 2 : 1,
                  }}
                >
                  <div style={styles.badge}>
                    <Icon size={15} />
                    Add-On Service
                  </div>

                  <h3 style={styles.title}>{service.title}</h3>
                  <p style={styles.description}>{service.description}</p>

                  <div className="ao-feature-grid" style={styles.featureGrid}>
                    {service.features.map((feature) => (
                      <div style={styles.feature} key={feature}>
                        <span style={styles.checkWrap}>
                          <Check size={14} />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {service.cta && (
                    <a
                      href="/contact"
                      style={styles.ctaBtn}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      Know More
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>

                <div
                  className="ao-image-col"
                  style={{ order: reverse ? 1 : 2 }}
                >
                  <div
                    className="ao-image-wrap"
                    style={styles.imageWrap}
                    onMouseEnter={imageHoverIn}
                    onMouseLeave={imageHoverOut}
                  >
                    <img
                      className="ao-service-image"
                      src={service.image}
                      alt={service.title}
                      style={styles.image}
                    />

                    <div className="ao-floating-card" style={styles.floatingCard}>
                      <span style={styles.floatingLabel}>Delivered as</span>
                      <span style={styles.floatingValue}>On-Demand Service</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AddOnServicesShowcase;