// app\components\Header.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { oswald } from "../ui/fonts";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const getMenuItemColor = () => {
    if (pathname === "/") {
      return "white"; // White color for home page
    }
    return "black"; // Black or other color for other pages
  };

  useEffect(() => {
    let timeout;
    const handleMouseMove = () => {
      setIsHeaderVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsHeaderVisible(false);
      }, 3000);
    };

    const handleScroll = () => {
      setIsHeaderVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsHeaderVisible(false);
      }, 3000);
    };

    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        // Only apply to desktop
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isHeaderVisible ? styles.headerVisible : styles.headerHidden
      } ${oswald.className}`}
    >
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
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
