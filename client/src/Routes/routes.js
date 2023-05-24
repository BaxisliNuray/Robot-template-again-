import Add from "../pages/Add"
import Home from "../pages/Home"
import Mainroot from "../pages/Mainroot"

export const ROUTES=[
    {
        path:'/',
        element:<Mainroot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/add',
                element:<Add/>
            }
        ]
    }
]