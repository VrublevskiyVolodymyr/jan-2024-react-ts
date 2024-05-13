import {FC} from 'react';

import './App.css';
import {PostForm} from "./components/PostForm";


interface IProps {

}

const App: FC<IProps> = () => {
    return (
            <PostForm/>
    );
};

export {App};
