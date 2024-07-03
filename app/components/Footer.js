// app/components/Footer.js
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>About Me</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Skills</h3>
          <ul className={styles.list}>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Projects</h3>
          <ul className={styles.list}>
            <li>
              <Link href="/projects" className={styles.link}>
                My Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.link}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={styles.link}>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
