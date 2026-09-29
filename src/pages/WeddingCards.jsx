import React from "react";
import { Link } from "react-router-dom";
import "../styles/WeddingCards.css";

import hinduWedding from "../assets/Elegant_Kerala_Hindu_Wedding_Invitation-removebg-preview.png";
import christianWedding from "../assets/Evite_Paperless_Wedding_Invitation_Aqua_Love_Birds-removebg-preview.png";
import muslimWedding from "../assets/Minimal_Blue_White_Floral_Islamic_Muslim_Wedding_I_Invitation___Zazzle-removebg-preview.png";
import sikhWedding from "../assets/Emerald_Green_Gold_Floral_Anand_Karaj_Sikh_Wedding____ShabzDesigns-removebg-preview.png";
import interfaithWedding from "../assets/tumblr_818ae2f813d3af50714c333b9a5ab238_5cece1af_1280-removebg-preview.png";
import exclusiveWedding from "../assets/download__10_-removebg-preview.png";
import traditionalWedding from "../assets/Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul_-removebg-preview.png";
import allWedding from "../assets/Indian_Wedding_Invitation__Ganesha_Invite_-_Multi-pack__Printable_Invitation__Instant_Download__Editable_Template__invite-multi-001__-_Etsy_UK-removebg-preview.png";
import newStyleWedding from "../assets/Elegant_Peacock_Save_the_Date___Indian_Wedding_Invitation___Hindu_Punjabi_Digital_Canva_Template-removebg-preview.png";
import envelopeWedding from "../assets/Dark_green_envelope_and_gold_printed_invitation__Customizable_color_and_pattern_options__rsvp_card-removebg-preview.png";
import elegantFaithWedding from "../assets/Editable_Elegant_Indian_Wedding_Invitation__Indian_Wedding_Invite__Hindu_Wedding_Invitation_Template__Wedding_Invitation_and_Thank_You_Card-removebg-preview.png";
import nepaliWedding from "../assets/Nepali_Wedding_Invitation_Digital_Template__Editable_Nepali_Wedding_Invitation-removebg-preview.png";

const weddingCategories = [
  ["Hindu Wedding Cards", hinduWedding, "/wedding-cards/hindu"],
  ["Christian Wedding Cards", christianWedding, "/wedding-cards/christian"],
  ["Muslim Wedding Cards", muslimWedding, "/wedding-cards/muslim"],
  ["Sikh Wedding Cards", sikhWedding, "/wedding-cards/sikh"],
  ["Interfaith Wedding Cards", interfaithWedding, "/wedding-cards/interfaith"],
  ["Exclusive Wedding Cards", exclusiveWedding, "/wedding-cards/exclusive"],
  ["Traditional Wedding Cards", traditionalWedding, "/wedding-cards/traditional"],
  ["All Wedding Cards", allWedding, "/wedding-cards/all"],
  ["New Style Wedding Cards", newStyleWedding, "/wedding-cards/new-style"],
  ["Envelope Wedding Cards", envelopeWedding, "/wedding-cards/envelope"],
  ["Elegant faith Wedding Cards", elegantFaithWedding, "/wedding-cards/elegant-faith"],
  ["Nepali Wedding Cards", nepaliWedding, "/wedding-cards/nepali"],
];

function WeddingCards() {
  return (
    <main className="wedding-cards-page">
      <section className="wc-content">
        <h1 className="wc-page-title">WEDDING CARDS</h1>

        <section className="wc-category-grid">
          {weddingCategories.map(([title, image, path]) => (
            <Link to={path} className="wc-category-card" key={title}>
              <div className="wc-card-image-wrapper">
                <img src={image} alt={title} className="wc-card-image" />
              </div>
              <h2 className="wc-card-title">{title}</h2>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}

export default WeddingCards;
