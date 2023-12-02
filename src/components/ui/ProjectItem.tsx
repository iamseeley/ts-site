import { Link } from "react-router-dom"

interface ProjectProps {
    title: string,
    description: string,
    link: string
}


function ProjectItem({title, description, link}: ProjectProps) {
    return(
        <ul className="project-item">
            <li><Link target="_blank" rel="noopener noreferrer" to={link}><strong>{title}</strong></Link></li>
            <li>
               {description}
            </li>
        </ul>
    )
}

export default ProjectItem