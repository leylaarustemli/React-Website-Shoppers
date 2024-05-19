import { Children } from "react";
import SiteRoot from "../Pages/site/SiteRoot";
import Home from "../Pages/site/Home/Home";
import Basket from "../Pages/site/Basket/Basket";
import AdminRoot from "../Pages/admin/AdminRoot";
import Dashboard from "../Pages/admin/Dashboard/Dashboard";
import Products from "../Pages/admin/Products/Products";
import Detail from "../Pages/site/Detail/Detail";
import Add from "../Pages/admin/Add/Add";
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
      },{
        path:"/detail/:id",
        element: <Detail />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },{
        path: "add",
        element: <Add />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
];

export default ROUTES