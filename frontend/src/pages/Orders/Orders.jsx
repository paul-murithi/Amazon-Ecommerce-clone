import React, { useState, useEffect } from "react";
import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import { useCart } from "../../Context/CartProvider";
import "./Orders.css";
import { useAuth } from "../../Context/AuthContext";
import Navigation from "../../components/navigation/Navigation";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { cartQuantity } = useCart();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/orders", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();

        const ordersWithImages = await Promise.all(
          data.map(async (order) => {
            const itemsWithImages = await Promise.all(
              order.items.map(async (item) => {
                const productResponse = await fetch(
                  `http://localhost:8080/api/products/${item.productExternalId}`
                );
                const productData = await productResponse.json();
                return {
                  ...item,
                  image: productData.image,
                };
              })
            );
            return {
              ...order,
              items: itemsWithImages,
            };
          })
        );

        setOrders(ordersWithImages);
        console.log(ordersWithImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to fetch orders: {error}</p>;

  return (
    <>
      <Navigation cartQuantity={cartQuantity} />
      <div className="orders-main">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{new Date(order.orderDate).toLocaleDateString()}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${order.totalCost}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div
                className={`order-details-grid ${
                  order.items.length === 1 ? "single-item" : ""
                }`}
              >
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="product-image-container">
                      <img
                        src={
                          item.image === null
                            ? "/icons/image-regular.svg"
                            : item.image
                        }
                        alt={item.name}
                      />
                    </div>

                    <div className="product-details">
                      <div className="product-name">{item.name}</div>
                      <div className="product-delivery-date">
                        Arriving on:{" "}
                        {new Date(item.deliveryDate).toLocaleDateString()}
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
                      <Link
                        to={"/tracking"}
                        className="track-package-button button-secondary"
                      >
                        Track package
                      </Link>
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
