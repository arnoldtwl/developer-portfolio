// Skeleton for AboutSummary.js
import styles from "@/app/portfolio/about/about.module.css";

const AboutSummarySkeleton = () => {
  return (
    <section className={styles.about}>
      <h1 className={`${styles.aboutHeading} ${styles.skeletonText}`}>
        Loading...
      </h1>
      <p className={styles.skeletonText}>Loading content...</p>
    </section>
  );
};

const ProfileSkeleton = () => {
    return (
        <section className={styles["profile-container"]}>
            <div className={styles["profile-info"]}>
                <div className={`${styles.heading} ${styles.skeletonText}`}>Loading...</div>
                <div className={`${styles["image-container"]} ${styles.skeletonImage}`}></div>
                <div className={`${styles.heading} ${styles.skeletonText}`}>Loading...</div>
                <div className={`${styles.heading} ${styles.skeletonText}`}>Loading...</div>
                <div className={styles["social-links"]}>
                    {/* Repeat Skeleton for Social Icons */}
                    <div className={`${styles["social-link"]} ${styles.skeletonSocialIcon}`}></div>
                </div>
            </div>
        </section>
    );
};

const EducationSkeleton = () => {
  return (
    <section>
      <h2 className={`${styles.heading} ${styles.skeletonText}`}>Loading...</h2>
      <div className={styles["education-container"]}>
        <div className={styles["education-card"]}>
          <div
            className={`${styles["education-logo"]} ${styles.skeletonImage}`}
          ></div>
          <div className={styles["education-content"]}>
            <div className={styles.skeletonText}>Loading...</div>
            <div className={styles.skeletonText}>Loading...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSkeleton = () => {
    return (
        <section>
            <h2 className={`${styles.heading} ${styles.skeletonText}`}>Loading...</h2>
            <div className={styles['skills-container']}>
                <div className={styles.skill}>
                    <span className={styles.skeletonText}>Loading...</span>
                </div>
            </div>
        </section>
    );
};

const WorkSkeleton = () => {
    return (
        <section>
            <h2 className={`${styles.heading} ${styles.skeletonText}`}>Loading...</h2>
            <div className={styles['timeline']}>
                <div className={styles['timeline-item']}>
                    <div className={`${styles['timeline-icon']} ${styles.skeletonImage}`}></div>
                    <div className={styles['timeline-content']}>
                        <div className={styles.skeletonText}>Loading...</div>
                        <div className={styles.skeletonText}>Loading...</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AboutSummarySkeleton, ProfileSkeleton, EducationSkeleton, SkillsSkeleton, WorkSkeleton };


