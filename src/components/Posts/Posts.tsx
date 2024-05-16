import React, {FC, useEffect, useState} from 'react';
import {IPost, IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";
import {Post} from "../Post/Post";

interface IProps {

}
type IPropsType = IProps & { children?: React.ReactNode };

const Posts: FC<IPropsType> = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        userService.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts && posts.map(post=> <Post key={post.id} post={post}/>) }
        </div>
    );
};

export {Posts};