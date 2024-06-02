import {FC} from 'react';
import {authService} from "../services";
import {Navigate, Outlet} from "react-router-dom";

interface IProps {

}

const PublicLayout: FC<IProps> = () => {
    // const token = authService.getAccessToken();
    // console.log(token)
    // if (token) {
    //     return <Navigate to={'/cars'}/>
    // }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {PublicLayout};