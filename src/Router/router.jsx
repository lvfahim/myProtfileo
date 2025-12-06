import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);
export default router