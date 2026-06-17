import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", dropdown: true },
    { name: "Resources", dropdown: true },
  ];

  const dropdownItems = {
    Services: [
      { title: "Freight Forwarding", text: "FCL · LCL · Air · ISO Tank · Project", path: "/services/freight-forwarding" },
      { title: "Customs Clearance", text: "BOE filing, duty calc & ICEGATE", path: "/services/customs-clearance" },
      { title: "Warehousing & Cold Storage", text: "Ambient · Chilled · Frozen · Bonded", path: "/services/warehousing-cold-storage" },
      { title: "Multimodal Transportation", text: "Factory stuffing to last-mile delivery", path: "/services/multimodal-transportation" },
      { title: "Project Cargo", text: "OOG · Heavy lift · Hi-Lift vehicles", path: "/services/project-cargo" },
      { title: "Cross Trade", text: "Third-country shipment routing", path: "/services/cross-trade" },
      { title: "Add-Ons", text: "ECTN, cargo insurance & more", path: "/services/addons" },
    ],
    Resources: [
      { title: "Container Specs", text: "Dimensions, weights & capacity", path: "/resources/container-specs" },
      { title: "Incoterms", text: "2020 rules explained simply", path: "/resources/incoterms" },
      { title: "Useful Links", text: "ICEGATE, DGFT, customs portals", path: "/resources/useful-links" },
      { title: "Company Brochure", text: "Download our full capability deck", path: "/resources/brochure" },
    ],
  };

  const styles = {
    navbar: {
      height: "78px",
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(14px)",
      display: "grid",
      gridTemplateColumns: "210px 1fr auto",
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
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      justifyContent: "center",
      transform: "translateX(-45px)",
    },
    navItem: {
      position: "relative",
      padding: "14px 0",
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
    dropdown: {
      position: "absolute",
      top: "58px",
      left: "0",
      background: "#ffffff",
      border: "1px solid #edf1f7",
      borderRadius: "18px",
      boxShadow: "0 18px 45px rgba(15,23,42,0.12)",
      padding: "24px",
      zIndex: 999,
      animation: "dropdownFade 0.22s ease forwards",
    },
    servicesDropdown: {
      width: "520px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "34px",
      rowGap: "24px",
    },
    resourcesDropdown: {
      width: "270px",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
    },
    dropdownLink: {
      textDecoration: "none",
      display: "block",
    },
    dropdownTitle: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#1F2937",
      marginBottom: "6px",
      transition: "color 0.2s ease",
    },
    dropdownText: {
      fontSize: "12.5px",
      color: "#8A94A6",
      lineHeight: "1.4",
    },
    dropdownBottom: {
      gridColumn: "1 / -1",
      borderTop: "1px solid #eef2f8",
      paddingTop: "16px",
      marginTop: "2px",
    },
    viewAll: {
      textDecoration: "none",
      color: "#2848BE",
      fontSize: "13px",
      fontWeight: "700",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
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

          @keyframes dropdownFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-panel {
            display: none;
          }

          @media (max-width: 768px) {
            .desktop-nav-links,
            .desktop-contact-btn {
              display: none !important;
            }

            .main-navbar {
              grid-template-columns: 1fr auto !important;
              height: 86px !important;
              padding: 0 22px !important;
            }

            .navbar-logo {
              width: 155px !important;
              height: 68px !important;
            }

            .mobile-menu-btn {
              display: flex;
              background: transparent;
              border: none;
              color: #344054;
              cursor: pointer;
              padding: 8px;
              align-items: center;
              justify-content: center;
            }

            .mobile-panel {
              display: block;
              position: fixed;
              top: 0;
              right: 0;
              width: 100%;
              height: 100vh;
              background: #ffffff;
              z-index: 2000;
              padding: 24px 24px 30px;
              font-family: Inter, sans-serif;
              animation: dropdownFade 0.25s ease forwards;
              overflow-y: auto;
            }

            .mobile-panel-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-bottom: 22px;
              border-bottom: 1px solid #eef2f8;
            }

            .mobile-close-btn {
              background: transparent;
              border: none;
              color: #344054;
              cursor: pointer;
              padding: 6px;
            }

            .mobile-menu-list {
              list-style: none;
              margin: 42px 0 0;
              padding: 0;
            }

            .mobile-menu-item {
              margin-bottom: 28px;
            }

            .mobile-menu-link,
            .mobile-dropdown-btn {
              width: 100%;
              background: transparent;
              border: none;
              text-decoration: none;
              color: #344054;
              font-size: 16px;
              font-weight: 600;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0;
              font-family: Inter, sans-serif;
              cursor: pointer;
            }

            .mobile-submenu {
              margin-top: 18px;
              margin-left: 0;
              padding-left: 28px;
              border-left: 1px solid #eef2f8;
              display: flex;
              flex-direction: column;
              gap: 20px;
            }

            .mobile-submenu a {
              text-decoration: none;
              color: #667085;
              font-size: 15px;
              font-weight: 500;
            }

            .mobile-contact-btn {
              margin-top: 28px;
              width: 100%;
              height: 60px;
              border-radius: 999px;
              background: #f6f7fb;
              border: 1px solid #e5e9f2;
              color: #344054;
              text-decoration: none;
              font-size: 15px;
              font-weight: 700;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 18px;
              box-shadow: inset 0 0 0 1px rgba(15,23,42,0.02);
            }

            .mobile-contact-icon {
              width: 48px;
              height: 48px;
              border-radius: 50%;
              background: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 8px 18px rgba(15,23,42,0.08);
              color: #2848BE;
              margin-right: auto;
            }

            .mobile-contact-text {
              flex: 1;
              text-align: center;
              margin-left: -48px;
            }
          }
        `}
      </style>

      <nav style={styles.navbar} className="main-navbar">
        <NavLink to="/">
          <img
            src={logo}
            alt="Mcargo Logistics"
            style={styles.logo}
            className="navbar-logo"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </NavLink>

        <ul style={styles.navLinks} className="desktop-nav-links">
          {navItems.map((item) => {
            const isActive =
              location.pathname !== "/" && location.pathname === item.path;

            const isHovered = hovered === item.name;
            const activeStyle = isActive || isHovered;

            return (
              <li
                key={item.name}
                style={styles.navItem}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.path || "#"}
                  style={{
                    ...styles.navLink,
                    background: activeStyle ? "#2848BE" : "transparent",
                    color: activeStyle ? "#ffffff" : "#344054",
                    boxShadow: activeStyle
                      ? "0 8px 18px rgba(40,72,190,0.18)"
                      : "none",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={13}
                      style={{
                        transform: isHovered ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.25s ease",
                      }}
                    />
                  )}
                </NavLink>

                {item.dropdown && isHovered && (
                  <div
                    style={{
                      ...styles.dropdown,
                      ...(item.name === "Services"
                        ? styles.servicesDropdown
                        : styles.resourcesDropdown),
                    }}
                  >
                    {dropdownItems[item.name].map((dropItem) => (
                      <NavLink
                        key={dropItem.title}
                        to={dropItem.path}
                        style={styles.dropdownLink}
                      >
                        <div className="dropdown-title" style={styles.dropdownTitle}>
                          {dropItem.title}
                        </div>
                        <div style={styles.dropdownText}>{dropItem.text}</div>
                      </NavLink>
                    ))}

                    <div style={styles.dropdownBottom}>
                      <NavLink
                        to={item.name === "Services" ? "/services" : "/resources"}
                        style={styles.viewAll}
                      >
                        View all {item.name.toLowerCase()}
                        <ArrowRight size={15} />
                      </NavLink>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <NavLink to="/contact" style={styles.button} className="desktop-contact-btn">
          Free Advisory
          <ArrowRight size={15} />
        </NavLink>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-panel">
          <div className="mobile-panel-header">
            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="Mcargo Logistics" className="navbar-logo" style={styles.logo} />
            </NavLink>

            <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-menu-list">
            {navItems.map((item) => (
              <li className="mobile-menu-item" key={item.name}>
                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    className="mobile-menu-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      className="mobile-dropdown-btn"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        style={{
                          transform:
                            mobileDropdown === item.name
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "0.25s ease",
                        }}
                      />
                    </button>

                    {mobileDropdown === item.name && (
                      <div className="mobile-submenu">
                        {dropdownItems[item.name].map((dropItem) => (
                          <NavLink
                            key={dropItem.title}
                            to={dropItem.path}
                            onClick={() => setMobileOpen(false)}
                          >
                            {dropItem.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact"
            className="mobile-contact-btn"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-contact-icon">
              <ArrowRight size={22} />
            </span>
            <span className="mobile-contact-text">Free Advisory</span>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;