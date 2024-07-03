import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;