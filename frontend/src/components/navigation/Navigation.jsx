import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ cartQuantity }) => {
  return (
    <nav className="amazon-header">
      <div className="amazon-header-left-section">
        <Link className="header-link" to="/">
          <img className="amazon-logo" src="/amazon-logo-white.png" />
          <img
            className="amazon-mobile-logo"
            src="/amazon-mobile-logo-white.png"
            alt="amazon-mobile-logo"
          />
        </Link>
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
        <Link to="/orders" className="orders-link header-link">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </Link>

        <Link to="/checkout" className="cart-link header-link">
          <img
            className="cart-icon"
            src="/icons/cart-icon.png"
            alt="cart-icon"
            loading="lazy"
          />
          <div className="cart-quantity js-cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
