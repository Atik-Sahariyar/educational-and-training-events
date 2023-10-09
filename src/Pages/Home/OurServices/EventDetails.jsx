// import PropTypes from 'prop-types ';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

const EventDetails = () => {
    const [ event, setEvent ]  = useState();
    const { id } = useParams();
    const intId = parseInt(id);
    
    const eventsLoaded = useLoaderData();
    
    useEffect(() => {
        const findEvent = eventsLoaded?.find( item => item.id === intId);
        setEvent(findEvent);
    },[intId, eventsLoaded])

    
    return (
        <div>
        
        <h1 className=" text-3xl text-center  my-5">Event details</h1>
        {
            event ? (
                 <div> 
                    <EventDetailsCard event = { event }></EventDetailsCard>
                 </div>
            ): ""
        }
        </div>
    );
};


export default EventDetails;