import { createContext, useContext, useState } from "react";

const DeliveryOptionsContext = createContext();

// Custom hook to use the context
export const useDeliveryOptions = () => {
  return useContext(DeliveryOptionsContext);
};

// Provider component
export const DeliveryOptionsProvider = ({ children }) => {
  const [deliveryOptions, setDeliveryOptions] = useState({});

  // Function to handle changes to delivery options
  const handleDeliveryOptionChange = (productId, option) => {
    setDeliveryOptions((prevOptions) => ({
      ...prevOptions,
      [productId]: option,
    }));
  };

  return (
    <DeliveryOptionsContext.Provider
      value={{ deliveryOptions, handleDeliveryOptionChange }}
    >
      {children}
    </DeliveryOptionsContext.Provider>
  );
};
