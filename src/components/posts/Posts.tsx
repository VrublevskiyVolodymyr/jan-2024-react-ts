import React, {FC} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {Post} from "../post/Post";

interface IProps {
posts:IPost[],
}

type IPropsType = IProps & { children?: React.ReactNode };


const Posts: FC<IPropsType> = ({posts}) => {

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};