import {FC} from 'react';
import {Home} from "../components/Home/Home";

interface IProps {

}

const HomePage: FC<IProps> = () => {
    return (
        <div>
            <Home/>
        </div>
    );
};

export {HomePage};