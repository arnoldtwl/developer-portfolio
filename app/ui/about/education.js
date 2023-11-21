// app\ui\about\education.js
import styles from '@/app/portfolio/about/about.module.css';
import { getEducation } from '@/app/lib/data';


const Education = async () => {
    const educationData = await getEducation();
    if (!educationData) {
        return <div>Failed to load education data</div>;
    }
    return (
        <section>
            <h2>Education</h2>
            {educationData.map((school, id) => (
                <div key={id} className={styles['education-item']}>
                    <h4>{school.institution}</h4>
                    <p>{school.area}, {school.studyType}</p>
                    <p>{school.endDate}</p>
                </div>
            ))}
        </section>
    );
};

export default Education;
