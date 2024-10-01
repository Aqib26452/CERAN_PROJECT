import React from "react";
import Footerimg from "../Asserts/footerPic.png";
import FooterCenterimg from "../Asserts/footerCenterPic.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-20">
        <div className="">
          <img
            className="max-w-[100px] h-[40px] mx-auto mb-[-65px]"
            src={FooterCenterimg}
            alt=""
          />
          <div className="relative">
            <img className="" src={Footerimg} alt="" />
            <div className=" absolute  text-white text-center  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <ul className="flex text-white gap-12 text-center mt-8">
                <li>Home</li>
                <li>Feature</li>
                <li>Benifits</li>
                <li>contact Us</li>
              </ul>
              <p className="max-w-[400px] ptagset mt-3">
                @2024 Ceran Language & Culture. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
