import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div class='mt-5'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block banner  w-100 mx-auto"
              src="https://t4.ftcdn.net/jpg/02/44/58/27/240_F_244582708_ZJGzPhHSK36iIlE1IosIRQe7553D4ThU.jpg"
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block banner w-100 mx-auto"
              src="https://t4.ftcdn.net/jpg/02/05/25/95/240_F_205259502_5xqjcHxIiuGFekk0BMyVy9G9Oaz8Ars6.jpg"
              alt="Second slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block banner w-100 mx-auto"
              src="https://t4.ftcdn.net/jpg/02/16/66/29/240_F_216662905_oZJORSfPuVWSFKagVhI7qnR1612uzogd.jpg"
              alt="Third slide"
            />
          
          </Carousel.Item>
        </Carousel>
            </div>
    );
};

export default Banner;