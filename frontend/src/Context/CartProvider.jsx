import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Retrieve initial cart from localStorage
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
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

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        visibleAddedToCart,
        addToCart,
        removeFromCart, // Provide removeFromCart function
        cartQuantity: cart.reduce((acc, item) => acc + item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
