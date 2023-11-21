// app\portfolio\projects\page.js
import { Suspense } from "react";
import Projects from "@/app/ui/projects/projects";

// Projects section
const ProjectsPage = async () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Projects />
            </Suspense>
        </div>
    )
}

export default ProjectsPage;
