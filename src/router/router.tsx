import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, MainLayout, PublicLayout} from "../layouts";
import {CarsPage, ErrorPage, HomePage, LoginPage, RegisterPage} from "../pages";
import {AuthRequired} from "../hoc";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true, element: <Navigate to={'login'}/>
            },
            {
                element: <PublicLayout/>, children: [
                    {
                        path: 'login', element: <LoginPage/>
                    },
                    {
                        path: 'register', element: <RegisterPage/>
                    }
                ]
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children: [
                    {
                        path: 'home', element: <HomePage/>
                    },
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}