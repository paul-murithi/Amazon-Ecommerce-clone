import React from "react";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import CardGrid from "../../components/cardGrid/CardGrid";
import data from "../../data/products";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productID) => {
    const matchingItem = cart.find((item) => item.productId === productID);

    if (matchingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productId === productID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { productId: productID, quantity: 1 },
      ]);
    }
  };

  return (
    <>
      <Navigation
        cartQuantity={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
      <div className="main">
        <div className="products-grid js-products-grid">
          <CardGrid data={data} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
};

export default Home;
