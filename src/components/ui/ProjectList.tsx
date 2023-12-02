import ProjectItem from "./ProjectItem"
import projectDatas from '../../data/projectdatas.ts';

function ProjectList() {
    return(
        <>
            <section>
                <h3>Projects</h3>
                <ul className='project-list'>
                    {projectDatas.map((project, index) => (
                    <ProjectItem key={index} title={project.title} description={project.description} link={project.link} />
                    ))}
                </ul>
           </section> 
        </>
    )
}


export default ProjectList