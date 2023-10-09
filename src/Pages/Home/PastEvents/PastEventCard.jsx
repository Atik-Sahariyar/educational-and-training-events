import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const PastEventCard = ({ pastEvent }) => {
    const { user } = useContext(AuthContext);
    const {title, description, location, date, photo, resources } = pastEvent;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className=" w-[400px] " src={photo} alt="events photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{date}</p>
                <p>{location}</p>

                <p className=' text-gray-500'>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-600 text-white">{user?  <Link to = '/gallary'>{resources[0].title}</Link> :
                     <Link to = '/login'>{resources[0].title}</Link>
                    }</button>
                </div>
            </div>
        </div>
    );
};

PastEventCard.propTypes = {
    pastEvent: PropTypes.object
}
export default PastEventCard;