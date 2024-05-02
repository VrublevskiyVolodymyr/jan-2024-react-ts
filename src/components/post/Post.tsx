import React, {FC} from 'react';
import {IPost} from "../../interfaces/post.interface";
import styles from './post.module.css'

interface IProps {
post:IPost
}

type IPropsType = IProps & { children?: React.ReactNode };

const Post: FC<IPropsType> = ({post}) => {
    return (
        <div className={styles.postContainer}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className={styles.postMeta}>
                <span>Posted by User ID: {post.userId}</span>
                <span>Reactions: {post.reactions}</span>
            </div>
            <div className={styles.tags}>
                {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export {Post};