/* eslint-disable no-unused-vars */
import React from 'react';
import { Fade } from 'react-slideshow-image';
import * as FeatherIcon from 'react-feather';
import '../css/SlideImage.css';

 
const fadeImages = [
    require("../images/HomeImage1.jpg"),
    require("../images/HomeImage2.jpg"),
    require("../images/HomeImage3.jpg")
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  pauseOnHover: true,
}
 
export default function SlideShowImage () {
  return (
    <div className="slide-container" style={{width:'100%',height:'650px'}}>
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="homeimage1"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="homeimage2"/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="homeimage3"/>
          </div>
        </div>
      </Fade>
    </div>
  )
}