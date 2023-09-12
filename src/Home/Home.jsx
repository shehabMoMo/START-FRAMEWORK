import React from "react";
import Logo from "../avataaars.svg";
import "./Home.css";
import Break from "../Break/Break";

export default function Home() {
  return (
    <div className="bg-page pt-5">
      <div className=" w-75 mx-auto text-center mt-3">
        <img src={Logo} className="w-25" alt="Logo" />
        </div>
        <div className=" w-50 mx-auto text-center mt-4">
          <h2 className="fs-1 fw-bold ">START FRAMEWORK</h2>
          <div className='break position-relative text-white'>
        <div className='break-1 position-absolute bg-white'></div>
        <i className="fa-solid fa-star"></i>
        <div className='break-2 position-absolute bg-white'></div>
      </div>
        </div>
        <div className="text-center mt-2 pb-5">
          Graphic Artist - Web Designer - Illustrator
        </div>
      
    </div>
  );
}
