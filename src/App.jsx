import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Test from "./temporaryComponent/Test";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Project">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {/* <section id="About">About</section> */}

      {/* <Test /> */}
    </div>
  );
};

export default App;
