import React, { useEffect } from "react";
import { useState } from "react";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import HeaderStyles from "./Header.module.css";
import styles from "./Checkout.module.css";
import { useCart } from "../../Context/CartProvider";
import { Link } from "react-router-dom";

const calculateDeliveryDate = (daysToAdd) => {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return date.toDateString();
};

const Checkout = () => {
  const { cart } = useCart();
  const [deliveryOptions, setDeliveryOptions] = useState({});

  const handleDeliveryOptionChange = (productId, option) => {
    setDeliveryOptions((prev) => ({ ...prev, [productId]: option }));
  };

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

  useEffect(() => console.log(cart));

  return (
    <>
      <div className={HeaderStyles.checkout_header}>
        <div className={HeaderStyles.header_content}>
          <div className={HeaderStyles.checkout_header_left_section}>
            <Link to="/">
              <img
                className={HeaderStyles.amazon_logo}
                src="/amazon-logo.png"
                alt="Amazon Logo"
              />
              <img
                className={HeaderStyles.amazon_mobile_logo}
                src="/amazon-mobile-logo.png"
                alt="Amazon Mobile Logo"
              />
            </Link>
          </div>

          <div className={HeaderStyles.checkout_header_middle_section}>
            Checkout
            <Link to="/" className={HeaderStyles.return_to_home_link}>
              ({cart.length} items)
            </Link>
          </div>

          <div className={HeaderStyles.checkout_header_right_section}>
            <img src="/icons/checkout-lock-icon.png" alt="Checkout Lock Icon" />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            {cart.map((item) => (
              <div key={item.productId} className={styles.cartItemContainer}>
                <div className={styles.deliveryDate}>
                  Delivery date: {getDeliveryDate(item.productId)}
                </div>

                <div className={styles.cartItemDetailsGrid}>
                  <img
                    className={styles.productImage}
                    src={item.image}
                    alt={item.name}
                  />

                  <div className={styles.cartItemDetails}>
                    <div className={styles.productName}>{item.name}</div>
                    <div className={styles.productPrice}>
                      ${(item.priceCents / 100).toFixed(2)}
                    </div>
                    <div className={styles.productQuantity}>
                      <span>
                        Quantity:{" "}
                        <span className={styles.quantityLabel}>
                          {item.quantity}
                        </span>
                      </span>
                      <span
                        className={`${styles.updateQuantityLink} link-primary`}
                      >
                        Update
                      </span>
                      <span
                        className={`${styles.deleteQuantityLink} link-primary`}
                      >
                        Delete
                      </span>
                    </div>
                  </div>

                  <div className={styles.deliveryOptions}>
                    <div className={styles.deliveryOptionsTitle}>
                      Choose a delivery option:
                    </div>
                    <div className={styles.deliveryOption}>
                      <input
                        type="radio"
                        className={styles.deliveryOptionInput}
                        name={`delivery-option-${item.productId}`}
                        id={`delivery-option-${item.productId}-1`}
                        onChange={() =>
                          handleDeliveryOptionChange(item.productId, "standard")
                        }
                      />
                      <label htmlFor={`delivery-option-${item.productId}-1`}>
                        <div className={styles.deliveryOptionDate}>
                          {calculateDeliveryDate(7)}
                        </div>
                        <div className={styles.deliveryOptionPrice}>
                          FREE Shipping
                        </div>
                      </label>
                    </div>
                    <div className={styles.deliveryOption}>
                      <input
                        type="radio"
                        className={styles.deliveryOptionInput}
                        name={`delivery-option-${item.productId}`}
                        id={`delivery-option-${item.productId}-2`}
                        onChange={() =>
                          handleDeliveryOptionChange(item.productId, "express")
                        }
                      />
                      <label htmlFor={`delivery-option-${item.productId}-2`}>
                        <div className={styles.deliveryOptionDate}>
                          {calculateDeliveryDate(3)}
                        </div>
                        <div className={styles.deliveryOptionPrice}>
                          $4.99 - Shipping
                        </div>
                      </label>
                    </div>
                    <div className={styles.deliveryOption}>
                      <input
                        type="radio"
                        className={styles.deliveryOptionInput}
                        name={`delivery-option-${item.productId}`}
                        id={`delivery-option-${item.productId}-3`}
                        onChange={() =>
                          handleDeliveryOptionChange(
                            item.productId,
                            "overnight"
                          )
                        }
                      />
                      <label htmlFor={`delivery-option-${item.productId}-3`}>
                        <div className={styles.deliveryOptionDate}>
                          {calculateDeliveryDate(1)}
                        </div>
                        <div className={styles.deliveryOptionPrice}>
                          $9.99 - Shipping
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
