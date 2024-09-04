import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [visibleAddedToCart, setVisibleAddedToCart] = useState(null);

  const addToCart = (product) => {
    const matchingItem = cart.find((item) => item.productId === product.id);

    if (matchingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        {
          productId: product.id,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          quantity: 1,
        },
      ]);
    }

    setVisibleAddedToCart(product.id);
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
