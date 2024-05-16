import { Children } from "react";
import SiteRoot from "../Pages/site/SiteRoot";
import Home from "../Pages/site/Home/Home";
import Basket from "../Pages/site/Basket/Basket";
import AdminRoot from "../Pages/admin/AdminRoot";
import Dashboard from "../Pages/admin/Dashboard/Dashboard";
import Products from "../Pages/admin/Products/Products";
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

export default ROUTES