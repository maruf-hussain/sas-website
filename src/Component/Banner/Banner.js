import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'
const Banner = () => {
    return (
        <div class='mt-5'>
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block banner  w-100 mx-auto"
              src="https://i.ibb.co/ykwY589/01.jpg"
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block banner w-100 mx-auto"
              src="https://i.ibb.co/R6yJrfM/04.jpg"
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block banner w-100 mx-auto"
              src="https://i.ibb.co/6Bxk3Tp/03.jpg"
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block banner w-100 mx-auto"
              src="https://i.ibb.co/DbgjTVK/02.jpg"
              alt="Third slide"
            />
          
          </Carousel.Item>
        </Carousel>
       
            </div>
    );
};

export default Banner;