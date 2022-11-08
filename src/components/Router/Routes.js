import AllServices from "../AllServices/AllServices";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login";
import Register from "../Register";
import ServiceDetails from "../Services/ServiceDetails";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/services',
                element:<AllServices></AllServices>

            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>
            },

        ]

    }
]);

export default router;