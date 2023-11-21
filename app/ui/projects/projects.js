// app\ui\projects\projects.js
import styles from "@/app/portfolio/projects/project.module.css";
import { getProjects, getProjectFrontend, getProjectBackend } from "@/app/lib/data";

// Projects section
const Projects = async () => {
    const projectsData = await getProjects();
    const frontendData = await getProjectFrontend();
    const backendData = await getProjectBackend();
    // combine frontend and backend data into projectsData
    projectsData.forEach((project) => {
        project.frontend = frontendData.find((frontend) => frontend.projectid === project.id);
        project.backend = backendData.find((backend) => backend.projectid === project.id);

        if (project.frontend) {
            project.frontend.github = project.frontend.github;
            project.frontend.deployment = project.frontend.deployment;
        }

        if (project.backend) {
            project.backend.github = project.backend.github;
            project.backend.deployment = project.backend.deployment;
        }
    });

  
    if (!projectsData) {
        return <div>Failed to load projects data</div>;
    }
    
  return (
    <div>
      <section>
        <h1 className={styles.h1}>Projects</h1>
        <div className={styles.projectsContainer}>
          {projectsData.map((project, id) => (
            <div key={id} className={styles.project}>
              <h2 className={styles.h2}>{project.name}</h2>
              <p>{project.description}</p>
              {project.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.a} ${styles.aHover}`}
                  >
                    {project.github}
                  </a>
                </p>
              )}
              {project.deployment && (
                <p>
                  <strong>Deployment:</strong>{" "}
                  <a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.a} ${styles.aHover}`}
                  >
                    {project.deployment}
                  </a>
                </p>
              )}

              {project.frontend && (
                <div>
                  <h3 className={styles.h3}>Frontend:</h3>
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href={project.frontend.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.a} ${styles.aHover}`}
                    >
                      {project.frontend.github}
                    </a>
                  </p>
                  <p>
                    <strong>Deployment:</strong>{" "}
                    <a
                      href={project.frontend.deployment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.a} ${styles.aHover}`}
                    >
                      {project.frontend.deployment}
                    </a>
                  </p>
                </div>
              )}
              {project.backend && (
                <div>
                  <h3 className={styles.h3}>Backend:</h3>
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a
                      href={project.backend.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.a} ${styles.aHover}`}
                    >
                      {project.backend.github}
                    </a>
                  </p>
                  <p>
                    <strong>Deployment:</strong>{" "}
                    <a
                      href={project.backend.deployment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.a} ${styles.aHover}`}
                    >
                      {project.backend.deployment}
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
