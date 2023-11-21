// app\ui\about\work.js
import styles from '@/app/portfolio/about/about.module.css';
import { getWork } from '@/app/lib/data';

const Work = async () => {
    const workData = await getWork();
    if (!workData) {
        return <div>Failed to load work data</div>;
    }
    return (
        <section>
            <h2>Work Experience</h2>
            {workData.map((work, id) => (
                <div key={id} className={styles['work-item']}>
                    <h3>{work.position}</h3>
                    <h4>{work.company}</h4>
                    <p>{work.startDate} - {work.endDate}</p>
                    <p>{work.summary}</p>
                </div>
            ))}
        </section>
    );
};

export default Work;