import React from "react";
import HomeBgPic from "../Asserts/FirstBgPic.png";
import CirclePic from "../Asserts/CirclePic.png";
import { FaAngleRight } from "react-icons/fa";
import bottomRightPic from "../Asserts/bottomRightPic.png";
import TopRightPic from "../Asserts/TopRightPic.png";

import "../style/firstHome.css";
import "../SASS/main.css";

const FirstSection = () => {
  return (
    <div className="bg-col-set relative">
      <div
        className=" BgIMGhOME  max-w-[1000px]   bg-contain bg-center bg-no-repeat mx-auto "
        style={{ backgroundImage: `url(${HomeBgPic})` }}
      >
        <div className="max-w-[1000px] mx-auto   p-5   text-center  ">
          <h2 className="set-fs-h2 mt-24">Test your level of French in</h2>
          <h2 className="set-fs-h2">5-minutes conversation with AI!</h2>
          <p className="set-fs-p mt-3 max-w-[550px] mx-auto ">
            Discover the revolutionary AI-powered CERAN Language Assessment Test
            (CLAT) Engage in a brief, under-five-minute conversation with our
            AI, and instantly receive an accurate assessment of your CEFR
            language proficiency level."
          </p>
          <div className="relative">
            <img
              className="mx-auto mt-5 CirclePicSet "
              src={CirclePic}
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img
                className="w-[80px] h-[50.98px] bg-contain bg-center m-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Pt5QVqFoEL8aF5F1fd3pB_mTas-KknCf4Q&s"
                alt=""
              />
              <p
                style={{
                  color: "#2183C6",
                  fontWeight: "bold",
                  fontfamily: "Montserrat",
                  fontsize: "14.95px",
                  fontweight: "500",
                  lineheight: "18.22px",
                  textalign: "center",
                }}
              >
                Click to play <br /> Demo
              </p>
            </div>
          </div>

          <button className="flex items-center bgSetP mx-auto mt-5">
            Try it now free <FaAngleRight />
          </button>
        </div>
      </div>
      <img
        className="top-0 right-0 absolute  h-[200px] w-[200px]"
        src={TopRightPic}
        alt=""
      />
      <img
        className="bottom-0 absolute  h-[200px] w-[200px]"
        src={bottomRightPic}
        alt=""
      />
    </div>
  );
};

export default FirstSection;
