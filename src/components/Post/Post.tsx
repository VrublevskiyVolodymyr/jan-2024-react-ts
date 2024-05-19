import React, {FC} from 'react';
import {IPost} from "../../interfaces";

import styles from './post.module.css';
import {Outlet, useNavigate} from "react-router-dom";

interface IProps {
post:IPost;
}

type IPropsType = IProps & { children?: React.ReactNode };

const Post: FC<IPropsType> = ({post}) => {
    const navigate = useNavigate();

    return (
        <div className={styles.postContainer}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postBody}>{post.body}</div>
            <div className={styles.postFooter}>
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
            </div>
            <button onClick={()=> navigate(`/posts/${post.id}/comments`)}>Get comments of post</button>
        </div>
    );
};

export {Post};