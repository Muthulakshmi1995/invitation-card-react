
import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CategoryPages.css";

function ScrollInvitation() {
  const { category } = useParams();

  const scrollData = {
    "small-size-scroll": {
      title: "Small Size Scroll",
      description:
        "Small and elegant scroll invitations designed for beautiful and intimate celebrations.",
    },

    "box-scroll": {
      title: "Box Scroll",
      description:
        "Premium scroll invitations presented inside an elegant box for a luxurious invitation experience.",
    },

    "only-scroll": {
      title: "Only Scroll",
      description:
        "Traditional scroll invitations with a simple and graceful presentation, without a box.",
    },

    "high-end-scroll": {
      title: "High End Scroll",
      description:
        "Luxury scroll invitations designed for grand weddings and special celebrations.",
    },
  };

  const selectedCategory = category ? scrollData[category] : null;

  const cards = selectedCategory
    ? [selectedCategory]
    : Object.values(scrollData);

  return (
    <main className="category-page">
      <section className="category-hero">
        <h1>
          {selectedCategory
            ? selectedCategory.title
            : "Scroll Invitations"}
        </h1>

        <p>
          Explore beautiful scroll invitation styles for your special
          celebration.
        </p>
      </section>

      <section className="category-grid">
        {cards.map((card) => (
          <div className="category-card" key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default ScrollInvitation;

