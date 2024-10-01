import React from "react";
import StepPic1 from "../Asserts/StepsPic1.png";
import StepPic2 from "../Asserts/StepsPic2.png";
import Line1 from "../Asserts/StepsLine1.png";
import Line2 from "../Asserts/StepLine2.png";
import ImgNo1 from "../Asserts/01.png";
import ImgNo2 from "../Asserts/02.png";
import ImgNo3 from "../Asserts/03.png";
import ImgNo4 from "../Asserts/04.png";
import "../style/Feature.css";

const Steps = () => {
  return (
    <div className="">
      <div className="">
        <div className=" top-0 left-0 right-0 bottom-0 mt-10">
          <div className="">
            <div className="max-w-[1000px] mx-auto relative">
              <p className="setFontStyle  text-[70px] sm:text-[130px] md:text-[140px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px]">
                Steps
              </p>
              <p className=" txtSett text-[15px]  lg:text-[40px] md:text-[30px]  sm:text-[20px] absolute  left-0 right-0 mx-auto bottom-6">
                clat's Easy
                <span className="txtSett gradienttxt text-[15px]  lg:text-[40px] md:text-[30px]  sm:text-[20px]">
                  {" "}
                  pROCESS
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="b">
          <div className="max-w-[25%] mx-auto relative mt-8">
            <img className="mx-auto " src={StepPic1} alt="" />
            <div className="absolute top-0 right-0   flex flex-col items-center ">
              <div className="flex items-center translate-x-2/3 -translate-y-1/2 ">
                <img
                  src={StepPic2}
                  alt=""
                  className=" h-auto max-w-[40%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[50%]  "
                />
                <img
                  src={Line1}
                  alt=""
                  className="h-auto max-w-[90%] hsetpicc "
                />
              </div>
              <div
                className=" w-[70%]  right-[-90%] lg:right-[-63%] md:right-[-75%] sm:right-[-80%] top-7 absolute "
                style={{
                  backgroundImage: `url(${ImgNo1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "right",
                }}
              >
                <p className="txtsetsmall1 text-[10px]  lg:text-[18px] md:text-[15px]  sm:text-[12px]       ">
                  Quick
                  <span className="txtsetsmall1 txtSett gradienttxt text-[8px]  lg:text-[15px] md:text-[12px]  sm:text-[10px]">
                    {" "}
                    Sign-up
                  </span>
                </p>
                <p className="txtsetsmall2 text-[7px]  lg:text-[13px] md:text-[11px]  sm:text-[9px]    ">
                  Begin by entering basic details: your name, email, and
                  language preferences.
                </p>
              </div>
            </div>
            <div className="absolute  left-0  top-[28%]    flex items-center flex-col max-w-[100%] ">
              <div className="flex items-center  translate-x-[-90%] lg:translate-x-[-75%] md:translate-x-[-85%] sm:translate-x-[-95%] ">
                <img
                  src={Line2}
                  alt=""
                  className="h-auto max-w-[90%] hsetpicc "
                />
                <img
                  src={StepPic2}
                  alt=""
                  className=" h-auto max-w-[40%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[50%]  "
                />
              </div>
              <div
                className=" w-[70%]  left-[-90%] lg:left-[-63%] md:left-[-75%] sm:left-[-80%] top-14 absolute"
                style={{
                  backgroundImage: `url(${ImgNo2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "60%",
                  backgroundPosition: "right",
                }}
              >
                <p className="txtsetsmall1 text-[10px]  lg:text-[18px] md:text-[15px]  sm:text-[12px]       ">
                  Engage and
                  <span className="txtsetsmall1 txtSett gradienttxt text-[8px]  lg:text-[15px] md:text-[12px]  sm:text-[10px]">
                    {" "}
                    Evaluate
                  </span>
                </p>
                <p className="txtsetsmall2 text-[7px]  lg:text-[13px] md:text-[11px]  sm:text-[9px]    ">
                  Engage from any device in an interactive 5-minute voice
                  conversation with our advanced AI assistant. Experience a
                  comprehensive evaluation of your listening skills,
                  pronunciation, and fluency.
                </p>
              </div>
            </div>
            <div className="absolute  right-0  bottom-[23%]  flex flex-col items-center ">
              <div className="flex items-center translate-x-1/2 -translate-y-1/2 ">
                <img
                  src={StepPic2}
                  alt=""
                  className=" h-auto max-w-[40%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[50%]  "
                />
                <img
                  src={Line1}
                  alt=""
                  className="h-auto max-w-[90%] hsetpicc "
                />
              </div>
              <div
                className="w-[70%]  right-[-90%] lg:right-[-63%] md:right-[-75%] sm:right-[-80%] top-7 absolute"
                style={{
                  backgroundImage: `url(${ImgNo3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "60%",
                  backgroundPosition: "right",
                }}
              >
                <p className="txtsetsmall1 text-[10px]  lg:text-[18px] md:text-[15px]  sm:text-[12px]       ">
                  Instant
                  <span className="txtsetsmall1 txtSett gradienttxt text-[8px]  lg:text-[15px] md:text-[12px]  sm:text-[10px]">
                    {" "}
                    Feedback
                  </span>
                </p>
                <p className="txtsetsmall2 text-[7px]  lg:text-[13px] md:text-[11px]  sm:text-[9px]    ">
                  Receive an immediate, precise assessment of your language
                  proficiency based on the CEFR standards—complete with a
                  explanation of your level.
                </p>
              </div>
            </div>
            <div className="absolute  left-0 flex flex-col bottom-0  max-w-[100%] ">
              <div className="translate-y-1/4 translate-x-[-90%] lg:translate-x-[-75%] md:translate-x-[-80%] sm:translate-x-[-100%]   flex items-center ">
                <img
                  src={Line2}
                  alt=""
                  className="h-auto max-w-[90%] hsetpicc "
                />
                <img
                  src={StepPic2}
                  alt=""
                  className=" h-auto max-w-[40%] lg:max-w-[40%] md:max-w-[50%] sm:max-w-[50%]  "
                />
              </div>
              <div
                className=" w-[70%]  left-[-90%] lg:left-[-63%] md:left-[-75%] sm:left-[-80%] top-20 absolute"
                style={{
                  backgroundImage: `url(${ImgNo4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "60%",
                  backgroundPosition: "right",
                }}
              >
                <p className="txtsetsmall1 text-[10px]  lg:text-[18px] md:text-[15px]  sm:text-[12px]       ">
                  Summary to Your
                  <span className="txtsetsmall1 txtSett gradienttxt text-[8px]  lg:text-[15px] md:text-[12px]  sm:text-[10px]">
                    {" "}
                    Inbox
                  </span>
                </p>
                <p className="txtsetsmall2 text-[7px]  lg:text-[13px] md:text-[11px]  sm:text-[9px]    ">
                  Get a detailed summary and transcript of your interaction sent
                  directly to your email, allowing you to review and track your
                  progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
