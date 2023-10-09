import PropTypes from 'prop-types'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';


const EventCard = ({ event }) => {

    const { user } = useContext(AuthContext);
    const {id, title, img, date, time, location, organizer, registration_fee } = event;
    

    return (
        <div className='mt-6'>
            <Card className="my-6">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={img}
                        alt="card-image"
                        className=' w-full h-full'
                    />
                </CardHeader>
                <CardBody>
                    <div >
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            <h2>{title}</h2>
                        </Typography>
                        <div className=' flex text-sm gap-2 mb-2'>
                            <p><span className=' text-black lg:font-bold'>Time:</span> {time}</p>
                            <p><span className=' text-black lg:font-bold'>Date:</span>  {date}</p>
                        </div>
                    </div>
                    <Typography>
                        <p><span className=' text-black'> Registration fee: </span> {registration_fee}$</p>
                        <p><span className=' text-black '>Location:</span> {location}</p>
                        <p><span className=' text-black '>Organizer:</span> {organizer}</p>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                    <Button className=' bg-blue-500 w-full hover:bg-blue-700'>
                    {/* <Link to ="/eventDetails"> View Details</Link> */}
                        {
                          user ? <Link to ={`/eventDetails/${id}`}> View Details</Link>
                          : <Link to = "/login">View Details</Link>
                        }
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};


EventCard.propTypes = {
    event: PropTypes.object
}
export default EventCard;