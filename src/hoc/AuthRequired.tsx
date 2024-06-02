import {FC, ReactNode} from 'react';
import {Navigate} from "react-router-dom";
import {authService} from "../services";

interface IProps {
    children: ReactNode;
}

const AuthRequired: FC<IProps> = ({children}) => {
    const token = authService.getAccessToken();

    if (token) {
        return <>{children}</>;
    }

    return <Navigate to={'/login'}/>
};

export {AuthRequired};