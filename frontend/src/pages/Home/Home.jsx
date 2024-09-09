import React, { createContext, useEffect } from "react";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import CardGrid from "../../components/HomeItemsGrid/CardGrid";
import Checkout from "../Checkout/Checkout";
import data from "../../data/products";
import { useCart } from "../../Context/CartProvider";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Data is not an array", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { cart, addToCart, visibleAddedToCart, cartQuantity } = useCart();

  return (
    <>
      <Navigation cartQuantity={cartQuantity} />
      <div className="main">
        <div className="products-grid">
          <CardGrid
            data={products}
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
