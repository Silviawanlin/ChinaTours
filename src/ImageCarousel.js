import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import shanghai from "./img/imagecarousel/shanghai.jpg";
import beijing from "./img/imagecarousel/beijing.jpg";
import dayanta from "./img/imagecarousel/dayanta.jpg";

class ImageCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showStatus={false}
        className="image-container"
      >
        <div>
          <img src= {beijing} /> 
        </div>
        <div>
          <img src= {shanghai} /> 
        </div>
        <div> 
          <img src= {dayanta} />
        </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;