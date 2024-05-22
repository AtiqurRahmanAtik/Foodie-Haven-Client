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
import Secrete from "../Pages/Shared/Secrate/Secrete ";
import PrivateRoute from "../Provider/PrivateRoute";

  
  
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
        {
          path: '/secrate',
          element : <PrivateRoute>
            <Secrete></Secrete>
          </PrivateRoute>
        }
      ]
    },
  ]);