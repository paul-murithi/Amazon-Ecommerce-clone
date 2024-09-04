import React, { useContext } from "react";
import styles from "./OrderSummary.module.css";
import { useCart } from "../../Context/CartProvider";

const OrderSummary = () => {
  const { cart } = useCart();

  const calculateItemsTotal = () => {
    return cart.reduce(
      (total, item) => total + item.priceCents * item.quantity,
      0
    );
  };

  const itemsTotal = calculateItemsTotal();
  const shipping = itemsTotal > 5000 ? 0 : 499; // Free shipping for orders over $50
  const taxRate = 0.1; // 10%
  const tax = (itemsTotal + shipping) * taxRate;
  const orderTotal = ((itemsTotal + shipping + tax) / 100).toFixed(2);

  return (
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

      <button className={`${styles.placeOrderButton} button-primary`}>
        Place your order
      </button>
    </div>
  );
};

export default OrderSummary;
