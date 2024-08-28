import React from "react";
import "./Navigation.css";

const Navigation = ({ cartQuantity }) => {
  return (
    <nav className="amazon-header">
      <div className="amazon-header-left-section">
        <a href="/" className="header-link">
          <img className="amazon-logo" src="/amazon-logo-white.png" />
          <img
            className="amazon-mobile-logo"
            src="/amazon-mobile-logo-white.png"
            alt="amazon-mobile-logo"
          />
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button" aria-label="Search">
          <img
            className="search-icon"
            src="/icons/search-icon.png"
            alt="search-icon"
            loading="lazy"
          />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="/cart">
          <img
            className="cart-icon"
            src="/icons/cart-icon.png"
            alt="cart-icon"
            loading="lazy"
          />
          <div className="cart-quantity js-cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
