import "./App.css";
import NavBar from "./screens/NavBar";
import About from "./screens/About";
import Home from "./screens/Home";
import Skills from "./screens/Skills";
import Portfolio from "./screens/Portfolio";
import Service from "./screens/Service";
import Contact from "./screens/Contact";
import InfoCard from "./screens/InfoCard";
import More from "./screens/More";

function App() {
  return (
    <div className="App flex flex-col">
      <NavBar />
      <div className="w-[800px] lg:flex hidden flex-col mx-auto">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <More />
        <Service />
        <Contact />
      </div>
      <div className="w-screen flex lg:hidden flex-col mx-auto px-[15px]">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Service />
        <Contact />
      </div>
      <InfoCard />
    </div>
  );
}

export default App;
