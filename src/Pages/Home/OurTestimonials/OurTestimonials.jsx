
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const OurTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
    async function fetchTestimonials() {
        try{
           const response = await fetch('/public/testimonials.json');
           if(!response.ok){
            throw new Error("Network response was not ok ");
           }
           const data = await response.json();
           setTestimonials(data)
        }
        catch (error){
            console.log(error);
        }
      
    }
    fetchTestimonials(); 
        
    }, [])


    return (
        <div className=" mt-5 mx-6">
            <h1 className=" text-center text-3xl font-semibold">Our testimonials</h1>
            <div className=" grid gap-3 md:grid-cols-2 lg:grid-cols-2 ">
                {
                    testimonials?.map( testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default OurTestimonials;