import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ContactForm from "../Pages/Home/ContactForm/ContactForm";
import Home from "../Pages/Home/Home/Home";

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
                path: '/contact',
                element: <ContactForm></ContactForm>
            }
        ]
    }
])

export default router;