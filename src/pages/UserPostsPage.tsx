import React, {FC, useEffect, useState} from 'react';
import {Post} from "../components";
import {IPost} from "../interfaces";
import {userService} from "../services";
import {useParams} from "react-router-dom";

interface IProps {

}

type IPropsType = IProps & { children?: React.ReactNode };

const UserPostsPage: FC<IPropsType> = () => {
    const {id: userId} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const history = () => window.history.back();

    useEffect(() => {
        userId && userService.getAllPostsOfUser(+userId).then(({data}) => setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <button onClick={()=>history()}>Back</button>
        </div>
    );
};

export {UserPostsPage};