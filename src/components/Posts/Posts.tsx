import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../../interfaces";
import {Post} from "../Post/Post";
import {postService} from "../../services/post.service";

interface IProps {

}

type IPropsType = IProps & { children?: React.ReactNode };

const Posts: FC<IPropsType> = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postService.getAllPosts().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts && posts.map(post=> <Post key={post.id} post={post}/>) }
        </div>
    );
};

export {Posts};