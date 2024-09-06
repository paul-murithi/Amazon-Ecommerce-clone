import DeliveryOptions from "./DeliveryOptions";
import styles from "./CartItem.module.css";

const CartItem = ({ item, getDeliveryDate, handleDeliveryOptionChange }) => (
  <div className={styles.cartItemContainer}>
    <div className={styles.deliveryDate}>
      Delivery date: {getDeliveryDate(item.productId)}
    </div>

    <div className={styles.cartItemDetailsGrid}>
      <img className={styles.productImage} src={item.image} alt={item.name} />
      <div className={styles.cartItemDetails}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productPrice}>
          ${(item.priceCents / 100).toFixed(2)}
        </div>
        <div className={styles.productQuantity}>
          <span>
            Quantity:{" "}
            <span className={styles.quantityLabel}>{item.quantity}</span>
          </span>
          <span className={`${styles.updateQuantityLink} link-primary`}>
            Update
          </span>
          <span className={`${styles.deleteQuantityLink} link-primary`}>
            Delete
          </span>
        </div>
      </div>
      <DeliveryOptions
        productId={item.productId}
        handleDeliveryOptionChange={handleDeliveryOptionChange}
      />
    </div>
  </div>
);

export default CartItem;
