import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Gallary = () => {

    const { user } = useContext(AuthContext);
    if( !user ){
        return  <div className="text-center h-screen flex items-center "> <p> Please <Link to ="/login" className =" text-blue-700 underline"> LogIn</Link> </p></div>
    }
    return (
        <div className=" mx-6 my-6">
            <h1>photos and videos</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <img src="https://i.ibb.co/rytVPHn/study-tour-1.jpg" alt="" />
                <img src="https://i.ibb.co/1d2rYc1/Intelligent-Care-Seminars-2.jpg" alt="" />
                <img src="https://i.ibb.co/SXmdJHs/Tech-Career-Fair-3.jpg" alt="" />
                <img src="https://i.ibb.co/sqtNBdz/Education-Leadership-Summit-4.jpg" alt="" />
                <img src="https://i.ibb.co/kBmmMzM/Leadership-Training-Program-5.jpg" alt="" />
                <img src="https://i.ibb.co/WG43gp9/Photography-Basics-Workshop-6.jpg" alt="" />
                <img src="https://i.ibb.co/SVRs2hv/Entrepreneurship-Webinar-Series-7.jpg" alt="" />
                <img src="https://i.ibb.co/XJ5Cv63/STEM-Career-Fair-8.jpg" alt="" />
                <img src="https://i.ibb.co/sJMKGkF/Language-Education-Symposium-9.jpg" alt="" />
                <img src="https://i.ibb.co/fkzZzbD/Marketing-Forum-2021.png" alt="" />
                <img src="https://i.ibb.co/rHsHF9y/Tech-Summit-2022.png" alt="" />
                <img src="https://i.ibb.co/h9RrbQ7/Education-Symposium-2020.png" alt="" />
             
            </div>
        </div>
    );
};

export default Gallary;