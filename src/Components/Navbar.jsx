import React from "react";
import "../SASS/main.css";
import flagImg from "../Asserts/flagNavImg.png";
import { BsList } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <div className="mt-3 shadow-black ">
        <div className="max-w-[1080px] -black mx-auto flex items-center justify-between py-3">
          <div className="">
            <img
              className="w-[168px] h-[48.98px] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Pt5QVqFoEL8aF5F1fd3pB_mTas-KknCf4Q&s"
              alt=""
            />
          </div>
          <div className="list hidden min-lg:block">
            <ul className="flex items-center gap-4 ulsetHover">
              <li className="">
                Home
                <p className="setline"></p>
              </li>
              <li>
                Features
                <p className="setline"></p>
              </li>
              <li>
                How it works
                <p className="setline"></p>
              </li>
              <li>
                Benifits
                <p className="setline"></p>
              </li>
              <li>
                Testimonials
                <p className="setline"></p>
              </li>
              <li>
                Contact us
                <p className="setline"></p>
              </li>
            </ul>
          </div>
          <div className="min-lg:flex items-center gap-2 hidden ">
            <div className="bgSetP">
              <p className=" text-white">Test your level now</p>
            </div>
            <div className="flex items-center gap-2 border-Set">
              <img width="24px" height="24px" src={flagImg} alt="" />
              <p>ENG</p>
            </div>
          </div>
          <div className="text-5xl me-6 block min-lg:hidden ">
            <BsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
