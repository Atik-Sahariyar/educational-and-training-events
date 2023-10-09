import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/footer/Footer";
import Events from "./OurServices/Events";
import Slider from "./Slider";
import OurTestimonials from "./OurTestimonials/OurTestimonials";
import PastEvents from "./PastEvents/PastEvents";
const Home = () => {

    const events = useLoaderData()
    
    return (
        <div>
            <Slider events = {events}></Slider>
            <Events events = {events}></Events>
            <PastEvents></PastEvents>
            <OurTestimonials></OurTestimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;