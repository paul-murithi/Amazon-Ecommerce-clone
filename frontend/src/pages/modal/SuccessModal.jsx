import React from "react";
import styles from "./ErroModal.module.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({ onClose }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-modal="true"
    >
      <div className={styles.modalContent} tabIndex={-1} ref={modalRef}>
        <h2 id="modal-title" className={styles.modalTitle}>
          Success!
        </h2>
        <div id="modal-description" className={styles.modalBody}>
          Your order has been placed successfully.
        </div>
        <button
          className={`${styles.closeButton}`}
          onClick={onClose}
          aria-label="Close success modal"
        >
          Close
        </button>

        <button
          className={`${styles.closeButton} ${styles.successButton}`}
          aria-label="Close success modal"
          onClick={() => navigate("/orders")}
        >
          View orders
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
