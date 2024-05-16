import {FC} from 'react';
import {IComment} from "../../interfaces";

import styles from './comment.module.css';

interface IProps {
comment:IComment
}

const Comment: FC<IProps> = ({comment}) => {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.commentName}>{comment.name}</div>
            <div className={styles.commentEmail}>{comment.email}</div>
            <div className={styles.commentBody}>{comment.body}</div>
        </div>
    );
};

export {Comment};