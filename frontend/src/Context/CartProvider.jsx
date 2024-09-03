import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [visibleAddedToCart, setVisibleAddedToCart] = useState(null);

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

    setVisibleAddedToCart(productID);

    setTimeout(() => setVisibleAddedToCart(null), 2500);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        visibleAddedToCart,
        addToCart,
        cartQuantity: cart.reduce((acc, item) => acc + item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
