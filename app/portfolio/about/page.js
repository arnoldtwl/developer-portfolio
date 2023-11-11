//
import Image from 'next/image';
import styles from './about.module.css';
import resumeData from '@/data/resume.json';

// Profile section
const Profile = () => {
    return (
        <section className={styles['profile-container']}>
            <div className={styles['profile-info']}>
                <h2 className={styles.heading}>{resumeData.basics.name}</h2>
                <Image 
                    src="/arnold.png" 
                    alt="Profile-image" 
                    className={styles['profile-image']} 
                    width={250}
                    height={250}
                />
                <h5 className={styles.heading}>{resumeData.basics.label}</h5>
                <h5 className={styles.heading}><a href={resumeData.basics.website} className={styles.website}>{resumeData.basics.website}</a></h5>
            </div>
        </section>
    )
}

// About section
export default function About(){
    return (
        <div>
            <Profile />
            <section className={styles.about}>
                <h1>About Me</h1>
                <p>{resumeData.basics.summary}</p>
            </section>
            <section>
                <h2>Education</h2>
                {resumeData.education.map((school, index) => (
                    <div key={index} className={styles['education-item']}>
                        <h4>{school.institution}</h4>
                        <p>{school.area}, {school.studyType}</p>
                        <p>{school.endDate}</p>
                    </div>
                ))}
            </section>
            <section>
                <h2>Skills</h2>
                <div className={styles['skills-container']}>
                    {resumeData.skills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <h2>Work Experience</h2>
                {resumeData.work.map((job, index) => (
                    <div key={index} className={styles['work-item']}>
                        <h3>{job.position}</h3>
                        <h4>{job.company}</h4>
                        <p>{job.startDate} - {job.endDate}</p>
                        <p>{job.summary}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}
