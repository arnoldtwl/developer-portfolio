// app\ui\about\aboutSummary.js
import styles from '@/app/portfolio/about/about.module.css';
import { getBasics } from '@/app/lib/data';

export default async function AboutSummary() {
    const aboutData = await getBasics();
    if (!aboutData) {
        return <div>Failed to load about data</div>;
    }

    return (
        <section className={styles.about}>
            <h1 className={styles.aboutHeading}>About Me</h1>
            <p>{aboutData.summary}</p>
        </section>
    );
};

