import PostList from "../components/ui/PostList"
import ProjectList from "../components/ui/ProjectList"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function Home() {
    
    return (
        <>
            <Helmet>
                <title>Thomas Seeley</title>
                <meta name='description' content=""/>
            </Helmet>
           
                <Header />
                <ProjectList />
                <PostList />
                <Footer />
            
        </>
    )
}

export default Home
