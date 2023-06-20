import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
   
    };
    return (
      <>
      <div className="slider">
        <Slider {...settings}>
          <div className="slid">
            <img src="https://dominosaz.s3.eu-central-1.amazonaws.com/1360.350-min.png" alt="" />
          </div>
          <div>
            <img src="https://dominosaz.s3.eu-central-1.amazonaws.com/Super-online-1360x350_az-min.png" alt="" />
          </div>
           <div>
            <img src="https://dominosaz.s3.eu-central-1.amazonaws.com/CHICKEN-KICKERS_1360x350-az-min.png" alt="" />
          </div>
          <div>
            <img src="https://dominosaz.s3.eu-central-1.amazonaws.com/1XXL-1360x350-az-min.png" alt="" />
          </div> 
        </Slider>
      </div>
      </>

    );
  }
}