// app\ui\about\skills.js
import styles from '@/app/portfolio/about/about.module.css';
import { getSkills } from '@/app/lib/data';
import { oswald, merriweatherSans } from "../fonts";

const Skills = async () => {
    const skillsData = await getSkills();
    if (!skillsData) {
        return <div>Failed to load skills data</div>;
    }
    return (
        <section>
            <h2 className={`${styles.heading} ${oswald.className}`}>Skills</h2>
            <div className={styles['skills-container']}>
                {skillsData.map((skill, id) => (
                    <div key={id} className={styles.skill}>
                        {/* Replace paragraph with icon or progress bar */}
                        {/* For icons, you can use an icon library like FontAwesome or custom SVGs */}
                        <span className="material-icons-outlined">{skill.icon}</span>
                        <p className={merriweatherSans.className}>{skill.name}</p>
                        {/* Optionally, add a progress bar or skill level indicator here */}
                        {/* Add tooltip or hover effect to show more information */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
