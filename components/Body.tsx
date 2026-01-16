import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";

const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <About />
            <Contacts />
        </div>
    );
};

export default Body;