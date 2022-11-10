import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AllServices from "../AllServices/AllServices";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login";
import Register from "../Register";
import AddService from "../Services/AddService";
import ServiceDetails from "../Services/ServiceDetails";
import UserComments from "../Services/UserComments";

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
                path:'/blog',
                element:<Blog></Blog>,

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
                path:'/review/:email',
                element:<UserComments></UserComments>,
                loader:({params}) => fetch(`http://localhost:5000/user_review/${params.email}`)

            },
            {
                path:'/add_service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
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