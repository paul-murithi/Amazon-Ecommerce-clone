import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./ErroModal.module.css";

const ErrorModal = ({ errorMessage, onClose, notLoggedIn }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
          Error
        </h2>
        <div id="modal-description" className={styles.modalBody}>
          {notLoggedIn ? (
            <>
              <div>Please Log In to complete your order</div>
              <div>
                <Link
                  to={"/auth/signin"}
                  style={{
                    color: "#333",
                  }}
                >
                  Log In
                </Link>
              </div>
            </>
          ) : (
            errorMessage
          )}
        </div>
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close error modal"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
