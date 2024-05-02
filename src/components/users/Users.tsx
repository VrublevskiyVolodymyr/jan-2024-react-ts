import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import {User} from "../user/User";

interface IProps {
    showPosts?: (userId: number) => void
}

type IPropsType = IProps & { children?: React.ReactNode };


const Users: FC<IPropsType> = ({showPosts}) => {

const [users, setUsers] = useState<IUser[]>([]);

useEffect(() => {
    userService.getAllUsers().then(({data}) => {setUsers(data.users)});
    }, []);

    return (
        <div>
            {users && users.map(user => <User  key={user.id} user={user} showPosts={showPosts}/>)}
        </div>
    );
};

export {Users};