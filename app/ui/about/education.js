// app\ui\about\education.js
import styles from '@/app/portfolio/about/about.module.css';
import { getEducation } from '@/app/lib/data';
import Image from 'next/image';

const Education = async () => {
    const educationData = await getEducation();
    if (!educationData) {
        return <div>Failed to load education data</div>;
    }
    return (
      <section>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles["education-container"]}>
          {educationData.map((school, id) => (
            <div key={id} className={styles["education-card"]}>
              {/* Placeholder for school logo or relevant icon */}
              <div className={styles["education-logo"]}>
                {/* Insert logo or icon here */}
                <Image
                  src="/logos/education.svg"
                  alt="Education icon"
                  width={30}
                  height={30}
                  className={styles["material-symbols-outlined"]}
                />
              </div>
              <div className={styles["education-content"]}>
                <h4>{school.institution}</h4>
                <p>
                  {school.area}, {school.studyType}
                </p>
                <p>{school.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Education;
