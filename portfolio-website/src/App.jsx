import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Projects from "./components/projects";
import { ParallaxProvider } from "react-scroll-parallax";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Navbar></Navbar>
        <Skills></Skills>
        <Projects></Projects>
        <Certificates></Certificates>
        <About></About>
      </ParallaxProvider>
    </div>
  );
}

export default App;
