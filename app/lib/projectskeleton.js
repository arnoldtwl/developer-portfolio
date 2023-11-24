// Skeleton for Projects.js
import styles from "@/app/portfolio/projects/project.module.css";

const ProjectsSkeleton = () => {
  return (
    <div className={styles.projectsContainer}>
      {Array.from({ length: 7 }).map(
        (
          _,
          id 
        ) => (
          <div key={id} className={styles.projectSkeleton}>
            <div className={styles.skeletonShimmer}></div>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectsSkeleton;
