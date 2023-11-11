import styles from './project.module.css';
import resumeData from '@/data/resume.json';


// Projects section
const Projects = () => {
    return (
        <div>
            <section>
                <h1 className={styles.h1}>Projects</h1>
                <div className={styles.projectsContainer}>
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className={styles.project}>
                            <h2 className={styles.h2}>{project.name}</h2>
                            <p>{project.description}</p>
                            {project.githubLink && <p><strong>GitHub:</strong> <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.githubLink}</a></p>}
                            {project.deploymentLink && <p><strong>Deployment:</strong> <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.deploymentLink}</a></p>}
    
                            {project.frontend && (
                                <div>
                                    <h3 className={styles.h3}>Frontend:</h3>
                                    <p><strong>GitHub:</strong> <a href={project.frontend.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.frontend.githubLink}</a></p>
                                    <p><strong>Deployment:</strong> <a href={project.frontend.deploymentLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.frontend.deploymentLink}</a></p>
                                </div>
                            )}
                            {project.backend && (
                                <div>
                                    <h3 className={styles.h3}>Backend:</h3>
                                    <p><strong>GitHub:</strong> <a href={project.backend.githubLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.backend.githubLink}</a></p>
                                    <p><strong>Deployment:</strong> <a href={project.backend.deploymentLink} target="_blank" rel="noopener noreferrer" className={`${styles.a} ${styles.aHover}`}>{project.backend.deploymentLink}</a></p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects;
