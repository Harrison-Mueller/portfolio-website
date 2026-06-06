import ProjectCard from "./ProjectCard";


function ProjectsPage() {
    return(
        <section id="projects-page-section">
            <h2 className="projects-header">Projects</h2>
            <h4 className="projects-subtitle">What I Can Do</h4>

            
            <div className="project-cards">
                <ProjectCard
                    title="Recipe Website"
                    stack={["React", "Typescript", "html", "css"]}
                    imageUrl="/textures/Test.png"
                />
                <ProjectCard
                    title="WGU Certification Work"
                    stack={["html", "css", "javascript", "typescript", "java", "sql"]}
                    imageUrl="/textures/Test.png"
                />
                <ProjectCard
                    title="This Portfolio"
                    stack={["React", "React 3 Fiber", "Typescript", "html", "css"]}
                    imageUrl="/textures/Test.png"
                />
                
            </div>
        </section>
    )
}

export default ProjectsPage;