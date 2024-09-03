import React, { createContext } from "react";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import CardGrid from "../../components/HomeItemsGrid/CardGrid";
import Checkout from "../Checkout/Checkout";
import data from "../../data/products";
import { useCart } from "../../Context/CartProvider";

const Home = () => {
  const { cart, addToCart, visibleAddedToCart, cartQuantity } = useCart();

  return (
    <>
      <Navigation cartQuantity={cartQuantity} />
      <div className="main">
        <div className="products-grid">
          <CardGrid
            data={data}
            addToCart={addToCart}
            visibleAddedToCart={visibleAddedToCart}
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Home;
