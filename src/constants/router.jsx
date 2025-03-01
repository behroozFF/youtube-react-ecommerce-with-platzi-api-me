import { createBrowserRouter} from "react-router-dom"; 
import Root from "../pages/Root";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Categories from "../pages/Categories/Categories";
import Products from "../pages/Products";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Signup",
      element: <Signup />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard/>
    },
    {
      path: "/Categories/:id",
      element: <Categories/>
    },
    {
      path: "/Products/:id",
      element: <Products/>
    },
  ]);

  export default router;