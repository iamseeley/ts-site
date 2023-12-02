import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Posts from '../pages/posts';
import Projects from '../pages/projects';
import PostPage from "../pages/postpage";
import ScrollToTop from "./ScrollTop";


function AnimatedRoutes () {
  const location = useLocation();
  return (
    <ScrollToTop>
    <AnimatePresence mode="wait">
    <Routes key={location.pathname} location={location}>
        <Route path='/' Component={Home} />
        <Route path='/posts' Component={Posts} />
        <Route path='/projects' Component={Projects} />
        <Route path="/cv.pdf"  />
        <Route path="/posts/:slug" element={<PostPage />} />
      </Routes>
    </AnimatePresence>
    </ScrollToTop>
  );
}

export default AnimatedRoutes;