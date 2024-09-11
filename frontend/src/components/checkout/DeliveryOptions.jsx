import React, { useState } from "react";
import { calculateDeliveryDate } from "../../utilities/calculateDeliveryDate";
import styles from "./DeliveryOptions.module.css";

function DeliveryOptions({ productId, handleDeliveryOptionChange }) {
  return (
    <div className={styles.deliveryOptions}>
      <div className={styles.deliveryOptionsTitle}>
        Choose a delivery option:
      </div>

      <div className={styles.deliveryOption}>
        <input
          type="radio"
          className={styles.deliveryOptionInput}
          name={`delivery-option-${productId}`}
          id={`delivery-option-${productId}-1`}
          onChange={() => handleDeliveryOptionChange(productId, "standard")}
        />
        <label htmlFor={`delivery-option-${productId}-1`}>
          <div className={styles.deliveryOptionDate}>
            {calculateDeliveryDate(7)}
          </div>
          <div className={styles.deliveryOptionPrice}>FREE Shipping</div>
        </label>
      </div>

      <div className={styles.deliveryOption}>
        <input
          type="radio"
          className={styles.deliveryOptionInput}
          name={`delivery-option-${productId}`}
          id={`delivery-option-${productId}-2`}
          onChange={() => handleDeliveryOptionChange(productId, "express")}
        />
        <label htmlFor={`delivery-option-${productId}-2`}>
          <div className={styles.deliveryOptionDate}>
            {calculateDeliveryDate(3)}
          </div>
          <div className={styles.deliveryOptionPrice}>$4.99 - Shipping</div>
        </label>
      </div>

      <div className={styles.deliveryOption}>
        <input
          type="radio"
          className={styles.deliveryOptionInput}
          name={`delivery-option-${productId}`}
          id={`delivery-option-${productId}-3`}
          onChange={() => handleDeliveryOptionChange(productId, "overnight")}
        />
        <label htmlFor={`delivery-option-${productId}-3`}>
          <div className={styles.deliveryOptionDate}>
            {calculateDeliveryDate(1)}
          </div>
          <div className={styles.deliveryOptionPrice}>$9.99 - Shipping</div>
        </label>
      </div>
    </div>
  );
}

export default DeliveryOptions;
