import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;