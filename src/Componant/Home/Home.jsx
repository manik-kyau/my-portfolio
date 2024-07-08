
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Projects from "../../Pages/Projects/Projects";
import Skils from "../../Pages/Skils/Skils";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Manik Sarkar</title>
            </Helmet> */}

            <div className="pt-16">
                <Banner></Banner>
                <About></About>
                <Projects></Projects>
                <Skils></Skils>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;