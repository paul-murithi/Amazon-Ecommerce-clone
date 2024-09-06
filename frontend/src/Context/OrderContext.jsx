import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const placeOrder = async (orderDetails) => {
    try {
      const response = await axios.post("/api/orders", orderDetails);
      setOrder(response.data);
      return response.data;
    } catch (error) {
      console.error("Error placing the order:", error);
      throw error;
    }
  };

  return (
    <OrderContext.Provider value={{ order, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
