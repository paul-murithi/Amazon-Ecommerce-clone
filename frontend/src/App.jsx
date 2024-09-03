import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
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
