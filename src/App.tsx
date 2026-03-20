import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectShowcase from "./components/ProjectShowcase";

const App = () => {
  return (
    <>
      <div className="bg-zinc-800 ">
        <Navbar />
        <Hero />
        <ProjectShowcase />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};

export default App;
