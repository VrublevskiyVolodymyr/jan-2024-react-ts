import {FC} from 'react';
import {Comments} from "../components";

interface IProps {

}

const CommentsPage: FC<IProps> = () => {
    return (
        <div>
            <Comments/>
        </div>
    );
};

export {CommentsPage};