import React, { createContext } from "react";
import { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import CardGrid from "../../components/HomeItemsGrid/CardGrid";
import Checkout from "../Checkout/Checkout";
import data from "../../data/products";
import { useCart } from "../../Context/CartProvider";

const Home = () => {
  const { cart, addToCart, visibleAddedToCart, cartQuantity } = useCart();
  // const [cart, setCart] = useState([]);
  // const [visibleAddedToCart, setVisibleAddedToCart] = useState(null);

  // const addToCart = (productID) => {
  //   const matchingItem = cart.find((item) => item.productId === productID);

  //   if (matchingItem) {
  //     setCart((prevCart) =>
  //       prevCart.map((item) =>
  //         item.productId === productID
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart((prevCart) => [
  //       ...prevCart,
  //       { productId: productID, quantity: 1 },
  //     ]);
  //   }

  //   setVisibleAddedToCart(productID);

  //   setTimeout(() => setVisibleAddedToCart(null), 2500);
  // };

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
