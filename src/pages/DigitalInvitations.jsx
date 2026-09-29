
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CategoryPages.css";

import whatsappCard from "../assets/Indian_Wedding_Digital_Invite_as_Indian_Wedding_invitation_card_Hindu__Indian_invite_template___Indian_invitations_Hindu_Wedding_card_Indian-removebg-preview.png";

import saveTheDateCard from "../assets/Elegant_Peacock_Save_the_Date___Indian_Wedding_Invitation___Hindu_Punjabi_Digital_Canva_Template-removebg-preview.png";


const digitalData = {
  whatsapp: {
    title: "WhatsApp Cards",
    description:
      "Beautiful digital invitation cards that are easy to share with family and friends through WhatsApp.",
    image: whatsappCard,
  },

  "save-the-date": {
    title: "Save the Date Cards",
    description:
      "Elegant Save the Date digital invitations to announce your special day in advance.",
    image: saveTheDateCard,
  },
};


function DigitalInvitations() {
  const { category } = useParams();

  const selectedCategory = category
    ? digitalData[category]
    : null;

  const cards = selectedCategory
    ? [selectedCategory]
    : Object.values(digitalData);


  return (
    <main className="category-page">

      <section className="category-hero">

        <h1>
          {selectedCategory
            ? selectedCategory.title
            : "Digital Invitations"}
        </h1>

        <p>
          Beautiful digital invitations designed for easy sharing
          and memorable celebrations.
        </p>

      </section>


      <section className="category-grid">

        {cards.map((card) => (

          <div
            className="category-card digital-category-card"
            key={card.title}
          >

            <div className="digital-card-image">
              <img
                src={card.image}
                alt={card.title}
              />
            </div>

            <h2>{card.title}</h2>

            <p>{card.description}</p>

          </div>

        ))}

      </section>

    </main>
  );
}


export default DigitalInvitations;

