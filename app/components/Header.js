// app\components\Header.js
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { useState } from "react";
import Image from "next/image";
import { oswald } from "../ui/fonts";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const getMenuItemColor = () => {
    if (pathname === "/") {
      return "white"; // White color for home page
    }
    return "black"; // Black or other color for other pages
  };

  return (
    <header className={`${styles.header} ${oswald.className}`}>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {/* Add mobile menu icon (e.g., hamburger icon) */}.
        <Image src="/menu/menu.svg" alt="menu" width={30} height={30} />
      </div>
      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.navMobileOpen : ""
        }`}
      >
        <Link href="/">
          <span
            className={`${styles.navA} ${isActive("/") ? styles.active : ""}`}
            style={{ color: getMenuItemColor() }}
          >
            Home
          </span>
        </Link>
        <Link href="/portfolio/about">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/about") ? styles.active : ""
            }`}
            style={{ color: getMenuItemColor() }}
          >
            About
          </span>
        </Link>
        <Link href="/portfolio/projects">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/projects") ? styles.active : ""
            }`}
            style={{ color: getMenuItemColor() }}
          >
            Projects
          </span>
        </Link>
        <Link href="/portfolio/contact">
          <span
            className={`${styles.navA} ${
              isActive("/portfolio/contact") ? styles.active : ""
            }`}
            style={{ color: getMenuItemColor() }}
          >
            Contact
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
