import "./App.css";
import About from "./components/about";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Projects from "./components/projects"

function App() {
  return <div className="App">
    <Navbar></Navbar>
    <About></About>
  </div>;
}

export default App;
