import "./App.css";
import NavBar from "./screens/NavBar";
import About from "./screens/About";
import Home from "./screens/Home";
import Skills from "./screens/Skills";
import Portfolio from "./screens/Portfolio";
import Service from "./screens/Service";
import Contact from "./screens/Contact";
import InfoCard from "./screens/InfoCard";

function App() {
  return (
    <div className="App gap-[130px] flex flex-col">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Service />
      <Contact />
      <InfoCard />
    </div>
  );
}

export default App;
