import './App.css';
import About from './components/About';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Projects from './components/projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import PortfolioHeader from './components/PortfolioHeader';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Navbar></Navbar>
        <PortfolioHeader></PortfolioHeader>
        <Skills></Skills>
        <Projects></Projects>
        <Certificates></Certificates>
        <About></About>
        <ContactForm></ContactForm>
      </ParallaxProvider>
    </div>
  );
}

export default App;
