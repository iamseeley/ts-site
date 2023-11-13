import { Link } from "react-router-dom"

interface ProjectProps {
    title: string,
    description: string,
    link: string
}


function ProjectItem({title, description, link}: ProjectProps) {
    return(
        <li>
            <Link target="_blank" rel="noopener noreferrer" to={link}><strong>{title}</strong></Link><span className="project-span">:</span> {description}
        </li>
    )
}

export default ProjectItem