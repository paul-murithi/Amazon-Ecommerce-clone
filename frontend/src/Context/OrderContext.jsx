import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const placeOrder = async (orderDetails) => {
    console.log("Order Details:", orderDetails);

    try {
      const token = localStorage.getItem("jwtToken");

      const response = await axios.post(
        "http://localhost:8080/api/orders",
        orderDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrder(response.data);
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
