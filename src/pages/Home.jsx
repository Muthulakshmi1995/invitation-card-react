import React from "react";
import { useNavigate } from "react-router-dom";


import "../styles/Home.css";

/* =========================
   ASSETS
========================= */

import heroLeaves from "../assets/hero-leaves.jpg";

import laserImage from "../assets/Premium Vector _ Vector wedding card laser cut template.jpg";

import hinduCard from "../assets/Editable_Indian_Wedding_Invitations___Hindu_Wedding_Invite___Flower_Frame_Wedding_Card___Printable___Instant_Download___Corjl_IWIM_-_Etsy_UK-removebg-preview.png";

import luxuryCard from "../assets/download__10_-removebg-preview.png";

import floralCard from "../assets/BC_1152_Floral_A5_Double-Sided_Invitation_-_Desi_Couple_in_Indian_Attire_with_Pink___Ivory_Floral_Border-removebg-preview.png";

import beachCard from "../assets/Beach_Wedding_Invitation_Set__Wedding_Invitation_Template_2_Set__Editable_Wedding_Invitation__Editable_on_Canva___Digital_Download__Seashell-removebg-preview.png";

import birdsCard from "../assets/Evite_Paperless_Wedding_Invitation_Aqua_Love_Birds-removebg-preview.png";

import palaceCard from "../assets/Elegant_Kerala_Hindu_Wedding_Invitation-removebg-preview.png";

import product1 from "../assets/Wedding_card_design_in_red_satin_cloth-removebg-preview.png";

import product2 from "../assets/Download_Decorative_Hindu_Wedding_Card_Vector_for_free-removebg-preview.png";

import product3 from "../assets/Hindu_Low_Cost_Wedding_Invitation_Card_Design-removebg-preview.png";

import product4 from "../assets/download__5_-removebg-preview.png";

import product5 from "../assets/Hindu Wedding Cards Online _ Traditional Designs for Sacred Ceremonies.jpg";

import hinduCollection from "../assets/Indian_Hindu_Wedding_Royal_Golden_Peacock_Maroon____Rahul_-removebg-preview.png";

import muslimCollection from "../assets/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png";

import interfaithCollection from "../assets/Emerald_Green_Gold_Floral_Anand_Karaj_Sikh_Wedding____ShabzDesigns-removebg-preview.png";

import jamesPhoto from "../assets/james-photo.jpg";
import harshithaPhoto from "../assets/harshitha-photo.jpg";
import santhoshPhoto from "../assets/santhosh-photo.jpg";

import orderSampleIcon from "../assets/order-sample-icon.png";
import sampleOrderIcon from "../assets/sample-order-icon.png";
import digitalDraftIcon from "../assets/digital-draft-icon.png";
import bulkOrderIcon from "../assets/bulk-order-icon.png";
import deliveryIcon from "../assets/delivery-icon.png";


/* =========================
   DATA
========================= */

const categories = [
  {
    image: hinduCard,
    title: "Hindu Wedding Cards",
    path: "/category/hindu",
  },
  {
    image: luxuryCard,
    title: "Luxury Cards",
    path: "/category/luxury",
  },
  {
    image: floralCard,
    title: "Floral Wedding Cards",
    path: "/category/floral",
  },
];

const themes = [
  {
    image: beachCard,
    title: "Beach Theme Cards",
    path: "/theme/beach",
  },
  {
    image: birdsCard,
    title: "Birds Theme Cards",
    path: "/theme/birds",
  },
  {
    image: palaceCard,
    title: "Palace Theme Cards",
    path: "/theme/palace",
  },
];

const products = [
  {
    image: product1,
    title: "Red Invite Card with Bride And Groom Names",
    price: "Rs.10.25",
  },
  {
    image: product2,
    title: "Simple Red and Yellow Card Invite with Bride And Groom Names",
    price: "Rs.5.00",
  },
  {
    image: product3,
    title: "Red vertical Personal Invite with Bride And Groom Names",
    price: "Rs.7.00",
  },
  {
    image: product4,
    title: "Red vertical Personal Invite with Bride And Groom Names",
    price: "Rs.7.50",
  },
  {
    image: product5,
    title: "Brown with Vinayagar Picture Invite with Bride And Groom Names",
    price: "Rs.7.00",
  },
  {
    image: product1,
    title:
      "Maroon card with Rangoli Theme Personal Invite with Bride And Groom Names",
    price: "Rs.9.00",
  },
];

const collections = [
  {
    image: hinduCollection,
    title: "Hindu Invitation Collections",
  },
  {
    image: hinduCollection,
    title: "Christian Invitation Collections",
  },
  {
    image: muslimCollection,
    title: "Muslim Invitation Collections",
  },
  {
    image: interfaithCollection,
    title: "Interfaith Invitation Collections",
  },
];

const reviews = [
  {
    image: jamesPhoto,
    name: "James",
    heading: "Absolutely beautiful invites!",
    text:
      "We were blown away by the quality and elegance of our wedding invitations. The paper felt luxurious, and the printing was flawless. Everyone keeps asking where we got them from!",
  },
  {
    image: harshithaPhoto,
    name: "Harshitha",
    heading: "Customized to perfection",
    text:
      "We wanted something simple but unique, and they absolutely nailed it. Colors, fonts, wording — everything was exactly how we imagined. Fast turnaround too!",
  },
  {
    image: santhoshPhoto,
    name: "Santhosh",
    heading: "Great quality at a great price.",
    text:
      "We were on a tight budget, but didn’t want to compromise on style. These invites were not only affordable but looked premium. Arrived quickly and packaged beautifully.",
  },
];

const steps = [
  {
    image: orderSampleIcon,
    title: "Order Sample",
  },
  {
    image: sampleOrderIcon,
    title: "Get Sample Order In 5 days",
  },
  {
    image: digitalDraftIcon,
    title: "Approve Digital Draft",
  },
  {
    image: bulkOrderIcon,
    title: "Place Your Bulk Order",
  },
  {
    image: deliveryIcon,
    title: "Print & Delivery",
  },
];


/* =========================
   SECTION HEADING
========================= */

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="heading-symbol">✦</div>

      <h2>{title}</h2>

      {subtitle && <p>{subtitle}</p>}

      <div className="heading-line">
        <span>❦</span>
      </div>
    </div>
  );
}


/* =========================
   HOME
========================= */

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <section
        className="hero-section"
        style={{ backgroundImage: `url("${heroLeaves}")` }}
      >
        <div className="hero-card">

          <div className="hero-small">
            TOGETHER WITH LOVE
          </div>

          <div className="hero-ornament">
            ❦
          </div>

          <h1>
            Your Love Story
            <br />
            Begins Here
          </h1>

          <p>
            Create stunning wedding invitations that capture the essence
            of your special day. Elegant designs, heartfelt words, and
            everything you need to make your first impression unforgettable.
          </p>

          <button
            className="primary-button"
            onClick={() => navigate("/wedding-cards")}
          >
            Get your style
          </button>

          <div className="hero-bottom">
            ✧ ❦ ✧
          </div>

        </div>
      </section>


      {/* =========================
          LASER CUT
      ========================= */}

      <section className="laser-section">

        <div className="laser-banner">

          <div className="laser-image">
            <img
              src={laserImage}
              alt="Laser Cut Invitations"
            />
          </div>

          <div className="laser-content">

            <span>
              ELEGANT • UNIQUE • BEAUTIFUL
            </span>

            <h2>
              Laser Cut Invitations
            </h2>

            <p>
              Make your special day unforgettable with our elegant
              laser cut designs.
            </p>

            <button
              onClick={() => navigate("/wedding-cards")}
            >
              Shop Now →
            </button>

          </div>

          <div className="laser-decoration">
            ❦
          </div>

        </div>

      </section>


      {/* =========================
          UNIQUE CARDS
      ========================= */}

      <section className="content-section">

        <SectionHeading
          title="Unique & Exclusive Invitation Cards"
          subtitle="Because Each Wedding is Truly Unique and Memorable"
        />

        <div className="three-card-grid">

          {categories.map((item) => (

            <div
              className="category-card"
              key={item.title}
              onClick={() => navigate(item.path)}
            >

              <div className="category-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="heart">
                  ♡
                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <button>
                Explore Collection →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          THEME CARDS
      ========================= */}

      <section className="content-section theme-section">

        <SectionHeading
          title="Theme Based Invitation"
          subtitle="Theme Based Invitation"
        />

        <div className="three-card-grid">

          {themes.map((item) => (

            <div
              className="category-card"
              key={item.title}
              onClick={() => navigate(item.path)}
            >

              <div className="category-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

                <span className="heart">
                  ♡
                </span>

              </div>

              <h3>
                {item.title}
              </h3>

              <button>
                Explore Theme →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          OFFERS
      ========================= */}

      <section className="offers-section">

        <div className="offer-card offer-first">

          <div className="offer-text">

            <span>
              A LITTLE SOMETHING FOR YOU
            </span>

            <p>
              Join our love-letters list and enjoy
            </p>

            <h3>
              20% off your first set of wedding invitations.
            </h3>

            <small>
              Simple, beautiful, and easy on your budget.
            </small>

          </div>

          <div className="offer-badge">

            <strong>
              20%
            </strong>

            <span>
              Get Off
            </span>

          </div>

        </div>


        <div className="offer-card offer-second">

          <div className="offer-badge">

            <strong>
              FREE
            </strong>

            <span>
              20 Extra Invites
            </span>

          </div>

          <div className="offer-text">

            <span>
              PLAN AHEAD & SAVE
            </span>

            <h3>
              Planning ahead pays off!
            </h3>

            <p>
              Book your order 60+ days in advance and get a free
              set of 20 extra invites for last-minute guests.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="content-section products-section">

        <SectionHeading
          title="Simple and Affordable Wedding Cards"
          subtitle="Beautiful designs for every celebration"
        />

        <div className="products-grid">

          {products.map((product, index) => (

            <div
              className="product-card"
              key={index}
            >

              <div className="product-image">

                <span className="product-heart">
                  ♡
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                />

              </div>

              <h3>
                {product.title}
              </h3>

              <div className="product-bottom">

                <strong>
                  {product.price}
                </strong>

                <button
                  onClick={() => navigate("/cart")}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          SUMMER OFFER
      ========================= */}

      <section className="summer-section">

        <div className="summer-overlay">

          <span>
            SUMMER SPECIAL
          </span>

          <h2>
            Celebrate Love. Save More.
          </h2>

          <div className="summer-offers">

            <div>
              <strong>100 cards</strong>
              <span>10% Off</span>
            </div>

            <div>
              <strong>200 cards</strong>
              <span>15% Off</span>
            </div>

            <div>
              <strong>300 cards</strong>
              <span>20% Off</span>
            </div>

            <div>
              <strong>400 cards</strong>
              <span>25% Off</span>
            </div>

          </div>

          <button
            onClick={() => navigate("/wedding-cards")}
          >
            Shop Wedding Cards →
          </button>

        </div>

      </section>


      {/* =========================
          COLLECTIONS
      ========================= */}

      <section className="content-section">

        <SectionHeading
          title="Our Invitation Collections"
          subtitle="Find the perfect invitation for your celebration"
        />

        <div className="collections-grid">

          {collections.map((item) => (

            <div
              className="collection-card"
              key={item.title}
              onClick={() => navigate("/wedding-cards")}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="collection-title">
                {item.title}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          REVIEWS
      ========================= */}

      <section className="reviews-section">

        <SectionHeading
          title="WHAT CLIENT SAY ABOUT US"
          subtitle="Happy Customers"
        />

        <div className="reviews-grid">

          {reviews.map((review) => (

            <div
              className="review-card"
              key={review.name}
            >

              <img
                src={review.image}
                alt={review.name}
                className="review-photo"
              />

              <h3>
                {review.name}
              </h3>

              <h4>
                {review.heading}
              </h4>

              <p>
                {review.text}
              </p>

              <div className="stars">
                ★★★★★
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          HOW IT WORKS
      ========================= */}

      <section className="content-section how-section">

        <SectionHeading
          title="How It Works"
        />

        <div className="steps-grid">

          {steps.map((step, index) => (

            <div
              className="step-card"
              key={step.title}
            >

              <div className="step-number">
                {index + 1}
              </div>

              <img
                src={step.image}
                alt={step.title}
              />

              <h3>
                {step.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;