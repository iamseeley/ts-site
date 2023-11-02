
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/posts';
import Projects from './pages/projects';
import Header from './components/header';
import Footer from './components/footer';
import Cv from './pages/cv';
import { HelmetProvider } from 'react-helmet-async';


function App() {

  return (
    <HelmetProvider>
    <Router>
      <div>
      <Header />
      <main>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/posts' Component={Posts} />
        <Route path='/projects' Component={Projects} />
        <Route path='/cv' Component={Cv} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App
