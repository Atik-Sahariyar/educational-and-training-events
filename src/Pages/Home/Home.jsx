import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/footer/Footer";
import Services from "./Services/Services";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;