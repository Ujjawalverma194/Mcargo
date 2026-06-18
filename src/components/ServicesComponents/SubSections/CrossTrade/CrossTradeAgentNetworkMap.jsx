import React from "react";
import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CrossTradeAgentNetworkMap = () => {
  const regions = [
    {
      name: "Asia Pacific",
      cities: "Singapore · Shanghai · Tokyo",
      agents: 14,
      position: [14.5995, 120.9842],
    },
    {
      name: "Middle East",
      cities: "Dubai · Jeddah · Muscat",
      agents: 8,
      position: [25.2048, 55.2708],
    },
    {
      name: "Europe",
      cities: "Hamburg · Rotterdam · Genoa",
      agents: 22,
      position: [52.3676, 4.9041],
    },
    {
      name: "Americas",
      cities: "New York · Miami · LA",
      agents: 11,
      position: [25.7617, -80.1918],
    },
    {
      name: "Africa",
      cities: "Durban · Mombasa · Lagos",
      agents: 6,
      position: [-4.0435, 39.6682],
    },
    {
      name: "South Asia",
      cities: "Colombo · Chittagong · Karachi",
      agents: 9,
      position: [19.076, 72.8777],
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
      background: "#F8FAFC",
      fontFamily: "Inter, sans-serif",
      padding: "92px 9% 105px",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1450px",
      margin: "0 auto",
    },
    header: {
      marginBottom: "38px",
    },
    titleWrap: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "8px",
    },
    icon: {
      color: "#2e3192",
      flexShrink: 0,
    },
    title: {
      fontSize: "28px",
      lineHeight: 1.25,
      fontWeight: 800,
      color: "#081126",
      letterSpacing: "-0.5px",
      margin: 0,
    },
    subtitle: {
      fontSize: "16px",
      color: "#667085",
      lineHeight: 1.6,
      margin: 0,
    },
    mapCard: {
      width: "100%",
      height: "420px",
      borderRadius: "22px",
      overflow: "hidden",
      border: "1px solid #E7EDF5",
      boxShadow: "0 18px 42px rgba(8,17,38,0.08)",
      background: "#ffffff",
      marginBottom: "28px",
    },
    regionGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
    },
    regionCard: {
      background: "#ffffff",
      border: "1px solid #E7EDF5",
      borderRadius: "18px",
      padding: "20px 22px",
      boxShadow: "0 12px 30px rgba(8,17,38,0.045)",
      transition: "all 0.25s ease",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "18px",
    },
    regionName: {
      fontSize: "16px",
      fontWeight: 800,
      color: "#081126",
      margin: "0 0 8px",
    },
    regionCities: {
      fontSize: "13px",
      color: "#8A94A6",
      lineHeight: 1.5,
      margin: 0,
    },
    agentPill: {
      padding: "6px 12px",
      borderRadius: "999px",
      background: "#EEF2FF",
      color: "#2e3192",
      fontSize: "12px",
      fontWeight: 800,
      whiteSpace: "nowrap",
    },
  };

  const cardHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 18px 42px rgba(46,49,146,0.12)";
    e.currentTarget.style.borderColor = "rgba(46,49,146,0.22)";
  };

  const cardHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 12px 30px rgba(8,17,38,0.045)";
    e.currentTarget.style.borderColor = "#E7EDF5";
  };

  return (
    <>
      <style>{`
        .ct-map-card .leaflet-container {
          width: 100%;
          height: 100%;
          font-family: Inter, sans-serif;
        }

        .ct-map-card .leaflet-control-attribution {
          font-size: 10px;
        }

        .ct-map-marker-label {
          color: #ffffff;
          font-weight: 800;
          font-size: 13px;
        }

        @media (max-width: 992px) {
          .ct-network-section {
            padding: 80px 6% 90px !important;
          }

          .ct-region-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .ct-network-section {
            padding: 64px 6% 74px !important;
          }

          .ct-map-card {
            height: 360px !important;
            border-radius: 18px !important;
          }

          .ct-region-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section className="ct-network-section" style={styles.section}>
        <motion.div
          style={styles.inner}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div style={styles.header}>
            <div style={styles.titleWrap}>
              <Globe2 size={22} style={styles.icon} />
              <h2 style={styles.title}>Agent network - 6 continents</h2>
            </div>

            <p style={styles.subtitle}>
              Credible partners at every strategic cross-trade hub
            </p>
          </div>

          <div className="ct-map-card" style={styles.mapCard}>
            <MapContainer
              center={[18, 42]}
              zoom={3}
              minZoom={2}
              maxZoom={6}
              scrollWheelZoom={false}
              zoomControl={false}
              style={{ width: "100%", height: "100%" }}
            >
              <ZoomControl position="topright" />

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {regions.map((region) => (
                <CircleMarker
                  key={region.name}
                  center={region.position}
                  radius={region.agents + 10}
                  pathOptions={{
                    color: "#2e3192",
                    fillColor: "#2e3192",
                    fillOpacity: 0.78,
                    weight: 2,
                  }}
                >
                  <Tooltip permanent direction="center" opacity={1}>
                    <span className="ct-map-marker-label">{region.agents}</span>
                  </Tooltip>

                  <Tooltip>
                    <strong>{region.name}</strong>
                    <br />
                    {region.cities}
                    <br />
                    {region.agents} agents
                  </Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          <motion.div
            className="ct-region-grid"
            style={styles.regionGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {regions.map((region) => (
              <motion.div
                key={region.name}
                variants={fadeUp}
                style={styles.regionCard}
                onMouseEnter={cardHoverIn}
                onMouseLeave={cardHoverOut}
              >
                <div>
                  <h3 style={styles.regionName}>{region.name}</h3>
                  <p style={styles.regionCities}>{region.cities}</p>
                </div>

                <span style={styles.agentPill}>{region.agents} agents</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default CrossTradeAgentNetworkMap;