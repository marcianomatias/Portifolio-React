import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portifolio from "./components/Portifolio";
import Skills from "./components/Skills";

export default function App(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <Skills/>
            <Portifolio/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    )
}
