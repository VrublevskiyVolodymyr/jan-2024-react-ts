import {FC} from 'react';
import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer/Footer";

interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};