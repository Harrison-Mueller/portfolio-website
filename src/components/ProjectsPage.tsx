import ProjectCard from "./ProjectCard";
import recipe from "/thumbnails/recipe.png"
import test from "/textures/Test.png"
import certifications from "/thumbnails/cerifications2.png"
import portfolio from "/thumbnails/portfolio.png"
import certificationWork from "/CertificationWork.pdf"


function ProjectsPage() {
    return(
        <section id="projects-page-section">
            <h2 className="projects-header">Projects</h2>
            <h4 className="projects-subtitle">What I Can Do</h4>

            
            <div className="project-cards">
                <ProjectCard
                    title="Recipe Website"
                    stack={["React", "typescript", "html", "css"]}
                    imageUrl={recipe}
                    projectUrl="https://harrison-mueller.github.io/recipe-website/"
                />
                <ProjectCard
                    title="Certification Projects"
                    stack={["html", "css", "javascript", "java"]}
                    imageUrl={certifications}
                    projectUrl={certificationWork}
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