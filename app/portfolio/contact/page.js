// app\portfolio\contact\page.js
import styles from './contact.module.css';
import { oswald, merriweatherSans } from '@/app/ui/fonts';

// Contact section
export default function Contact() {
    return (
      <div>
        <section className={styles.section}>
          <h1 className={oswald.className}>Contact</h1>
          <p className={`${styles.p} ${merriweatherSans.className}`}>
            If you&apos;d like to get in touch, please use the details below:
          </p>
          <ul className={`${styles.ul} ${merriweatherSans.className}`}>
            <li className={styles.li}>
              Email:{" "}
              <a href="mailto:arnoldtwl@gmail.com" className={styles.a}>
                arnoldtwl@gmail.com
              </a>
            </li>
            <li className={styles.li}>Phone: 0727035123</li>
            <li className={styles.li}>
              Location: Polokwane, Mankweng, Limpopo, ZA
            </li>
          </ul>
        </section>
      </div>
    );
}
