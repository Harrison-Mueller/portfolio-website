import ProjectCard from "./ProjectCard";
import recipe from "/thumbnails/recipe.png"
import test from "/textures/Test.png"
import portfolio from "/thumbnails/portfolio.png"


function ProjectsPage() {
    return(
        <section id="projects-page-section">
            <h2 className="projects-header">Projects</h2>
            <h4 className="projects-subtitle">What I Can Do</h4>

            
            <div className="project-cards">
                <ProjectCard
                    title="Recipe Website"
                    stack={["React", "Typescript", "html", "css"]}
                    imageUrl={recipe}
                    projectUrl="https://harrison-mueller.github.io/recipe-website/"
                />
                <ProjectCard
                    title="WGU Certification Work"
                    stack={["html", "css", "javascript", "typescript", "java", "sql"]}
                    imageUrl={test}
                    projectUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
                <ProjectCard
                    title="This Portfolio"
                    stack={["React", "React 3 Fiber", "Typescript", "html", "css"]}
                    imageUrl={portfolio}
                    projectUrl="#"
                />
                
            </div>
        </section>
    )
}

export default ProjectsPage;