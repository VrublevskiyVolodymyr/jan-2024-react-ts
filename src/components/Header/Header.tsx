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
                <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
                <NavLink to="/users" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Users</NavLink>
                <NavLink to="/comments" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Comments</NavLink>
                <NavLink to="/posts" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Posts</NavLink>
            </nav>
        </div>

    );
};

export {Header};