import PropTypes from 'prop-types';
import { Carousel, Typography } from "@material-tailwind/react";

const Slider = ({ events }) => {
  const title_1 = events[2].title;
  const description_1 = events[2].description;

  const title_2 = events[0].title;
  const description_2 = events[0].description;
  
  const title_3 = events[4].title;
  const description_3 = events[4].description
  

  console.log(events[0].img);
  return (
    <div className="my-10 lg:mx-10">
      <Carousel className="rounded-xl   max-h-[80vh] ">
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/SXmdJHs/Tech-Career-Fair-3.jpg"
            alt="image 1"
            className=" h-[80vh] w-screen object-cover "
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {title_1}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {description_1}
              </Typography>
              <div className="flex justify-center ">

              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/rytVPHn/study-tour-1.jpg"
            alt="image 2"
            className="h-[80vh] w-screen object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center  bg-black/50">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 ">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-center"
              >
                {title_2}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-center"
              >
                {description_2}
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://i.ibb.co/kBmmMzM/Leadership-Training-Program-5.jpg"
            alt="image 3"
            className="h-[80vh] w-screen object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center text-center bg-black/70">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
               {title_3}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {description_3}
              </Typography>

            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};


Slider.propTypes = {
  events: PropTypes.array
}
export default Slider;