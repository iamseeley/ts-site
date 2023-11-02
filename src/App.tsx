
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Posts from './pages/posts';
import Projects from './pages/projects';
import Header from './components/header';
import Footer from './components/footer';
import Cv from './pages/cv';


function App() {

  return (
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
  )
}

export default App
