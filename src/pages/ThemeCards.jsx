
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ThemeCards.css";

import beachCard from "../assets/Beach_Wedding_Invitation_Set__Wedding_Invitation_Template_2_Set__Editable_Wedding_Invitation__Editable_on_Canva___Digital_Download__Seashell-removebg-preview.png";

import brideCard from "../assets/Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards_-_EJ3003-removebg-preview.png";

import boxCard from "../assets/Gate_fold_Indian_wedding_Invitation_in_light_brown_with_floral_motifs-removebg-preview.png";

import singleSheetCard from "../assets/BC_1152_Floral_A5_Double-Sided_Invitation_-_Desi_Couple_in_Indian_Attire_with_Pink___Ivory_Floral_Border-removebg-preview.png";

const themeData = {
  beach: {
    title: "Beach Theme Cards",
    description:
      "Beautiful beach-inspired wedding invitation cards with elegant seaside details.",
    images: [beachCard],
  },

  bride: {
    title: "Bride Theme Cards",
    description:
      "Beautiful bride-themed wedding invitation designs with elegant floral and traditional details.",
    images: [brideCard],
  },

  box: {
    title: "Box Cards",
    description:
      "Elegant box-style and fold-style invitation cards for a premium wedding invitation experience.",
    images: [boxCard, brideCard],
  },

  "single-sheet": {
    title: "Single Sheet Cards",
    description:
      "Simple and elegant single-sheet wedding invitation designs with beautiful floral details.",
    images: [singleSheetCard],
  },
};

function ThemeCards() {
  const { category } = useParams();

  const selectedTheme = category
    ? themeData[category]
    : null;

  const themes = Object.entries(themeData);

  return (
    <main className="theme-cards-page">
      <section className="theme-cards-header">
        <span>✦</span>

        <h1>
          {selectedTheme
            ? selectedTheme.title
            : "Theme Cards"}
        </h1>

        <p>
          {selectedTheme
            ? selectedTheme.description
            : "Explore beautiful invitation cards based on different themes."}
        </p>

        <div className="theme-heading-line">❦</div>
      </section>

      <section className="theme-cards-content">
        {!selectedTheme ? (
          <div className="theme-card-grid">
            {themes.map(([key, theme]) => (
              <article
                className="theme-product-card"
                key={key}
              >
                <div className="theme-product-image">
                  <img
                    src={theme.images[0]}
                    alt={theme.title}
                  />
                </div>

                <h2>{theme.title}</h2>

                <p>{theme.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="theme-selected-grid">
            {selectedTheme.images.map((image, index) => (
              <article
                className="theme-product-card"
                key={`${selectedTheme.title}-${index}`}
              >
                <div className="theme-product-image">
                  <img
                    src={image}
                    alt={selectedTheme.title}
                  />
                </div>

                <h2>{selectedTheme.title}</h2>

                <p>{selectedTheme.description}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ThemeCards;

