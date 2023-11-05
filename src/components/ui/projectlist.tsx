import Project from "./project"


function ProjectList() {
    return(
        <>
            <section>
                <h3>Projects</h3>
                <ul>
                <Project link="https://github.com/iamseeley/go-forth" title="go-forth" description="A template for building static sites with Go" />
                <Project link="https://github.com/iamseeley/wando-ui" title="wando-ui" description="Component collection - built with TypeScript, styled with Tailwind CSS" />
                </ul>
           </section> 
        </>
    )
}


export default ProjectList