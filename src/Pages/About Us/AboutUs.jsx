

const AboutUs = () => {
    const missionStatement = "Our mission is to empower individuals through education, providing them with the knowledge and skills they need to succeed in their personal and professional lives. We are committed to fostering a passion for lifelong learning, enabling people to adapt to an ever-changing world.By promoting education, we aim to create a positive impact on communities, encouraging innovation and personal growth.";
    const organizationalGoals = "Our goals include reaching one million learners within the next five years, expanding our programs to underserved communities, and fostering partnerships with educational institutions. Fostering partnerships with educational institutions to enhance learning opportunities and resources.";
     

    return (
        <div className=" my-10 mx-6">
            <h1 className=" text-3xl font-semibold my-3 text-center">About Us</h1>
            <div>
              <div>
              <h3 className=" text-2xl">Mission:</h3>
                <p>{missionStatement}</p>
              </div>
              <div className=" my-5">
                <h3 className=" text-2xl">Goals: </h3>
                <p>{organizationalGoals}</p>
              </div>
            </div>
        </div>
    );
};

export default AboutUs; 