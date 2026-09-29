import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/SpecialOccasions.css";

import birthday1 from "../assets/download__18_-removebg-preview.png";
import birthday2 from "../assets/download__21_-removebg-preview.png";
import birthday3 from "../assets/download__13_-removebg-preview.png";
import property1 from "../assets/Interior_Space_Designer-removebg-preview.png";
import property2 from "../assets/download__20_-removebg-preview.png";
import property3 from "../assets/download__14_-removebg-preview.png";
import luxury1 from "../assets/download__10_-removebg-preview.png";
import luxury2 from "../assets/Invitation_Luxury_PSD__High_Quality_Free_PSD_Templates_for_Download___Freepik-removebg-preview.png";
import luxury3 from "../assets/Royal_Wedding_Logo__Royal_Svg__a_Branding___Logo_Template_by_Linvit-removebg-preview.png";
import ear1 from "../assets/Unique_Hindu_Wedding_Invitation_Card-removebg-preview.png";
import ear2 from "../assets/Ganesha_Invitation__Hindu_Wedding_Invitation___Indian_Wedding__sri_Lankan_Wedding___Tamil_Invitation__Lavender_Lilac_Purle_-_Etsy_UK-removebg-preview.png";
import ear3 from "../assets/download__9_-removebg-preview.png";
import engagement1 from "../assets/Elegant_Vintage_Wedding_Invitations-removebg-preview.png";
import engagement2 from "../assets/Mementobloom_-_Etsy-removebg-preview.png";
import engagement3 from "../assets/Editable_Elegant_Indian_Wedding_Invitation__Indian_Wedding_Invite__Hindu_Wedding_Invitation_Template__Wedding_Invitation_and_Thank_You_Card-removebg-preview.png";
import house1 from "../assets/download__3_-removebg-preview.png";
import house2 from "../assets/download__8_-removebg-preview.png";
import house3 from "../assets/download__6_-removebg-preview.png";
import anniversary1 from "../assets/download__25_-removebg-preview.png";
import anniversary2 from "../assets/download__19_-removebg-preview.png";
import anniversary3 from "../assets/download__5_-removebg-preview.png";

const occasionData = {
  birthday: { title: "Birthday Invitations", subtitle: "Beautiful invitations for your special birthday celebration.", cards: [["Birthday Invitation Card", birthday1], ["Elegant Birthday Invite", birthday2], ["Classic Birthday Invitation", birthday3]] },
  property: { title: "Property Cards", subtitle: "Elegant cards for property events and special announcements.", cards: [["Elegant Property Card", property1], ["Premium Property Invitation", property2], ["Classic Property Card", property3]] },
  luxury: { title: "Luxury Invitations", subtitle: "Premium invitation designs with an elegant and luxurious feel.", cards: [["Luxury Invitation", luxury1], ["Premium Luxury Card", luxury2], ["Royal Luxury Invitation", luxury3]] },
  earboring: { title: "Ear Boring Cards", subtitle: "Traditional invitation designs for your special celebration.", cards: [["Traditional Invitation", ear1], ["Classic Celebration Card", ear2], ["Elegant Celebration Invite", ear3]] },
  engagement: { title: "Engagement Cards", subtitle: "Celebrate your beautiful beginning with an elegant invitation.", cards: [["Engagement Invitation", engagement1], ["Elegant Engagement Card", engagement2], ["Classic Engagement Invite", engagement3]] },
  housewarming: { title: "House Warming", subtitle: "Invite your loved ones to celebrate your new beginning.", cards: [["House Warming Invitation", house1], ["Traditional House Warming Card", house2], ["Elegant House Warming Invite", house3]] },
  anniversary: { title: "Anniversary Cards", subtitle: "Beautiful invitations to celebrate love and togetherness.", cards: [["Anniversary Invitation", anniversary1], ["Elegant Anniversary Card", anniversary2], ["Classic Anniversary Invite", anniversary3]] },
};

const occasionMenu = [
  ["Birthday Invitations", "birthday"],
  ["Property Cards", "property"],
  ["Luxury Invitations", "luxury"],
  ["Ear Boring Cards", "earboring"],
  ["Engagement Cards", "engagement"],
  ["House Warming", "housewarming"],
  ["Anniversary Cards", "anniversary"],
];

function SpecialOccasions() {
  const { category } = useParams();
  const navigate = useNavigate();
  const selected = occasionData[category] || occasionData.birthday;

  return (
    <main className="special-occasions-page">
      <section className="special-hero"><div className="special-hero-content"><span className="special-small-text">SPECIAL MOMENTS • BEAUTIFUL MEMORIES</span><h1>Special Occasions</h1><p>Find beautiful invitation designs for every special celebration in your life.</p></div></section>
      <section className="occasion-menu-section"><div className="occasion-menu">{occasionMenu.map(([name, slug]) => <button key={slug} className={category === slug || (!category && slug === "birthday") ? "occasion-menu-button active" : "occasion-menu-button"} onClick={() => navigate(`/special-occasions/${slug}`)}>{name}</button>)}</div></section>
      <section className="special-cards-section">
        <div className="special-section-heading"><span>EXPLORE COLLECTION</span><h2>{selected.title}</h2><p>{selected.subtitle}</p></div>
        <div className="special-card-grid">
          {selected.cards.map(([title, image]) => <article className="special-card" key={title}><div className="special-card-image"><img src={image} alt={title} /><button className="special-heart" type="button" aria-label="Add to wishlist">♡</button></div><div className="special-card-content"><h3>{title}</h3><p>Beautifully designed invitation</p><button className="special-view-button" type="button">View Invitation →</button></div></article>)}
        </div>
      </section>
    </main>
  );
}

export default SpecialOccasions;
