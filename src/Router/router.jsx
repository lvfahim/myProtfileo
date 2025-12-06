import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Page/Home";
import About from "../Page/About";
import Project from "../Page/Project";
import Resume from "../Page/Resume";
import Contoct from "../Page/Contoct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/projects',
            element:<Project></Project>
        },
        {
            path:'/resume',
            element:<Resume></Resume>
        },
        {
            path:'/contact',
            element:<Contoct></Contoct>
        }
    ]
  },
]);
export default router