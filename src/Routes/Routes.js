import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Blogs from "../Pages/Blogs/Blogs";
import ContactForm from "../Pages/Home/ContactForm/ContactForm";
import Home from "../Pages/Home/Home/Home";
import Myprojects from "../Pages/MyProjects/Myprojects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Myprojects></Myprojects>
            },
            {
                path: '/contact',
                element: <ContactForm></ContactForm>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router;