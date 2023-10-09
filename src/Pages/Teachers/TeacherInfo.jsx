import PropTypes from 'prop-types';

const TeacherInfo = ({teacher}) => {
    const { name, photo,expertise } = teacher
    return (
        <div className=' flex gap-4 items-center shadow-md '>
            <img className=' w-32' src={photo} alt={name}  />
            <div>
            <h3 className=' text-xl my-2' >{name}</h3>
             <p>{expertise}</p>
            
            </div>
           
        </div>
    );
};

TeacherInfo.propTypes = {
    teacher: PropTypes.object
}


export default TeacherInfo;