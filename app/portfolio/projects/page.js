// app\portfolio\projects\page.js
import { Suspense } from "react";
import Projects from "@/app/ui/projects/projects";
import ProjectsSkeleton from "@/app/lib/projectskeleton";

// Projects section
const ProjectsPage = async () => {
    return (
        <div>
            <Suspense fallback={<ProjectsSkeleton />}>
                <Projects />
            </Suspense>
        </div>
    )
}

export default ProjectsPage;
