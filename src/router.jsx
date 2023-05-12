import {
    createBrowserRouter
  } from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout";
import PrivateRoute from "./components/PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/checkout",
        element:    <PrivateRoute>
                        <Checkout/>
                    </PrivateRoute>
    }
  ])