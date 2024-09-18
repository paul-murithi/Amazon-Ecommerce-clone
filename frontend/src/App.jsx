import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import SignUp from "./pages/Auth/SignUp";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import { OrderProvider } from "./Context/OrderContext";
import { useAuth } from "./Context/AuthContext";
import SignIn from "./pages/Auth/SignIn";
import Logout from "./pages/Auth/Logout";
import Tracking from "./pages/Tracking/Tracking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/logout",
    element: <Logout />,
  },
  {
    path: "/tracking/:orderId",
    element: <Tracking />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
