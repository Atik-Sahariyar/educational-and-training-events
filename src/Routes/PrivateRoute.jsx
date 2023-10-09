import { useContext } from "react";
import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);


    const events = useLoaderData();
    console.log(events);

    if(loading){
        return <span className="loading loading-bars loading-md"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to ="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.object  
}
export default PrivateRoute;