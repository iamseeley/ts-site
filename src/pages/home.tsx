import PostList from "../components/ui/postlist"
import ProjectList from "../components/ui/projectlist"
import { motion } from "framer-motion";
import Header from "../components/header";

function Home() {
    
    return (
        <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            
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
            </motion.div>
        </>
    )
}

export default Home