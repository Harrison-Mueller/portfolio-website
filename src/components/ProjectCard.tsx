import "../css/ProjectCard.css";
import { context } from "./Provider";
interface ProjectCardProps {
    title: string;
    stack: string[];
    imageUrl: string;
    projectUrl: string;
}

function ProjectCard({ title, stack, imageUrl, projectUrl }: ProjectCardProps) {
    const { scrollToSection } = context();
    
    return(
        <div className="project-card"  onClick={() => projectUrl == "#" ? scrollToSection(0) : window.open(projectUrl,  '_blank')}>
            <img className="project-card-image" src={imageUrl} alt="Project Preview Image" />
            <p className="project-card-text">
                {/* Stack: <br /> */}
                {stack.map((item, index) => (
                    <span key={index}>-{item} <br /></span>
                ))}
            </p>
            <h5 className="project-card-title">{title}</h5>
        </div>
    )
}

export default ProjectCard;