import React from "react";
import "./Portfolio.css";
import Img1 from "../img/poert1.png";
import Img2 from "../img/port2.png";
import Img3 from "../img/port3.png";

export default function Portfolio() {
  return (
    <div className="page-color pt-3">
      <div className="w-50 mx-auto text-center mt-4">
        <h2 className="fs-1 fw-bold ">PORTFOLIO COMPONENT</h2>
        <div className="break-w position-relative">
          <div className="break-w-1 position-absolute bg-mine"></div>
          <i className="fa-solid fa-star"></i>
          <div className="break-w-2 position-absolute bg-mine"></div>
        </div>
      </div>
      <div className="row g-5 container mx-auto py-3">
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img1} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img2} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img3} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img1} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img2} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="content position-relative rounded-3 overflow-hidden">
            <img src={Img3} className="w-100 " alt="" />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-plus fa-7x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
