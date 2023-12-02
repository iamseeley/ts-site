import PostList from "../components/ui/PostList"
import ProjectList from "../components/ui/ProjectList"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionLayout } from "../components/MotionLayout";
import { Helmet } from "react-helmet-async";

function Home() {
    
    return (
        <>
            <Helmet>
                <title>Thomas Seeley</title>
                <meta name='description' content=""/>
            </Helmet>
            <MotionLayout>
                <Header />
                <ProjectList />
                <PostList />
                <Footer />
            </MotionLayout>
        </>
    )
}

export default Home
