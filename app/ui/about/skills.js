// app\ui\about\skills.js
import styles from '@/app/portfolio/about/about.module.css';
import { getSkills } from '@/app/lib/data';

const Skills = async () => {
    const skillsData = await getSkills();
    if (!skillsData) {
        return <div>Failed to load skills data</div>;
    }
    return (
        <section>
            <h2>Skills</h2>
            <div className={styles['skills-container']}>
                {skillsData.map((skill, id) => (
                    <div key={id} className={styles.skill}>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;