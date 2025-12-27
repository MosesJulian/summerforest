import About from "./About";
import Hero from "./Hero";

const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <About />
        </div>
    );
};

export default Body;