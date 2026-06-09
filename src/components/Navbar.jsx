import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Search } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Resources", path: "/resources", dropdown: true },
  ];

  const styles = {
    navbar: {
      height: "78px",
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(14px)",
      display: "grid",
      gridTemplateColumns: "210px 1fr auto auto",
      alignItems: "center",
      gap: "28px",
      padding: "0 7%",
      fontFamily: "Inter, sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid #eef2f8",
      boxShadow: "0 8px 28px rgba(15,23,42,0.04)",
      animation: "navDrop 0.55s ease forwards",
    },

    logo: {
      width: "185px",
      height: "76px",
      objectFit: "contain",
      display: "block",
      transition: "transform 0.25s ease",
    },

    searchBox: {
      maxWidth: "390px",
      width: "100%",
      height: "44px",
      background: "#f8fbff",
      border: "1px solid #e1e9f6",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "0 8px 0 14px",
      boxShadow: "0 8px 20px rgba(15,23,42,0.035)",
      transition: "all 0.25s ease",
      justifySelf: "center",
    },

    input: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "13px",
      color: "#111827",
      fontFamily: "Inter, sans-serif",
    },

    trackBtn: {
      background: "#0F172A",
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      padding: "9px 13px",
      fontSize: "12px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.25s ease",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      justifyContent: "flex-end",
    },

    navLink: {
      textDecoration: "none",
      padding: "10px 14px",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      transition: "all 0.25s ease",
    },

    button: {
      background: "#2848BE",
      color: "#ffffff",
      border: "none",
      borderRadius: "14px",
      padding: "13px 23px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600",
      textDecoration: "none",
      boxShadow: "0 10px 25px rgba(40,72,190,0.20)",
      transition: "all 0.25s ease",
      whiteSpace: "nowrap",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes navDrop {
            from { opacity: 0; transform: translateY(-18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <nav style={styles.navbar}>
        <NavLink to="/">
          <img
            src={logo}
            alt="Mcargo Logistics"
            style={styles.logo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </NavLink>

        <div
          style={styles.searchBox}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#C8D6F8";
            e.currentTarget.style.boxShadow =
              "0 12px 26px rgba(40,72,190,0.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e1e9f6";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(15,23,42,0.035)";
          }}
        >
          <Search size={17} color="#667085" />

          <input
            style={styles.input}
            placeholder="Track shipment / reference no."
          />

          <button
            style={styles.trackBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2848BE";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0F172A";
            }}
          >
            Track
          </button>
        </div>

        <ul style={styles.navLinks}>
          {navItems.map((item) => {
            const isActive =
              location.pathname !== "/" && location.pathname === item.path;

            const isHovered = hovered === item.name;
            const activeStyle = isActive || isHovered;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    ...styles.navLink,
                    background: activeStyle ? "#2848BE" : "transparent",
                    color: activeStyle ? "#ffffff" : "#344054",
                    boxShadow: activeStyle
                      ? "0 8px 18px rgba(40,72,190,0.18)"
                      : "none",
                    transform: isHovered
                      ? "translateY(-2px)"
                      : "translateY(0)",
                  }}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={13} />}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <NavLink
          to="/contact"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 16px 34px rgba(40,72,190,0.30)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(40,72,190,0.20)";
          }}
        >
          Free Advisory
          <ArrowRight size={15} />
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;