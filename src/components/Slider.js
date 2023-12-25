import React from 'react';
import Slider1 from "./images/S1.png";
import Slider2 from "./images/S2.png";
import Slider3 from "./images/S3.png";
import Slider4 from "./images/S4.png";
import Slider5 from "./images/S5.png";
import Carousel from 'react-bootstrap/Carousel';
import SliderCarousel from './Slider.css';



function Slider() {
  return (
    <Carousel className='SliderCarousel'>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Slider1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h1 className='S' style={{color:"#ffff"}}>Green Lanka</h1>
          <p className='S' style={{color:"#ffff"}}><center>Life gets great with Organic Food</center></p> 
          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Slider2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
        <h1 className='S' style={{color:"#ffff"}}>Green Lanka</h1>
        <p className='S' style={{color:"#ffff"}}><center>Life gets great with Organic Food</center></p>
          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Slider3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
        <h1 className='S' style={{color:"#033E3E"}}>Green Lanka</h1>
        <p className='S' style={{color:"#033E3E"}}><center>Life gets great with Organic Food</center></p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Slider4}
          alt="Fourth slide"
        />
        {/* <Carousel.Caption>
        <h1 className='S' style={{color:"#ffff"}}>Green Lanka</h1>
        <p className='S' style={{color:"#ffff"}}><center>Life gets great with Organic Food</center></p>
          
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={Slider5}
          alt="Fifth slide"
        />
        {/* <Carousel.Caption>
        <h1 className='S' style={{color:"#033E3E"}}>Green Lanka</h1>
        <p className='S' style={{color:"#033E3E"}}><center>Life gets great with Organic Food</center></p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;