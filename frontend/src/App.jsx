import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
