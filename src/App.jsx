import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Trees from "./components/Trees";
import Dogs from "./components/Dogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="font-bold bg-green-950">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
      </div>
      <AboutUs scrollToSection={scrollToSection} />
      <Trees />
      <Dogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
