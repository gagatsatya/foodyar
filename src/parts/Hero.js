import React from "react";
import Banner from "assets/images/banner.png";
import Back1 from "assets/images/background1.png";
import Back2 from "assets/images/background2.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-5 align-self-center">
          <h1>Eat What You Cook With Us, Together!</h1>
          <p>
            When you eat something that cooked by yourself, the happiness is
            priceless.
          </p>
          <a href="#" className="btn mt-3">
            Decide a Menu
          </a>
        </div>
        <div className="col-7">
          <div className="img-wrapper position-relative">
            <img
              className="banner"
              src={Banner}
              alt="img"
              width="619"
              height="413"
            />
            <img
              className="back-top position-absolute"
              src={Back1}
              alt="img"
              width="600"
              height="324"
            />
            <img
              className="back-bottom position-absolute"
              src={Back2}
              alt="img"
              width="600"
              height="324"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
