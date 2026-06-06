import "../css/ProjectCard.css";
interface ProjectCardProps {
    title: string;
    stack: string[];
    imageUrl: string;
}

function ProjectCard({ title, stack, imageUrl }: ProjectCardProps) {
    return(
        <div className="project-card">
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