import Stars from "assets/images/icons/stars.svg";

import React, { Component } from "react";

export default class Menu extends Component {
  state = {
    menu: [
      {
        food: "Salad Kiwi Sugga",
        name: "Amir Samantha",
        image: "images/pic.png",
      },
      {
        food: "Avocado Muscle",
        name: "John Lennonk",
        image: "images/pic2.png",
      },
      {
        food: "Bayam Red Poppeye",
        name: "Toekang Sayoer",
        image: "images/pic3.png",
      },
      {
        food: "Naga Fruity Joss",
        name: "Imelda Saranghae",
        image: "images/pic4.png",
      },
    ],
  };

  handleMenu1 = () => {
    this.setState({
      menu: [
        {
          food: "Salad Kiwi Sugga",
          name: "Amir Samantha",
          image: "images/pic.png",
        },
        {
          food: "Avocado Muscle",
          name: "John Lennonk",
          image: "images/pic2.png",
        },
        {
          food: "Bayam Red Poppeye",
          name: "Toekang Sayoer",
          image: "images/pic3.png",
        },
        {
          food: "Naga Fruity Joss",
          name: "Imelda Saranghae",
          image: "images/pic4.png",
        },
      ],
    });
  };
  handleMenu2 = () => {
    this.setState({
      menu: [
        {
          food: "Salad Kiwi Sugga",
          name: "Amir Samantha",
          image: "images/pic21.jpg",
        },
        {
          food: "Avocado Muscle",
          name: "John Lennonk",
          image: "images/pic22.jpg",
        },
        {
          food: "Bayam Red Poppeye",
          name: "Toekang Sayoer",
          image: "images/pic23.jpg",
        },
        {
          food: "Naga Fruity Joss",
          name: "Imelda Saranghae",
          image: "images/pic24.jpg",
        },
      ],
    });
  };
  handleMenu3 = () => {
    this.setState({
      menu: [
        {
          food: "Salad Kiwi Sugga",
          name: "Amir Samantha",
          image: "images/pic31.jpg",
        },
        {
          food: "Avocado Muscle",
          name: "John Lennonk",
          image: "images/pic32.jpg",
        },
        {
          food: "Bayam Red Poppeye",
          name: "Toekang Sayoer",
          image: "images/pic33.jpg",
        },
        {
          food: "Naga Fruity Joss",
          name: "Imelda Saranghae",
          image: "images/pic34.jpg",
        },
      ],
    });
  };
  handleMenu4 = () => {
    this.setState({
      menu: [
        {
          food: "Salad Kiwi Sugga",
          name: "Amir Samantha",
          image: "images/pic41.jpg",
        },
        {
          food: "Avocado Muscle",
          name: "John Lennonk",
          image: "images/pic42.jpg",
        },
        {
          food: "Bayam Red Poppeye",
          name: "Toekang Sayoer",
          image: "images/pic43.jpg",
        },
        {
          food: "Naga Fruity Joss",
          name: "Imelda Saranghae",
          image: "images/pic44.jpg",
        },
      ],
    });
  };

  render() {
    return (
      <section className="menu">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <p className="mb-1">Watch Now</p>
              <h2 className="mb-4">Special To Try</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-2 text-center  menu-select">
              <p className="clr-yellow" onClick={this.handleMenu1}>
                Healthy Food
              </p>
            </div>
            <div className="col-2 text-center  menu-select">
              <p className="clr-blue" onClick={this.handleMenu2}>
                Lunch
              </p>
            </div>
            <div className="col-2 text-center  menu-select">
              <p className="clr-blue" onClick={this.handleMenu3}>
                Vege Desert
              </p>
            </div>
            <div className="col-2 text-center  menu-select">
              <p className="clr-blue" onClick={this.handleMenu4}>
                Shake
              </p>
            </div>
          </div>
          <div className="row">
            {this.state.menu.map((item, index) => {
              return (
                <div key={index} className="col-3 text-center">
                  <img src={item.image} alt="img" width="250" height="270" />
                  <h4 className="mt-4 mb-1">{item.food}</h4>
                  <p className="mb-2">{item.name}</p>
                  <img src={Stars} alt="img" />
                </div>
              );
            })}
            {/* <div className="col-3">
              <img src={Pic2} alt="img" width="250" height="270" />
              <h3>{this.state.text2}</h3>
            </div>
            <div className="col-3">
              <img src={Pic3} alt="img" width="250" height="270" />
              <h3>{this.state.text3}</h3>
            </div>
            <div className="col-3">
              <img src={Pic4} alt="img" width="250" height="270" />
              <h3>{this.state.text4}</h3>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}
