import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/download__23_-removebg-preview.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <img src={logo} alt="Wed Knot Craft" />
          <p>Largest Wedding<br />Cards Collections in<br />Chennai</p>
        </div>

        <div className="site-footer-column">
          <h3>Information</h3>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/how-to-order">How to order wedding invitation online?</Link>
        </div>

        <div className="site-footer-column">
          <h3>Quick Access</h3>
          <Link to="/">Home</Link>
          <Link to="/wedding-cards">Wedding Cards</Link>
          <Link to="/wedding-cards">Hindu Wedding Cards</Link>
        </div>

        <div className="site-footer-column site-footer-contact">
          <h3>Contact Us</h3>
          <p>⌕ &nbsp; +91 9876543210</p>
          <p>✉ &nbsp; wedtype@weddingcards.com</p>
          <p>Operating hours: 10.00Am to<br />10.00Pm</p>
          <p>Monday - Sunday</p>
        </div>
      </div>

      <div className="site-footer-social">
        <span>Follow us with</span>
        <span>Instagram</span>
        <span>Facebook</span>
        <span>YouTube</span>
        <span>WhatsApp</span>
      </div>

      <div className="site-footer-bottom">
        Wed knot craft India Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
