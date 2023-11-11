import PostList from "../components/ui/postlist"
import ProjectList from "../components/ui/projectlist"
import { motion } from "framer-motion";
import Header from "../components/header";
import Footer from "../components/footer";

function Home() {
    
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay: .2}}
            >
            <Header />
            <ProjectList />
            <PostList />
            {/* <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            
            </motion.section> */}
            <Footer />
            </motion.div>
        </>
    )
}

export default Home