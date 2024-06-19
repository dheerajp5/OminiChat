
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { RouterProvider } from "react-router-dom";

import DefaultComponent from "./components/my/Default";

import Login from "./pages/login";
import Signup from "./pages/signup";

import Conversation from "./components/my/conversation";
import ConversatioProvider from "./context/conversation";
import Faq from "./components/my/faq";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/faq",
    element: <Faq />
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App






