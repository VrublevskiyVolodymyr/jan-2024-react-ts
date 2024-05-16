import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

interface IProps {

}
type IPropsType = IProps & { children?: React.ReactNode };

const Users: FC<IPropsType> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users && users.map(user=> <User key={user.id} user={user}/>) }
        </div>
    );
};

export {Users};