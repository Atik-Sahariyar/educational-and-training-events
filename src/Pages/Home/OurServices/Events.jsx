import PropTypes from 'prop-types';
import EventCard from './EventCard';

const Events = ({ events }) => {

    return (
        // Events section start
        <div>
            <h2 className=' text-3xl font-semibold text-center'>Our Events</h2>
            <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6'>
                {
                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </div>
        // Events Section end
    );
};


Events.propTypes = {
    events: PropTypes.array
}
export default Events;