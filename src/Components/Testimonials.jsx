import React from "react";
import "../style/testimonials.css";
import TestimonialsPic from "../Asserts/TestinominalsPic.png";

const Testimonials = () => {
  return (
    <div>
      <div className="">
        <div className="  mt-10">
          <div className="">
            <div className="max-w-[980px] mx-auto ">
              <p className="setFontStyleTestimonials  text-[20px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[150px] 2xl:text-[160px]">
                testimonials
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto">
          <img src={TestimonialsPic} alt="" />
        </div>
        <div className="max-w-[600px] mx-auto text-center mt-5 bgSetttt py-5 px-3">
          <h1 className=" text-white">
            Say goodbye to scheduling tests with tutors and taking tedious
            online quizzes. Experience the most rewarding five minutes of your
            day with our quick and engaging assessment!
          </h1>
          <div className="bgsetbutton max-w-[241px] mx-auto mt-5">
            <p className=" text-white">Test your level now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
