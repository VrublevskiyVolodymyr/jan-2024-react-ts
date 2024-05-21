import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {Post} from "../components";
import {IPost} from "../interfaces";
import {postService} from "../services/post.service";

interface IProps {

}

type IPropsType = IProps & { children?: React.ReactNode };

const UserPostsPage: FC<IPropsType> = () => {
    const {id: userId} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const history = () => window.history.back();

    useEffect(() => {
        userId && postService.getAllPostsOfUser(+userId).then(({data}) => setPosts(data))
    }, [userId]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <button onClick={()=>history()}>Back</button>
        </div>
    );
};

export {UserPostsPage};