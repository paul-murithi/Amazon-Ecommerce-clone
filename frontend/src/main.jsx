import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./global.css";
import { CartProvider } from "./Context/CartProvider.jsx";
import { OrderProvider } from "./Context/OrderContext.jsx";
import { DeliveryOptionsProvider } from "./Context/DeliveryOptionsContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <OrderProvider>
        <DeliveryOptionsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </DeliveryOptionsProvider>
      </OrderProvider>
    </CartProvider>
  </StrictMode>
);
