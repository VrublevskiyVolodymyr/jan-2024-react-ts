import {FC} from 'react';
import {User, Users} from "../components";

interface IProps {

}

const UsersPage: FC<IProps> = () => {
    return (
        <div>
            <Users/>
        </div>
    );
};

export {UsersPage};