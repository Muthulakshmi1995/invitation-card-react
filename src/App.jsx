import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WeddingCards from "./pages/WeddingCards";
import SpecialOccasions from "./pages/SpecialOccasions";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ThemeCards from "./pages/ThemeCards";
import ScrollInvitation from "./pages/ScrollInvitation";
import DigitalInvitations from "./pages/DigitalInvitations";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-cards" element={<WeddingCards />} />
        <Route path="/special-occasions" element={<SpecialOccasions />} />
        <Route path="/special-occasions/:category" element={<SpecialOccasions />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        
<Route path="/theme-cards" element={<ThemeCards />} />
<Route path="/theme-cards/:category" element={<ThemeCards />} />

<Route path="/scroll-invitation" element={<ScrollInvitation />} />
<Route path="/scroll-invitation/:category" element={<ScrollInvitation />} />

<Route path="/digital-invitation" element={<DigitalInvitations />} />
<Route path="/digital-invitation/:category" element={<DigitalInvitations />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
