import { useLoaderData } from "react-router-dom";
import TeacherInfo from "./TeacherInfo";

const Teachers = () => {
    const teachers = useLoaderData();
    
    return (
        <div>
            <p className="text-center">Teachers section</p>
            <div className=" grid grid-cols-2 gap-5 w-9/12 mx-auto">

                {
                    teachers.map( teacher => <TeacherInfo key={teacher.id} teacher={teacher}></TeacherInfo>)
                        
                }
            </div>
        </div>
    );
};

export default Teachers;