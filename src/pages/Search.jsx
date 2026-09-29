
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/Search.css";

import hindu from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";
import simple from "../assets/download__10_-removebg-preview.png";
import muslim from "../assets/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png";
import scroll from "../assets/Buy_Scroll_Wedding_Invitations___Personalized___Vintage_Styles-removebg-preview.png";
import luxury from "../assets/download__20_-removebg-preview.png";

const ideas = [
  {
    title: "Hindu wedding Card",
    image: hindu,
    keywords: ["hindu", "wedding", "wedding card"],
    path: "/wedding-cards/hindu",
  },
  {
    title: "Simple wedding Card",
    image: simple,
    keywords: ["simple", "wedding", "wedding card"],
    path: "/wedding-cards/simple",
  },
  {
    title: "Muslim wedding Card",
    image: muslim,
    keywords: ["muslim", "wedding", "wedding card"],
    path: "/wedding-cards/muslim",
  },
  {
    title: "Scroll wedding Card",
    image: scroll,
    keywords: ["scroll", "wedding", "scroll card"],
    path: "/scroll-invitation",
  },
  {
    title: "Luxury wedding Card",
    image: luxury,
    keywords: ["luxury", "wedding", "luxury card"],
    path: "/wedding-cards/luxury",
  },
];

function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const initialQuery = searchParams.get("query") || "";
  const [searchText, setSearchText] = useState(initialQuery);

  const query = initialQuery.trim().toLowerCase();

  const filteredIdeas = query
    ? ideas.filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(query);

        const keywordMatch = item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        );

        return titleMatch || keywordMatch;
      })
    : ideas;

  const handleSearch = () => {
    const value = searchText.trim();

    if (!value) {
      navigate("/search");
      return;
    }

    navigate(`/search?query=${encodeURIComponent(value)}`);
  };

  return (
    <main className="search-page">
      <section className="search-hero">
        <h1>Everything You Need, to Plan your Dream Wedding</h1>

        <p>
          Search for vendors, cards, ideas and real wedding stories and more!
        </p>

        <div className="search-main-box">
          <button type="button">All</button>

          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            placeholder="Search"
            aria-label="Search"
          />

          <button
            type="button"
            className="search-submit-button"
            onClick={handleSearch}
            aria-label="Search"
          >
            🔍
          </button>
        </div>

        <div className="search-tags">
          {[
            "Wedding Cards",
            "Scroll Cards",
            "Theme Cards",
            "Birthday Cards",
            "Engagement Cards",
          ].map((tag) => (
            <span key={tag}>
              {tag} <b>×</b>
            </span>
          ))}
        </div>
      </section>

      <section className="search-results">
        <h2>{query ? `Search results for "${initialQuery}"` : "Ideas for you"}</h2>

        {filteredIdeas.length > 0 ? (
          <div className="search-idea-grid">
            {filteredIdeas.map((item) => (
              <article
                className="search-idea-card"
                key={item.title}
                onClick={() => navigate(item.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(item.path);
                  }
                }}
              >
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        ) : (
          <div className="search-no-results">
            <h3>No results found</h3>
            <p>
              Try searching for Hindu, Muslim, Simple, Scroll or Luxury.
            </p>
          </div>
        )}

        {!query && (
          <>
            <h2>Popular on this</h2>

            <div className="search-idea-grid search-popular">
              {ideas.slice(0, 3).map((item) => (
                <article
                  className="search-idea-card"
                  key={`popular-${item.title}`}
                  onClick={() => navigate(item.path)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Search;

