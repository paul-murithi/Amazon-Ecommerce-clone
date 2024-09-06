import React from "react";
import { useState, useEffect } from "react";
import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import { useCart } from "../../Context/CartProvider";
import "./Orders.css";

const Orders = () => {
  const { cart } = useCart();
  const { order } = useOrder();

  useEffect(() => {
    if (!order) {
      fetch("/api/orders")
        .then((response) => response.json())
        .then((data) => {
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    }
  }, [order, setOrder]);

  return (
    <>
      <CheckoutHeader cartLength={cart.length} />
      <div className="orders-main">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {order?.map((order) => (
            <div key={order.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{order.datePlaced}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${order.total}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {order.items.map((item) => (
                  <div key={item.productId}>
                    <div className="product-image-container">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="product-details">
                      <div className="product-name">{item.name}</div>
                      <div className="product-delivery-date">
                        Arriving on: {calculateDeliveryDate(item.productId)}
                      </div>
                      <div className="product-quantity">
                        Quantity: {item.quantity}
                      </div>
                      <button className="buy-again-button button-primary">
                        <img
                          className="buy-again-icon"
                          src="/icons/buy-again.png"
                          alt="Buy again"
                        />
                        <span className="buy-again-message">Buy it again</span>
                      </button>
                    </div>

                    <div className="product-actions">
                      <a href="tracking.html">
                        <button className="track-package-button button-secondary">
                          Track package
                        </button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
