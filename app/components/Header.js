// app\components\Header.js
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Link href="/" className={`${styles.navA} ${styles.navAhover}`}>
                    Home
                </Link>
                <Link href="/portfolio/about" className={`${styles.navA} ${styles.navAhover}`}>
                    About
                </Link>
                <Link href="/portfolio/projects" className={`${styles.navA} ${styles.navAhover}`}>
                    Projects
                </Link>
                <Link href="/portfolio/contact" className={`${styles.navA} ${styles.navAhover}`}>
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
