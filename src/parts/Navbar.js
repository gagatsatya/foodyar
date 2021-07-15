import React from "react";
import Logo from "assets/images/icons/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-4">
      <div className="container-fluid">
        <a className="logo position-relative" href="">
          <img src={Logo} alt="img" />
          <h1 className="text-logo position-absolute"> Foodyar</h1>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item clr-light">
              <a className="nav-link actived" href="#">
                Home
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Beverages
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Chef
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Ingridients
              </a>
            </li>
            <li className="nav-item clr-light">
              <a className="nav-link" href="#">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active btn" aria-current="page" href="#">
                <span className="nav-act">My Kitchen</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
