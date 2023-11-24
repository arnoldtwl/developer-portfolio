// app\ui\about\work.js
import styles from '@/app/portfolio/about/about.module.css';
import { getWork } from '@/app/lib/data';
import Image from 'next/image';

const Work = async () => {
    const workData = await getWork();
    if (!workData) {
        return <div>Failed to load work data</div>;
    }
    return (
        <section>
            <h2 className={styles.heading}>Work Experience</h2>
            <div className={styles['timeline']}>
                {workData.map((work, id) => (
                    <div key={id} className={styles['timeline-item']}>
                        <div className={styles['timeline-icon']}>
                            {/* Placeholder for company logo or relevant icon */}
                            <Image
                              src="/logos/work.svg"
                              alt="Work icon"
                              width={30}
                              height={30}
                              className={styles["material-symbols-outlined"]}
                            />
                        </div>
                        <div className={styles['timeline-content']}>
                            <h3>{work.position}</h3>
                            <h4>{work.company}</h4>
                            <p>{work.startDate} - {work.endDate}</p>
                            <p>{work.summary}</p>
                            {/* Additional details like location or project highlights */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;
