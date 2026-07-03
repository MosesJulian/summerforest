import About from "./About";
import Attractions from "./Attractions";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Rooms from "./Rooms";

const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero />
            <About />
            <Rooms />
            <Attractions />
            <Contacts />
        </div>
    );
};

export default Body;