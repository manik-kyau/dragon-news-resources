import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch('/news.json'),
        },
        {
          path: '/news/:id',
          element: <PrivateRoute><News></News></PrivateRoute>
          
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/career',
          element: <Career></Career>
        }
      ]
    },
  ]);

  export default router;