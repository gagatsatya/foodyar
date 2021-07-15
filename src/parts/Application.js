import React from "react";
import Image from "assets/images/app.png";
import Frame1 from "assets/images/app-frame1.png";
import Frame2 from "assets/images/app-frame2.png";
import Apple from "assets/images/app-store.png";
import Google from "assets/images/google-play.png";

export default function Application() {
  return (
    <section className="application">
      <div className="row justify-content-center">
        <div className="col-6 text-center">
          <div className="img-wrapper position-relative">
            <img src={Image} alt="img" width="408" height="522" />
            <img
              className="frame1 position-absolute"
              src={Frame1}
              alt="img"
              width="408"
              height="521"
            />
            <img
              className="frame2 position-absolute"
              src={Frame2}
              alt="img"
              width="408"
              height="521"
            />
          </div>
        </div>
        <div className="col-6 align-self-center">
          <h1>
            Download our app <br /> and join the contest
          </h1>
          <p>
            In order to improve our cooking skills,
            <br /> we do need a food photography{" "}
          </p>
          <div className="row mt-5">
            <div className="col-4">
              <img src={Apple} alt="img" width="168" height="50" />
            </div>
            <div className="col-4">
              <img src={Google} alt="img" width="168" height="50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
