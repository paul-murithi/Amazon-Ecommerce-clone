import { Link } from "react-router-dom";
import HeaderStyles from "./Header.module.css";

export const HeaderContent = () => {};

const CheckoutHeader = ({ cartLength }) => (
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
          ({cartLength} items)
        </Link>
      </div>

      <div className={HeaderStyles.checkout_header_right_section}>
        <img src="/icons/checkout-lock-icon.png" alt="Checkout Lock Icon" />
      </div>
    </div>
  </div>
);

export default CheckoutHeader;
