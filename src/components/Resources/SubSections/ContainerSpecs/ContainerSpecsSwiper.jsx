import React from "react";
import { motion } from "framer-motion";
import { Box, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ContainerSpecsSwiper = () => {
  const containers = [
    {
      title: "20' Flat Rack",
      desc: "Container with collapsible sides for oversized cargo. Perfect for heavy machinery and vehicles.",
      internal: ["5.620 m (18'5\")", "2.200 m (7'3\")", "2.233 m (7'4\")"],
      door: ["N/A", "N/A"],
      capacity: [
        "N/A",
        "27,600 kg (60,850 lbs)",
        "30,480 kg (67,200 lbs)",
        "2,880 kg (6,350 lbs)",
      ],
    },
    {
      title: "40' Flat Rack",
      desc: "40-foot flat rack with collapsible end walls for extra-long or wide OOG cargo.",
      internal: ["12.032 m (39'6\")", "2.228 m (7'4\")", "1.981 m (6'6\")"],
      door: ["N/A", "N/A"],
      capacity: [
        "N/A",
        "40,000 kg (88,185 lbs)",
        "45,000 kg (99,208 lbs)",
        "5,000 kg (11,023 lbs)",
      ],
    },
    {
      title: "20' Standard (20' GP)",
      desc: "Most common container for general cargo. Ideal for heavy goods that don't require maximum space.",
      internal: ["5.898 m (19'4\")", "2.352 m (7'9\")", "2.393 m (7'10\")"],
      door: ["2.340 m (7'8\")", "2.280 m (7'6\")"],
      capacity: [
        "33.2 m³ (1,172 cu ft)",
        "28,200 kg (62,170 lbs)",
        "30,480 kg (67,200 lbs)",
        "2,280 kg (5,030 lbs)",
      ],
    },
    {
      title: "40' Standard",
      desc: "Double the length of 20' GP for higher volume cargo and standard dry shipments.",
      internal: ["12.032 m (39'6\")", "2.352 m (7'9\")", "2.393 m (7'10\")"],
      door: ["2.340 m (7'8\")", "2.280 m (7'6\")"],
      capacity: [
        "67.7 m³ (2,390 cu ft)",
        "26,680 kg (58,820 lbs)",
        "30,480 kg (67,200 lbs)",
        "3,800 kg (8,380 lbs)",
      ],
    },
    {
      title: "40' High Cube",
      desc: "Extra-height container for lightweight but voluminous cargo requiring vertical space.",
      internal: ["12.032 m (39'6\")", "2.352 m (7'9\")", "2.698 m (8'10\")"],
      door: ["2.340 m (7'8\")", "2.585 m (8'6\")"],
      capacity: [
        "76.3 m³ (2,694 cu ft)",
        "26,460 kg (58,334 lbs)",
        "30,480 kg (67,200 lbs)",
        "4,020 kg (8,860 lbs)",
      ],
    },
    {
      title: "20' Open Top",
      desc: "Open-top container for cargo loaded from above by crane due to height requirements.",
      internal: ["5.898 m (19'4\")", "2.352 m (7'9\")", "2.348 m (7'8\")"],
      door: ["2.340 m (7'8\")", "2.280 m (7'6\")"],
      capacity: [
        "32.5 m³ (1,148 cu ft)",
        "28,180 kg (62,126 lbs)",
        "30,480 kg (67,200 lbs)",
        "2,300 kg (5,070 lbs)",
      ],
    },
    {
      title: "40' Open Top",
      desc: "Longer open-top unit for tall cargo requiring crane loading and tarpaulin protection.",
      internal: ["12.032 m (39'6\")", "2.352 m (7'9\")", "2.348 m (7'8\")"],
      door: ["2.340 m (7'8\")", "2.280 m (7'6\")"],
      capacity: [
        "66.4 m³ (2,344 cu ft)",
        "26,500 kg (58,420 lbs)",
        "30,480 kg (67,200 lbs)",
        "3,980 kg (8,775 lbs)",
      ],
    },
    {
      title: "20' Reefer",
      desc: "Temperature-controlled container for chilled and frozen cargo requiring cold-chain movement.",
      internal: ["5.456 m (17'11\")", "2.294 m (7'6\")", "2.273 m (7'5\")"],
      door: ["2.290 m (7'6\")", "2.264 m (7'5\")"],
      capacity: [
        "28.4 m³ (1,003 cu ft)",
        "27,400 kg (60,410 lbs)",
        "30,480 kg (67,200 lbs)",
        "3,080 kg (6,790 lbs)",
      ],
    },
    {
      title: "40' Reefer High Cube",
      desc: "High-capacity refrigerated container for larger chilled and frozen cargo volumes.",
      internal: ["11.590 m (38'0\")", "2.294 m (7'6\")", "2.554 m (8'5\")"],
      door: ["2.290 m (7'6\")", "2.569 m (8'5\")"],
      capacity: [
        "67.9 m³ (2,397 cu ft)",
        "29,300 kg (64,595 lbs)",
        "34,000 kg (74,957 lbs)",
        "4,700 kg (10,362 lbs)",
      ],
    },
  ];

  const styles = {
    section: {
      width: "100%",
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "78px 0 82px",
      overflow: "hidden",
    },
    header: {
      maxWidth: "1450px",
      margin: "0 auto 26px",
      padding: "0 9%",
    },
    count: {
      fontSize: "15px",
      color: "#475467",
      fontWeight: 400,
    },
    countStrong: {
      color: "#081126",
      fontWeight: 600,
    },
    card: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      overflow: "hidden",
      minHeight: "475px",
      boxShadow: "0 10px 26px rgba(8,17,38,0.065)",
      transition: "all 0.3s ease",
    },
    head: {
      padding: "16px 20px",
      borderBottom: "1px solid #EEF2F7",
      background: "#ffffff",
      transition: "all 0.3s ease",
    },
    titleWrap: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
    },
    iconBox: {
      width: "28px",
      height: "28px",
      borderRadius: "9px",
      background: "#EEF2FF",
      color: "#2e3192",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    title: {
      fontSize: "16px",
      lineHeight: 1.25,
      fontWeight: 600,
      color: "#081126",
      margin: 0,
    },
    desc: {
      fontSize: "13.5px",
      lineHeight: 1.55,
      color: "#667085",
      margin: 0,
      fontWeight: 400,
    },
    body: {
      padding: "18px 20px",
    },
    group: {
      paddingBottom: "13px",
      marginBottom: "13px",
      borderBottom: "1px solid #EEF2F7",
    },
    groupTitle: {
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#2e3192",
      textTransform: "uppercase",
      margin: "0 0 11px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      gap: "14px",
      marginBottom: "7px",
      fontSize: "13.5px",
      color: "#8A94A6",
      fontWeight: 400,
    },
    value: {
      color: "#344054",
      fontWeight: 600,
      textAlign: "right",
    },
bottomControls: {
  display: "grid",
  gridTemplateColumns: "42px auto 42px",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "16px",
  marginTop: "-4px",
  marginBottom: "26px",
  position: "relative",
  zIndex: 8,
},
    navBtn: {
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      border: "1px solid #E7EDF5",
      background: "#ffffff",
      color: "#081126",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(8,17,38,0.08)",
      transition: "all 0.25s ease",
    },
    note: {
      maxWidth: "1450px",
      margin: "0 auto",
      padding: "17px 22px",
      borderRadius: "16px",
      background: "#EEF4FF",
      border: "1px solid #C7D7FE",
      color: "#2e3192",
      fontSize: "14.5px",
      lineHeight: 1.6,
      fontWeight: 400,
    },
  };

  const btnHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 14px 30px rgba(46,49,146,0.14)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.24)";
  };

  const btnHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 24px rgba(8,17,38,0.08)";
    e.currentTarget.style.borderColor = "#E7EDF5";
  };

  return (
    <>
      <style>{`
        .cs-swiper {
          padding: 8px 0 52px;
          overflow: visible;
        }

        .cs-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .cs-swiper .swiper-slide {
          width: 400px !important;
          opacity: 0.9;
          transform: scale(0.96);
          transition: all 0.35s ease;
        }

       .cs-swiper .swiper-slide-active {
  opacity: 1;
  transform: scale(1.035);
}

      .cs-swiper .swiper-slide-active .cs-container-card {
  border: 1.5px solid rgba(46,49,146,0.34) !important;
  box-shadow: 0 22px 50px rgba(46,49,146,0.14) !important;
}

        .cs-swiper .swiper-slide-active .cs-card-head {
          background: #2e3192 !important;
          border-bottom-color: #2e3192 !important;
        }

        .cs-swiper .swiper-slide-active .cs-card-title {
          color: #ffffff !important;
        }

        .cs-swiper .swiper-slide-active .cs-card-desc {
          color: rgba(255,255,255,0.82) !important;
        }

        .cs-swiper .swiper-slide-active .cs-icon-box {
          background: rgba(255,255,255,0.16) !important;
          color: #ffffff !important;
        }

        .cs-custom-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }

        .cs-custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #CBD5E1;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.25s ease;
        }

        .cs-custom-pagination .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 999px;
          background: #2e3192;
        }

        @media (max-width: 992px) {
          .cs-specs-section {
            padding-top: 68px !important;
          }

          .cs-specs-header {
            padding: 0 6% !important;
          }

          .cs-swiper .swiper-slide {
            width: 380px !important;
          }

          .cs-note {
            margin-left: 6% !important;
            margin-right: 6% !important;
          }
        }

        @media (max-width: 576px) {
          .cs-specs-section {
            padding-top: 58px !important;
          }

          .cs-swiper .swiper-slide {
            width: 86vw !important;
            opacity: 0.95;
          }

          .cs-container-card {
            min-height: 460px !important;
          }

          .cs-note {
            font-size: 13.5px !important;
          }
        }
      `}</style>

      <section className="cs-specs-section" style={styles.section}>
        <motion.div
          className="cs-specs-header"
          style={styles.header}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div style={styles.count}>
            <span style={styles.countStrong}>{containers.length}</span>{" "}
            container types
          </div>
        </motion.div>

        <Swiper
          className="cs-swiper"
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          centeredSlides
          slidesPerView="auto"
          spaceBetween={34}
          loop
          initialSlide={1}
          speed={650}
          grabCursor
          autoplay={{
            delay: 2600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".cs-prev",
            nextEl: ".cs-next",
          }}
          pagination={{
            el: ".cs-custom-pagination",
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: -8,
            depth: 40,
            modifier: 0.7,
            slideShadows: false,
          }}
          breakpoints={{
            0: { spaceBetween: 18 },
            576: { spaceBetween: 26 },
            992: { spaceBetween: 34 },
          }}
        >
          {containers.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="cs-container-card" style={styles.card}>
                <div className="cs-card-head" style={styles.head}>
                  <div style={styles.titleWrap}>
                    <span className="cs-icon-box" style={styles.iconBox}>
                      <Box size={15} />
                    </span>

                    <h3 className="cs-card-title" style={styles.title}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="cs-card-desc" style={styles.desc}>
                    {item.desc}
                  </p>
                </div>

                <div style={styles.body}>
                  <div style={styles.group}>
                    <h4 style={styles.groupTitle}>Internal Dimensions</h4>
                    {["Length", "Width", "Height"].map((label, index) => (
                      <div style={styles.row} key={label}>
                        <span>{label}</span>
                        <strong style={styles.value}>
                          {item.internal[index]}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div style={styles.group}>
                    <h4 style={styles.groupTitle}>Door Opening</h4>
                    {["Width", "Height"].map((label, index) => (
                      <div style={styles.row} key={label}>
                        <span>{label}</span>
                        <strong style={styles.value}>{item.door[index]}</strong>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      ...styles.group,
                      borderBottom: "none",
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
                  >
                    <h4 style={styles.groupTitle}>Capacity</h4>
                    {["Volume", "Payload", "Gross Weight", "Tare Weight"].map(
                      (label, index) => (
                        <div style={styles.row} key={label}>
                          <span>{label}</span>
                          <strong style={styles.value}>
                            {item.capacity[index]}
                          </strong>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={styles.bottomControls}>
          <button
            type="button"
            className="cs-prev"
            style={styles.navBtn}
            onMouseEnter={btnHoverIn}
            onMouseLeave={btnHoverOut}
            aria-label="Previous container"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="cs-custom-pagination" />

          <button
            type="button"
            className="cs-next"
            style={styles.navBtn}
            onMouseEnter={btnHoverIn}
            onMouseLeave={btnHoverOut}
            aria-label="Next container"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="cs-note" style={styles.note}>
          <strong style={{ fontWeight: 600 }}>Note:</strong> Container
          dimensions may vary slightly between manufacturers and shipping lines.
          Always confirm exact specifications with your carrier for critical
          shipments.
        </div>
      </section>
    </>
  );
};

export default ContainerSpecsSwiper;