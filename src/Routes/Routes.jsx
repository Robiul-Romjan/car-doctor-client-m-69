import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ProceedCheckout from "../Pages/ProceedCheckout/ProceedCheckout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/services/:id",
          element: <ServiceDetails />,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><ProceedCheckout /></PrivateRoute> ,
          loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <Register />
        },
        {
          path: "/cartDetails",
          element: <CartDetails />
        },
      ],
    },
  ]);

  export default router;