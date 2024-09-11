import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import SignUp from "./pages/Auth/SignUp";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";
import { OrderProvider } from "./Context/OrderContext";
import SignIn from "./pages/Auth/SignIn";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
