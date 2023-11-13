import ProjectItem from "./projectitem"


function ProjectList() {
    return(
        <>
            <section>
                <h3>Projects</h3>
                <ul>
                <ProjectItem link="https://github.com/iamseeley/go-forth" title="go-forth" description="A template for building static sites with Go" />
                <ProjectItem link="https://github.com/iamseeley/wando-ui" title="wando-ui" description="Component collection - built with TypeScript, styled with Tailwind CSS" />
                <ProjectItem link="https://github.com/iamseeley/ts-site" title="ts-site" description="Current personal website - powered by Vite and React" />
                <ProjectItem link="https://github.com/iamseeley/ts-wiki" title="ts-wiki" description="Archived personal wiki" />
                </ul>
           </section> 
        </>
    )
}


export default ProjectList