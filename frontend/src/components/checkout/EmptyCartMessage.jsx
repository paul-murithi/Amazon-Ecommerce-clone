import { Link } from "react-router-dom";
import styles from "./EmptyCartMessage.module.css";

const EmptyCartMessage = () => (
  <div className={styles.emptyCartMessage}>
    Your cart is empty. <Link to="/">Continue shopping</Link>
  </div>
);

export default EmptyCartMessage;
