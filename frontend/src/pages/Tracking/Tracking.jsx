import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Tracking.css";
import { Link } from "react-router-dom";

const Tracking = () => {
  const { orderId } = useParams();
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrackingInfo = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await fetch(
          `http://localhost:8080/api/tracking/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch tracking information");
        }
        const data = await response.json();
        setTrackingInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingInfo();
  }, [orderId]);

  console.log("Tracking info: ", trackingInfo);

  if (loading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="main tracking">
        <div className="order-tracking">
          <Link to={"/orders"} className="back-to-orders-link link-primary">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on Wednesday, September 25
          </div>

          <div className="product-info">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </div>

          <div className="product-info">Quantity: 1</div>

          <img
            className="product-image"
            src="/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracking;
