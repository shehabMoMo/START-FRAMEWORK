import React from "react";
import "./Contact.css";

export default function Contact() {
  function onchangeName() {
    let inputName = document.getElementById('name')
    if (inputName.value == '') {
      document.getElementById('nameLabel').style.top = '50px'
    }else{
      document.getElementById('nameLabel').style.top = '0px'
    }
  }
  function onchangeAge() {
    let inputAge = document.getElementById('age')
    if (inputAge.value == '') {
      document.getElementById('ageLabel').style.top = '50px'
    }else{
      document.getElementById('ageLabel').style.top = '0px'
    }
  }
  function onchangeEmail() {
    let inputEmail = document.getElementById('email')
    if (inputEmail.value == '') {
      document.getElementById('emailLabel').style.top = '50px'
    }else{
      document.getElementById('emailLabel').style.top = '0px'
    }
  }
  function onchangePassword() {
    let inputPassword = document.getElementById('password')
    if (inputPassword.value == '') {
      document.getElementById('passwordLabel').style.top = '50px'
    }else{
      document.getElementById('passwordLabel').style.top = '0px'
    }
  }
  return (
    <>
      <div className="page-color pt-3">
        <div className="w-50 mx-auto text-center mt-4">
          <h2 className="fs-1 fw-bold ">CONATCT SECTION</h2>
          <div className="break-w position-relative">
            <div className="break-w-1 position-absolute bg-mine"></div>
            <i className="fa-solid fa-star"></i>
            <div className="break-w-2 position-absolute bg-mine"></div>
          </div>
        </div>
        <form className="container py-5">
          <div className="w-75 mx-auto">
            <div className="my-2">
              <label htmlFor="name" id="nameLabel">userName :</label>
              <input
                onChange={onchangeName}
                type="text"
                placeholder="userName"
                className="form-control mt-3"
                id="name"
              />
            </div>
            <div className="my-2">
              <label htmlFor="age" id="ageLabel">userAge :</label>
              <input
              onChange={onchangeAge}
                type="text"
                placeholder="userAge"
                className="form-control mt-3"
                id="age"
              />
            </div>
            <div className="my-2">
              <label htmlFor="email" id="emailLabel">userEmail :</label>
              <input
              onChange={onchangeEmail}
                type="text"
                placeholder="userEmail"
                className="form-control mt-3"
                id="email"
              />
            </div>
            <div className="my-2">
              <label htmlFor="password" id="passwordLabel">userPassword :</label>
              <input
              onChange={onchangePassword}
                type="text"
                placeholder="userPassword"
                className="form-control mt-3"
                id="password"
              />
            </div>
            <button type="button" className="btn my-3">Send Message</button>
          </div>
        </form>
      </div>
    </>
  );
}
