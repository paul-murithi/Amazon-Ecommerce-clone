import React from "react";
import HeaderStyles from "./Header.module.css";
import styles from "./Checkout.module.css";

const Cart = () => {
  return (
    <>
      <div className={HeaderStyles.checkout_header}>
        <div className={HeaderStyles.header_content}>
          <div className={HeaderStyles.checkout_header_left_section}>
            <a href="/">
              <img
                className={HeaderStyles.amazon_logo}
                src="/amazon-logo.png"
              />
              <img
                className={HeaderStyles.amazon_mobile_logo}
                src="/amazon-mobile-logo.png"
              />
            </a>
          </div>

          <div className={HeaderStyles.checkout_header_middle_section}>
            Checkout (
            <a className={HeaderStyles.return_to_home_link} href="/">
              3 items
            </a>
            )
          </div>

          <div className={HeaderStyles.checkout_header_right_section}>
            <img src="/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            <div className={styles.cartItemContainer}>
              <div className={styles.deliveryDate}>
                Delivery date: Tuesday, June 21
              </div>

              <div className={styles.cartItemDetailsGrid}>
                <img
                  className={styles.productImage}
                  src="/products/athletic-cotton-socks-6-pairs.jpg"
                />

                <div className={styles.cartItemDetails}>
                  <div className={styles.productName}>
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </div>
                  <div className={styles.productPrice}>$10.90</div>
                  <div className={styles.productQuantity}>
                    <span>
                      Quantity: <span className={styles.quantityLabel}>2</span>
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
                      checked
                      className={styles.deliveryOptionInput}
                      name="delivery-option"
                      id="delivery-option-1"
                    />
                    <label htmlFor="delivery-option-1">
                      <div className={styles.deliveryOptionDate}>
                        Tuesday, June 21
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
                      name="delivery-option"
                      id="delivery-option-2"
                    />
                    <label htmlFor="delivery-option-2">
                      <div className={styles.deliveryOptionDate}>
                        Wednesday, June 15
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
                      name="delivery-option"
                      id="delivery-option-3"
                    />
                    <label htmlFor="delivery-option-3">
                      <div className={styles.deliveryOptionDate}>
                        Monday, June 13
                      </div>
                      <div className={styles.deliveryOptionPrice}>
                        $9.99 - Shipping
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cartItemContainer}>
              <div className={styles.deliveryDate}>
                Delivery date: Wednesday, June 15
              </div>

              <div className={styles.cartItemDetailsGrid}>
                <img
                  className={styles.productImage}
                  src="/products/intermediate-composite-basketball.jpg"
                />

                <div className={styles.cartItemDetails}>
                  <div className={styles.productName}>
                    Intermediate Size Basketball
                  </div>
                  <div className={styles.productPrice}>$20.95</div>
                  <div className={styles.productQuantity}>
                    <span>
                      Quantity: <span className={styles.quantityLabel}>1</span>
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
                      name="delivery-option-2"
                    />
                    <div>
                      <div className={styles.deliveryOptionDate}>
                        Tuesday, June 21
                      </div>
                      <div className={styles.deliveryOptionPrice}>
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div className={styles.deliveryOption}>
                    <input
                      type="radio"
                      checked
                      className={styles.deliveryOptionInput}
                      name="delivery-option-2"
                    />
                    <div>
                      <div className={styles.deliveryOptionDate}>
                        Wednesday, June 15
                      </div>
                      <div className={styles.deliveryOptionPrice}>
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div className={styles.deliveryOption}>
                    <input
                      type="radio"
                      className={styles.deliveryOptionInput}
                      name="delivery-option-2"
                    />
                    <div>
                      <div className={styles.deliveryOptionDate}>
                        Monday, June 13
                      </div>
                      <div className={styles.deliveryOptionPrice}>
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            <div
              className={`${styles.paymentSummaryRow} ${styles.subtotalRow}`}
            >
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
        </div>
      </div>
    </>
  );
};

export default Cart;
