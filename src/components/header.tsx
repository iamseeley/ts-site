import { Link } from "react-router-dom"
import BlobComponent from "./ui/blob"


function Header() {
    return(
        <header>
            <div>
            <BlobComponent />
            <h2>Thomas Seeley</h2>
            {/* <h4>developer . designer</h4> */}
            </div>
            <div className="social-links">
                <Link rel="noopener noreferrer" to={'https://github.com/iamseeley'} target="_blank">github</Link>
                <Link rel="noopener noreferrer" to={'https://twitter.com/iamseeley'} target="_blank">twitter</Link>
                <Link rel="noopener noreferrer" to={'https://www.linkedin.com/in/thomas-seeley-3229b5205/'}>linkedin</Link>
                <Link rel="noopener noreferrer" target="_blank" to={'/cv.pdf'}>cv</Link>
                <Link rel="noopener noreferrer" to={'mailto:hello@tseeley.com'} target="_blank">email</Link>
            </div>
            {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            </ul> */}
            {/* <div className="about">
            
            <p>Before:</p>
            <p>I studied Business Managment and Entrepreneurship at the University of Tennessee. My last two years of undergrad I started tinkering with code. I got hooked on building things for the web and haven&apos;t stopped since.</p>
            </div> */}
            <hr />
            
        </header>
    )
}

export default Header