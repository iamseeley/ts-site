import PostList from "../components/ui/postlist"
import ProjectList from "../components/ui/projectlist"
import Header from "../components/header";
import Footer from "../components/footer";
import { MotionLayout } from "../components/motionlayout";
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