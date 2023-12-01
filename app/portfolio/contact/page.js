// app\portfolio\contact\page.js
import styles from './contact.module.css';

// Contact section
export default function Contact() {
    return (
        <div>
            <section className={styles.section}>
                <h1 >Contact</h1>
                <p className={styles.p}>If you&apos;d like to get in touch, please use the details below:</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>Email: <a href="mailto:arnoldtwl@gmail.com" className={styles.a}>arnoldtwl@gmail.com</a></li>
                    <li className={styles.li}>Phone: 0727035123</li>
                    <li className={styles.li}>Location: Greater Giyani Municipality, Limpopo, ZA</li>
                </ul>
            </section>
        </div>
    )
}
