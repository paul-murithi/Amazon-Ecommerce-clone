import React, { useState } from "react";
import { useContext } from "react";
import "./CardGrid.css";

const CardGrid = ({ addToCart, data, visibleAddedToCart }) => {
  return data.map((product) => (
    <div className="product-container" key={product.productId}>
      <div className="product-image-container">
        <img className="product-image" src={product.image} loading="lazy" />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`/ratings/rating-${product.ratingStars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.ratingCount}
        </div>
      </div>

      <div className="product-price">
        ${(product.priceCents / 100).toFixed(2)}
      </div>

      <div className="product-quantity-container">
        <select>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      <div
        className={`added-to-cart ${
          visibleAddedToCart === product.id ? "active" : ""
        }`}
      >
        <img src="/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        data-product-id={product.id}
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  ));
};

export default CardGrid;
