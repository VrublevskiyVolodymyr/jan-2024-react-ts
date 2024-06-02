import {FC} from 'react';

import styles from './header.module.css'
import {NavLink, useSearchParams} from "react-router-dom";
import {useAppContext} from "../../hooks";

interface IProps {

}

const Header: FC<IProps> = () => {
    const [query, setQuery] = useSearchParams();
    const {me} = useAppContext();


    return (
        <div className={styles.headerContainer}>
            { me && !query.get('expSession') ?
                <>
                    <div className={styles.logo}>MyWebsite</div>
                    <nav className={styles.navLinks}>
                        <NavLink to="/home" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
                        <NavLink to="/cars" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Cars</NavLink>
                        <NavLink to="/register" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Register</NavLink>
                    </nav>
                    <span>{me.username}</span>

                </>
                :
                <div>
                    <NavLink to={'/login'} className={styles.navLink}>Login</NavLink>
                </div>
            }
        </div>
    );
};

export {Header};