import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/download__23_-removebg-preview.png";

const specialOccasionItems = [
  ["Birthday Invitations", "/special-occasions/birthday"],
  ["Property Cards", "/special-occasions/property"],
  ["Luxury Invitations", "/special-occasions/luxury"],
  ["Ear Boring Cards", "/special-occasions/earboring"],
  ["Engagement Cards", "/special-occasions/engagement"],
  ["House Warming", "/special-occasions/housewarming"],
  ["Anniversary Cards", "/special-occasions/anniversary"],
];

const themeItems = [
  ["Beach Theme Cards", "/theme-cards/beach"],
  ["Bride Theme Cards", "/theme-cards/bride"],
  ["Box Cards", "/theme-cards/box"],
  ["Single Sheet Cards", "/theme-cards/single-sheet"],
];
const scrollItems = [
  ["Small Size Scroll", "/scroll-invitation/small-size"],
  ["Box Scroll", "/scroll-invitation/box"],
  ["Only Scroll", "/scroll-invitation/only-scroll"],
  ["High End Scroll", "/scroll-invitation/high-end"],
];
const digitalItems = [
  ["Whatsapp Cards", "/digital-invitation/whatsapp"],
  ["Save the Date Cards", "/digital-invitation/save-the-date"],
];

function Navbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchText, setSearchText] = useState("");

  const go = (path) => {
    setOpenDropdown(null);
    navigate(path);
  };

  const search = () => {
    go(searchText.trim() ? `/search?query=${encodeURIComponent(searchText.trim())}` : "/search");
  };

  const dropdown = (name, items) => (
    <div
      className="navbar-menu-item"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className={`navbar-menu-button ${openDropdown === name ? "dropdown-open" : ""}`}
        onClick={() => go(name === "special" ? "/special-occasions" : `/${name === "theme" ? "theme-cards" : name === "scroll" ? "scroll-invitation" : "digital-invitation"}`)}
      >
        {name === "special" ? "Special occasions" : name === "theme" ? "Theme Cards" : name === "scroll" ? "Scroll Invitation" : "Digital Invitation"}
      </button>

      {openDropdown === name && (
        <div className="navbar-dropdown">
          {items.map(([label, path]) => (
            <button
              key={label}
              type="button"
              className="navbar-dropdown-item"
              onClick={() => go(path)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="navbar">
      <div className="navbar-top">
        <button type="button" className="navbar-logo" onClick={() => go("/")} aria-label="Cherish By Wed Knot Craft">
          <img src={logo} alt="Cherish By Wed Knot Craft" />
        </button>

        <div className="navbar-actions">
          <div className="navbar-search">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && search()}
              placeholder="Search..."
              aria-label="Search"
            />
            <button type="button" className="search-button" onClick={search} aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" />
                <path d="M16 16L21 21" />
              </svg>
            </button>
          </div>

          <button type="button" className="navbar-action login-action" onClick={() => go("/login")} aria-label="Login">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5.5 20c.7-3.3 3-5 6.5-5s5.8 1.7 6.5 5" />
            </svg>
          </button>

          <button type="button" className="navbar-action wishlist-action" onClick={() => go("/wishlist")} aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.7c0 5.2-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.7A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.3Z" />
            </svg>
          </button>

          <button type="button" className="navbar-action cart-action" onClick={() => go("/cart")} aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2.2 11h10.9L21 8H6" />
              <circle cx="9" cy="19" r="1.3" />
              <circle cx="18" cy="19" r="1.3" />
            </svg>
            <span className="cart-count">1</span>
          </button>
        </div>
      </div>

      <nav className="navbar-menu" aria-label="Main navigation">
        <button type="button" className="navbar-menu-button" onClick={() => go("/")}>Home</button>

        {/* Prototype: Wedding Invitation has no dropdown. */}
        <button type="button" className="navbar-menu-button" onClick={() => go("/wedding-cards")}>Wedding Invitation</button>

        {dropdown("special", specialOccasionItems)}
        {dropdown("theme", themeItems)}
        {dropdown("scroll", scrollItems)}
        {dropdown("digital", digitalItems)}
      </nav>
    </header>
  );
}

export default Navbar;
