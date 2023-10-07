import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/footer/Footer";
import Events from "./OurServices/Events";


import Slider from "./Slider";

const Home = () => {

    const events = useLoaderData()
    
    return (
        <div>
            <Slider events = {events}></Slider>
            <Events events = {events}></Events>
            <Footer></Footer>
        </div>
    );
};

export default Home;