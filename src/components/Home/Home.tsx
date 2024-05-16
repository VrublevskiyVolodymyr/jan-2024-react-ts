import {FC} from 'react';

import styles from './home.module.css'

interface IProps {

}

const Home: FC<IProps> = () => {
    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.welcomeMessage}>Welcome to Our Website</h1>
            <p className={styles.introText}>
                This is the Home page where you can find an introduction to our services and features.
                Feel free to explore and learn more about what we have to offer.
            </p>
        </div>
    );
};

export {Home};