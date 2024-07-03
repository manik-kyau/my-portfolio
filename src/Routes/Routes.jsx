import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Componant/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/project",
            element: <Projects></Projects>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
        {
            path: "/blog",
            element: <Blog></Blog>,
        },
      ]
    },
  ]);