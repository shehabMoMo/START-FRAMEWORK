import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer text-center pt-5 text-white">
      <div className="contact-info container row my-5 mx-auto">
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <ul className="list-unstyled m-0 d-flex justify-content-center gap-1">
            <li className=" border border-1 border-white rounded-circle d-flex align-items-center justify-content-center">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className=" border border-1 border-white rounded-circle d-flex align-items-center justify-content-center">
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className=" border border-1 border-white rounded-circle d-flex align-items-center justify-content-center">
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className=" border border-1 border-white rounded-circle d-flex align-items-center justify-content-center">
              <a href="#">
                <i className="fa-solid fa-globe"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="copy-right py-4">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
