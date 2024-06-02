import {FC} from 'react';
import {Outlet} from "react-router-dom";

interface IProps {

}

const AuthLayout: FC<IProps> = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {AuthLayout};