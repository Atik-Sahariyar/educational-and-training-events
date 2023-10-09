import PropTypes from 'prop-types';

const TestimonialCard = ({testimonial}) => {

    const {name, role, occupation, organization, location, quote, img ,facebookLink} = testimonial
    return (

        <div className='text-center my-5   border shadow-lg p-3 mb-14'>
           <div className=' flex  items-center gap-2 my-2 justify-center'>
           <img src={img} className=' w-16 h-16 rounded-full' alt="" />
           <a href={facebookLink ? facebookLink : "#"}><span className=' text-xl font-semibold hover:text-blue-700  hover:underline'>{name}</span></a>
           </div>
            
            <p className=' '>Occupation: {role === 'Attendee'? occupation : organization }</p>
            <p className=' text-gray-500'> Location: {location}</p>
            <p className=' text-gray-500'>{quote}</p>
        </div>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.object
}
export default TestimonialCard;