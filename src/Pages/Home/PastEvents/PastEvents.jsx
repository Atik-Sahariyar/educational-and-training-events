import { useEffect, useState } from "react";
import PastEventCard from "./PastEventCard";

const PastEvents = () => {
    
    const [pastEvents, setPastEvents] = useState([]);


    useEffect(() => {
        async function fetchPastEvents() {
            try{
               const response = await fetch('/public/pastEvents.json');
               if(!response.ok){
                throw new Error("Network response was not ok ");
               }
               const data = await response.json();
               setPastEvents(data)
            }
            catch (error){
                console.log(error);
            }
          
        }
        fetchPastEvents(); 
            
        }, [])

    return (
        <div className=" mb-14">
            <h2 className=" text-3xl text-center font-semibold my-5 ">Previous Events</h2>
            <div className=" grid md:grid-cols-2 gap-3 mx-6">
                {
                    pastEvents.map( pastEvent => <PastEventCard key={pastEvent.id} pastEvent = {pastEvent}></PastEventCard>)
                }
            </div>
        </div>
    );
};

export default PastEvents;