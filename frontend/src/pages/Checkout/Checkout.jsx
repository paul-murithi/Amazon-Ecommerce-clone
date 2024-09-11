import React, { useEffect } from "react";
import { useState } from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import EmptyCartMessage from "../../components/checkout/EmptyCartMessage";
import CartItem from "../../components/checkout/CartItem";
import { calculateDeliveryDate } from "../../utilities/calculateDeliveryDate";
import styles from "./Checkout.module.css";
import { useCart } from "../../Context/CartProvider";
import { useOrder } from "../../Context/OrderContext";

// const Checkout = () => {
//   const { cart } = useCart();
//   const { placeOrder } = useOrder();

//   const [deliveryOptions, setDeliveryOptions] = useState({});

//   const handleDeliveryOptionChange = (productId, option) => {
//     setDeliveryOptions((prev) => ({ ...prev, [productId]: option }));
//   };

//   const getDeliveryDate = (productId) => {
//     const option = deliveryOptions[productId];
//     switch (option) {
//       case "standard":
//         return calculateDeliveryDate(7);
//       case "express":
//         return calculateDeliveryDate(3);
//       case "overnight":
//         return calculateDeliveryDate(1);
//       default:
//         return "Select a delivery option";
//     }
//   };

//   const handlePlaceOrder = async (costSummary) => {
//     const { itemsTotal, shipping, tax, orderTotal } = costSummary;

//     const orderDetails = {
//       items: cart.map((item) => ({
//         productId: item.productId,
//         name: item.name,
//         quantity: item.quantity,
//         priceCents: item.priceCents,
//         deliveryDate: getDeliveryDate(item.productId),
//       })),
//       orderDate: new Date().toISOString(),
//       totalCost: parseFloat(orderTotal),
//       shipping,
//       tax,
//     };

//     try {
//       console.log(orderDetails);

//       const savedOrder = await placeOrder(orderDetails);
//       console.log("Order placed successfully:", savedOrder);
//     } catch (error) {
//       console.error("Failed to place order:", error);
//     }
//   };

//   return (
//     <>
//       <CheckoutHeader cartLength={cart.length} />
//       <div className={styles.main}>
//         <div className={styles.pageTitle}>Review your order</div>

//         {cart.length === 0 ? (
//           <EmptyCartMessage />
//         ) : (
//           <div className={styles.checkoutGrid}>
//             <div className="order-summary">
//               {cart.map((item) => (
//                 <CartItem
//                   key={item.productId}
//                   item={item}
//                   getDeliveryDate={getDeliveryDate}
//                   handleDeliveryOptionChange={handleDeliveryOptionChange}
//                 />
//               ))}
//             </div>
//             <OrderSummary handlePlaceOrder={handlePlaceOrder} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
const Checkout = () => {
  const { cart } = useCart();
  const { placeOrder } = useOrder();
  const [deliveryOptions, setDeliveryOptions] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Handle the change of delivery options for each product
  const handleDeliveryOptionChange = (productId, option) => {
    setDeliveryOptions((prev) => ({ ...prev, [productId]: option }));
  };

  // Calculate the delivery date based on the selected option
  const getDeliveryDate = (productId) => {
    const option = deliveryOptions[productId];
    switch (option) {
      case "standard":
        return calculateDeliveryDate(7);
      case "express":
        return calculateDeliveryDate(3);
      case "overnight":
        return calculateDeliveryDate(1);
      default:
        return "Select a delivery option";
    }
  };

  // Validate if all delivery options are selected before placing an order
  const validateDeliveryOptions = () => {
    return cart.every((item) => deliveryOptions[item.productId]);
  };

  const handlePlaceOrder = async (costSummary) => {
    if (!validateDeliveryOptions()) {
      setErrorMessage("Please select a delivery option for all items.");
      return;
    }

    setErrorMessage(""); // Clear error if validation passed

    const { itemsTotal, shipping, tax, orderTotal } = costSummary;

    const orderDetails = {
      items: cart.map((item) => ({
        productId: item.productId,
        name: item.name,
        quantity: item.quantity,
        priceCents: item.priceCents,
        deliveryDate: getDeliveryDate(item.productId),
        deliveryOption: deliveryOptions[item.productId], // Add delivery option to order
      })),
      orderDate: new Date().toISOString(),
      totalCost: parseFloat(orderTotal),
      shipping,
      tax,
    };

    try {
      const savedOrder = await placeOrder(orderDetails);
      console.log("Order placed successfully:", savedOrder);
    } catch (error) {
      console.error("Failed to place order:", error);
    }
  };

  return (
    <>
      <CheckoutHeader cartLength={cart.length} />
      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div className={styles.checkoutGrid}>
            <div className="order-summary">
              {cart.map((item) => (
                <CartItem
                  key={item.productId}
                  item={item}
                  getDeliveryDate={getDeliveryDate}
                  handleDeliveryOptionChange={handleDeliveryOptionChange}
                />
              ))}
            </div>
            <OrderSummary handlePlaceOrder={handlePlaceOrder} />
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Checkout;
