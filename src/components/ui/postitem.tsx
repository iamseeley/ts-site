import { Link } from "react-router-dom"


interface PostProps {
    date: string,
    title: string,
    link: string,
    body?: string
}

function PostItem({date, title, link}: PostProps) {
    return(
        <li className="post">
            <time>{date}</time>
            <Link target="_blank" rel="noopener noreferrer" to={link}>{title}</Link>
        </li>
    )
}

export default PostItem