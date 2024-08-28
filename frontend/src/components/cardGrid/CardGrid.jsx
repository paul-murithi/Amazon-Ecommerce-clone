import React, { useState } from "react";
import data from "../../data/products";
import "./CardGrid.css";

const CardGrid = ({ data, addToCart }) => {
  return data.map((product) => (
    <div className="product-container" key={product.id}>
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
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

      <div className="added-to-cart">
        <img src="/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary js-add-to-cart"
        data-product-id={product.id}
        onClick={() => addToCart(product.id)}
      >
        Add to Cart
      </button>
    </div>
  ));
};

export default CardGrid;
