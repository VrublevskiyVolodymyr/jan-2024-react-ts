import {FC} from 'react';
import {IPost} from "../../interfaces";

import styles from './post.module.css';

interface IProps {
post:IPost;
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.postTitle}>{post.title}</div>
            <div className={styles.postBody}>{post.body}</div>
            <div className={styles.postFooter}>
                <span>Post ID: {post.id}</span>
                <span>User ID: {post.userId}</span>
            </div>
        </div>
    );
};

export {Post};