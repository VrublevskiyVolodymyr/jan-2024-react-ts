import {FC} from 'react';

import styles from './footer.module.css';

interface IProps {

}

const Footer: FC<IProps> = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerText}>© 2024 MyWebsite</div>
            <div className={styles.footerLinks}>
                <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
                <a href="/terms" className={styles.footerLink}>Terms of Service</a>
                <a href="/contact" className={styles.footerLink}>Contact Us</a>
            </div>
        </div>

    );
};

export {Footer};