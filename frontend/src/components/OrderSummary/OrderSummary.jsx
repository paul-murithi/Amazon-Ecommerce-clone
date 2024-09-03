import React, { useContext } from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = () => {
  return (
    <div className={styles.paymentSummary}>
      <div className={styles.paymentSummaryTitle}>Order Summary</div>

      <div className={styles.paymentSummaryRow}>
        <div>Items (3):</div>
        <div className={styles.paymentSummaryMoney}>$42.75</div>
      </div>

      <div className={styles.paymentSummaryRow}>
        <div>Shipping &amp; handling:</div>
        <div className={styles.paymentSummaryMoney}>$4.99</div>
      </div>

      <div className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}>
        <div>Total before tax:</div>
        <div className={styles.paymentSummaryMoney}>$47.74</div>
      </div>

      <div className={styles.paymentSummaryRow}>
        <div>Estimated tax (10%):</div>
        <div className={styles.paymentSummaryMoney}>$4.77</div>
      </div>

      <div className={`${styles.paymentSummaryRow} ${styles.totalRow}`}>
        <div>Order total:</div>
        <div className={styles.paymentSummaryMoney}>$52.51</div>
      </div>

      <button className={`${styles.placeOrderButton} button-primary`}>
        Place your order
      </button>
    </div>
  );
};

export default OrderSummary;
