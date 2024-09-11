import React, { useContext } from "react";
import styles from "./OrderSummary.module.css";
import { useCart } from "../../Context/CartProvider";
import { useDeliveryOptions } from "../../Context/DeliveryOptionsContext";

const OrderSummary = ({ handlePlaceOrder }) => {
  const { cart } = useCart();
  const { deliveryOptions } = useDeliveryOptions();

  const calculateItemsTotal = () => {
    return cart.reduce(
      (total, item) => total + item.priceCents * item.quantity,
      0
    );
  };

  // Calculate the cost of delivery options
  const calculateDeliveryCost = () => {
    return cart.reduce((total, item) => {
      const option = deliveryOptions[item.productId];
      switch (option) {
        case "standard":
          return total + 0;
        case "express":
          return total + 499;
        case "overnight":
          return total + 999;
        default:
          return total;
      }
    }, 0);
  };

  const itemsTotal = calculateItemsTotal();
  const deliveryCost = calculateDeliveryCost();
  const shipping = itemsTotal > 5000 ? 0 : deliveryCost;
  const taxRate = 0.1;
  const tax = Math.round((itemsTotal + shipping) * taxRate);
  const orderTotal = ((itemsTotal + shipping + tax) / 100).toFixed(2);

  const onPlaceOrderClick = () => {
    handlePlaceOrder({
      itemsTotal: (itemsTotal / 100).toFixed(2),
      shipping: (shipping / 100).toFixed(2),
      tax: (tax / 100).toFixed(2),
      orderTotal,
    });
  };

  return (
    <>
      <div className={styles.paymentSummary}>
        <div className={styles.paymentSummaryTitle}>Order Summary</div>

        <div className={styles.paymentSummaryRow}>
          <div>Items ({cart.length}):</div>
          <div className={styles.paymentSummaryMoney}>
            ${(itemsTotal / 100).toFixed(2)}
          </div>
        </div>

        <div className={styles.paymentSummaryRow}>
          <div>Shipping &amp; handling:</div>
          <div className={styles.paymentSummaryMoney}>
            ${(shipping / 100).toFixed(2)}
          </div>
        </div>

        <div className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}>
          <div>Total before tax:</div>
          <div className={styles.paymentSummaryMoney}>
            ${((itemsTotal + shipping) / 100).toFixed(2)}
          </div>
        </div>

        <div className={styles.paymentSummaryRow}>
          <div>Estimated tax (10%):</div>
          <div className={styles.paymentSummaryMoney}>
            ${(tax / 100).toFixed(2)}
          </div>
        </div>

        <div className={`${styles.paymentSummaryRow} ${styles.totalRow}`}>
          <div>Order total:</div>
          <div className={styles.paymentSummaryMoney}>${orderTotal}</div>
        </div>

        <button
          className={`${styles.placeOrderButton} button-primary`}
          onClick={onPlaceOrderClick}
        >
          Place your order
        </button>
      </div>
    </>
  );
};

export default OrderSummary;
