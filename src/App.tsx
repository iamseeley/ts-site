
import './styles.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/animatedroutes';
import { HelmetProvider } from 'react-helmet-async';



function App() {


  return (
    <HelmetProvider>
    <Router>
      <main>
        <AnimatedRoutes />
      </main>   
    </Router>
    </HelmetProvider>
  )
}

export default App
