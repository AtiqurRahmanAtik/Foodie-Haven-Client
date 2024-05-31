import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Layout/Dashboard/Cart";
import AllUsers from "../Layout/Dashboard/AllUsers/AllUsers";
import AddItem from "../Layout/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Layout/Dashboard/ManageItem";
import PaymentUser from "../Layout/Dashboard/PaymentUser";




  
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path : '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },

        {
          path: '/menu',
          element : <Menu></Menu>
        },
        {
          path: '/about',
          element : <About></About>
        },
        {
          path: '/order/:category',
          element : <Order></Order>
        },
        // {
        //   path: '/secrate',
        //   element : <PrivateRoute>
        //     <Secrete></Secrete>
        //   </PrivateRoute>
        // }
      ]
    },

    
    // Dashboard Route
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
        {
          path : 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <PaymentUser></PaymentUser>
        },
        //admit only
        {
          path : 'allUser',
          element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute> <AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageItem',
          element: <AdminRoute> <ManageItem></ManageItem></AdminRoute>
        }
      ]
    },

  ]);