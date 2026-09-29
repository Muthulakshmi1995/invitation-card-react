import React from "react";
import "../styles/Wishlist.css";
import wishlistImage from "../assets/tumblr_818ae2f813d3af50714c333b9a5ab238_5cece1af_1280-removebg-preview.png";

function Wishlist() {
  return (
    <main className="wishlist-page">
      <h1>Wishlist</h1>
      <article className="wishlist-card">
        <div className="wishlist-image-wrap">
          <img src={wishlistImage} alt="The blue Wedding Cards" />
          <button type="button" aria-label="Remove from wishlist">♡</button>
        </div>
        <div className="wishlist-info">
          <h2>The blue Wedding Cards</h2>
          <strong>Rs. 72.25</strong>
        </div>
      </article>
    </main>
  );
}

export default Wishlist;
