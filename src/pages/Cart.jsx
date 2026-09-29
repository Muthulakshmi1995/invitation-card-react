import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const navigate = useNavigate();
  return (
    <main className="cart-page">
      <div className="cart-table-head"><b>Product</b><b>Qty</b><b>Unit Price</b><b>Tax</b><b>Price</b></div>
      <div className="cart-row">
        <div className="cart-product">SKU: KSN0054<br /><br />SN (SN 54)</div>
        <div>2</div><div>Rs.65.00</div><div>18%</div><div>Rs.130.00</div>
      </div>
      <div className="cart-total"><span>Sub Total:</span><b>Rs.130.00</b><span>Total Tax:</span><b>Rs.23.40</b><span>Total:</span><b>Rs.153.40</b></div>
      <p className="cart-warning">TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART</p>
      <div className="cart-buttons">
        <button onClick={() => navigate("/wedding-cards")}>Continue Shopping</button>
        <button className="disabled" type="button">Checkout</button>
      </div>
    </main>
  );
}

export default Cart;
