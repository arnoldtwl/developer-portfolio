//  app\page.js
// import Image from 'next/image'
import Link from 'next/link';
import Header from '@/app/components/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <section className={styles.section}>
            <h1>Welcome to My Developer Portfolio</h1>
            <p>Discover more about me, my skills, and the projects I&apos;ve worked on.</p>
            <div className={styles['cta-buttons']}>
                <Link href="/portfolio/about" className={styles['cta-button']}>About Me</Link>
                <Link href="/portfolio/projects" className={styles['cta-button']}>Projects</Link>
                <Link href="/portfolio/contact" className={styles['cta-button']}>Contact</Link>
            </div>
        </section>
    </main>
  );
}
