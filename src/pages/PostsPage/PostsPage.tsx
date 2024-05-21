import {FC, useState} from 'react';
import {Posts} from "../../components";
import {Outlet} from "react-router-dom";

import styles from './postPage.module.css';

interface IProps {

}

const PostsPage: FC<IProps> = () => {


    return (
        <div className={styles.container}>
            <Posts/>
            <Outlet/>

        </div>
    );
};

export {PostsPage};