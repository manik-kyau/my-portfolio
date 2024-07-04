import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Projects from "../../Pages/Projects/Projects";
import Skils from "../../Pages/Skils/Skils";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Skils></Skils>
            <Contact></Contact>
        </div>
    );
};

export default Home;