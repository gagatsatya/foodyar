import React from "react";
import Testi from "assets/images/testi.png";

export default function Testimoni() {
  return (
    <section className="testimoni">
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <h3>
            Awalnya saya malu dengan mertua karena tidak bisa memasak, kini
            mereka lebih suka makan malam di rumah demi menyantap masakan yang
            saya buat sendiri
          </h3>
          {/* <div className="wrapper mt-3 position-relative">
            <img
              className="testi-img"
              src={Testi}
              alt="img"
              width="99"
              height="99"
            /> */}
          {/* <ul className="testi-name">
              <li>
                <h4>Camella Sarrah</h4>
              </li>
              <li>
                <p className="testi-job">Vege Master</p>
              </li>
            </ul> */}
          {/* </div> */}
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <img
            className="testi-img"
            src={Testi}
            alt="img"
            width="99"
            height="99"
          />
        </div>
        <div className="col-auto align-self-center">
          <h4>Camella Sarrah</h4>
          <p className="testi-job">Vege Master</p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-auto text-center me-5">
          <h2>180.000+</h2>
          <p>MENU FOOD</p>
        </div>
        <div className="col-auto text-center me-5">
          <h2>20.000+</h2>
          <p>CHEF</p>
        </div>
        <div className="col-auto text-center me-5">
          <h2>400.000+</h2>
          <p>COURSE</p>
        </div>
        <div className="col-auto text-center">
          <h2>6.900.000+</h2>
          <p>ALUMNI</p>
        </div>
      </div>
    </section>
  );
}
