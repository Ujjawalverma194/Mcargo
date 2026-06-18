import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import brochurePdf from "../../assets/brochure.pdf";

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
      {
        title: "Freight Forwarding",
        text: "FCL · LCL · Air · ISO Tank · Project",
        path: "/services/freight-forwarding",
      },
      {
        title: "Customs Clearance",
        text: "BOE filing, duty calc & ICEGATE",
        path: "/services/customs-clearance",
      },
      {
        title: "Warehousing & Cold Storage",
        text: "Ambient · Chilled · Frozen · Bonded",
        path: "/services/warehousing",
      },
      {
        title: "Multimodal Transportation",
        text: "Factory stuffing to last-mile delivery",
        path: "/services/transport",
      },
      {
        title: "Project Cargo",
        text: "OOG · Heavy lift · Hi-Lift vehicles",
        path: "/services/project-cargo",
      },
      {
        title: "Cross Trade",
        text: "Third-country shipment routing",
        path: "/services/cross-trade",
      },
      {
        title: "Add-Ons",
        text: "ECTN, cargo insurance & more",
        path: "/services/addons",
      },
    ],
    Resources: [
      {
        title: "Container Specs",
        text: "Dimensions, weights & capacity",
        path: "/resources/container-specs",
      },
      {
        title: "Incoterms",
        text: "2020 rules explained simply",
        path: "/resources/incoterms",
      },
      {
        title: "Useful Links",
        text: "ICEGATE, DGFT, customs portals",
        path: "/resources/useful-links",
      },
      {
        title: "Company Brochure",
        text: "Open printable company PDF",
        pdf: brochurePdf,
      },
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
      padding: "14px",
      zIndex: 999,
      animation: "dropdownFade 0.22s ease forwards",
    },

    servicesDropdown: {
      width: "560px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px",
    },

    resourcesDropdown: {
      width: "320px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    dropdownCard: {
      textDecoration: "none",
      display: "block",
      padding: "14px 16px",
      borderRadius: "14px",
      background: "transparent",
      boxShadow: "none",
      transform: "translateY(0)",
      transition: "all 0.25s ease",
    },

    dropdownTitle: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "6px",
      transition: "color 0.25s ease",
    },

    dropdownText: {
      fontSize: "12.5px",
      color: "#8a94a6",
      lineHeight: "1.45",
      transition: "color 0.25s ease",
    },

    dropdownBottom: {
      gridColumn: "1 / -1",
      borderTop: "1px solid #eef2f8",
      padding: "16px 16px 0",
      marginTop: "6px",
    },

    viewAll: {
      textDecoration: "none",
      color: "#2e3192",
      fontSize: "13px",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.25s ease",
    },

    button: {
      background: "#2e3192",
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
      boxShadow: "0 10px 25px rgba(46,49,146,0.20)",
      transition: "all 0.25s ease",
      whiteSpace: "nowrap",
    },

    mobileMenuBtn: {
      display: "none",
      background: "transparent",
      border: "none",
      color: "#344054",
      cursor: "pointer",
      padding: "8px",
      alignItems: "center",
      justifyContent: "center",
    },

    mobilePanel: {
      display: "block",
      position: "fixed",
      inset: 0,
      background: "#ffffff",
      zIndex: 2000,
      padding: "24px 24px 30px",
      fontFamily: "Inter, sans-serif",
      animation: "dropdownFade 0.25s ease forwards",
      overflowY: "auto",
    },

    mobilePanelHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingBottom: "22px",
      borderBottom: "1px solid #eef2f8",
    },

    mobileCloseBtn: {
      background: "transparent",
      border: "none",
      color: "#344054",
      cursor: "pointer",
      padding: "6px",
    },

    mobileMenuList: {
      listStyle: "none",
      margin: "42px 0 0",
      padding: 0,
    },

    mobileMenuItem: {
      marginBottom: "28px",
    },

    mobileMenuLink: {
      width: "100%",
      background: "transparent",
      border: "none",
      textDecoration: "none",
      color: "#344054",
      fontSize: "16px",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 0,
      fontFamily: "Inter, sans-serif",
      cursor: "pointer",
    },

    mobileSubmenu: {
      marginTop: "18px",
      paddingLeft: "18px",
      borderLeft: "1px solid #eef2f8",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    mobileSubmenuLink: {
      textDecoration: "none",
      color: "#667085",
      fontSize: "15px",
      fontWeight: "600",
      padding: "10px 12px",
      borderRadius: "12px",
    },

    mobileContactBtn: {
      marginTop: "28px",
      width: "100%",
      height: "58px",
      borderRadius: "999px",
      background: "#2e3192",
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
  };

  const handleDropdownEnter = (e) => {
    const title = e.currentTarget.querySelector(".dropdown-title");
    const text = e.currentTarget.querySelector(".dropdown-text");

    e.currentTarget.style.background = "#2e3192";
    e.currentTarget.style.boxShadow = "0 12px 28px rgba(46,49,146,0.22)";
    e.currentTarget.style.transform = "translateY(-2px)";

    if (title) title.style.color = "#ffffff";
    if (text) text.style.color = "rgba(255,255,255,0.78)";
  };

  const handleDropdownLeave = (e) => {
    const title = e.currentTarget.querySelector(".dropdown-title");
    const text = e.currentTarget.querySelector(".dropdown-text");

    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.transform = "translateY(0)";

    if (title) title.style.color = "#1f2937";
    if (text) text.style.color = "#8a94a6";
  };

  const renderDropdownItem = (dropItem) => {
    const content = (
      <>
        <div className="dropdown-title" style={styles.dropdownTitle}>
          {dropItem.title}
        </div>
        <div className="dropdown-text" style={styles.dropdownText}>
          {dropItem.text}
        </div>
      </>
    );

    if (dropItem.pdf) {
      return (
        <a
          key={dropItem.title}
          href={dropItem.pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.dropdownCard}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          {content}
        </a>
      );
    }

    return (
      <NavLink
        key={dropItem.title}
        to={dropItem.path}
        style={styles.dropdownCard}
        onMouseEnter={handleDropdownEnter}
        onMouseLeave={handleDropdownLeave}
      >
        {content}
      </NavLink>
    );
  };

  return (
    <>
      <style>{`
        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .main-navbar {
            padding: 0 4% !important;
            grid-template-columns: 190px 1fr auto !important;
          }

          .desktop-nav-links {
            transform: none !important;
          }
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
            display: flex !important;
          }
        }
      `}</style>

      <nav className="main-navbar" style={styles.navbar}>
        <NavLink to="/">
          <img
            src={logo}
            alt="MCargo Logistics"
            className="navbar-logo"
            style={styles.logo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </NavLink>

        <ul className="desktop-nav-links" style={styles.navLinks}>
          {navItems.map((item) => {
            const isHovered = hovered === item.name;

            return (
              <li
                key={item.name}
                style={styles.navItem}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <NavLink
                  to={item.path || "#"}
                  onClick={(e) => {
                    if (item.dropdown) e.preventDefault();
                  }}
                  style={{
                    ...styles.navLink,
                    background: isHovered ? "#2e3192" : "transparent",
                    color: isHovered ? "#ffffff" : "#344054",
                    boxShadow: isHovered
                      ? "0 8px 18px rgba(46,49,146,0.18)"
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
                    {dropdownItems[item.name].map(renderDropdownItem)}

                    <div style={styles.dropdownBottom}>
                      <NavLink
                        to={item.name === "Services" ? "/services" : "/resources"}
                        style={styles.viewAll}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.gap = "12px";
                          e.currentTarget.style.color = "#12A8E8";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.gap = "8px";
                          e.currentTarget.style.color = "#2e3192";
                        }}
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

        <NavLink
          to="/contact#contact-form"
          className="desktop-contact-btn"
          style={styles.button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 14px 30px rgba(46,49,146,0.26)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(46,49,146,0.20)";
          }}
        >
          Free Advisory
          <ArrowRight size={15} />
        </NavLink>

        <button
          className="mobile-menu-btn"
          style={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {mobileOpen && (
        <div style={styles.mobilePanel}>
          <div style={styles.mobilePanelHeader}>
            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              <img
                src={logo}
                alt="MCargo Logistics"
                className="navbar-logo"
                style={styles.logo}
              />
            </NavLink>

            <button
              style={styles.mobileCloseBtn}
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <ul style={styles.mobileMenuList}>
            {navItems.map((item) => (
              <li style={styles.mobileMenuItem} key={item.name}>
                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    style={styles.mobileMenuLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      style={styles.mobileMenuLink}
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
                      <div style={styles.mobileSubmenu}>
                        {dropdownItems[item.name].map((dropItem) =>
                          dropItem.pdf ? (
                            <a
                              key={dropItem.title}
                              href={dropItem.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={styles.mobileSubmenuLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {dropItem.title}
                            </a>
                          ) : (
                            <NavLink
                              key={dropItem.title}
                              to={dropItem.path}
                              style={styles.mobileSubmenuLink}
                              onClick={() => setMobileOpen(false)}
                            >
                              {dropItem.title}
                            </NavLink>
                          )
                        )}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <NavLink
            to="/contact#contact-form"
            style={styles.mobileContactBtn}
            onClick={() => setMobileOpen(false)}
          >
            Free Advisory
            <ArrowRight size={18} />
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;