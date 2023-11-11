import PostList from "../components/ui/postlist"
import ProjectList from "../components/ui/projectlist"
import Header from "../components/header";
import Footer from "../components/footer";
import { MotionLayout } from "../components/motionlayout";

function Home() {
    
    return (
        <>
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