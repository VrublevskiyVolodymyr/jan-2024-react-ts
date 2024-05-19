import {FC, useState} from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";

import styles from './postPage.module.css';
import {PostCommentsPage} from "../PostCommentsPage";

interface IProps {

}

const PostsPage: FC<IProps> = () => {
    const [activePostId, setActivePostId] = useState<number | null>(null);

    const handleGetComments = (postId: number) => {
        setActivePostId(postId);
    };
    return (
        <div className={styles.container}>
            <Posts/>
            <Outlet/>
            {activePostId && <PostCommentsPage/>}

        </div>
    );
};

export {PostsPage};