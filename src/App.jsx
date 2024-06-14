

import { useState } from "react"

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DefaultComponent from "./components/my/Default";
import { userState } from "./context/user";
import  Login  from "./pages/login";
import Signup from "./pages/signup";
import UserProvider from './context/user.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
    children : [
      {
        path : "/",
        element : <DefaultComponent />
      }
    ]
  },
  {
    path : "/login",
    element :  <Login />
  },
  {
    path : "/signup",
    element :<Signup />
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App






