import { ABOUT_TEXT } from "../constants";
import aboutpic from "../assets/assets/aboutmee.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500">me</span> 
      </h1>
      
                <div className="flex justify-center lg:justify-center">
                    <p className="my-2 maxw-3xl py-6">{ABOUT_TEXT}</p>
                </div>
          </div>
        
    
  );
};

export default About;
