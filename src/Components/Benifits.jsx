import React from "react";
import "../style/Benifits.css";
import BenifitBg from "../Asserts/BenifitBgPic.png";
import BenifitLeftBgPic from "../Asserts/BenifitleftBgPic.png";
import BenifitRightBgPic from "../Asserts/BenifitRightBgPic.png";
import Icon1 from "../Asserts/IconBenifit1.png";
import Icon2 from "../Asserts/IconBenifit2.png";
import Icon3 from "../Asserts/IconBenifit3.png";

const Benifits = () => {
  return (
    <div className="">
      <div className="relative">
        {/* //bg left image se through position  */}
        <div className="absolute ">
          <img src={BenifitLeftBgPic} alt="" />
        </div>
        {/* //bg right image se through position  */}
        <div className="absolute  right-0">
          <img src={BenifitRightBgPic} alt="" />
        </div>
      </div>
      <div className="max-w-[1020px] mx-auto  ">
        <div className="">
          {" "}
          <div
            className="BgBenifit mt-10"
            style={{
              backgroundImage: `url(${BenifitBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
            }}
          >
            <div className="">
              <div className="   mt-28 ">
                <div className="">
                  <div className="max-w-[1000px] mx-auto relative">
                    <p className="setFontStyle  text-[70px] sm:text-[130px] md:text-[140px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px]">
                      benefits
                    </p>
                    <p className=" txtSett text-[15px]  lg:text-[40px] md:text-[30px]  sm:text-[20px] absolute  left-0 right-0 mx-auto bottom-6">
                      What Makes the
                      <span className="txtSett gradienttxt text-[15px]  lg:text-[40px] md:text-[30px]  sm:text-[20px]">
                        {" "}
                        clat
                      </span>
                      a Favorite?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap text-center justify-between border border-slate-400 borderDivSet ">
              <div className="p-5  sm:w-full  lg:w-[200px] mx-auto">
                <img className="mx-auto" src={Icon1} alt="" />
                <h2 className="font-bold max-w-[275px] mt-3 mx-auto">
                  Available in French <br />
                  and English
                </h2>
                <p className="max-w-[234px] mx-auto">
                  Available for assessment in both English and French languages.
                </p>
              </div>
              <div className="flex items-center justify-center mx-auto custom-rotate sm:w-full  lg:w-[200px]">
                <p className="w-[150px] h-[1px] bg-slate-400 "></p>
              </div>
              <div className="p-5  w-full   sm:w-full  lg:w-[200px] mx-auto">
                <img className="mx-auto" src={Icon2} alt="" />
                <h2 className="font-bold max-w-[275px] mt-3 mx-auto">
                  Safe and <br />
                  Confidential
                </h2>
                <p className="max-w-[234px] mx-auto">
                  Ensures a secure and confident testing experience.
                </p>
              </div>
              <div className="flex items-center justify-center mx-auto custom-rotate sm:w-full  lg:w-[200px]">
                <p className="w-[150px] h-[1px] bg-slate-400  "></p>
              </div>
              <div className="p-5  w-full   sm:w-full  lg:w-[200px] mx-auto">
                <img className="mx-auto" src={Icon3} alt="" />
                <h2 className="font-bold max-w-[275px] mx-auto">
                  Fast and Effective
                </h2>
                <p className="max-w-[234px] mx-auto">
                  Provides a swift and streamlined evaluation process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
