import { Link } from "react-router-dom"


function Footer() {
    return(
        <footer>
            <Link to={'https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1'}><img width={24} height={24} src="/assets/images/cc.svg" alt="" /></Link>
            <p><Link to={'/about'}>Thomas Seeley</Link> © 2023 — <Link to={'https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1'}>BY-NC-SA 4.0</Link></p>
            
        </footer>
    )
}

export default Footer