import React from "react";
import Logo from "assets/images/icons/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row" style={{ marginTop: "70px" }}>
          <div className="col align-self-center">
            <a className="logo position-relative" href="">
              <img src={Logo} alt="img" />
              <h1 className="text-logo position-absolute"> Foodyar</h1>
            </a>
          </div>
          <div className="col">
            <h4 className="mb-3">Special Course</h4>
            <p className="mb-1">Wedding Foods</p>
            <p className="mb-1">Healthy and Muscle</p>
            <p className="mb-1">Office Food Daily</p>
            <p>Happy Kids</p>
          </div>
          <div className="col">
            <h4 className="mb-3">Company</h4>
            <p className="mb-1">APIs Developer</p>
            <p className="mb-1">Career</p>
            <p className="mb-1">Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col">
            <h4 className="mb-3">Be Our Friends</h4>
            <p className="mb-1">3, Season Park, Jakarta</p>
            <p className="mb-1">support@foodyar.co,id</p>
            <p className="mb-1">021 - 1111 - 2222</p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-auto">
            <p style={{ fontSize: 16 }}>
              All Rights Reserved Foodyar by Pixel from BuildWith Angga 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
