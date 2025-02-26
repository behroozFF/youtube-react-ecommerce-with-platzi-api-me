import { createBrowserRouter} from "react-router-dom"; 
import Root from "../pages/Root";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
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
    }
  ]);

  export default router;