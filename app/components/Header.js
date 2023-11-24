// app\components\Header.js
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";

const Header = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };  

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <span
            className={`${styles.navA} ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </span>
        </Link>
        <Link href="/portfolio/about">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/about") ? styles.active : ""
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/portfolio/projects">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/projects") ? styles.active : ""
            }`}
          >
            Projects
          </span>
        </Link>
        <Link href="/portfolio/contact">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/contact") ? styles.active : ""
            }`}
          >
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
