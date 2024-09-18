import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useAuth } from "../../Context/AuthContext"; // Import AuthContext
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Navigation = ({
  cartQuantity,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/logout");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="amazon-header">
      <div className="amazon-header-left-section">
        <Link className="header-link" to="/">
          <img
            className="amazon-logo"
            src="/amazon-logo-white.png"
            alt="amazon-logo"
          />
          <img
            className="amazon-mobile-logo"
            src="/amazon-mobile-logo-white.png"
            alt="amazon-mobile-logo"
          />
        </Link>
      </div>

      <div className="amazon-header-middle-section">
        <input
          className="search-bar"
          type="search"
          placeholder="Search products"
          value={searchQuery}
          onChange={onSearchChange}
        />
        <button
          className="search-button"
          aria-label="Search"
          onClick={onSearchSubmit}
        >
          <img
            className="search-icon"
            src="/icons/search-icon.png"
            alt="search-icon"
            loading="lazy"
          />
        </button>
      </div>

      <div
        className={`amazon-header-right-section ${
          isMobileMenuOpen ? "open" : ""
        }`}
      >
        <Link to="/orders" className="orders-link header-link">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </Link>

        <div
          className="account-section"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          <img className="user-icon" src="/user-regular.svg" alt="user-icon" />
          <div className="account-info">
            {isAuthenticated ? (
              <>
                <span className="welcome-text">
                  Hello, {user?.name || "User"}
                </span>
                {isDropdownVisible && (
                  <div className="dropdown-menu">
                    <Link to="/orders">Your Orders</Link>
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <span className="login-prompt">
                <Link to="/auth/signin" className="sign-in-link">
                  Sign In
                </Link>
              </span>
            )}
          </div>
        </div>

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

      {/* Hamburger Menu Icon for Mobile */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navigation;
