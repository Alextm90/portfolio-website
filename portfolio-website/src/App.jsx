import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import PortfolioHeader from './components/PortfolioHeader';
import Footer from './components/Footer';

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
        <Footer></Footer>
      </ParallaxProvider>
    </div>
  );
}

export default App;
