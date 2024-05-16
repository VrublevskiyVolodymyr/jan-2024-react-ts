import {FC} from 'react';

import styles from './header.module.css'
import {NavLink} from "react-router-dom";

interface IProps {

}

const Header: FC<IProps> = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logo}>MyWebsite</div>
            <nav className={styles.navLinks}>
                <NavLink to="/home" className={styles.navLink}>Home</NavLink>
                <NavLink to="/users" className={styles.navLink}>Users</NavLink>
                <NavLink to="/comments" className={styles.navLink}>Comments</NavLink>
                <NavLink to="/posts" className={styles.navLink}>Posts</NavLink>
            </nav>
        </div>

    );
};

export {Header};